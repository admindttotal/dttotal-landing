import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Server, Wrench, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import visionaryTechImg from "../../assets/images/hero/Visionary technology-bro.svg";
import bugfixingImg from "../../assets/images/hero/Bug fixing-bro.svg";
import websitecreatorImg from "../../assets/images/hero/Website Creator-cuate.svg";

const slidesData = [
  {
    id: 1,
    tagline: "Equipamiento • Redes • Cómputo",
    titleLine1: "Tecnología",
    titleHighlight: "para cada",
    titleLine3: "necesidad.",
    description:
      "Desde una computadora hasta la infraestructura para tu negocio. En DT Total te ayudamos a encontrar la solución adecuada, sin complicaciones.",
    buttonText: "Cotizar equipamiento",
    buttonLink: "#contacto",
    icon: Server,
    image: visionaryTechImg,
  },
  {
    id: 2,
    tagline: "Landing Pages • Sitios Web",
    titleLine1: "Tu negocio",
    titleHighlight: "también",
    titleLine3: "vive en internet.",
    description:
      "Creamos sitios web claros, modernos y profesionales que generan confianza y ayudan a que más personas conozcan tu negocio.",
    buttonText: "Quiero mi página web",
    buttonLink: "#contacto",
    icon: Globe,
    image: websitecreatorImg, 
  },
  {
    id: 3,
    tagline: "Soporte • Mantenimiento",
    titleLine1: "Cuando algo",
    titleHighlight: "falla,",
    titleLine3: "respondemos.",
    description:
      "Instalación, mantenimiento, diagnóstico y acompañamiento para que tu tecnología siga funcionando cuando más la necesitas.",
    buttonText: "Solicitar Soporte Técnico",
    buttonLink: "#contacto",
    icon: Wrench,
    image: bugfixingImg,
  },
];

