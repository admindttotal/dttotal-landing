function Services() {
  const services = [
    {
      number: "01",
      title: "Herramientas a Medida",
      text: "Cotizadores, control de inventario básico y automatizaciones simples para tareas que hoy haces a mano. Sin sistemas gigantes, sin curva de aprendizaje.",
    },
    {
      number: "02",
      title: "Presencia Web",
      text: "Dominio, correo corporativo y una landing page simple y profesional para que tu negocio exista en internet, sin complicaciones ni procesos eternos.",
    },
    {
      number: "03",
      title: "Equipo y Soporte",
      text: "Si además necesitas equipo o una mano con tu tecnología del día a día, también te ayudamos. Con la misma honestidad que ofrecemos todo lo demás.",
    },
  ];

  return (
    <section
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
        <div className="flex items-center gap-3 mb-4">
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
            Lo que hacemos
          </p>
        </div>

        <h2
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
          Un problema simple.
          <br />
          <span className="text-neutral-500">Una solución simple.</span>
        </h2>

        <div className="mt-16 lg:mt-24 border-t border-white/15">
          {services.map((item) => (
            <div
              key={item.number}
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
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;