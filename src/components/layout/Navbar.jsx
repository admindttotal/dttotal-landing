import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Función para realizar un scroll suave dado un ID
  const scrollToElement = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Función para navegar suavemente a las secciones desde cualquier ruta
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: targetId } });
    } else {
      scrollToElement(targetId);
    }
  };

  const handleLogoClick = () => {
    closeMenu();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-[1600px] mx-auto">
        <div
          className="
            mx-4
            mt-4
            rounded-2xl
            border
            border-neutral-200/80
            bg-white/80
            backdrop-blur-2xl
            shadow-sm
            relative
            transition-all
            duration-300
          "
        >
          <div
            className="
              h-20
              px-5
              sm:px-6
              2xl:px-10
              flex
              items-center
              justify-between
            "
          >
            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center gap-3 sm:gap-4 group cursor-pointer shrink-0"
              onClick={handleLogoClick}
            >
              <div
                className="
                  w-10
                  h-10
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  p-1
                  transition-colors
                  duration-300
                  group-hover:bg-neutral-100
                "
              >
                <img
                  src={logo}
                  alt="DT Total"
                  className="
                    w-full
                    h-full
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                />
              </div>

              <div>
                <h1
                  className="
                    font-bold
                    tracking-[0.18em]
                    text-sm
                    leading-none
                    transition-colors
                    duration-300
                    group-hover:text-black
                  "
                >
                  DT TOTAL
                </h1>

                <p
                  className="
                    text-[10px]
                    text-neutral-500
                    tracking-widest
                    mt-1
                    font-medium
                  "
                >
                  SOLUCIONES TECNOLÓGICAS
                </p>
              </div>
            </Link>

            {/* MENU DESKTOP (Mostrado únicamente a partir de xl: 1280px) */}
            <nav
              className="
                hidden
                xl:flex
                items-center
                gap-6
                2xl:gap-10
                uppercase
                text-xs
                2xl:text-sm
                tracking-[0.18em]
                2xl:tracking-[0.2em]
                font-medium
              "
            >
              {[
                { name: "Nosotros", id: "nosotros" },
                { name: "Software", id: "software" },
                { name: "Servicios", id: "servicios" },
                { name: "Contacto", id: "contacto" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="
                    relative
                    text-neutral-600
                    hover:text-black
                    transition-colors
                    duration-200
                    py-1
                    after:content-['']
                    after:absolute
                    after:bottom-0
                    after:left-0
                    after:w-0
                    after:h-[2px]
                    after:bg-[#e3cd5c]
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                  "
                >
                  {item.name}
                </a>
              ))}

              {/* OPCIÓN CATÁLOGO CON BADGE */}
              <div className="relative flex items-center group/catalog mr-2">
                <Link
                  to="/catalog"
                  onClick={closeMenu}
                  className="
                    relative
                    text-neutral-600
                    hover:text-black
                    transition-colors
                    duration-200
                    py-1
                    after:content-['']
                    after:absolute
                    after:bottom-0
                    after:left-0
                    after:w-0
                    after:h-[2px]
                    after:bg-[#e3cd5c]
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                  "
                >
                  Catálogo
                </Link>

                <span
                  className="
                    absolute
                    -top-3.5
                    -right-7
                    text-[8px]
                    font-bold
                    tracking-wider
                    uppercase
                    px-1.5
                    py-0.5
                    rounded-full
                    bg-[#e3cd5c]/20
                    text-neutral-800
                    border
                    border-[#e3cd5c]/50
                    pointer-events-none
                    whitespace-nowrap
                    select-none
                  "
                >
                  Próximamente
                </span>
              </div>
            </nav>

            {/* CTA DESKTOP */}
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, "contacto")}
              className="
                hidden
                xl:flex
                items-center
                gap-2.5
                bg-black
                text-white
                rounded-full
                px-5
                2xl:px-6
                py-2.5
                text-xs
                2xl:text-sm
                uppercase
                tracking-widest
                font-medium
                transition-all
                duration-300
                hover:shadow-lg
                hover:shadow-black/10
                active:scale-95
                cursor-pointer
                group
                shrink-0
              "
            >
              <span>Conocer más</span>
              <ArrowUpRight
                size={16}
                style={{ color: "#e3cd5c" }}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            {/* BOTÓN MENÚ MÓVIL (Activo hasta 1279px, incluyendo iPad Pro) */}
            <button
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              className="
                xl:hidden
                p-2
                rounded-xl
                hover:bg-neutral-100
                transition-colors
                cursor-pointer
              "
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* MENÚ MÓVIL DESPLEGABLE */}
          {isOpen && (
            <div
              className="
                xl:hidden
                border-t
                border-neutral-200/80
                p-6
                flex
                flex-col
                gap-6
                bg-white/95
                backdrop-blur-2xl
                rounded-b-2xl
              "
            >
              <nav className="flex flex-col gap-3 text-sm font-semibold tracking-widest uppercase">
                {[
                  { name: "Nosotros", id: "nosotros" },
                  { name: "Servicios", id: "servicios" },
                  { name: "Software", id: "software" },
                  { name: "Contacto", id: "contacto" },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="py-2 text-neutral-700 hover:text-black transition-colors"
                  >
                    {item.name}
                  </a>
                ))}

                <div className="py-2 flex items-center justify-between">
                  <Link
                    to="/catalog"
                    onClick={closeMenu}
                    className="text-neutral-700 hover:text-black transition-colors"
                  >
                    Catálogo
                  </Link>

                  <span
                    className="
                      text-[9px]
                      font-bold
                      tracking-wider
                      uppercase
                      px-2
                      py-0.5
                      rounded-full
                      bg-[#e3cd5c]/20
                      text-neutral-800
                      border
                      border-[#e3cd5c]/50
                    "
                  >
                    Próximamente
                  </span>
                </div>
              </nav>

              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, "contacto")}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2.5
                  w-full
                  bg-black
                  text-white
                  rounded-xl
                  py-3.5
                  text-xs
                  uppercase
                  tracking-widest
                  font-medium
                  active:scale-95
                  transition-all
                "
              >
                Conocer más
                <ArrowUpRight size={16} style={{ color: "#e3cd5c" }} />
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;