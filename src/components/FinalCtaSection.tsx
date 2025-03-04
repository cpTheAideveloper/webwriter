// Archivo: src/components/FinalCtaSection.tsx
import React from "react";

interface FinalCtaSectionProps {
  finalCta: string;
  onEdit?: (value: string) => void;
}

export default function FinalCtaSection({ finalCta, onEdit }: FinalCtaSectionProps) {
  const handleClick = () => {
    const newValue = prompt("Editar texto:", finalCta);
    if (newValue && onEdit) {
      onEdit(newValue);
    }
  };

  return (
    <section className="p-4 border-b">
      <h2
        className="text-xl font-semibold mb-2 cursor-pointer"
        onClick={handleClick}
      >
        {finalCta}
      </h2>
    </section>
  );
}