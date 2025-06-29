"""Utility functions"""
import pandas as pd
from typing import Dict, Any, List
import logging

logger = logging.getLogger(__name__)

def setup_logging(level: str = "INFO"):
    """Setup logging configuration"""
    logging.basicConfig(
        level=getattr(logging, level.upper()),
        format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
        datefmt='%Y-%m-%d %H:%M:%S'
    )

def dataframe_to_dict_list(df: pd.DataFrame) -> List[Dict[str, Any]]:
    """Convert DataFrame to list of dictionaries"""
    return df.to_dict('records')

def validate_game_data(df: pd.DataFrame) -> bool:
    """Validate that the dataframe has required columns"""
    required_columns = ['name']
    missing_columns = [col for col in required_columns if col not in df.columns]
    
    if missing_columns:
        logger.error(f"Missing required columns: {missing_columns}")
        return False
    
    if len(df) == 0:
        logger.error("Dataset is empty")
        return False
    
    return True

def clean_string(text: str) -> str:
    """Clean string for search/comparison"""
    if pd.isna(text):
        return ""
    return str(text).strip().lower()

def format_price(price: float) -> str:
    """Format price for display"""
    if pd.isna(price) or price == 0:
        return "Free"
    return f"${price:.2f}"