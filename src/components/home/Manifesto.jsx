import manifestImage from "../../assets/images/nosotros/manifesto-tech.png";

function Manifesto() {
  return (
    <section id="nosotros" className="relative py-24 lg:py-36 overflow-hidden">
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
        {/* ETIQUETA / LABEL */}
        <div className="flex items-center gap-3 mb-8 lg:mb-12">
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
        </div>

        {/* MENSAJE PRINCIPAL / MANIFIESTO */}
        <h2
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
        </h2>

        {/* CONTENIDO INFERIOR: IMAGEN + TEXTO DESCRIPTIVO */}
        <div
          className="
            mt-14
            lg:mt-24
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-10
            lg:gap-16
            items-center
          "
        >
          {/* COLUMNA IZQUIERDA: TARJETA DE IMAGEN */}
          <div className="lg:col-span-6 relative group">
            <div className="overflow-hidden rounded-3xl border border-neutral-200/80 bg-neutral-100 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] relative">
              <img
                src={manifestImage}
                alt="DT Total Infraestructura y Soluciones Tecnológicas"
                className="
                  w-full 
                  h-full 
                  object-cover 
                  grayscale 
                  contrast-125 
                  group-hover:grayscale-0 
                  group-hover:scale-105 
                  transition-all 
                  duration-700 
                  ease-out
                "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>

            {/* BADGE FLOTANTE SOBRE LA IMAGEN */}
            <div 
              className="
                absolute 
                -bottom-5 
                right-6 
                sm:right-8 
                bg-white/90 
                backdrop-blur-md 
                border 
                border-neutral-200/80 
                rounded-2xl 
                px-5 
                py-3 
                shadow-lg 
                flex 
                items-center 
                gap-3
              "
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-800">
                Soporte e Infraestructura
              </span>
            </div>
          </div>

          {/* COLUMNA DERECHA: TEXTO EXPLICATIVO (Texto pulido y profesional) */}
          <div
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
              Ayudamos a personas, negocios y empresas a encontrar el equipo, las herramientas y el respaldo tecnológico que realmente necesitan, con recomendaciones claras y soluciones pensadas para cada caso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Manifesto;