import { useState } from "react";
import StackCarousel from "../components/catalog/StackCarousel";
import { templates } from "../data/templates";

export default function Catalog() {
  const [tab, setTab] = useState("invitacion");

  const invitaciones = templates.filter((t) => t.category === "invitacion");
  const landings = templates.filter((t) => t.category === "landing");

  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 py-20 sm:py-28">
      <div className="text-center mb-14">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
          Catálogo de Plantillas
        </h2>
        <p className="mt-2 max-w-md mx-auto text-sm text-neutral-500 leading-relaxed">
          Ejemplos reales de invitaciones digitales y landing pages que hemos creado.
        </p>
      </div>

      <div className="flex justify-center gap-2 mb-10">
        <button
          onClick={() => setTab("invitacion")}
          className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold border transition-colors ${
            tab === "invitacion"
              ? "bg-black text-white border-black"
              : "border-neutral-300 text-neutral-600 hover:border-black"
          }`}
        >
          Invitaciones
        </button>
        <button
          onClick={() => setTab("landing")}
          className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold border transition-colors ${
            tab === "landing"
              ? "bg-black text-white border-black"
              : "border-neutral-300 text-neutral-600 hover:border-black"
          }`}
        >
          Landing Pages
        </button>
      </div>

      {tab === "invitacion" ? (
        <StackCarousel key="invitacion" items={invitaciones} frameType="phone" />
      ) : (
        <StackCarousel key="landing" items={landings} frameType="full" />
      )}
    </div>
  );
}