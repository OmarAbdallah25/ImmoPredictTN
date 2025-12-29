import joblib
import pandas as pd

xgb_model = joblib.load("models/xgb_model.pkl")
scaler = joblib.load("models/scaler.pkl")
X_columns = pd.read_csv("models/X_clean.csv").columns.tolist()
