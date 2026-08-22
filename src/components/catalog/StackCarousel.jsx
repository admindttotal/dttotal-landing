import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Eye, ExternalLink, Loader2 } from "lucide-react";

const CARD_WIDTH = 250;
const GAP = -130;
const ROTATION_ANGLE = 35;
const TRANSLATE_Z = -80;
const OPACITY_STEP = 0.35;

export default function StackCarousel({ items, frameType = "full" }) {
  const [current, setCurrent] = useState(0);
  const [resolvedUrl, setResolvedUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [landingMode, setLandingMode] = useState("laptop");

  const hasItems = items && items.length > 0;
  const activeItem = hasItems ? items[current] : null;

  const goTo = (index) => {
    if (!hasItems) return;
    const clamped = Math.max(0, Math.min(items.length - 1, index));
    setCurrent(clamped);
  };

  useEffect(() => {
    if (!activeItem) return;

    let isMounted = true;
    const fetchUrl = async () => {
      setResolvedUrl(null);
      setError(null);

      if (activeItem.url) {
        if (isMounted) setResolvedUrl(activeItem.url);
        return;
      }

      setLoading(true);
      try {
        const res = await fetch(`/api/template-url?id=${encodeURIComponent(activeItem.id)}`);
        if (!res.ok) throw new Error("Error");
        const data = await res.json();
        if (isMounted) setResolvedUrl(data.url);
      } catch {
        if (isMounted) setError("No se pudo cargar la vista previa");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchUrl();
    return () => { isMounted = false; };
  }, [current, activeItem]);

  if (!hasItems) return null;

  // Más allá de esta distancia, la tarjeta ya no aporta nada visible
  // (queda tapada/aplastada contra el borde), así que ni se monta en el DOM.
  const MAX_RENDER_DIST = 5;

  const getCardStyle = (index) => {
    const diff = index - current;
    const total = items.length;
    const adjustedDiff = diff;
    const dir = Math.sign(adjustedDiff);
    const dist = Math.abs(adjustedDiff);

    const isActive = dist === 0;

    const cappedDist = Math.min(dist, 2);
    const rotateY = dir * cappedDist * ROTATION_ANGLE;
    const translateX = dir * (cappedDist * (CARD_WIDTH + GAP) + Math.max(0, dist - 2) * 5);
    const zIndex = total - dist;
    const opacity = isActive ? 1 : Math.max(0.18, 1 - dist * OPACITY_STEP);

    return {
      transform: `perspective(800px) translateX(${translateX}px) translateZ(${TRANSLATE_Z}px) rotateY(${-rotateY}deg)`,
      zIndex: zIndex,
      opacity: opacity,
      position: 'absolute',
    };
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        <div className="lg:col-span-5 flex flex-col items-center justify-center h-full my-auto">
          <div
            className="relative flex items-center justify-center w-full h-[340px] mb-8"
            style={{ perspective: '800px' }}
          >
            {items.map((item, index) => {
              const dist = Math.abs(index - current);
              if (dist > MAX_RENDER_DIST) return null;

              const cardStyle = getCardStyle(index);
              const isActive = index === current;
              // Solo las tarjetas cercanas pagan el costo del cristal esmerilado real
              const useHeavyBlur = !isActive && dist <= 3;

              const bgStyle = isActive
                ? item.image
                  ? `linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.6)), url(${item.image}) center/cover no-repeat`
                  : `linear-gradient(135deg, ${item.color || "#999"}, ${item.color || "#999"}cc)`
                : "rgba(10,10,12,0.75)";

              return (
                <motion.div
                  key={item.id}
                  layout
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{
                    ...cardStyle,
                    width: `${CARD_WIDTH}px`,
                  }}
                  className={`h-[300px] rounded-[2.5rem] border shadow-2xl p-6 flex flex-col items-center justify-center gap-4 text-center cursor-pointer overflow-hidden transition-all duration-300 ${
                    isActive
                      ? 'border-white/25 ring-1 ring-[#e3cd5c]/30 shadow-[0_10px_40px_-8px_rgba(0,0,0,0.5)]'
                      : `border-white/10 ${useHeavyBlur ? 'backdrop-blur-xl' : ''}`
                  }`}
                  onClick={() => goTo(index)}
                  aria-current={isActive}
                >
                  <div
                    className="absolute inset-0 z-0 transition-all duration-300"
                    style={{
                      background: bgStyle,
                      backdropFilter: useHeavyBlur ? "blur(18px) saturate(60%)" : "none",
                      WebkitBackdropFilter: useHeavyBlur ? "blur(18px) saturate(60%)" : "none",
                    }}
                  />

                  {!isActive && (
                    <div
                      className="absolute inset-0 z-0 pointer-events-none"
                      style={{ background: `${item.color || "#999"}22` }}
                    />
                  )}

                  {item.dual && (
                    <span
                      className="absolute top-3 right-3 z-20 text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-full transition-opacity duration-300"
                      style={{
                        background: "rgba(0,0,0,0.5)",
                        border: "1px solid rgba(255,255,255,0.25)",
                        color: "#fff",
                        opacity: isActive ? 1 : 0.5,
                      }}
                    >
                      Dual
                    </span>
                  )}

                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center shadow-inner transition-opacity duration-300"
                      style={{
                        background: "rgba(0,0,0,0.35)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        opacity: isActive ? 1 : 0.45,
                      }}
                    >
                      <Eye size={18} className="text-white" />
                    </div>
                    <h3
                      className="font-bold text-xl leading-tight text-white transition-opacity duration-300"
                      style={{
                        textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                        opacity: isActive ? 1 : 0.5,
                      }}
                    >
                      {item.name}
                    </h3>
                    <span className={`text-[10px] uppercase tracking-widest ${isActive ? "text-white font-semibold" : "text-white/40"}`}>
                      {isActive ? "Seleccionado" : "Click para ver"}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => goTo(current - 1)}
              disabled={current === 0}
              aria-label="Anterior"
              className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-black hover:border-neutral-700 transition-colors text-white shadow-md disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:bg-neutral-900 disabled:hover:border-neutral-800"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-xs text-neutral-800 font-semibold tracking-widest uppercase w-28 text-center">
              {current + 1} de {items.length}
            </span>
            <button
              onClick={() => goTo(current + 1)}
              disabled={current === items.length - 1}
              aria-label="Siguiente"
              className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-black hover:border-neutral-700 transition-colors text-white shadow-md disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:bg-neutral-900 disabled:hover:border-neutral-800"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col items-center justify-center h-full my-auto">
          <div className={`w-full ${frameType === "phone" || landingMode === "movil" ? "max-w-md" : "max-w-4xl"} flex flex-col items-center transition-all duration-300`}>
            <div className="w-full flex items-center justify-between text-xs mb-3 px-2">
              <span className="flex items-center gap-1.5 font-semibold text-neutral-900 truncate">
                <ExternalLink size={14} className="text-neutral-500 shrink-0" />
                <span className="truncate">{activeItem.name}</span>
              </span>

              {frameType === "full" && (
                <div className="flex items-center gap-1 bg-neutral-200/70 p-1 rounded-lg">
                  <button
                    onClick={() => setLandingMode("movil")}
                    className={`px-3 py-1 text-[10px] font-medium rounded-md transition-all ${landingMode === "movil" ? "bg-black text-white shadow-sm" : "text-neutral-700 hover:text-black"}`}
                  >
                    Móvil
                  </button>
                  <button
                    onClick={() => setLandingMode("laptop")}
                    className={`px-3 py-1 text-[10px] font-medium rounded-md transition-all ${landingMode === "laptop" ? "bg-black text-white shadow-sm" : "text-neutral-700 hover:text-black"}`}
                  >
                    Laptop
                  </button>
                </div>
              )}

              <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-medium shrink-0">
                Vista previa en vivo
              </span>
            </div>

            <div
              className={
                frameType === "phone"
                  ? "w-[320px] h-[540px] border-[6px] border-neutral-950 rounded-[2.5rem] overflow-hidden shadow-2xl bg-neutral-950 relative"
                  : landingMode === "movil"
                    ? "w-[340px] h-[600px] border-[6px] border-neutral-950 rounded-[2.5rem] overflow-hidden shadow-2xl bg-neutral-950 relative transition-all duration-300"
                    : "w-full h-[600px] border border-neutral-300 rounded-2xl overflow-hidden shadow-2xl bg-neutral-950 relative transition-all duration-300"
              }
            >
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-950 z-10 text-neutral-400">
                  <Loader2 size={28} className="animate-spin" />
                </div>
              )}

              {error && !loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-950 p-6 text-center text-xs text-red-400">
                  {error}
                </div>
              )}

              {resolvedUrl && !loading && !error && (
                frameType === "full" && landingMode === "laptop" ? (
                  <div className="w-full h-full overflow-hidden relative bg-white">
                    <iframe
                      src={resolvedUrl}
                      title={activeItem.name}
                      sandbox="allow-same-origin allow-scripts allow-forms"
                      style={{
                        width: "1025px",
                        height: "calc(100% / 0.65)",
                        transform: "scale(0.65)",
                        transformOrigin: "top left",
                        border: "0",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                    />
                  </div>
                ) : (
                  <iframe
                    src={resolvedUrl}
                    title={activeItem.name}
                    className="w-full h-full border-0"
                    sandbox="allow-same-origin allow-scripts allow-forms"
                  />
                )
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}