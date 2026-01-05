# ImmoPredictTN 🏠

![Python](https://img.shields.io/badge/Python-3.11-blue?logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-0.99-green?logo=fastapi)
![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![XGBoost](https://img.shields.io/badge/XGBoost-1.7-orange)
![License](https://img.shields.io/badge/License-MIT-green)

**Estimation de prix immobilier en Tunisie via Intelligence Artificielle**

ImmoPredictTN est un projet **full-stack** combinant **React + TypeScript** pour le frontend et **FastAPI + Python** pour le backend.  
Le projet utilise un modèle **XGBoost** entraîné sur des données réelles du marché tunisien afin d’estimer le prix des biens immobiliers de manière rapide et précise.
![App Screenshot](immo1.jpg)
---

## 🎯 Fonctionnalités principales

- Prédiction de prix pour : appartements, maisons, bureaux, commerces, colocations, locations vacances  
- Sélection du type de transaction : **À vendre / À louer**  
- Interface moderne et responsive  
- Sélection dynamique de la ville et de la zone  
- Affichage détaillé du bien : prix estimé et prix par m²  
- Backend RESTful avec endpoints `/` et `/predict`  

---



---


## 💻 Captures d’écran

Page d’estimation


Page résultat




## ⚙️ Installation
Backend (FastAPI + Python)
cd backend
python -m venv venv
# Windows
venv\Scripts\activate
# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
uvicorn app.main:app --reload


API disponible sur : http://localhost:8000

Frontend (React + Vite + TypeScript)
cd frontend
npm install
npm run dev


Application disponible sur l’URL indiquée par Vite (ex: http://localhost:5173)

## 🧠 Modèle Machine Learning

Type : XGBoost Regressor

Pré-traitement :

Suppression des outliers (IQR)

Transformation logarithmique de price

Encodage : type, city, region, category

Normalisation StandardScaler

Fichiers sauvegardés :

xgb_model.pkl : modèle entraîné

scaler.pkl : scaler

X_clean.csv : colonnes features

🔗 Endpoints API
Méthode	Endpoint	Description
GET	/	Vérifie que l’API fonctionne
POST	/predict	Retourne le prix estimé

Exemple POST /predict :

{
  "room_count": 3,
  "bathroom_count": 2,
  "size": 120,
  "type_encoded": 1,
  "category_appartements": 1,
  "city_Tunis": 1,
  "region_Carthage": 1
}


Réponse :

{
  "estimated_price": 350000
}

## 🖥 Technologies utilisées

Frontend : React, Vite, TypeScript, TailwindCSS, Lucide-React

Backend : Python, FastAPI, Pandas, NumPy, Joblib, XGBoost, Scikit-learn

Visualisation : Matplotlib, Seaborn

Contrôle de version : Git & GitHub






