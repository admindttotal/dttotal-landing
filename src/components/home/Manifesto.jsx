import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";

// Importa aquí tus imágenes reales
import supportImg1 from "../../assets/images/nosotros/supportImg1.jpg";
import supportImg2 from "../../assets/images/nosotros/supportImg2.png";
import supportImg3 from "../../assets/images/nosotros/supportImg3.jpg";

const realPhotos = [
  {
    id: 1,
    image: supportImg1,
    title: "Atención al cliente",
    caption: "Resolviendo pendientes y preparando tu cotización, cuando lo necesites.",
  },
  {
    id: 2,
    image: supportImg2,
    title: "Todo para tu PC o laptop",
    caption: "Procesadores, tarjetas gráficas, RAM y más. Y si lo necesitas, también te la armamos.",
  },
  {
    id: 3,
    image: supportImg3,
    title: "Mantenimiento a fondo",
    caption: "No solo cambiamos piezas: diagnosticamos la causa real de la falla.",
  },
    /*{
    id: 3,
    image: supportImg3,
    title: "Infraestructura y Equipos",
    caption: "El respaldo tecnológico que tu espacio necesita.",
  },*/
];

function Manifesto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Estado para manejar el orden de las fotos en el efecto "tarjetero"
  const [cards, setCards] = useState(realPhotos);

  // Controla que el efecto de "caída de cartas" solo pase una vez al aparecer,
  // y no se repita cada vez que el usuario le da clic para cambiar de foto
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (!isInView || hasEntered) return;
    const timer = setTimeout(() => setHasEntered(true), 1300);
    return () => clearTimeout(timer);
  }, [isInView, hasEntered]);

  // Función para pasar a la siguiente tarjeta de la pila
  const handleNextCard = () => {
    setCards((prev) => {
      const copy = [...prev];
      const popped = copy.shift(); // Saca la primera
      copy.push(popped); // La manda al final
      return copy;
    });
  };

  return (
    <section ref={ref} id="nosotros" className="relative py-30 lg:py-36 overflow-hidden">
      {/* Fondo con brillo ambiental sutil */}
      <div 
        aria-hidden="true" 
        className="
          absolute 
          top-1/2 
          left-0 
          -translate-y-1/2 
          w-[500px] 
          h-[500px] 
          bg-[#e3cd5c]/10 
          blur-[140px] 
          rounded-full 
          pointer-events-none 
          -z-10
        " 
      />

      <div
        className="
          relative
          z-10
          max-w-[1600px]
          mx-auto
          px-6
          sm:px-8
          lg:px-14
        "
      >
        {/* ETIQUETA / LABEL ANIMADA */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-3 mb-8 lg:mb-12"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#e3cd5c] shadow-[0_0_10px_#e3cd5c]" />
          <p
            className="
              uppercase
              tracking-[0.35em]
              text-xs
              sm:text-sm
              text-neutral-500
              font-semibold
            "
          >
            Quiénes somos
          </p>
        </motion.div>

        {/* MENSAJE PRINCIPAL / MANIFIESTO ANIMADO */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="
            max-w-6xl
            text-4xl
            sm:text-6xl
            md:text-7xl
            lg:text-[5.5rem]
            xl:text-[6.2rem]
            font-black
            uppercase
            leading-[1.05] sm:leading-[1.02] lg:leading-[0.98]
            tracking-tight
            text-neutral-950
          "
        >
          La tecnología
          <br />
          debería ayudarte.
          <br />
          <span 
            className="
              text-neutral-400 
              hover:text-black 
              transition-colors 
              duration-500 
              cursor-default
            "
          >
            No complicarte.
          </span>
        </motion.h2>

        {/* CONTENIDO INFERIOR: TARJETAS APILADAS + TEXTO DESCRIPTIVO */}
        <div
          className="
            mt-14
            lg:mt-24
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-12
            lg:gap-16
            items-center
          "
        >
          {/* COLUMNA IZQUIERDA: EFECTO TARJETERO MÁS GRANDE E INTERACTIVO */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-6 relative h-[420px] sm:h-[500px] flex items-center justify-center cursor-pointer select-none"
            onClick={handleNextCard}
            title="Haz clic para ver la siguiente foto"
          >
            {/* Contenedor ampliado */}
            <div className="relative w-full max-w-[650px] aspect-[16/10]">
              {cards.map((card, index) => {
                const isTop = index === 0;
                const isSecond = index === 1;
                
                // Encontramos el número de tarjeta real basado en su ID original dentro del arreglo general
                const realIndex = realPhotos.findIndex((p) => p.id === card.id) + 1;

                return (
                  <motion.div
                    key={card.id}
                    initial={{
                      opacity: 0,
                      y: -260,
                      rotate: index % 2 === 0 ? 14 : -14,
                      scale: 0.85,
                    }}
                    animate={
                      isInView
                        ? {
                            scale: isTop ? 1 : isSecond ? 0.94 : 0.88,
                            y: isTop ? 0 : isSecond ? 22 : 44,
                            rotate: isTop ? 0 : isSecond ? 2 : -2,
                            zIndex: cards.length - index,
                            opacity: isTop ? 1 : isSecond ? 0.5 : 0.2,
                          }
                        : { opacity: 0, y: -260 }
                    }
                    transition={
                      hasEntered
                        ? { duration: 0.4, ease: "easeInOut" }
                        : { duration: 0.65, ease: "easeOut", delay: 0.3 + realIndex * 0.18 }
                    }
                    className="absolute inset-0 overflow-hidden rounded-3xl border border-neutral-200/90 bg-neutral-100 shadow-2xl shadow-black/15 origin-bottom"
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        isTop ? "grayscale-0 contrast-100" : "grayscale contrast-125"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Información dentro de la tarjeta superior con contador dinámico */}
                    {isTop && (
                      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 text-white">
                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#e3cd5c]">
                            {card.title}
                          </p>
                          <p className="text-xs text-neutral-200 font-medium">
                            {card.caption}
                          </p>
                        </div>
                        <span className="shrink-0 flex items-center gap-1 text-[10px] sm:text-xs bg-white/20 backdrop-blur-md px-2.5 sm:px-3 py-1.5 rounded-full uppercase tracking-widest border border-white/20">
                          <span className="hidden sm:inline">Toca para cambiar </span>
                          <span>({realIndex}/{realPhotos.length})</span>
                          <ChevronRight size={12} className="sm:hidden" />
                        </span>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* COLUMNA DERECHA: TEXTO EXPLICATIVO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="
              lg:col-span-6
              pl-2
              sm:pl-6
              border-l-2
              border-[#e3cd5c]
              space-y-5
            "
          >
            <p
              className="
                text-xl
                sm:text-2xl
                text-neutral-900
                leading-relaxed
                font-medium
              "
            >
              En <strong className="text-black font-bold">DT TOTAL</strong> creemos que la tecnología debe ayudarte a trabajar mejor, no convertirse en un problema.
            </p>

            <p
              className="
                text-base
                sm:text-lg
                text-neutral-600
                leading-relaxed
              "
            >
              Ayudamos a personas, negocios y empresas a encontrar el equipo, la presencia web y el soporte técnico que realmente necesitan, con recomendaciones claras y soluciones pensadas para cada caso.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Manifesto;