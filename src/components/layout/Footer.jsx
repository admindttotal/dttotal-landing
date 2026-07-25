import { ArrowUp } from "lucide-react";
import logo from "../../assets/images/logo.png";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="
        relative
        bg-black
        text-white
        py-20
        lg:py-28
        overflow-hidden
        border-t
        border-white/10
      "
    >
      {/* BACKGROUND GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-10
          bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)]
          bg-[size:4rem_4rem]
          pointer-events-none
        "
      />

      <div
        className="
          relative
          max-w-[1600px]
          mx-auto
          px-6
          lg:px-14
        "
      >
        {/* TOP CONTENT */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            justify-between
            gap-12
            lg:gap-20
          "
        >
          {/* BRAND */}
          <div className="max-w-md">
            <div className="flex items-center gap-4">
              {/* LOGO */}
              <div
                className="
                  w-14
                  h-14
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  shrink-0
                "
              >
                <img
                  src={logo}
                  alt="DT Total Logo"
                  width="56"
                  height="56"
                  className="
                    w-full
                    h-full
                    object-contain
                  "
                />
              </div>

              <div>
                <h2
                  className="
                    text-2xl
                    font-black
                    tracking-[0.25em]
                  "
                >
                  DT TOTAL
                </h2>

                <p
                  className="
                    text-xs
                    text-[#e3cd5c]
                    tracking-widest
                    uppercase
                    font-semibold
                  "
                >
                  SOLUCIONES TECNOLÓGICAS
                </p>
              </div>
            </div>

            <p
              className="
                mt-6
                text-neutral-400
                text-base
                lg:text-lg
                leading-relaxed
              "
            >
              Tecnología, soporte, desarrollo web y herramientas digitales para personas, negocios y empresas.
            </p>
          </div>

          {/* LINKS */}
          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-2
              gap-12
              sm:gap-20
            "
          >
            <div>
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.4em]
                  text-neutral-500
                  font-semibold
                  mb-6
                  flex
                  items-center
                  gap-2
                "
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#e3cd5c]" />
                Navegación
              </p>

              <div
                className="
                  flex
                  flex-col
                  gap-3.5
                  text-sm
                  text-neutral-300
                "
              >
                <a
                  href="#servicios"
                  className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                >
                  Servicios
                </a>
                <a
                  href="#software"
                  className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                >
                  Software
                </a>
                <a
                  href="#nosotros"
                  className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                >
                  Nosotros
                </a>
                <a
                  href="#contacto"
                  className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                >
                  Contacto
                </a>
              </div>
            </div>

            <div>
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.4em]
                  text-neutral-500
                  font-semibold
                  mb-6
                "
              >
                Servicios
              </p>

              <div
                className="
                  flex
                  flex-col
                  gap-3.5
                  text-sm
                  text-neutral-400
                "
              >
                <span>Equipamiento Tecnológico</span>
                <span>Soporte Técnico</span>
                <span>Desarrollo Web</span>
                <span>Herramientas Digitales</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            mt-16
            lg:mt-24
            pt-8
            border-t
            border-white/10
            flex
            flex-col
            sm:flex-row
            justify-between
            items-center
            gap-4
            text-xs
            sm:text-sm
            text-neutral-500
          "
        >
          <span>
            © {new Date().getFullYear()} DT TOTAL. Todos los derechos reservados.
          </span>

          <div className="flex items-center gap-6">
            <span className="tracking-wide hidden md:inline">
              Tecnología • Soporte • Desarrollo Web
            </span>
            
            <button
              onClick={scrollToTop}
              className="
                group
                flex
                items-center
                gap-2
                py-2
                px-4
                rounded-full
                border
                border-white/10
                text-neutral-400
                hover:text-white
                hover:border-white/30
                hover:bg-neutral-900
                transition-all
                duration-200
                cursor-pointer
                active:scale-95
              "
            >
              <span>Ir arriba</span>
              <ArrowUp 
                size={14} 
                className="transition-transform duration-300 group-hover:-translate-y-0.5" 
                style={{ color: "#e3cd5c" }}
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;