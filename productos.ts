import type { Producto } from "./tipos";

/**
 * ================================================================
 *  TUS PRODUCTOS O SERVICIOS.
 *  Cada ficha sigue la "anatomía del que vende" (ver CLAUDE.md).
 * ================================================================
 */
export const PRODUCTOS: Producto[] = [
  {
    slug: "rompe-autosabotaje",
    nombre: "Rompe con el autosabotaje",
    categoria: "Ebook digital",
    paraQuien:
      "Para quien tiene proyectos, sueños o metas que empiezan con toda la ilusión, pero terminan postergados, abandonados o a medias.",
    beneficio:
      "Identificas el patrón de autosabotaje que te frena y aprendes a superarlo con pasos prácticos para terminar lo que empiezas.",
    caracteristicas: ["Guía digital en PDF", "6 capítulos"],
    precio: "$9.97 USD",
    precioAntes: "$47 USD",
    facilidades: "Pago con tarjeta de crédito o débito a través de Hotmart.",
    bono: "Incluye guía de afirmaciones diarias + rutina diaria (mañana y noche).",
    garantia: "7 días de garantía.",
    imagen: "/productos/rompe-autosabotaje.jpg",
    destacado: true,
  },
];

/** Productos de una categoría, con el destacado primero. */
export function productosPorCategoria(categoria: string): Producto[] {
  return PRODUCTOS.filter((p) => p.categoria === categoria).sort(
    (a, b) => Number(b.destacado ?? false) - Number(a.destacado ?? false)
  );
}

/** Busca un producto por su slug (para la ficha individual). */
export function productoPorSlug(slug: string): Producto | undefined {
  return PRODUCTOS.find((p) => p.slug === slug);
}
