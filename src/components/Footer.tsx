import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2025 ImmoPredict TN</span>
            <span>•</span>
            <span>Projet Universitaire réaliser par Omar Abdallah</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Fait avec</span>
            <Heart className="h-4 w-4 text-accent fill-accent" />
            <span>en Tunisie</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
