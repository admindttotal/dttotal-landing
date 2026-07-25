import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Server, CodeXml, Wrench, Globe } from "lucide-react";

import visionaryTechImg from "../../assets/images/hero/Visionary technology-bro.svg";
import bugfixingImg from "../../assets/images/hero/Bug fixing-bro.svg";
import digitalTransImg from "../../assets/images/hero/Digital transformation-rafiki.svg";
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
  {
    id: 3,
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
    id: 4,
    tagline: "Herramientas • Automatización",
    titleLine1: "Software",
    titleHighlight: "creado para",
    titleLine3: "trabajar mejor.",
    description:
      "Creamos aplicaciones y herramientas que simplifican tareas diarias, ayudan a organizar información y ahorran tiempo en el trabajo.",
    buttonText: "Ver catálogo de software",
    buttonLink: "#software",
    icon: CodeXml,
    image: digitalTransImg,
  },
];

const slides = [...slidesData, { ...slidesData[0], id: "clone-1" }];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const isAnimating = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(timer);
  }, []);

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

  const activeDotIndex = currentSlide % slidesData.length;

  return (
    <section className="relative overflow-hidden pt-20 sm:pt-24 pb-6 sm:pb-8">
      <div
        className="
          relative
          z-10
          max-w-[1600px]
          mx-auto
          w-full
          px-5 sm:px-8 lg:px-14
        "
      >
        {/* CONTENEDOR MÁSCARA */}
        <div className="overflow-hidden w-full">
          {/* RIEL DESLIZANTE */}
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
              const isWebSlide = slide.id === 3; // Identifica el slide de web

              return (
                <div
                  key={`${slide.id}-${index}`}
                  className="w-full flex-shrink-0 relative"
                >
                  {/* ILUSTRACIÓN DECORATIVA */}
                  {slide.image && (
                    <div
                      className={`
                        hidden sm:block
                        absolute
                        right-0 xl:right-[1%]
                        top-1/2 -translate-y-1/2
                        pointer-events-none
                        select-none
                        z-0
                        ${
                          isFirstSlide
                            ? "w-[380px] xl:w-[520px] 2xl:w-[600px] opacity-20 xl:opacity-100 p-4"
                            : isWebSlide
                            ? "w-[350px] xl:w-[480px] 2xl:w-[540px] opacity-20 xl:opacity-100"
                            : "w-[450px] xl:w-[620px] 2xl:w-[720px] opacity-20 xl:opacity-100"
                        }
                      `}
                    >
                      <img
                        src={slide.image}
                        alt=""
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  )}

                  {/* CONTENIDO PRINCIPAL */}
                  <div className="relative z-10 max-w-full xl:max-w-[58%]">
                    {/* TAGLINE */}
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <span
                        className="p-1.5 rounded-md text-black font-semibold shrink-0"
                        style={{ backgroundColor: "#e3cd5c" }}
                      >
                        <IconComponent size={14} className="sm:w-[15px] sm:h-[15px]" />
                      </span>
                      <p
                        className="
                          uppercase
                          tracking-[0.2em] sm:tracking-[0.35em] xl:tracking-[0.45em]
                          text-[10px] sm:text-xs
                          text-neutral-500
                          font-medium
                          line-clamp-1
                        "
                      >
                        {slide.tagline}
                      </p>
                    </div>

                    {/* TÍTULO PRINCIPAL */}
                    <h1
                      className="
                        mt-3 sm:mt-4
                        font-black
                        leading-[1.05]
                        tracking-[-0.02em]
                        text-4xl sm:text-6xl md:text-7xl xl:text-[90px] 2xl:text-[110px]
                      "
                    >
                      {slide.titleLine1}
                      <br />
                      <span style={{ color: "#e3cd5c" }}>
                        {slide.titleHighlight}
                      </span>
                      <br />
                      {slide.titleLine3}
                    </h1>

                    {/* DESCRIPCIÓN Y BOTÓN */}
                    <div className="mt-4 sm:mt-6 flex flex-col items-start gap-5">
                      <p
                        className="
                          text-sm sm:text-base md:text-lg xl:text-xl
                          text-neutral-600
                          leading-relaxed
                          max-w-md sm:max-w-lg
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
                            px-6 sm:px-8
                            rounded-full
                            bg-black
                            text-white
                            text-xs sm:text-sm
                            font-medium
                            flex
                            items-center
                            gap-3
                            transition-all
                            duration-300
                            hover:px-9
                            active:scale-95
                            cursor-pointer
                          "
                        >
                          {slide.buttonText}
                          <ArrowRight
                            size={16}
                            className="sm:w-[18px] sm:h-[18px] transition-transform duration-300 group-hover:translate-x-1"
                            style={{ color: "#e3cd5c" }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* NAVEGACIÓN Y CONTROLES DEL SLIDER */}
        <div className="mt-6 sm:mt-8 flex items-center justify-between relative z-20">
          {/* Indicadores de diapositiva */}
          <div className="flex items-center gap-2 sm:gap-3">
            {slidesData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeDotIndex === index
                    ? "w-8 sm:w-10"
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

          {/* Controles de flechas */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="
                p-2.5 sm:p-3
                rounded-full
                border
                border-neutral-200
                hover:border-black
                hover:bg-black
                hover:text-white
                transition-all
                duration-200
                cursor-pointer
                active:scale-95
              "
              aria-label="Anterior"
            >
              <ChevronLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>
            <button
              onClick={handleNext}
              className="
                p-2.5 sm:p-3
                rounded-full
                border
                border-neutral-200
                hover:border-black
                hover:bg-black
                hover:text-white
                transition-all
                duration-200
                cursor-pointer
                active:scale-95
              "
              aria-label="Siguiente"
            >
              <ChevronRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;