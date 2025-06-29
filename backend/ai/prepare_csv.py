import pandas as pd

from backend.ai.generate_embedded_text import generate_embedding_text_column
from backend.ai.generate_embeddings import embed_csv


def prepare_and_embed(
        raw_csv: str,
        subset_csv: str,
        subset_size: int = 10000,
        text_max_chars: int = 20000,
        batch_size: int = 50,
        sleep_time: float = 0.1
):
    # 1) Subset the raw data
    df = pd.read_csv(raw_csv)
    df_subset = df.head(subset_size)
    df_subset.to_csv(subset_csv, index=False)
    print(f"Saved first {subset_size} rows to '{subset_csv}'")

    # 2) Generate embedding_text
    generate_embedding_text_column(
        input_csv=subset_csv,
        output_csv=subset_csv,
        max_chars=text_max_chars
    )
    print("Generated 'embedding_text' column.")

    # 3) Batch-embed vectors
    embed_csv(
        input_csv=subset_csv,
        output_csv=subset_csv,
        batch_size=batch_size,
        sleep_time=sleep_time
    )


if __name__ == "__main__":
    prepare_and_embed(
        raw_csv="data/games_march2025_cleaned.csv",
        subset_csv="data/first_10000_rows.csv",
        subset_size=10000,
        text_max_chars=20000,
        batch_size=50,
        sleep_time=0.1
    )
