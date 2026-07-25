import { ArrowUpRight, FileSpreadsheet, Boxes } from "lucide-react";

const software = [
  {
    tag: "Herramienta Comercial",
    name: "CotizaMex",
    description:
      "Genera cotizaciones claras y profesionales en minutos. Ideal para responder rápido a tus clientes sin perder tiempo en hojas de cálculo.",
    icon: FileSpreadsheet,
    badge: "Desarrollo Propio",
    cardStyle: "bg-white/10 hover:bg-blue-950/[0.08] hover:border-blue-500/30 hover:backdrop-blur-md",
    titleHoverColor: "group-hover:text-blue-600",
    glowColor: "group-hover:bg-blue-500/15",
    indicatorPing: "bg-blue-400",
    indicatorDotHover: "group-hover:bg-blue-500",
  },
  {
    tag: "Control de Inventario",
    name: "Control IMex",
    description:
      "Una herramienta práctica para quienes solo necesitan saber qué entra, qué sale y cuánto tienen disponible.",
    icon: Boxes,
    badge: "Desarrollo Propio",
    cardStyle: "bg-white/10 hover:bg-emerald-950/[0.08] hover:border-emerald-500/30 hover:backdrop-blur-md",
    titleHoverColor: "group-hover:text-emerald-600",
    glowColor: "group-hover:bg-emerald-500/15",
    indicatorPing: "bg-emerald-400",
    indicatorDotHover: "group-hover:bg-emerald-500",
  },
];

function Products() {
  return (
    <section
      id="software"
      className="relative py-30 lg:py-36 overflow-hidden text-black"
    >
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
        {/* HEADER DE LA SECCIÓN */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 pb-12 border-b border-black/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
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
                Herramientas Digitales
              </p>
            </div>

            <h2
              className="
                text-4xl
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                font-black
                uppercase
                leading-[0.92]
                tracking-tight
              "
            >
              Desarrollamos
              <br />
              <span className="text-neutral-400">lo que usamos.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base sm:text-lg text-neutral-600 leading-relaxed">
            No desarrollamos software por moda. Creamos herramientas porque primero fueron una necesidad real. Hoy forman parte de DT Total y ayudan a simplificar tareas que antes consumían tiempo.
          </p>
        </div>

        {/* GRID DE PRODUCTOS (CARDS) */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {software.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <div
                key={item.name}
                className={`
                  group
                  relative
                  border
                  border-black/10
                  rounded-3xl
                  p-8
                  sm:p-10
                  lg:p-12
                  flex
                  flex-col
                  justify-between
                  transition-all
                  duration-500
                  hover:shadow-2xl
                  hover:-translate-y-1
                  ${item.cardStyle}
                `}
              >
                {/* Resplandor semitransparente sutil en la esquina */}
                <div 
                  className={`
                    absolute 
                    top-0 
                    right-0 
                    w-48 
                    h-48 
                    bg-transparent
                    blur-3xl 
                    rounded-full 
                    transition-all 
                    duration-500 
                    pointer-events-none
                    ${item.glowColor}
                  `}
                />

                <div>
                  {/* FILA SUPERIOR: ÍCONO + BADGE CON INDICADOR + ÍNDICE */}
                  <div className="flex items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-neutral-100/60 backdrop-blur-sm rounded-2xl text-black group-hover:bg-black group-hover:text-white transition-colors duration-300">
                        <IconComponent size={24} />
                      </div>
                      
                      {/* Badge con punto pulsante resuelto de forma estática limpia */}
                      <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100/60 backdrop-blur-sm border border-black/5">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className={`absolute inline-flex h-full w-full rounded-full opacity-0 group-hover:opacity-75 group-hover:animate-ping transition-opacity duration-300 ${item.indicatorPing}`} />
                          <span className={`relative inline-flex h-2.5 w-2.5 rounded-full transition-colors duration-300 bg-neutral-900 ${item.indicatorDotHover}`} />
                        </span>
                        <span className="text-xs uppercase font-bold tracking-wider text-neutral-700">
                          {item.badge}
                        </span>
                      </div>
                    </div>

                    <span className="font-mono text-xs text-neutral-400 tracking-widest">
                      [0{index + 1}]
                    </span>
                  </div>

                  {/* ETIQUETA Y TÍTULO LIMPIO */}
                  <span className="text-xs uppercase tracking-widest font-semibold text-neutral-500 block mb-2">
                    {item.tag}
                  </span>

                  <h3
                    className={`
                      text-3xl
                      sm:text-4xl
                      lg:text-5xl
                      font-extrabold
                      uppercase
                      tracking-tight
                      text-neutral-950
                      mb-4
                      transition-colors
                      duration-300
                      ${item.titleHoverColor}
                    `}
                  >
                    {item.name}
                  </h3>

                  <p className="text-neutral-600 text-base lg:text-lg leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>

                {/* BOTÓN DE ACCIÓN */}
                <div className="pt-6 border-t border-black/5">
                  <a
                    href="#contacto"
                    className="
                      inline-flex
                      items-center
                      justify-between
                      w-full
                      sm:w-auto
                      gap-4
                      border
                      border-neutral-900
                      rounded-full
                      px-7
                      py-3.5
                      text-xs
                      uppercase
                      tracking-widest
                      font-semibold
                      transition-all
                      duration-300
                      group-hover:bg-black
                      group-hover:text-white
                    "
                  >
                    <span>Solicitar Demostración</span>
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;