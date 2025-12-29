import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Building2,
  Home,
  Store,
  Briefcase,
  Users,
  Palmtree,
  MapPin,
  Calculator,
  Loader2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { allVilles, getZonesByVille } from "@/data/tunisianLocations";
import axios from "axios";
import type { ComponentType, SVGProps } from "react";
type IconType = ComponentType<SVGProps<SVGSVGElement>>;
const propertyTypes = [
  { value: "appartements", label: "Appartements", icon: Building2 },
  { value: "bureaux", label: "Bureaux et Plateaux", icon: Briefcase },
  { value: "colocations", label: "Colocations", icon: Users },
  { value: "vacances", label: "Locations de vacances", icon: Palmtree },
  { value: "commerces", label: "Commerces", icon: Store },
  { value: "maisons", label: "Maisons et Villas", icon: Home },
];

interface FormData {
  propertyType: string;
  transactionType: "a_vendre" | "a_louer"; // nouveau champ
  bedrooms: string;
  bathrooms: string;
  surface: string;
  city: string;
  region: string;
}

export default function PredictionPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
      propertyType: "",
      transactionType: "a_vendre", // valeur par défaut
      bedrooms: "",
      bathrooms: "",
      surface: "",
      city: "",
      region: "",
  });

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.propertyType || !formData.surface || !formData.city || !formData.region) {
    toast({
      title: "Champs manquants",
      description: "Veuillez remplir tous les champs obligatoires.",
      variant: "destructive",
    });
    return;
  }

  setIsLoading(true);

  try {
    // Générer toutes les colonnes du modèle
    const payload: any = {
      room_count: Number(formData.bedrooms) || 0,
      bathroom_count: Number(formData.bathrooms) || 0,
      size: Number(formData.surface),
    };

    // Colonnes type_encoded / category
    const types = ["appartements", "bureaux", "colocations", "vacances", "commerces", "maisons"];
    types.forEach((t) => {
      payload["type_encoded"] = formData.transactionType === "a_vendre" ? 1 : 0;
      payload[`category_${t.replace(/ /g, "_")}`] = formData.propertyType === t ? 1 : 0;
    });

    // Colonnes villes
    allVilles.forEach((v) => {
      payload[`city_${v}`] = formData.city === v ? 1 : 0;
    });

    // Colonnes zones
    getZonesByVille(formData.city).forEach((z) => {
      payload[`region_${z}`] = formData.region === z ? 1 : 0;
    });

    // Envoyer la requête
    const response = await axios.post("http://localhost:8000/predict", payload);

    const estimatedPrice = Math.round(response.data.estimated_price);
console.log(payload);
console.log(response);

    navigate("/result", {
      state: {
        prediction: {
          estimatedPrice,
          propertyType: formData.propertyType,
          ville: formData.city,
          zone: formData.region,
          surface: Number(formData.surface),
          bedrooms: Number(formData.bedrooms) || 0,
          bathrooms: Number(formData.bathrooms) || 0,
        },
      },
    });
  } catch (error) {
    toast({
      title: "Erreur serveur",
      description: "Impossible d'obtenir une estimation.",
      variant: "destructive",
    });
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div className="min-h-screen bg-gradient-hero py-12">
      <div className="container max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Estimation immobilière</h1>
          <p className="text-muted-foreground">
            Estimation basée sur un modèle IA (XGBoost)
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-primary" />
              Informations du bien
            </CardTitle>
            <CardDescription>
              Tous les champs * sont obligatoires
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Property Type */}
              <div>
                <Label>Type de bien *</Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
                  {propertyTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, propertyType: type.value })
                        }
                        className={`p-4 border rounded-lg flex flex-col items-center gap-2 ${
                          formData.propertyType === type.value
                            ? "border-primary bg-primary/5"
                            : "hover:border-primary/50"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                        <span className="text-sm">{type.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Rooms */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="number"
                  placeholder="Chambres"
                  value={formData.bedrooms}
                  onChange={(e) =>
                    setFormData({ ...formData, bedrooms: e.target.value })
                  }
                />
                <Input
                  type="number"
                  placeholder="Salles de bain"
                  value={formData.bathrooms}
                  onChange={(e) =>
                    setFormData({ ...formData, bathrooms: e.target.value })
                  }
                />
              </div>

              {/* Surface */}
              <Input
                type="number"
                placeholder="Surface (m²) *"
                value={formData.surface}
                onChange={(e) =>
                  setFormData({ ...formData, surface: e.target.value })
                }
              />


            <div>
              <Label>Type Prediction*</Label>
              <Select
                value={formData.transactionType}
                onValueChange={(val) =>
                  setFormData({ ...formData, transactionType: val as "a_vendre" | "a_louer" })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choisir" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a_vendre">À vendre</SelectItem>
                  <SelectItem value="a_louer">À louer</SelectItem>
                </SelectContent>
              </Select>
            </div>












              {/* Location */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Select
                  value={formData.city}
                  onValueChange={(city) =>
                    setFormData({ ...formData, city, region: "" })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Ville *" />
                  </SelectTrigger>
                  <SelectContent>
                    {allVilles.map((v) => (
                      <SelectItem key={v} value={v}>
                        {v}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={formData.region}
                  onValueChange={(region) =>
                    setFormData({ ...formData, region })
                  }
                  disabled={!formData.city}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Zone *" />
                  </SelectTrigger>
                  <SelectContent>
                    {getZonesByVille(formData.city).map((z) => (
                      <SelectItem key={z} value={z}>
                        {z}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Prédiction...
                  </>
                ) : (
                  "Prédire le prix"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
