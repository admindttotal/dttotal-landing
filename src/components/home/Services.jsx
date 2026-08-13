import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Efecto "máquina de escribir": revela el texto letra por letra con fade in.
// aria-label mantiene el texto completo accesible para lectores de pantalla.
function TypewriterText({ text, isInView, startDelay = 0 }) {
  return (
    <span aria-label={text}>
      <span aria-hidden="true">
        {Array.from(text).map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.01, delay: startDelay + i * 0.014 }}
          >
            {char}
          </motion.span>
        ))}
      </span>
    </span>
  );
}

function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      number: "01",
      title: "Equipo y Distribución",
      text: "Cómputo, redes, impresión, videovigilancia y puntos de venta. Te ayudamos a encontrar el equipo correcto para tu negocio, con marcas confiables y sin relleno técnico.",
    },
    {
      number: "02",
      title: "Presencia Web",
      text: "Dominio, correo corporativo y una landing page simple y profesional para que tu negocio exista en internet, sin complicaciones ni procesos eternos.",
    },
    {
      number: "03",
      title: "Soporte y Mantenimiento",
      text: "Instalación, diagnóstico y acompañamiento continuo para que tu tecnología siga funcionando cuando más la necesitas.",
    },
  ];

  return (
    <section
      ref={ref}
      id="servicios"
      className="
        relative
        py-28
        lg:py-40
        bg-black
        text-white
        overflow-hidden
        scroll-mt-10
      "
    >
      <div
        className="
          max-w-[1600px]
          mx-auto
          px-6
          lg:px-14
        "
      >
        {/* Etiqueta superior animada */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#e3cd5c] shadow-[0_0_10px_#e3cd5c]" />
          <p
            className="
              uppercase
              tracking-[0.45em]
              text-xs
              text-neutral-400
              font-semibold
            "
          >
            Nuestra trayectoria
          </p>
        </motion.div>

        {/* Título principal animado */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="
            mt-4
            text-4xl
            sm:text-6xl
            md:text-7xl
            font-black
            uppercase
            leading-[0.95]
            tracking-tight
          "
        >
          Confianza respaldada.
          <br />
          <span className="text-neutral-500">Hecha números reales.</span>
        </motion.h2>

        {/* Lista con animación secuencial para cada renglón */}
        <div className="mt-16 lg:mt-24 border-t border-white/15">
          {services.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15, ease: "easeOut" }}
              className="
                group
                grid
                grid-cols-1
                md:grid-cols-[100px_1.2fr_1fr]
                gap-6
                md:gap-8
                py-10
                lg:py-12
                px-4
                -mx-4
                rounded-2xl
                border-b
                border-white/10
                transition-all
                duration-300
                hover:bg-neutral-900/60
                hover:border-white/30
                cursor-pointer
              "
            >
              <span className="text-neutral-500 font-mono text-sm tracking-widest pt-1 transition-colors duration-300 group-hover:text-[#e3cd5c]">
                [{item.number}]
              </span>

              <h3
                className="
                  text-2xl
                  sm:text-3xl
                  lg:text-4xl
                  font-bold
                  uppercase
                  tracking-tight
                  transition-transform
                  duration-300
                  group-hover:translate-x-1.5
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  text-neutral-400
                  text-base
                  lg:text-lg
                  leading-relaxed
                  transition-colors
                  duration-300
                  group-hover:text-neutral-300
                "
              >
                <TypewriterText
                  text={item.text}
                  isInView={isInView}
                  startDelay={0.5 + index * 0.15}
                />
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;