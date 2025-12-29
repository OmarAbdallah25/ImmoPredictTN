import { useLocation, Navigate, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Building2,
  Home,
  Store,
  Palmtree,
  Briefcase,
  Users,
  MapPin,
  Ruler,
  BedDouble,
  Bath,
  RotateCcw,
  ArrowLeft,
  Sparkles,
  Brain,
  Info,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
type IconType = ComponentType<SVGProps<SVGSVGElement>>;

/* ---------------------------------- */
/* MAPPINGS */
/* ---------------------------------- */
const propertyIcons: Record<string, IconType> = {
  appartements: Building2,
  maisons: Home,
  bureaux: Briefcase,
  vacances: Palmtree,
  colocations: Users,
  commerces: Store,
};

const propertyLabels: Record<string, string> = {
  appartements: "Appartement",
  maisons: "Maison / Villa",
  bureaux: "Bureau / Plateau",
  vacances: "Location de vacances",
  colocations: "Colocation",
  commerces: "Commerce / Local",
};

/* ---------------------------------- */
/* TYPES */
/* ---------------------------------- */
interface PredictionResult {
  estimatedPrice: number;
  propertyType: string;
  ville: string;
  zone: string;
  surface: number;
  bedrooms?: number;
  bathrooms?: number;
}

/* ---------------------------------- */
/* HOOK ANIMATION PRIX */
/* ---------------------------------- */
function useCountUp(end: number, duration = 2000) {
  const [value, setValue] = useState(0);
  const start = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!start.current) start.current = timestamp;
      const progress = Math.min((timestamp - start.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(Math.floor(eased * end));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return value;
}

/* ---------------------------------- */
/* PAGE */
/* ---------------------------------- */
export default function ResultPage() {
  const location = useLocation();
  const prediction = location.state?.prediction as PredictionResult | undefined;

  if (!prediction) {
    return <Navigate to="/prediction" replace />;
  }

  const Icon = propertyIcons[prediction.propertyType] || Building2;
  const animatedPrice = useCountUp(prediction.estimatedPrice, 2500);

  const format = (n: number) =>
    new Intl.NumberFormat("fr-TN").format(n);

  const isResidential = ["appartements", "maisons", "colocations", "vacances"].includes(
    prediction.propertyType
  );

  return (
    <div className="min-h-screen bg-gradient-hero py-12">
      <div className="container max-w-4xl">

        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Sparkles className="h-4 w-4" />
            Estimation terminée
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Résultat de l’estimation
          </h1>
          <p className="text-muted-foreground">
            Basée sur un modèle IA (XGBoost)
          </p>
        </div>

        {/* PRIX */}
        <Card className="mb-8 text-center">
          <CardContent className="py-12">
            <p className="text-sm text-muted-foreground flex justify-center gap-2 mb-2">
              <Brain className="h-4 w-4" />
              Prix estimé
            </p>

            <h2 className="text-5xl md:text-6xl font-extrabold text-primary">
              {format(animatedPrice)}
              <span className="text-2xl ml-2">DT</span>
            </h2>

            <p className="mt-3 text-muted-foreground">
              ≈ {format(Math.round(prediction.estimatedPrice / prediction.surface))} DT / m²
            </p>
          </CardContent>
        </Card>

        {/* DETAILS */}
        <Card>
          <CardHeader>
            <CardTitle>Détails du bien</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">

            <Item icon={Icon} label="Type">
              {propertyLabels[prediction.propertyType]}
            </Item>

            <Item icon={MapPin} label="Localisation">
              {prediction.zone}, {prediction.ville}
            </Item>

            <Item icon={Ruler} label="Surface">
              {prediction.surface} m²
            </Item>

            {isResidential && (
              <>
                <Item icon={BedDouble} label="Chambres">
                  {prediction.bedrooms || "—"}
                </Item>
                <Item icon={Bath} label="Salles de bain">
                  {prediction.bathrooms || "—"}
                </Item>
              </>
            )}
          </CardContent>
        </Card>

        {/* DISCLAIMER */}
        <div className="mt-6 flex gap-3 text-sm text-muted-foreground">
          <Info className="h-4 w-4 mt-0.5" />
          Cette estimation est indicative et ne constitue pas une évaluation officielle.
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Link to="/prediction" className="flex-1">
            <Button className="w-full gap-2">
              <RotateCcw className="h-4 w-4" />
              Nouvelle estimation
            </Button>
          </Link>
          <Link to="/" className="flex-1">
            <Button variant="outline" className="w-full gap-2">
              <ArrowLeft className="h-4 w-4" />
              Accueil
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------- */
/* SUB COMPONENT */
/* ---------------------------------- */
function Item({
  icon: Icon,
  label,
  children,
}: {
  icon: IconType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="font-medium">{children}</p>
      </div>
    </div>
  );
}
