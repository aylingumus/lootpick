import pandas as pd


def generate_embedding_text_column(
        input_csv: str,
        output_csv: str = None,
        max_chars: int = 20000
) -> pd.DataFrame:
    """
    Loads input_csv, builds an 'embedding_text' column from
    name, detailed_description, categories, genres, tags,
    average_playtime_forever; truncates each text to max_chars;
    and saves to output_csv if provided.

    Returns the augmented DataFrame.
    """
    # 1. Load
    df = pd.read_csv(input_csv)

    # 2. Fill NaNs
    df = df.fillna({
        "name": "",
        "detailed_description": "",
        "categories": "",
        "genres": "",
        "tags": "",
        "average_playtime_forever": 0
    })

    # 3. Helper to turn list-like strings into CSV text
    def safe_join(field):
        if isinstance(field, str):
            try:
                items = eval(field)
                if isinstance(items, list):
                    return ", ".join(items)
            except:
                return field
        return ""

    # 4. Build the embedding_text
    def format_game_text(row):
        return (
            f"{row['name']} is a game in the genres: {safe_join(row['genres'])}. "
            f"It includes categories such as {safe_join(row['categories'])}, "
            f"and is tagged with {safe_join(row['tags'])}. "
            f"Description: {row['detailed_description'].strip()}. "
            f"Average playtime is approximately {int(row['average_playtime_forever'])} minutes."
        )

    df["embedding_text"] = df.apply(format_game_text, axis=1)

    # 5. Truncate overly long texts
    df["embedding_text"] = df["embedding_text"].str.slice(0, max_chars)

    # 6. Optionally save
    if output_csv:
        df.to_csv(output_csv, index=False)
        print(f"Saved augmented CSV to {output_csv}")

    return df
