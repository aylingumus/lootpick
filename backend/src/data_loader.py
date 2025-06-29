import ast
from pathlib import Path
import logging

import pandas as pd
import numpy as np

from .config import CSV_FILE_PATH

logger = logging.getLogger(__name__)

LIST_COLS = ["developers", "publishers", "genres", "categories"]
DICT_COLS = ["tags"]

class SteamDataLoader:
    def __init__(self, csv_path: Path = CSV_FILE_PATH):
        self.csv_path = csv_path
        self.df = self.load_data()
        self.processed_df = self.preprocess_data()

    def load_data(self) -> pd.DataFrame:
        if not self.csv_path.exists():
            raise FileNotFoundError(f"{self.csv_path} not found")
        df = pd.read_csv(self.csv_path, low_memory=False)
        logger.info(f"Loaded {len(df)} records from {self.csv_path}")
        return df

    def _safe_parse_list(self, val):
        if pd.isna(val) or val == "" or val == "[]":
            return []
        try:
            return list(ast.literal_eval(val))
        except Exception:
            # fallback: comma-split
            return [v.strip() for v in str(val).split(",") if v.strip()]

    def _safe_parse_dict(self, val):
        if pd.isna(val) or val == "" or val == "{}":
            return {}
        try:
            return dict(ast.literal_eval(val))
        except Exception:
            return {}

    def preprocess_data(self) -> pd.DataFrame:
        df = self.df.copy()

        # 1) Parse all list columns
        for col in LIST_COLS:
            if col in df.columns:
                df[col] = df[col].apply(self._safe_parse_list)

        # 2) Parse all dict columns
        for col in DICT_COLS:
            if col in df.columns:
                df[col] = df[col].apply(self._safe_parse_dict)

        # 3) Compute a review_score (%) so you can filter on `min_review_score`
        if "positive" in df.columns and "negative" in df.columns:
            total = df["positive"] + df["negative"]
            df["review_score"] = (df["positive"] / total * 100).fillna(0)
        else:
            df["review_score"] = 0.0

        self.processed_df = df
        logger.info(f"Preprocessed data: {len(df)} games ready")
        return df

    def query_games(
        self,
        limit=10,
        offset=0,
        q=None,
        price_min=None,
        price_max=None,
        price_category=None,
        min_metacritic=None,
        min_review_score=None,
        min_reviews=None,
        genres=None,
        categories=None,
        platforms=None,
        max_age_rating=None,
        sort_by="relevance",
        sort_order="desc",
    ) -> pd.DataFrame:
        df = self.processed_df.copy()

        # full-text search
        if q:
            df = df[df["name"].str.contains(q, case=False, na=False)]

        # numeric filters
        if price_min is not None:
            df = df[df["price"] >= price_min]
        if price_max is not None:
            df = df[df["price"] <= price_max]
        if min_metacritic is not None:
            df = df[df["metacritic_score"] >= min_metacritic]
        if min_review_score is not None:
            df = df[df["review_score"] >= min_review_score]
        if min_reviews is not None:
            df = df[df["total_reviews"] >= min_reviews]
        if max_age_rating is not None:
            df = df[df["required_age"] <= max_age_rating]

        # comma-separated list filters
        def split_param(s):
            return [v.strip() for v in s.split(",")] if s else []

        for name, col in [("genres", "genres"), ("categories", "categories")]:
            vals = split_param(locals()[name])
            if vals and col in df.columns:
                df = df[df[col].apply(lambda lst: any(v in lst for v in vals))]

        # platforms assumed boolean columns
        plats = split_param(platforms)
        if plats:
            mask = pd.Series(False, index=df.index)
            for p in plats:
                key = p.lower()
                if key in df.columns:
                    mask |= df[key].fillna(False)
            df = df[mask]

        # sorting
        if sort_by != "relevance" and sort_by in df.columns:
            asc = sort_order.lower() == "asc"
            df = df.sort_values(sort_by, ascending=asc)

        # pagination
        return df.iloc[offset : offset + limit]