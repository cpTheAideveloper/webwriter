// Archivo: src/app/page.tsx
"use client";

import React, { useState } from "react";
import TextInput from "@/components/TextInput";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ServicesSection from "@/components/ServicesSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import { ContentData } from "@/types";

export default function HomePage() {
  const [companyName, setCompanyName] = useState("");
  const [ideas, setIdeas] = useState("");
  const [contentData, setContentData] = useState<ContentData>({
    hero: { title: "", description: "", cta: "" },
    features: [],
    services: [],
    finalCta: "",
  });

  // Simulación de respuesta dinámica cada vez que cambia "ideas" o "companyName".
  // Aquí se llamaría a la API real para obtener contenido autogenerado.
  const handleGenerateContent = async () => {
    try {
      const messages = [
        {
          role: "user",
          content: `Por favor genera contenido para la empresa: ${companyName} con estas ideas: ${ideas},`,
        },
      ];
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages }),
      });
      const data = await res.json();
      if (data?.data) {
        setContentData(data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleReset = () => {
    setCompanyName("");
    setIdeas("");
    setContentData({
      hero: { title: "", description: "", cta: "" },
      features: [],
      services: [],
      finalCta: "",
    });
  };

  // Editar dinámicamente secciones
  const updateHero = (
    field: "title" | "description" | "cta",
    value: string
  ) => {
    setContentData((prev) => ({
      ...prev,
      hero: { ...prev.hero, [field]: value },
    }));
  };

  const updateFeature = (
    index: number,
    field: "featureTitle" | "featureDescription",
    value: string
  ) => {
    const updated = [...contentData.features];
    updated[index] = { ...updated[index], [field]: value };
    setContentData((prev) => ({ ...prev, features: updated }));
  };

  const updateService = (
    index: number,
    field: "serviceTitle" | "serviceDescription",
    value: string
  ) => {
    const updated = [...contentData.services];
    updated[index] = { ...updated[index], [field]: value };
    setContentData((prev) => ({ ...prev, services: updated }));
  };

  const updateFinalCta = (value: string) => {
    setContentData((prev) => ({ ...prev, finalCta: value }));
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 p-4">
        <TextInput
          label="Nombre de la Empresa"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <TextInput
          label="Ideas Clave"
          value={ideas}
          onChange={(e) => setIdeas(e.target.value)}
        />
        <div className="flex gap-2 mt-4">
          <button
            onClick={handleGenerateContent}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Generar Contenido
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Reiniciar
          </button>
        </div>
      </div>
      <div className="md:w-1/2 p-4 border-l">
        <HeroSection hero={contentData.hero} onEdit={updateHero} />
        <FeaturesSection
          features={contentData.features}
          onEdit={updateFeature}
        />
        <ServicesSection
          services={contentData.services}
          onEdit={updateService}
        />
        <FinalCtaSection
          finalCta={contentData.finalCta}
          onEdit={updateFinalCta}
        />
      </div>
    </div>
  );
}