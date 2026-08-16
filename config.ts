import type { Config } from "./tipos";
// Configuración generada con el wizard (/configurar).
export const CONFIG: Config = {
  marca: {
    negocio: "Mentes Magnéticas by Hilda Pereira",
    descripcion: "Ebooks y mentoría para vencer el autosabotaje y terminar lo que empiezas.",
    logo: "/logo.png",
    primario: "#b51b11",
    secundario: "#c9a227",
    fondo: "claro",
    whatsappPrincipal: "573004711277",
    ciudad: "Colombia",
    enlace: "instagram.com/hildapereira.mentora",
  },
  vendedores: [
    { slug: "tienda", nombre: "Mentes Magnéticas by Hilda Pereira", whatsapp: "573004711277" },
  ],
  categorias: ["Ebook digital", "Mentorías", "Cursos digitales"],
  mensajePlantilla:
    "{saludo}vi tu catálogo y me interesa {producto}. ¿Me pueden dar más información y precio?",
};
