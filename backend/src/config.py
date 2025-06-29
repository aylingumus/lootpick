"""Configuration settings for the Steam Games Recommender"""
from pathlib import Path

# Base paths
BASE_DIR = Path(__file__).parent.parent
DATA_DIR = BASE_DIR / "data"

# Now pointing to steam_games.csv
CSV_FILE_PATH = DATA_DIR / "steam_games.csv"

# API Configuration
API_HOST = "0.0.0.0"
API_PORT = 8000
DEBUG = True

# Recommendation settings
DEFAULT_RECOMMENDATIONS = 5
MAX_RECOMMENDATIONS = 20

# Feature weights for recommendations
PRICE_WEIGHT = 0.3
RECENCY_WEIGHT = 0.2
POPULARITY_WEIGHT = 0.3
AGE_RATING_WEIGHT = 0.2

# Price categories
PRICE_CATEGORIES = {
    "Free": (0, 0),
    "Budget": (0.01, 5.00),
    "Mid-range": (5.01, 20.00),
    "Premium": (20.01, 60.00),
    "Expensive": (60.01, float('inf'))
}
