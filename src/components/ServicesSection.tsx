// Archivo: src/components/ServicesSection.tsx
import React from "react";
import { Service } from "@/types";

interface ServicesSectionProps {
  services: Service[];
  onEdit?: (index: number, field: keyof Service, value: string) => void;
}

export default function ServicesSection({ services, onEdit }: ServicesSectionProps) {
  const handleClick = (index: number, field: keyof Service) => {
    const newValue = prompt("Editar texto:", services[index][field]);
    if (newValue && onEdit) {
      onEdit(index, field, newValue);
    }
  };

  return (
    <section className="p-4 border-b">
      <h2 className="text-xl font-semibold mb-2">Servicios</h2>
      <div className="flex flex-col gap-4">
        {services.map((service, idx) => (
          <div key={idx} className="border p-2 rounded">
            <h3
              className="font-bold cursor-pointer"
              onClick={() => handleClick(idx, "serviceTitle")}
            >
              {service.serviceTitle}
            </h3>
            <p
              className="cursor-pointer"
              onClick={() => handleClick(idx, "serviceDescription")}
            >
              {service.serviceDescription}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}