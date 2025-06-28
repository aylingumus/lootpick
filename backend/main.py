from fastapi import FastAPI, HTTPException, Depends, Query
from fastapi.middleware.cors import CORSMiddleware

from src.data_loader import SteamDataLoader
from src.models import GameResponse, RecommendationRequest, RecommendationResponse
from src.recommender import GameRecommender
from src.utils import setup_logging, dataframe_to_dict_list, validate_game_data
from src.config import DEBUG

setup_logging("DEBUG" if DEBUG else "INFO")
app = FastAPI(title="Steam Games Recommender", version="1.0")

app.add_middleware(
    CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"]
)

data_loader: SteamDataLoader
recommender: GameRecommender

@app.on_event("startup")
async def startup():
    global data_loader, recommender
    data_loader = SteamDataLoader()
    df = data_loader.processed_df
    if not validate_game_data(df):
        raise RuntimeError("Validation failed")
    recommender = GameRecommender(df)

def get_loader() -> SteamDataLoader:
    if not data_loader:
        raise HTTPException(500, "Loader not ready")
    return data_loader

def get_recommender() -> GameRecommender:
    if not recommender:
        raise HTTPException(500, "Recommender not ready")
    return recommender

@app.get("/games", response_model=list[GameResponse])
async def get_games(
    limit: int = Query(10, ge=1, le=100),
    offset: int = Query(0, ge=0),
    q: str | None = None,
    price_min: float | None = None,
    price_max: float | None = None,
    min_metacritic: int | None = None,
    min_review_score: float | None = None,
    min_reviews: int | None = None,
    genres: str | None = None,
    categories: str | None = None,
    platforms: str | None = None,
    max_age_rating: int | None = None,
    sort_by: str = "relevance",
    sort_order: str = "desc",
    loader: SteamDataLoader = Depends(get_loader),
):
    df = loader.query_games(
        limit,
        offset,
        q,
        price_min,
        price_max,
        None,
        min_metacritic,
        min_review_score,
        min_reviews,
        genres,
        categories,
        platforms,
        max_age_rating,
        sort_by,
        sort_order,
    )
    return dataframe_to_dict_list(df)

@app.get("/games/{appid}", response_model=GameResponse)
async def get_one(appid: int, loader: SteamDataLoader = Depends(get_loader)):
    df = loader.processed_df
    row = df[df["appid"] == appid]
    if row.empty:
        raise HTTPException(404, "Game not found")
    return row.iloc[0].to_dict()

@app.post("/recommend", response_model=RecommendationResponse)
async def recommend(
    req: RecommendationRequest, rec: GameRecommender = Depends(get_recommender)
):
    result = rec.find_similar_games(req.game_name, req.max_recommendations)
    if not result:
        raise HTTPException(404, "Game not found")
    target, recs = result
    return RecommendationResponse(
        query_game=target.to_dict(),
        recommendations=dataframe_to_dict_list(recs),
        total_found=len(recs),
        recommendation_metadata=req.dict(exclude={"game_name", "max_recommendations"}),
    )