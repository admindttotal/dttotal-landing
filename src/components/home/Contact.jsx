import { ArrowUpRight, Mail, MessageSquare, MapPin, Clock } from "lucide-react";

function Contact() {
  const whatsappNumber = "524734594981";
  const whatsappMessage = encodeURIComponent(
    "Hola, quiero contarte un proceso que me gustaría automatizar."
  );

  return (
    <section
      id="contacto"
      className="
        relative
        py-30
        lg:py-36
        text-black
        overflow-hidden
      "
    >

      <div
        className="
          relative
          z-10
          max-w-[1600px]
          mx-auto
          px-6
          lg:px-14
        "
      >
        {/* HEADER CON INDICADOR Y ETIQUETA */}
        <div className="flex items-center gap-3 mb-6">
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
        </div>

        {/* H2 TITULAR PRINCIPAL */}
        <h2
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
        </h2>

        {/* CALL TO ACTIONS */}
        <div
          className="
            mt-10
            lg:mt-14
            flex
            flex-col
            sm:flex-row
            gap-4
            sm:gap-6
          "
        >
          {/* BOTÓN WHATSAPP */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
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
              font-semibold
              transition-all
              duration-300
              hover:bg-neutral-800
              hover:shadow-lg
              active:scale-95
              cursor-pointer
            "
          >
            <MessageSquare size={18} />
            Escribir por WhatsApp
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          {/* BOTÓN EMAIL */}
          <a
            href="mailto:contacto@dttotal.com"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-black
              px-8
              py-4
              uppercase
              tracking-widest
              text-xs
              sm:text-sm
              font-semibold
              transition-all
              duration-300
              hover:bg-black
              hover:text-white
              hover:shadow-lg
              active:scale-95
              cursor-pointer
            "
          >
            <Mail size={18} />
            Enviar Correo
          </a>
        </div>

        {/* FOOTER INFO GRID */}
        <div
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
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-neutral-400 font-bold flex items-center gap-2">
              <Mail size={14} className="text-neutral-600" /> Correo
            </p>
            <a
              href="mailto:contacto@dttotal.com"
              className="block text-base lg:text-lg font-medium text-neutral-900 hover:text-black hover:underline"
            >
              contacto@dttotal.com
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-neutral-400 font-bold flex items-center gap-2">
              <MessageSquare size={14} className="text-neutral-600" /> WhatsApp
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-base lg:text-lg font-medium text-neutral-900 hover:text-black hover:underline"
            >
              +52 (473) 459 4981
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-neutral-400 font-bold flex items-center gap-2">
              <MapPin size={14} className="text-neutral-600" /> Ubicación
            </p>
            <p className="text-base lg:text-lg font-medium text-neutral-900">
              Guanajuato, México <br /><span className="text-sm text-neutral-500 font-normal">Atención remota y nacional.</span>
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-neutral-400 font-bold flex items-center gap-2">
              <Clock size={14} className="text-neutral-600" /> Horario
            </p>
            <p className="text-base lg:text-lg font-medium text-neutral-900">
              Lun - Vie: 9:00 - 18:00 hrs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;