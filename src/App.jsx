import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

// Ruta corregida para App.jsx (un solo nivel hacia arriba desde /src)
import logo from "./assets/images/logo.png";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Manifesto from "./components/home/Manifesto";
import Services from "./components/home/Services";
import Products from "./components/home/Products";
import Contact from "./components/home/Contact";
import Footer from "./components/layout/Footer";

import Catalog from "./pages/Catalog";

// Helper para Scroll al cambiar de ruta
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

// BOTÓN FLOTANTE "VOLVER ARRIBA"
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className="
        fixed
        bottom-6
        right-6
        z-50
        p-3.5
        bg-black
        text-white
        border
        border-white/20
        rounded-full
        shadow-2xl
        hover:bg-[#e3cd5c]
        hover:text-black
        hover:border-[#e3cd5c]
        transition-all
        duration-300
        cursor-pointer
        flex
        items-center
        justify-center
        group
      "
    >
      <ArrowUp size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
}

// COMPONENTE HOME
function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Manifesto />
      <Services />
      <Products />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="relative bg-white min-h-screen text-neutral-900 flex flex-col overflow-x-hidden">
      {/* GLOBAL GRID BACKGROUND (SCROLLEABLE) */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          z-0
          bg-[linear-gradient(#00000008_1px,transparent_1px),linear-gradient(90deg,#00000008_1px,transparent_1px)]
          bg-[size:70px_70px]
        "
      />

      {/* LOGO BACKGROUND DECORATIVO GLOBAL (FIXED) */}
      <div
        className="
          fixed
          -right-0 xl:-right-10
          top-28 sm:top-36 xl:top-28
          opacity-[0.1] xl:opacity-[0.1]
          pointer-events-none
          select-none
          z-0
        "
      >
        <img
          src={logo}
          alt=""
          className="
            w-[320px] sm:w-[480px] xl:w-[580px]
            object-contain
            grayscale
          "
        />
      </div>

      <ScrollToTop />

      <Navbar />

      <main className="relative z-10 flex-1 pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </main>

      <Footer />

      {/* BOTÓN FLOTANTE PARA REGRESAR ARRIBA */}
      <ScrollToTopButton />
    </div>
  );
}

export default App;