
FILTER_SCHEMA = {
    "name": "filter_games",
    "description": "Extract max_price, min_playtime, and a list of desired genres from the user's request.",
    "parameters": {
        "type": "object",
        "properties": {
            "max_price": {"type": "number", "description": "Maximum price in USD"},
            "min_playtime": {"type": "number", "description": "Minimum playtime in hours"},
            "genres": {
                "type": "array",
                "items": {"type": "string"},
                "description": "List of desired genres (e.g., ['Fantasy','Medieval'])"
            },
        },
        "required": [],  # nothing strictly required—ChatGPT can return a subset
    },
}