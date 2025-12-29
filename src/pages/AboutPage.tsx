import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Code, Database, Brain, Users, Target } from "lucide-react";

const technologies = [
  { name: "Python", description: "Langage de programmation" },
  { name: "Scikit-learn", description: "Machine Learning" },
  { name: "Pandas", description: "Analyse de données" },
  { name: "NumPy", description: "Calcul scientifique" },
  { name: "React", description: "Interface utilisateur" },
  { name: "TypeScript", description: "Typage statique" },
];

const team = [
  "Étudiants en Data Science",
  "Projet d'études",
  "Université de Tunisie",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-hero py-12">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
            <GraduationCap className="h-4 w-4" />
            Projet Universitaire
          </div>
          <h1 className="font-display text-4xl font-bold mb-4">À propos du projet</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ImmoPredict TN est un projet académique développé dans le cadre d'études en
            Data Science et Machine Learning.
          </p>
        </div>

        <div className="grid gap-6">
          {/* Project Description */}
          <Card className="animate-fade-in-up delay-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Objectif du projet
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p className="text-muted-foreground">
                L'objectif principal de ce projet est de développer un modèle de prédiction des
                prix immobiliers en Tunisie en utilisant des techniques de Machine Learning.
                Notre modèle analyse les caractéristiques d'un bien immobilier (type, surface,
                localisation, nombre de pièces) pour estimer sa valeur marchande.
              </p>
              <p className="text-muted-foreground">
                Ce projet combine l'analyse de données, la modélisation statistique et le
                développement d'une interface utilisateur intuitive pour rendre les prédictions
                accessibles à tous.
              </p>
            </CardContent>
          </Card>

          {/* Dataset */}
          <Card className="animate-fade-in-up delay-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                Dataset tunisien
              </CardTitle>
              <CardDescription>Données réelles du marché immobilier</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Notre modèle a été entraîné sur un dataset contenant des milliers d'annonces
                immobilières tunisiennes. Les données incluent :
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "Types de biens variés",
                  "24 gouvernorats couverts",
                  "Prix réels du marché",
                  "Caractéristiques détaillées",
                  "Données nettoyées et validées",
                  "Mise à jour régulière",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Technologies */}
          <Card className="animate-fade-in-up delay-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Technologies utilisées
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <span className="font-medium">{tech.name}</span>
                    <span className="text-sm text-muted-foreground">{tech.description}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Machine Learning */}
          <Card className="animate-fade-in-up delay-400">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Approche Machine Learning
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Notre pipeline de Machine Learning comprend plusieurs étapes :
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    step: "1",
                    title: "Prétraitement",
                    description: "Nettoyage et transformation des données",
                  },
                  {
                    step: "2",
                    title: "Feature Engineering",
                    description: "Création de nouvelles variables pertinentes",
                  },
                  {
                    step: "3",
                    title: "Modélisation",
                    description: "Entraînement de modèles de régression",
                  },
                  {
                    step: "4",
                    title: "Validation",
                    description: "Évaluation et optimisation du modèle",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-lg border bg-card"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Team */}
          <Card className="animate-fade-in-up delay-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Équipe
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {team.map((member, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-secondary px-4 py-2 text-sm font-medium"
                  >
                    {member}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
