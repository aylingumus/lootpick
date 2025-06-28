import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
import ast


def load_embeddings(csv_path: str) -> pd.DataFrame:
    """
    Load a CSV containing a column 'embedding' (as JSON strings or lists)
    and convert embeddings to Python lists.
    """
    df = pd.read_csv(csv_path)
    df['embedding'] = df['embedding'].apply(
        lambda x: ast.literal_eval(x) if isinstance(x, str) else x
    )
    return df


def find_similar_games(
        df: pd.DataFrame,
        target_name: str,
        top_k: int = 5
) -> pd.DataFrame:
    """
    Given a DataFrame with 'name' and 'embedding' columns,
    find the top_k most similar games to target_name.
    Returns a DataFrame of the top similar games.
    """
    if target_name not in df['name'].values:
        raise ValueError(f"Game '{target_name}' not found in dataset.")

    # Extract target embedding
    target_emb = np.array(
        df.loc[df['name'] == target_name, 'embedding'].iloc[0]
    ).reshape(1, -1)

    # Prepare others
    others = df[df['name'] != target_name].copy()
    embedding_matrix = np.vstack(others['embedding'].values)

    # Compute cosine similarities
    sims = cosine_similarity(target_emb, embedding_matrix)[0]
    others['similarity'] = sims

    # Return top_k
    return others.sort_values('similarity', ascending=False).head(top_k)


def main(
        csv_path: str,
        target_name: str,
        top_k: int = 5
):
    df = load_embeddings(csv_path)
    top_games = find_similar_games(df, target_name, top_k)
    print(f"Top {top_k} games similar to '{target_name}':\n")
    print(top_games[['name', 'similarity']].to_string(index=False))


# If this script is run directly, call main()
if __name__ == "__main__":
    main(csv_path='data/first_200_rows.csv', target_name='RimWorld')

