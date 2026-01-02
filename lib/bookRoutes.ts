import type { BookKey } from "@/lib/buyLinks";

export function bookKeyToSlug(bookKey: BookKey): string {
  switch (bookKey) {
    case "nasGarrasDoTigre":
      return "nas-garras-do-tigre";
    case "aFomeDoTigre":
      return "a-fome-do-tigre";
    case "oTigreDeVidro":
      return "o-tigre-de-vidro";
    case "efeitoTigre":
    default:
      return "efeito-tigre";
  }
}

export function sampleHrefForBook(bookKey: BookKey): string {
  return `/samples/${bookKeyToSlug(bookKey)}`;
}
