import pandas as pd

def prepare_sample(df, X_columns, scaler):
    # Ajouter colonnes manquantes
    for col in X_columns:
        if col not in df.columns:
            df[col] = 0
    df = df[X_columns]  # Réordonner
    return scaler.transform(df)
