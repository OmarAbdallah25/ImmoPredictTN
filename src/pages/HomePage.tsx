import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, MapPin, TrendingUp, Brain, ChartBar, Shield } from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";

const features = [
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    description: "Modèle de Machine Learning entraîné sur des données tunisiennes réelles",
  },
  {
    icon: ChartBar,
    title: "Estimations Précises",
    description: "Prédictions basées sur les caractéristiques de votre bien immobilier",
  },
  {
    icon: Shield,
    title: "Fiable & Transparent",
    description: "Intervalles de confiance pour une meilleure compréhension des résultats",
  },
];

const stats = [
  { value: "10K+", label: "Données analysées" },
  { value: "24", label: "Gouvernorats" },
  { value: "95%", label: "Précision" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container py-16 md:py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col gap-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary w-fit">
                <TrendingUp className="h-4 w-4" />
                Propulsé par l'IA
              </div>
              <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                Prédisez le prix de votre bien immobilier en{" "}
                <span className="text-primary">Tunisie</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Utilisez notre modèle de Machine Learning pour estimer la valeur de votre
                appartement, maison ou terrain en quelques clics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/prediction">
                  <Button variant="hero" size="xl" className="gap-2 w-full sm:w-auto">
                    Estimer le prix
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="xl" className="w-full sm:w-auto">
                    En savoir plus
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative animate-fade-in delay-200">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={heroImage}
                  alt="Illustration de la ville tunisienne"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 hidden lg:block animate-float">
                <Card className="shadow-elevated">
                  <CardContent className="flex items-center gap-3 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Appartement T3</p>
                      <p className="text-lg font-bold text-primary">285,000 DT</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="absolute -top-4 -right-4 hidden lg:block animate-float delay-300">
                <Card className="shadow-elevated">
                  <CardContent className="flex items-center gap-3 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Tunis, La Marsa</p>
                      <p className="text-xs text-muted-foreground">120 m²</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-card">
        <div className="container py-12">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="font-display text-3xl md:text-4xl font-bold text-primary">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">
              Pourquoi utiliser ImmoPredict ?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Notre solution combine expertise immobilière et technologie de pointe pour vous
              fournir des estimations fiables et transparentes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:border-primary/50 transition-colors animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Prêt à estimer votre bien ?
          </h2>
          <p className="mb-8 opacity-90 max-w-xl mx-auto">
            Obtenez une estimation gratuite en moins de 2 minutes. Aucune inscription requise.
          </p>
          <Link to="/prediction">
            <Button
              size="xl"
              className="bg-background text-foreground hover:bg-background/90 shadow-elevated"
            >
              Commencer l'estimation
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
