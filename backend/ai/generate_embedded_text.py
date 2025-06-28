import pandas as pd

# Step 1: Load the CSV
df = pd.read_csv("data/first_10000_rows.csv")

# Step 2: Fill missing values to prevent errors
df = df.fillna({
    "name": "",
    "detailed_description": "",
    "categories": "",
    "genres": "",
    "tags": "",
    "average_playtime_forever": 0
})

# Step 3: Clean list-like fields (some may be strings like "['Action', 'RPG']")
def safe_join(field):
    if isinstance(field, str):
        # Try to eval list-like string, fallback to raw string
        try:
            items = eval(field)
            if isinstance(items, list):
                return ", ".join(items)
        except:
            return field
    return ""

# Step 4: Create the game text
def format_game_text(row):
    return (
        f"{row['name']} is a game in the genres: {safe_join(row['genres'])}. "
        f"It includes categories such as {safe_join(row['categories'])}, and is tagged with {safe_join(row['tags'])}. "
        f"Description: {row['detailed_description'].strip()}. "
        f"Average playtime is approximately {int(row['average_playtime_forever'])} minutes."
    )

# Step 5: Apply to each row
df["embedding_text"] = df.apply(format_game_text, axis=1)

# Truncate length of descriptions if they are too long as they context length is over the max. 40 000 chars = approx 10000 tokens
MAX_CHARS = 20000  # ~5 000 tokens
df["embedding_text"] = df["embedding_text"].str.slice(0, MAX_CHARS)

# Optional: save to file for later use
df.to_csv("data/first_10000_rows.csv", index=False)

# Preview
print(df[["name", "embedding_text"]].head(3))
