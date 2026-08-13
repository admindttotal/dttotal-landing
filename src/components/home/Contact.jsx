import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MessageSquare, MapPin, Clock } from "lucide-react";

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  const whatsappNumber = "524734594981";
  const whatsappMessage = encodeURIComponent(
    "Hola, quiero contarte un proceso que me gustaría automatizar."
  );

  // Configuración de animaciones para el contenedor y los elementos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section ref={ref} id="contacto" className="relative py-30 lg:py-36 text-black overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-14"
      >
        {/* HEADER CON INDICADOR Y ETIQUETA */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-[#e3cd5c] shadow-[0_0_10px_#e3cd5c]" />
          <p
            className="
              uppercase
              tracking-[0.45em]
              text-xs
              text-neutral-500
              font-semibold
            "
          >
            Contacto Directo
          </p>
        </motion.div>

        {/* H2 TITULAR PRINCIPAL */}
        <motion.h2
          variants={itemVariants}
          className="
            text-3xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-black
            uppercase
            leading-tight
            sm:leading-[1.08]
            tracking-tight
            max-w-4xl
            text-neutral-950
          "
        >
          Hablemos
          <br />
          de tu
          <br />
          <span className="text-neutral-400">próximo proyecto.</span>
        </motion.h2>

        {/* CALL TO ACTIONS CON EFECTO 3D / LIQUID GLASS / BRICANDO */}
        <motion.div
          variants={itemVariants}
          className="
            mt-10
            lg:mt-14
            flex
            flex-col
            sm:flex-row
            gap-6
          "
        >
          {/* BOTÓN WHATSAPP (Efecto Brincando / Bouncing) */}
          <motion.a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="
              group
              relative
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-full
              bg-black
              text-white
              px-8
              py-4
              uppercase
              tracking-widest
              text-xs
              sm:text-sm
              font-bold
              shadow-[0_10px_25px_rgba(0,0,0,0.3)]
              hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)]
              transition-all
              duration-300
              active:scale-95
              cursor-pointer
            "
          >
            <MessageSquare size={18} />
            Escribir por WhatsApp
          </motion.a>

          {/* BOTÓN EMAIL (Efecto Liquid Glass / Vidrio 3D) */}
          <a
            href="mailto:contacto.dttotal@gmail.com"
            className="
              group
              relative
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-full
              bg-white/40
              backdrop-blur-xl
              border
              border-white/60
              text-neutral-950
              px-8
              py-4
              uppercase
              tracking-widest
              text-xs
              sm:text-sm
              font-bold
              shadow-[0_8px_32px_0_rgba(31,38,135,0.12)]
              hover:bg-white/60
              hover:border-white
              hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.2)]
              transition-all
              duration-300
              active:scale-95
              cursor-pointer
            "
          >
            <Mail size={18} />
            Enviar Correo
          </a>
        </motion.div>

        {/* FOOTER INFO GRID */}
        <motion.div
          variants={itemVariants}
          className="
            mt-20
            lg:mt-24
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-4
            gap-8
            border-t
            border-black/15
            pt-10
          "
        >
          <InfoItem 
            icon={Mail} 
            title="Correo" 
            value="contacto.dttotal@gmail.com" 
            href="mailto:contacto.dttotal@gmail.com" 
          />
          <InfoItem 
            icon={MessageSquare} 
            title="WhatsApp" 
            value="+52 (473) 459 4981" 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} 
          />
          <InfoItem 
            icon={MapPin} 
            title="Ubicación" 
            value="Guanajuato, México" 
            subtitle="Atención remota y nacional." 
          />
          <InfoItem 
            icon={Clock} 
            title="Horario" 
            value="Lun - Vie: 9:00 - 18:00 hrs" 
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Sub-componente para mantener limpio el grid de información
function InfoItem({ icon: Icon, title, value, href, subtitle }) {
  return (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-widest text-neutral-400 font-bold flex items-center gap-2">
        <Icon size={14} className="text-neutral-600" /> {title}
      </p>
      {href ? (
        <a href={href} className="block text-base lg:text-lg font-medium text-neutral-900 hover:text-black hover:underline">
          {value}
        </a>
      ) : (
        <p className="text-base lg:text-lg font-medium text-neutral-900">
          {value} {subtitle && <br />}
          {subtitle && <span className="text-sm text-neutral-500 font-normal">{subtitle}</span>}
        </p>
      )}
    </div>
  );
}

export default Contact;