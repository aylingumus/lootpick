import json

from openai import OpenAI

from database import GAMES
from backend.ai.old.schema import FILTER_SCHEMA

client = OpenAI()


def extract_filters(user_query: str):
    """
    Sends the user's free-text query to ChatGPT with our function schema.
    Returns a Python dict of { 'max_price': ..., 'min_playtime': ..., 'genres': [...] }.
    """
    response = client.chat.completions.create(
        model="gpt-4.1",
        messages=[{"role": "user", "content": user_query}],
        functions=[FILTER_SCHEMA],
        function_call="auto",
    )

    # Use attribute access instead of dict indexing:
    first_choice = response.choices[0]
    message_obj = first_choice.message

    if message_obj.function_call is not None:
        args_str = message_obj.function_call.arguments
        return json.loads(args_str)
    return {}


def filter_game_list(filters: dict):
    """
    Given filters like { 'max_price':20, 'min_playtime':30, 'genres':['Fantasy','Medieval'] },
    return a list of games from GAMES that match all criteria.
    """
    max_price = filters.get("max_price", float("inf"))
    min_playtime = filters.get("min_playtime", 0)
    wanted_genres = [g.lower() for g in filters.get("genres", [])]

    results = []
    for game in GAMES:
        # 1) Price check
        if game["price"] > max_price:
            continue
        # 2) Playtime check
        if game["playtime"] < min_playtime:
            continue
        # 3) Genre check: ensure every requested genre appears (case-insensitive substring match)
        g_lower = [genre.lower() for genre in game["genres"]]
        if wanted_genres:
            # Each requested genre must be in at least one of the game genres
            if not all(any(wg in actual for actual in g_lower) for wg in wanted_genres):
                continue
        # If we pass all checks, add to the result
        results.append(game)

    return results


if __name__ == "__main__":
    # 6) Glue code: read user input, extract filters, filter, then reply
    user_query = input(
        "Enter your game request (e.g. “Find me medieval fantasy games under $20 with at least 30 hours playtime.”):\n> ")

    # 6a) Step: extract structured filters from ChatGPT
    filters = extract_filters(user_query)
    print(f"\n[DEBUG] Extracted filters: {filters}\n")

    # 6b) Step: apply those filters to our in-memory list
    matched = filter_game_list(filters)
    print(f"[DEBUG] Matched games: {[g['title'] for g in matched]}\n")

    # 6c) Step: ask ChatGPT to generate a friendly paragraph
    # reply = compose_natural_reply(user_query, matched)
    # print("=== Chat-Driven Discovery Response ===")
    # print(reply)
