"""Game recommendation engine"""
import pandas as pd
import numpy as np
from typing import Optional, Tuple
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import StandardScaler
import logging

from .models import Game, RecommendationRequest
from .config import DEFAULT_RECOMMENDATIONS

logger = logging.getLogger(__name__)

class GameRecommender:
    """Steam games recommendation engine"""
    
    def __init__(self, df: pd.DataFrame):
        self.df = df.copy()
        self.features = None
        self.scaler = StandardScaler()
        self._prepare_features()
    
    def _prepare_features(self):
        """Prepare feature matrix for similarity calculations"""
        # Select numeric features for similarity
        feature_columns = ['price', 'required_age', 'popularity_score', 'recency_score']
        available_features = [col for col in feature_columns if col in self.df.columns]
        
        if not available_features:
            logger.warning("No numeric features available for recommendations")
            return
        
        # Create feature matrix
        self.features = self.df[available_features].fillna(0)
        
        # Scale features
        self.features = self.scaler.fit_transform(self.features)
        
        logger.info(f"Prepared feature matrix with {len(available_features)} features")
    
    def find_similar_games(self, game_name: str, n_recommendations: int = DEFAULT_RECOMMENDATIONS) -> Optional[Tuple[pd.Series, pd.DataFrame]]:
        """Find games similar to the given game"""
        # Find the target game
        game_mask = self.df['name'].str.contains(game_name, case=False, na=False)
        
        if not game_mask.any():
            logger.warning(f"Game '{game_name}' not found")
            return None
        
        target_idx = game_mask.idxmax()
        target_game = self.df.loc[target_idx]
        
        if self.features is None:
            # Fallback to category-based recommendations
            return self._category_based_recommendations(target_game, n_recommendations)
        
        # Calculate similarity using cosine similarity
        target_features = self.features[target_idx].reshape(1, -1)
        similarities = cosine_similarity(target_features, self.features)[0]
        
        # Get similar games (excluding the target game)
        similar_indices = np.argsort(similarities)[::-1]
        similar_indices = similar_indices[similar_indices != target_idx]
        
        # Get top N recommendations
        top_indices = similar_indices[:n_recommendations]
        recommendations = self.df.loc[top_indices].copy()
        recommendations['similarity_score'] = similarities[top_indices]
        
        logger.info(f"Found {len(recommendations)} similar games for '{game_name}'")
        return target_game, recommendations
    
    def _category_based_recommendations(self, target_game: pd.Series, n_recommendations: int) -> Tuple[pd.Series, pd.DataFrame]:
        """Fallback recommendation method based on categories"""
        # Find games in the same price category
        same_category = self.df[
            (self.df['price_category'] == target_game.get('price_category')) &
            (self.df.index != target_game.name)
        ]
        
        # If same age rating is available, filter by it
        if 'required_age' in self.df.columns and pd.notna(target_game.get('required_age')):
            same_category = same_category[
                same_category['required_age'] == target_game['required_age']
            ]
        
        # Sort by popularity if available
        if 'popularity_score' in same_category.columns:
            same_category = same_category.sort_values('popularity_score', ascending=False)
        
        recommendations = same_category.head(n_recommendations).copy()
        recommendations['similarity_score'] = 0.5  # Default similarity
        
        return target_game, recommendations
    
    def search_games(self, query: str, limit: int = 10, price_min: Optional[float] = None, price_max: Optional[float] = None, category: Optional[str] = None) -> pd.DataFrame:
        """Search for games based on query and filters"""
        # Start with name-based search
        mask = self.df['name'].str.contains(query, case=False, na=False)
        
        # Apply filters
        if price_min is not None:
            mask = mask & (self.df['price'] >= price_min)
        
        if price_max is not None:
            mask = mask & (self.df['price'] <= price_max)
        
        if category is not None:
            mask = mask & (self.df['price_category'] == category)
        
        results = self.df[mask].head(limit)
        logger.info(f"Search '{query}' returned {len(results)} results")
        
        return results