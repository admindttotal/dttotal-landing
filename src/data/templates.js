// src/data/templates.js
//
// ⚠️ VERSIÓN TEMPORAL PARA PROBAR CON "npm run dev" ⚠️
// Esta trae la url directa, como tu versión original — funciona sin
// necesitar el Vercel CLI ni /api. Úsala SOLO mientras pruebas el
// estilo/visual del catálogo en local.
//
// Cuando quieras probar la API de verdad (o antes de subir a producción),
// cambia a la versión sin "url" + api/template-url.js que ya armamos,
// y usa "vercel dev" en vez de "npm run dev".

export const templates = [
  // ---------- INVITACIONES ----------
  // Asegúrate de tener estos archivos copiados en public/plantillas/
  { id: "baby-shower",       name: "Baby Shower",   color: "#E85D8A", category: "invitacion", url: "/plantillas/baby-shower.min.html" },
  { id: "boda-decoart",      name: "Boda Decoart",  color: "#C9A227", category: "invitacion", url: "/plantillas/boda-decoart.min.html" },
  { id: "boda-jardin",       name: "Boda Jardín",   color: "#6B7F5C", category: "invitacion", url: "/plantillas/boda-jardin.min.html" },
  { id: "boda-vaquera",      name: "Boda Vaquera",  color: "#C8963E", category: "invitacion", dual: true, url: "https://boda-vaquera-preview.vercel.app",
},
  { id: "cumple-dino",       name: "Para Peques",   color: "#F2694A", category: "invitacion", url: "/plantillas/cumple-dino.min.html" },
  { id: "gala-corporativa",  name: "Corporativa",   color: "#1E3A5F", category: "invitacion", url: "/plantillas/gala-corporativa.min.html" },
  { id: "halloween",         name: "Halloween",     color: "#FF7518", category: "invitacion", url: "/plantillas/halloween.min.html" },
  { id: "taller-asado",      name: "Taller Asado",  color: "#E8452C", category: "invitacion", url: "/plantillas/taller-asado.min.html" },
  // agrega el resto de tus plantillas aquí con el mismo patrón

  // ---------- LANDINGS ----------
  { id: "landing-dttotal", name: "DT Total", color: "#e3cd5c", category: "landing", url: "https://dttotal.com" },
  { id: "landing-cotizamex", name: "CotizaMex", color: "#1E3A5F", category: "landing", url: "https://cotizamex.dttotal.com/"},
  
];
