import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function CircuitNetworkBackground() {
  const canvasRef = useRef(null);
  // Guarda la función resize actual para poder llamarla desde fuera
  // sin tener que reiniciar partículas/listeners en cada cambio de ruta
  const resizeRef = useRef(() => {});
  const location = useLocation();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width, height;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        window.innerHeight
      );
    };
    resizeRef.current = resize;

    resize();
    window.addEventListener("resize", resize);

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY + window.scrollY;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY + window.scrollY;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    // DENSIDAD AUMENTADA: Mínimo 130 puntos en celular, y en desktop divide entre 10 para duplicar la cantidad anterior
    const particleCount = Math.max(130, Math.floor(window.innerWidth / 10));

    let particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      size: Math.random() * 2.5 + 1.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Nodos con buen contraste
        ctx.fillStyle = "rgba(40, 40, 40, 0.5)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Conexiones de red
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.32;
            ctx.strokeStyle = `rgba(70, 70, 70, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Conexiones doradas hacia el mouse
        const distToMouse = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (distToMouse < 180) {
          const alpha = (1 - distToMouse / 180) * 0.9;
          ctx.strokeStyle = `rgba(227, 205, 92, ${alpha})`; // #e3cd5c
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []); // Se monta una sola vez: las partículas y la animación nunca se reinician

  // Cambios de ruta: solo se ajusta el tamaño del lienzo (sin reiniciar nada),
  // dando un pequeño margen para que la transición de framer-motion asiente el nuevo alto real
  useEffect(() => {
    const timer = setTimeout(() => resizeRef.current(), 550);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 w-full h-full"
    />
  );
}
