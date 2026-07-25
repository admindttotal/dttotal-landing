import { ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Catalog() {
  return (
    <div className="flex min-h-[calc(100vh-16rem)] w-full flex-col items-center justify-center p-6 text-center my-auto">
      <div className="relative mb-6">
        {/* Ilustración SVG Retro / Tech Minimalista */}
        <div className="relative flex h-36 w-36 items-center justify-center rounded-3xl border border-neutral-300 bg-white/90 shadow-xl backdrop-blur-md">
          <svg
            className="h-20 w-20 text-neutral-800"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Monitor / Servidor retro */}
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
            <circle cx="6" cy="7" r="1" className="fill-emerald-500" />
            <circle cx="9" cy="7" r="1" className="fill-neutral-300" />
            <line x1="6" y1="11" x2="18" y2="11" />
            <line x1="6" y1="14" x2="14" y2="14" />
          </svg>
        </div>

        {/* Badge flotante */}
        <span className="absolute -bottom-2 -right-2 flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700 shadow-md">
          <Sparkles size={13} />
          Próximamente
        </span>
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
        Sección en construcción
      </h2>
      <p className="mt-2 max-w-md text-sm text-neutral-500 leading-relaxed">
        Estamos trabajando en el nuevo catálogo interactivo de productos y equipamiento tecnológico.
      </p>

      <div className="mt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-2.5 text-xs uppercase tracking-widest font-semibold text-neutral-800 shadow-sm transition hover:bg-black hover:text-white"
        >
          <ArrowLeft size={16} />
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}