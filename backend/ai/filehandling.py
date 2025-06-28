import pandas as pd

# Load the original CSV
df = pd.read_csv("data/games_march2025_cleaned.csv")

# Take the first 1000 rows
df_subset = df.head(10000)

# Save to a new CSV
df_subset.to_csv("data/first_10000_rows.csv", index=False)

print("Saved first 10000 rows to 'first_10000_rows.csv'")