const slides = [...slidesData, { ...slidesData[0], id: "clone-1" }];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const isAnimating = useRef(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleNext = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    setIsTransitioning(true);
    setCurrentSlide((prev) => {
      const next = prev + 1;
      if (next > slides.length - 1) {
        return slides.length - 1;
      }
      return next;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  // Detectar el scroll de la página para ocultar el indicador permanentemente fuera del Hero
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePrev = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    if (currentSlide === 0) {
      setIsTransitioning(false);
      setCurrentSlide(slides.length - 1);

      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentSlide(slides.length - 2);
        isAnimating.current = false;
      }, 50);
    } else {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleTransitionEnd = () => {
    isAnimating.current = false;

    if (currentSlide === slides.length - 1) {
      setIsTransitioning(false);
      setCurrentSlide(0);
    }
  };

  const goToSlide = (index) => {
    if (isAnimating.current) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (distance > threshold) {
      handleNext();
    } else if (distance < -threshold) {
      handlePrev();
    }
  };

  const handleScrollClick = () => {
    setShowScrollIndicator(false);
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const activeDotIndex = currentSlide % slidesData.length;

  return (
    <section 
      className="relative w-full h-[calc(100vh-5rem)] min-h-[550px] lg:min-h-[620px] flex flex-col justify-between overflow-hidden pt-4 pb-4"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* CONTENEDOR MÁSCARA QUE ABARCA TODO EL ANCHO */}
      <div className="w-full flex-1 flex flex-col justify-center overflow-hidden">
        <div
          onTransitionEnd={handleTransitionEnd}
          className={`flex w-full ${
            isTransitioning
              ? "transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              : "transition-none"
          }`}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => {
            const IconComponent = slide.icon;
            const isFirstSlide = slide.id === 1 || slide.id === "clone-1";
            const isWebSlide = slide.id === 2;
            const isActive = (currentSlide % slidesData.length) === (index % slidesData.length);

            return (
              <div
                key={`${slide.id}-${index}`}
                className="w-full flex-shrink-0 relative flex items-center"
              >
                {/* CONTENEDOR GENERAL LIMITADO AL ANCHO DE LA NAVBAR */}
                <div className="relative z-10 w-full max-w-[1600px] mx-auto px-9 sm:px-12 2xl:px-16 flex items-center justify-between">
                  
                  {/* TEXTOS Y BOTONES */}
                  <div className="w-full lg:max-w-[58%] py-2">
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="flex items-center gap-2.5"
                    >
                      <span
                        className="p-1.5 rounded-lg text-black font-semibold shrink-0 shadow-sm"
                        style={{ backgroundColor: "#e3cd5c" }}
                      >
                        <IconComponent size={14} />
                      </span>
                      <p
                        className="
                          uppercase
                          tracking-[0.25em] sm:tracking-[0.4em]
                          text-[10px] sm:text-xs
                          text-neutral-500
                          font-semibold
                        "
                      >
                        {slide.tagline}
                      </p>
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 25 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="
                        mt-3 sm:mt-4
                        font-black
                        leading-[1.02]
                        tracking-[-0.02em]
                        text-3xl sm:text-5xl md:text-6xl xl:text-[80px] 2xl:text-[95px]
                        text-neutral-900
                      "
                    >
                      {slide.titleLine1}
                      <br />
                      <span style={{ color: "#c9b343" }} className="drop-shadow-sm">
                        {slide.titleHighlight}
                      </span>
                      <br />
                      {slide.titleLine3}
                    </motion.h1>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="mt-3 sm:mt-5 flex flex-col items-start gap-4 sm:gap-5"
                    >
                      <p
                        className="
                          text-xs sm:text-base md:text-lg
                          text-neutral-600
                          leading-relaxed
                          max-w-lg
                          font-normal
                        "
                      >
                        {slide.description}
                      </p>

                      <div>
                        <a
                          href={slide.buttonLink}
                          className="
                            group
                            h-11 sm:h-13
                            px-7 sm:px-9
                            rounded-full
                            bg-neutral-900
                            text-white
                            text-xs sm:text-sm
                            font-medium
                            flex
                            items-center
                            gap-3
                            transition-all
                            duration-300
                            hover:bg-black
                            hover:shadow-xl
                            hover:shadow-neutral-500/20
                            hover:px-10
                            active:scale-95
                            cursor-pointer
                          "
                        >
                          {slide.buttonText}
                          <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1.5"
                            style={{ color: "#e3cd5c" }}
                          />
                        </a>
                      </div>
                    </motion.div>
                  </div>

                  {/* ILUSTRACIÓN DERECHA CONTENIDA DENTRO DEL MARGEN DE LA NAVBAR */}
                  {slide.image && (
                    <motion.div
                      animate={isActive ? { y: [0, -10, 0] } : {}}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className={`
                        hidden lg:block
                        absolute
                        right-9 sm:right-12 2xl:right-16
                        top-1/2 -translate-y-1/2
                        pointer-events-none
                        select-none
                        z-0
                        ${
                          isFirstSlide
                            ? "w-[340px] xl:w-[450px] 2xl:w-[500px] opacity-90"
                            : isWebSlide
                            ? "w-[310px] xl:w-[410px] 2xl:w-[460px] opacity-90"
                            : "w-[380px] xl:w-[490px] 2xl:w-[550px] opacity-90"
                        }
                      `}
                    >
                      <img
                        src={slide.image}
                        alt=""
                        className="w-full h-auto object-contain drop-shadow-xl"
                      />
                    </motion.div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* BARRA INFERIOR ALINEADA CON EL MARGEN */}
      <div className="w-full max-w-[1600px] mx-auto px-9 sm:px-12 2xl:px-16 relative z-20 flex items-center justify-between pb-2">
        <div className="flex items-center gap-3">
          {slidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeDotIndex === index
                  ? "w-8 sm:w-10 shadow-sm"
                  : "w-2.5 sm:w-3 bg-neutral-300 hover:bg-neutral-400"
              }`}
              style={{
                backgroundColor:
                  activeDotIndex === index ? "#e3cd5c" : undefined,
              }}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>

        {/* BOTÓN SCROLL ANIMADO (Desaparece al hacer scroll o dar clic) */}
        <AnimatePresence>
          {showScrollIndicator && (
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              onClick={handleScrollClick}
              className="hidden md:flex flex-col items-center gap-1.5 absolute left-1/2 -translate-x-1/2 group cursor-pointer focus:outline-none"
              aria-label="Desplazarse a la siguiente sección"
            >
              <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-medium transition-colors duration-300 group-hover:text-neutral-800">
                Scroll
              </span>
              <div className="w-[2px] h-7 bg-neutral-200 relative overflow-hidden rounded-full transition-all duration-300 group-hover:w-[3px] group-hover:h-9 group-hover:bg-neutral-300">
                <motion.div
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                  style={{ backgroundColor: "#e3cd5c" }}
                />
              </div>
            </motion.button>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handlePrev}
            className="
              p-3
              rounded-full
              bg-white/60
              backdrop-blur-md
              border
              border-[#e3cd5c]/40
              text-neutral-800
              hover:border-[#e3cd5c]
              hover:bg-[#e3cd5c]/10
              transition-all
              duration-300
              cursor-pointer
              active:scale-95
              shadow-sm
            "
            aria-label="Anterior"
          >
            <ChevronLeft size={18} style={{ color: "#e3cd5c" }} />
          </button>
          <button
            onClick={handleNext}
            className="
              p-3
              rounded-full
              bg-white/60
              backdrop-blur-md
              border
              border-[#e3cd5c]/40
              text-neutral-800
              hover:border-[#e3cd5c]
              hover:bg-[#e3cd5c]/10
              transition-all
              duration-300
              cursor-pointer
              active:scale-95
              shadow-sm
            "
            aria-label="Siguiente"
          >
            <ChevronRight size={18} style={{ color: "#e3cd5c" }} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;