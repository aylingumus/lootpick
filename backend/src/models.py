"""Pydantic models for API requests and responses - Updated for actual Steam data structure"""
from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any
from datetime import datetime

class GameBase(BaseModel):
    """Base game model with core fields"""
    appid: int
    name: str
    price: float = 0.0
    required_age: int = 0
    release_date: Optional[datetime] = None

class Game(GameBase):
    """Extended game model with recommendation-relevant fields"""
    # Core game info
    short_description: Optional[str] = None
    detailed_description: Optional[str] = None
    
    # Platform support
    windows: Optional[bool] = None
    mac: Optional[bool] = None
    linux: Optional[bool] = None
    
    # Quality metrics
    metacritic_score: Optional[int] = None
    positive: Optional[int] = None
    negative: Optional[int] = None
    pct_pos_total: Optional[float] = None
    num_reviews_total: Optional[int] = None
    
    # Engagement metrics
    estimated_owners: Optional[str] = None
    average_playtime_forever: Optional[int] = None
    median_playtime_forever: Optional[int] = None
    peak_ccu: Optional[int] = None
    
    # Content categorization
    developers: Optional[List[str]] = None
    publishers: Optional[List[str]] = None
    categories: Optional[List[str]] = None
    genres: Optional[List[str]] = None
    tags: Optional[Dict[str, int]] = None  # Tag name -> count
    
    # Computed features (for recommendations)
    price_category: Optional[str] = None
    release_year: Optional[int] = None
    popularity_score: Optional[float] = None
    recency_score: Optional[float] = None
    review_score: Optional[float] = None  # Derived from positive/negative reviews
    
class GameResponse(Game):
    """Game response model with proper serialization"""
    class Config:
        json_encoders = {
            datetime: lambda v: v.isoformat() if v else None
        }

class GameFeatures(BaseModel):
    """Model specifically for AI features extraction"""
    # Identifiers
    appid: int
    name: str
    
    # Numerical features for ML
    price: float = 0.0
    required_age: int = 0
    metacritic_score: Optional[float] = None
    positive_reviews: int = 0
    negative_reviews: int = 0
    review_ratio: float = 0.0  # positive / total reviews
    total_reviews: int = 0
    average_playtime: int = 0
    peak_concurrent_users: int = 0
    release_year: int = 2000
    years_since_release: float = 0.0
    
    # Categorical features
    price_category: str = "Unknown"
    primary_genre: Optional[str] = None
    platform_count: int = 0  # Number of supported platforms
    
    # Text features for NLP
    description_text: str = ""
    genres_text: str = ""  # Comma-separated genres
    categories_text: str = ""  # Comma-separated categories
    tags_text: str = ""  # Top tags as text
    
    # Popularity indicators
    estimated_owners_numeric: float = 0.0  # Converted from range to midpoint
    popularity_tier: str = "Low"  # Low, Medium, High based on reviews/owners

class RecommendationRequest(BaseModel):
    """Request model for recommendations"""
    game_name: str = Field(..., description="Name of the game to find similar games for")
    max_recommendations: int = Field(5, ge=1, le=20, description="Maximum number of recommendations")
    
    # Recommendation parameters
    price_tolerance: float = Field(0.3, ge=0, le=1, description="Price tolerance (0-1)")
    genre_weight: float = Field(0.4, ge=0, le=1, description="Weight for genre similarity")
    review_weight: float = Field(0.3, ge=0, le=1, description="Weight for review scores")
    popularity_weight: float = Field(0.2, ge=0, le=1, description="Weight for popularity")
    recency_weight: float = Field(0.1, ge=0, le=1, description="Weight for game recency")
    
    # Filters
    min_review_count: int = Field(10, ge=0, description="Minimum number of reviews")
    exclude_adult: bool = Field(True, description="Exclude adult-rated games")
    platforms: Optional[List[str]] = Field(None, description="Required platforms (windows, mac, linux)")

class RecommendationResponse(BaseModel):
    """Response model for recommendations"""
    query_game: GameResponse
    recommendations: List[GameResponse]
    total_found: int
    recommendation_metadata: Dict[str, Any] = Field(default_factory=dict)

class SearchRequest(BaseModel):
    """Request model for game search"""
    query: str = Field(..., description="Search query")
    limit: int = Field(10, ge=1, le=100, description="Maximum number of results")
    
    # Price filters
    price_min: Optional[float] = Field(None, ge=0, description="Minimum price filter")
    price_max: Optional[float] = Field(None, ge=0, description="Maximum price filter")
    price_category: Optional[str] = Field(None, description="Price category filter")
    
    # Quality filters
    min_metacritic: Optional[int] = Field(None, ge=0, le=100, description="Minimum Metacritic score")
    min_review_score: Optional[float] = Field(None, ge=0, le=100, description="Minimum review percentage")
    min_reviews: Optional[int] = Field(None, ge=0, description="Minimum number of reviews")
    
    # Content filters
    genres: Optional[List[str]] = Field(None, description="Filter by genres")
    categories: Optional[List[str]] = Field(None, description="Filter by categories")
    platforms: Optional[List[str]] = Field(None, description="Required platforms")
    max_age_rating: Optional[int] = Field(None, description="Maximum age rating")
    
    # Sorting
    sort_by: str = Field("relevance", description="Sort by: relevance, price, reviews, playtime, release_date")
    sort_order: str = Field("desc", description="Sort order: asc, desc")

class StatsResponse(BaseModel):
    """Response model for dataset statistics"""
    total_games: int
    
    # Price statistics
    price_stats: Dict[str, float]  # min, max, mean, median
    price_distribution: Dict[str, int]  # by category
    
    # Review statistics
    review_stats: Dict[str, float]
    
    # Release year statistics
    release_year_stats: Dict[str, int]
    
    # Platform statistics
    platform_stats: Dict[str, int]
    
    # Genre statistics
    top_genres: Dict[str, int]
    
    # Tag statistics
    top_tags: Dict[str, int]

class BulkGameFeaturesResponse(BaseModel):
    """Response model for bulk feature extraction (for AI team)"""
    games: List[GameFeatures]
    feature_columns: List[str]  # List of numerical feature column names
    categorical_columns: List[str]  # List of categorical feature column names
    text_columns: List[str]  # List of text feature column names
    metadata: Dict[str, Any] = Field(default_factory=dict)

class SimilarityMatrix(BaseModel):
    """Model for similarity matrix data"""
    game_ids: List[int]
    similarity_scores: List[List[float]]
    feature_weights: Dict[str, float]
    method: str  # cosine, euclidean, etc.