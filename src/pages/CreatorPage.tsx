import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  GraduationCap,
  Code2,
  Brain,
  Sparkles,
  ExternalLink
} from "lucide-react";

const skills = [
  { name: "Machine Learning", icon: Brain },
  { name: "Python", icon: Code2 },
  { name: "Data Science", icon: Sparkles },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/omar-abdallah1/",
    color: "hover:bg-[#0A66C2] hover:text-white",
    label: "Se connecter sur LinkedIn"
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/OmarAbdallah25",
    color: "hover:bg-foreground hover:text-background",
    label: "Voir les projets sur GitHub"
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:omarabdallah25.com@gmail.com",
    color: "hover:bg-accent hover:text-accent-foreground",
    label: "Envoyer un email"
  },
];

export default function CreatorPage() {
  return (
    <div className="container py-12 max-w-4xl">
      {/* Hero Section */}
      <div className="relative mb-12">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-accent/5 blur-3xl" />
        </div>

        <Card className="overflow-hidden border-0 shadow-[var(--shadow-elevated)] bg-gradient-to-br from-card via-card to-secondary/30">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-background shadow-[var(--shadow-card)]">
                    <img
                        src="/src/assets/omarProfile.png" // chemin vers ton image
                        alt="Omar Abdallah"
                        className="w-full h-full object-cover"
                    />
                    </div>
                {/* Status indicator */}
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-card animate-pulse-soft" />
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-2 animate-fade-in">
                  Omar Abdallah
                </h1>
                <p className="text-xl text-primary font-medium mb-4 animate-fade-in delay-100">
                  Data Scientist & ML Engineer
                </p>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-muted-foreground mb-6 animate-fade-in delay-200">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Tunisie</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    <span>Étudiant en Data Science</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 animate-fade-in delay-300">
                  {skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                    >
                      <skill.icon className="h-3.5 w-3.5" />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* About Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Card className="animate-fade-in-up delay-100 border-0 shadow-[var(--shadow-card)] bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <h2 className="text-2xl font-display font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-primary" />
              </span>
              À propos
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Passionné par l'intelligence artificielle et le machine learning, 
              je développe des solutions innovantes pour résoudre des problèmes 
              concrets. Ce projet ImmoPredict TN est le fruit de mon travail 
              académique, combinant data science et expertise du marché immobilier tunisien.
            </p>
          </CardContent>
        </Card>

        <Card className="animate-fade-in-up delay-200 border-0 shadow-[var(--shadow-card)] bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <h2 className="text-2xl font-display font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <Brain className="h-4 w-4 text-accent" />
              </span>
              Le Projet
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              ImmoPredict TN utilise un modèle XGBoost entraîné sur des données 
              réelles du marché immobilier tunisien. L'objectif est de fournir 
              des estimations précises et transparentes pour aider les utilisateurs 
              dans leurs décisions d'achat ou de vente.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Social Links */}
      <Card className="animate-fade-in-up delay-300 border-0 shadow-[var(--shadow-elevated)] bg-gradient-to-br from-card to-secondary/20">
        <CardContent className="p-8">
          <h2 className="text-2xl font-display font-semibold text-center mb-8">
            Me Contacter
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Button
                  variant="outline"
                  className={`w-full h-auto py-6 flex flex-col items-center gap-3 transition-all duration-300 ${link.color}`}
                >
                  <link.icon className="h-8 w-8" />
                  <span className="font-medium">{link.name}</span>
                  <span className="text-xs text-muted-foreground group-hover:text-inherit opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    {link.label}
                    <ExternalLink className="h-3 w-3" />
                  </span>
                </Button>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Footer quote */}
      <div className="mt-12 text-center animate-fade-in delay-400">
        <blockquote className="text-lg italic text-muted-foreground">
          "Les données racontent des histoires, le machine learning les révèle."
        </blockquote>
        <p className="text-sm text-muted-foreground/60 mt-2">— Omar Abdallah</p>
      </div>
    </div>
  );
}
