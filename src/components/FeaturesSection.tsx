// Archivo: src/components/FeaturesSection.tsx
import React from "react";
import { Feature } from "@/types";

interface FeaturesSectionProps {
  features: Feature[];
  onEdit?: (index: number, field: keyof Feature, value: string) => void;
}

export default function FeaturesSection({ features, onEdit }: FeaturesSectionProps) {
  const handleClick = (index: number, field: keyof Feature) => {
    const newValue = prompt("Editar texto:", features[index][field]);
    if (newValue && onEdit) {
      onEdit(index, field, newValue);
    }
  };

  return (
    <section className="p-4 border-b">
      <h2 className="text-xl font-semibold mb-2">Características</h2>
      <div className="flex flex-col gap-4">
        {features.map((feature, idx) => (
          <div key={idx} className="border p-2 rounded">
            <h3
              className="font-bold cursor-pointer"
              onClick={() => handleClick(idx, "featureTitle")}
            >
              {feature.featureTitle}
            </h3>
            <p
              className="cursor-pointer"
              onClick={() => handleClick(idx, "featureDescription")}
            >
              {feature.featureDescription}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}