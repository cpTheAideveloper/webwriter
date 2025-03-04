import React from "react";
import { HeroData } from "@/types";

interface HeroSectionProps {
    hero: HeroData;
    onEdit?: (field: keyof HeroData, value: string) => void;
  }


  export default function HeroSection({ hero, onEdit }: HeroSectionProps) {
    const handleClick = (field: keyof HeroData) => {
      const newValue = prompt("Editar texto:", hero[field]);
      if (newValue && onEdit) {
        onEdit(field, newValue);
      }
    };
  
    return (
      <section className="p-4 border-b">
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => handleClick("title")}
        >
          {hero.title}
        </h1>
        <p
          className="mt-2 cursor-pointer"
          onClick={() => handleClick("description")}
        >
          {hero.description}
        </p>
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
          onClick={() => handleClick("cta")}
        >
          {hero.cta}
        </button>
      </section>
    );
  }