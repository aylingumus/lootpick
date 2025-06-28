import pandas as pd
import json, time
from openai import OpenAI

client = OpenAI()
df = pd.read_csv("data/first_10000_rows.csv").fillna({"embedding_text": ""})
if "embedding" not in df.columns:
    df["embedding"] = None

def batch_embed(texts):
    resp = client.embeddings.create(
        input=texts,
        model="text-embedding-3-small"
    )
    return [d.embedding for d in resp.data]

batch_size = 100
for start in range(0, len(df), batch_size):
    end = start + batch_size
    block = df.loc[start:end-1]
    # only embed where missing
    to_do = block[block["embedding"].isna()]
    if to_do.empty:
        continue

    texts = to_do["embedding_text"].tolist()
    embeddings = batch_embed(texts)

    # write them back
    for idx, emb in zip(to_do.index, embeddings):
        df.at[idx, "embedding"] = emb

    # small sleep to be nice (you can often drop this entirely)
    time.sleep(0.2)
    print(f"Embedded rows {start}–{end}")

# JSON-encode and overwrite your CSV
df["embedding"] = df["embedding"].apply(lambda x: json.dumps(x))
df.to_csv("data/first_10000_rows.csv", index=False)
