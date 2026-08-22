// api/template-url.js
//
// Esta función vive en el servidor (Vercel la detecta sola por estar en /api,
// al nivel de package.json, no dentro de /src). Nunca se manda al navegador.
//
// El mapa id -> url completo SOLO existe aquí. El frontend nunca lo ve entero;
// solo recibe la url de la plantilla puntual que el usuario pidió ver.
const urlMap = {
  // ---------- INVITACIONES (catálogo público) ----------
  "baby-shower":      "/plantillas/baby-shower.min.html",
  "boda-decoart":     "/plantillas/boda-decoart.min.html",
  "boda-jardin":      "/plantillas/boda-jardin.min.html",
  "cumple-dino":      "/plantillas/cumple-dino.min.html",
  "gala-corporativa": "/plantillas/gala-corporativa.min.html",
  "halloween":        "/plantillas/halloween.min.html",
  "taller-asado":     "/plantillas/taller-asado.min.html",

  // ---------- LANDINGS ----------
  "landing-dttotal": "https://dttotal.com",
};

export default function handler(req, res) {
  // Solo aceptamos GET — cualquier otro método se rechaza
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "Falta el parámetro id" });
  }

  const url = urlMap[id];

  if (!url) {
    // No revelamos si el id "existe pero está oculto" vs "no existe" —
    // misma respuesta para ambos casos, así no regalamos información
    return res.status(404).json({ error: "Plantilla no encontrada" });
  }

  // Evita que la respuesta quede cacheada de forma agresiva en el CDN de Vercel
  res.setHeader("Cache-Control", "no-store");
  return res.status(200).json({ url });
}
