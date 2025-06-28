import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
import ast  # For converting stringified lists from CSV

# Load the CSV
df = pd.read_csv("data/first_10000_rows.csv")

# Convert stringified embedding lists to actual Python lists
df["embedding"] = df["embedding"].apply(lambda x: ast.literal_eval(x) if isinstance(x, str) else x)

# Replace with the name of the game you want to find similar to
target_name = "RimWorld"

# Get the embedding for the selected game
target_row = df[df["name"] == target_name]

if target_row.empty:
    raise ValueError(f"Game '{target_name}' not found.")

target_embedding = np.array(target_row.iloc[0]["embedding"]).reshape(1, -1)

# Create matrix of all other embeddings
other_df = df[df["name"] != target_name].copy()
embedding_matrix = np.array(other_df["embedding"].tolist())

# Compute cosine similarity
similarities = cosine_similarity(target_embedding, embedding_matrix)[0]

# Add similarity scores to the DataFrame
other_df["similarity"] = similarities

# Sort and show top 5 similar games
top_similar = other_df.sort_values(by="similarity", ascending=False).head(5)

print(top_similar[["name", "similarity"]])
