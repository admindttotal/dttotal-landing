import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Ruta corregida para App.jsx (un solo nivel hacia arriba desde /src)
import logo from "./assets/images/logo.png";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Manifesto from "./components/home/Manifesto";
import Services from "./components/home/Services";
import Counter from "./components/home/Counter";
import Contact from "./components/home/Contact";
import Footer from "./components/layout/Footer";

import Catalog from "./pages/Catalog";
import CircuitNetworkBackground from "./components/common/CircuitNetworkBackground";


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
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
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
        transition-colors
        duration-300
        cursor-pointer
        flex
        items-center
        justify-center
        group
      "
    >
      <ArrowUp size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
    </motion.button>
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Manifesto />
      <Counter />
      <Services />
      <Contact />
    </motion.div>
  );
}

function App() {
  const location = useLocation();

  return (
    <div className="relative bg-white min-h-screen text-neutral-900 flex flex-col overflow-x-hidden">
      {/* FONDO ANIMADO: Lluvia de ceros y unos sutil estilo gota */}
      <CircuitNetworkBackground />

      {/* LOGO BACKGROUND DECORATIVO GLOBAL (FIXED) con efecto flotante/aparición */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="
          fixed
          -right-0 xl:-right-10
          top-28 sm:top-36 xl:top-28
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
      </motion.div>

      <ScrollToTop />

      <Navbar />

      <main className="relative z-10 flex-1 pt-24">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />

      {/* BOTÓN FLOTANTE PARA REGRESAR ARRIBA */}
      <ScrollToTopButton />
    </div>
  );
}

export default App;