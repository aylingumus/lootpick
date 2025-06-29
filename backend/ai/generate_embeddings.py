import pandas as pd
import json
import time
from openai import OpenAI


def embed_csv(
        input_csv: str,
        output_csv: str = None,
        model: str = "text-embedding-3-small",
        batch_size: int = 100,
        sleep_time: float = 0.2,
        api_client: OpenAI = None
) -> pd.DataFrame:
    """
    Loads input_csv, ensures an 'embedding' column exists,
    batches through rows missing embeddings, calls OpenAI,
    JSON-encodes the results, and writes back to output_csv
    (or overwrites input_csv if output_csv is None).
    Returns the DataFrame with embeddings.
    """
    # initialize client if not passed in
    client = api_client or OpenAI()

    # 1) load & prepare
    df = pd.read_csv(input_csv).fillna({"embedding_text": ""})
    if "embedding" not in df.columns:
        df["embedding"] = None

    # 2) helper to embed a batch of texts
    def batch_embed(texts):
        resp = client.embeddings.create(input=texts, model=model)
        return [d.embedding for d in resp.data]

    # 3) loop in slices
    n = len(df)
    for start in range(0, n, batch_size):
        end = min(start + batch_size, n)
        block = df.iloc[start:end]
        to_do = block[block["embedding"].isna()]
        if to_do.empty:
            continue

        texts = to_do["embedding_text"].tolist()
        embs = batch_embed(texts)
        for idx, emb in zip(to_do.index, embs):
            df.at[idx, "embedding"] = emb

        time.sleep(sleep_time)
        print(f"Embedded rows {start}–{end}")

    # 4) JSON-encode and save
    df["embedding"] = df["embedding"].apply(lambda x: json.dumps(x) if isinstance(x, list) else x)
    out_csv = output_csv or input_csv
    df.to_csv(out_csv, index=False)
    print(f"Saved embeddings to {out_csv}")

    return df
