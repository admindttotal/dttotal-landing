import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

function CounterItem({
  to,
  label,
  prefix = "",
  suffix = "",
}) {
  const nodeRef = useRef(null);
  const [value, setValue] = useState(0);

  const isInView = useInView(nodeRef, {
    once: true,
    margin: "-120px",
  });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, to, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],

      onUpdate: (latest) => {
        setValue(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, to]);

  return (
    <div
      ref={nodeRef}
      className="
        group
        relative
        flex
        flex-col
        items-center
        justify-center
        px-6
        py-10
        sm:px-10
        sm:py-12
        border-b
        md:border-b-0
        md:border-r
        border-neutral-200
        last:border-0
      "
    >
      {/* Número */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          flex
          items-baseline
          justify-center
          text-neutral-950
        "
      >
        <span
          className="
            text-5xl
            sm:text-6xl
            md:text-7xl
            font-black
            tracking-[-0.06em]
            leading-none
            tabular-nums
          "
        >
          {prefix}
          {value}
          {suffix}
        </span>
      </motion.div>

      {/* Label */}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.25,
        }}
        className="
          mt-4
          text-neutral-500
          uppercase
          tracking-[0.2em]
          text-[10px]
          sm:text-xs
          font-bold
          text-center
        "
      >
        {label}
      </motion.span>

      {/* Pequeño detalle dorado al hacer hover */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          w-0
          group-hover:w-12
          h-[2px]
          bg-[#e3cd5c]
          transition-all
          duration-500
          ease-out
        "
      />
    </div>
  );
}

export default function Counter() {
  return (
    <section
      id="counter"
      className="
        relative
        py-24
        lg:py-32
        overflow-hidden
      "
    >
      <div
        className="
          max-w-[1200px]
          mx-auto
          px-6
          sm:px-8
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="text-center mb-14 sm:mb-16">

          <motion.span
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              inline-flex
              items-center
              px-3
              py-1
              mb-4
              text-[10px]
              font-bold
              tracking-[0.18em]
              uppercase
              bg-[#e3cd5c]/15
              text-[#9f8d32]
              rounded-full
            "
          >
            Confianza en cifras
          </motion.span>

          <motion.h2
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-black
              uppercase
              tracking-[-0.03em]
              leading-[0.95]
              text-neutral-950
            "
          >
            Proyectos que dan
            <br />
            <span className="text-neutral-400">
              resultado.
            </span>
          </motion.h2>
        </div>

        {/* =====================================================
            COUNTERS
        ====================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            border-y
            border-neutral-200
          "
        >
          <CounterItem
            to={3}
            label="Proyectos"
          />

          <CounterItem
            to={7}
            label="Clientes"
          />

          <CounterItem
            to={130}
            label="Marcas disponibles"
            suffix="+"
          />
        </motion.div>

        {/* =====================================================
            DESCRIPTION
        ====================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
          className="
            mt-14
            sm:mt-16
            text-center
          "
        >
          <p
            className="
              max-w-xl
              mx-auto
              text-sm
              sm:text-base
              text-neutral-500
              leading-relaxed
            "
          >
            Desde una invitación digital hasta
            soluciones corporativas para empresas.
            <span className="text-neutral-700 font-medium">
              {" "}
              Nos enfocamos en la calidad,
              no en la cantidad.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}