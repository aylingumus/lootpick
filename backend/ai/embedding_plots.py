import pandas as pd
import numpy as np
import ast
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.manifold import TSNE
import matplotlib.pyplot as plt

# --- Config ---
csv_path = "data/first_10000_rows.csv"
target_name = "The Elder Scrolls V: Skyrim"
top_k = 5
sample_size = 500

# Colors
base_color = (22/255, 19/255, 71/255)
scatter_color = (166/255, 89/255, 230/255, 0.5)
highlight_color = (191/255, 86/255, 45/255)
text_color = "white"

# --- Load embeddings ---
df = pd.read_csv(csv_path)
df["embedding"] = df["embedding"].apply(
    lambda x: ast.literal_eval(x) if isinstance(x, str) else x
)

# --- Similarity calculation ---
emb_matrix = np.vstack(df["embedding"].values)
if target_name not in df["name"].values:
    raise ValueError(f"Game '{target_name}' not found.")
target_idx = df.index[df["name"] == target_name][0]
target_emb = emb_matrix[target_idx].reshape(1, -1)
sims = cosine_similarity(target_emb, emb_matrix)[0]
df["similarity"] = sims

# --- Neighbors selection ---
neighbors = df[df["name"] != target_name].nlargest(top_k, "similarity")
neighbor_names = neighbors["name"].tolist()

# --- Subset and t-SNE ---
subset = [target_name] + neighbor_names
others = df[~df["name"].isin(subset)]
sampled = others.sample(n=sample_size - len(subset), random_state=42)
plot_df = pd.concat([df[df["name"].isin(subset)], sampled], ignore_index=True)
X = np.vstack(plot_df["embedding"].values)
coords = TSNE(n_components=2, random_state=42, init='random', learning_rate='auto').fit_transform(X)

# --- Plot ---
fig, ax = plt.subplots(figsize=(10, 8))
fig.patch.set_facecolor(base_color)
ax.set_facecolor(base_color)

# All points
ax.scatter(coords[:,0], coords[:,1], color=scatter_color, s=20)

# Neighbor points
mask_neigh = plot_df["name"].isin(neighbor_names)
ax.scatter(coords[mask_neigh,0], coords[mask_neigh,1],
           color=highlight_color, s=100, edgecolors=text_color, linewidths=1)

# Target point
mask_target = plot_df["name"] == target_name
ax.scatter(coords[mask_target,0], coords[mask_target,1],
           color=highlight_color, s=200, marker='X', edgecolors=text_color, linewidths=2)

# Annotate with offsets
# Target label higher by 10 points
tx, ty = coords[mask_target][0]
ax.annotate(
    target_name,
    xy=(tx, ty),
    xytext=(0, 10), textcoords='offset points',
    ha='center', va='bottom',
    color=text_color, fontsize=12, weight='bold'
)
# Neighbors labels higher by 6 points
for name in neighbor_names:
    idx = plot_df.index[plot_df["name"] == name][0]
    x, y = coords[idx]
    ax.annotate(
        name,
        xy=(x, y),
        xytext=(0, 6), textcoords='offset points',
        ha='center', va='bottom',
        color=text_color, fontsize=9
    )

# Style axes
for spine in ['top','right']:
    ax.spines[spine].set_visible(False)
ax.spines['bottom'].set_color(text_color)
ax.spines['left'].set_color(text_color)
ax.tick_params(colors=text_color)
ax.set_xlabel("Dimension 1", color=text_color)
ax.set_ylabel("Dimension 2", color=text_color)
ax.set_title(f"t-SNE of Game Embeddings (highlighting '{target_name}')", color=text_color, pad=15)

plt.tight_layout()
plt.show()
