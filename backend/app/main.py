from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, create_model, Field
import pandas as pd
import numpy as np
import joblib
import os

# ======================================
# INITIALISATION
# ======================================
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODEL_DIR = os.path.join(BASE_DIR, "models")

xgb_model = joblib.load(os.path.join(MODEL_DIR, "xgb_model.pkl"))
scaler = joblib.load(os.path.join(MODEL_DIR, "scaler.pkl"))
X_columns = pd.read_csv(os.path.join(MODEL_DIR, "X_clean.csv")).columns.tolist()

app = FastAPI(title="Tunisia Property Price Predictor")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ======================================
# MODELE PYDANTIC DYNAMIQUE (v2 SAFE)
# ======================================
fields = {col: (float, Field(default=0)) for col in X_columns}
PropertyData = create_model("PropertyData", **fields)

# ======================================
# ENDPOINT TEST
# ======================================
@app.get("/")
def root():
    return {"status": "API is running"}

# ======================================
# ENDPOINT PREDICTION
# ======================================
@app.post("/predict")
def predict_price(data: PropertyData):

    # Convertir en DataFrame
    sample = pd.DataFrame([data.model_dump()])

    # Ajouter colonnes manquantes
    for col in X_columns:
        if col not in sample.columns:
            sample[col] = 0

    # Réordonner
    sample = sample[X_columns]

    # Normaliser
    sample_scaled = scaler.transform(sample)

    # Prédiction
    log_price = xgb_model.predict(sample_scaled)[0]
    price = np.expm1(log_price)

    return {"estimated_price": round(float(price), 2)}

