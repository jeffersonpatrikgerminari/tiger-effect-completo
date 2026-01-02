export type Store = "BR" | "US";
export type Format = "kindle" | "print";

// Keep this in sync with `components/BookLanding.tsx`.
export type BookKey =
  | "efeitoTigre" // BOX / Trilogy manifest
  | "nasGarrasDoTigre" // Vol. 1
  | "aFomeDoTigre" // Vol. 2
  | "oTigreDeVidro"; // Vol. 3

/**
 * ✅ Single place to update Amazon links (BR + US, Kindle + Print).
 *
 * Recommended:
 * - Put the full product URL (e.g. https://www.amazon.com.br/dp/ASIN).
 * - While you're still publishing, you can temporarily leave search links here,
 *   and later swap them for the final product pages.
 */
export const buyLinks: Record<BookKey, Record<Store, Record<Format, string>>> = {
  efeitoTigre: {
    BR: {
      kindle: "https://www.amazon.com.br/s?k=Efeito+Tigre+trilogia+Kindle",
      print: "https://www.amazon.com.br/s?k=Efeito+Tigre+trilogia+livro"
    },
    US: {
      kindle: "https://www.amazon.com/s?k=Tiger+Effect+trilogy+Kindle",
      print: "https://www.amazon.com/s?k=Tiger+Effect+trilogy+paperback"
    }
  },
  nasGarrasDoTigre: {
    BR: {
      kindle: "https://www.amazon.com.br/s?k=Nas+garras+do+Tigre+Kindle",
      print: "https://www.amazon.com.br/s?k=Nas+garras+do+Tigre+livro"
    },
    US: {
      kindle: "https://www.amazon.com/s?k=In+the+Tiger%27s+Grip+Kindle",
      print: "https://www.amazon.com/s?k=In+the+Tiger%27s+Grip+paperback"
    }
  },
  aFomeDoTigre: {
    BR: {
      kindle: "https://www.amazon.com.br/s?k=A+fome+do+Tigre+Kindle",
      print: "https://www.amazon.com.br/s?k=A+fome+do+Tigre+livro"
    },
    US: {
      kindle: "https://www.amazon.com/s?k=The+Tiger%27s+Hunger+Kindle",
      print: "https://www.amazon.com/s?k=The+Tiger%27s+Hunger+paperback"
    }
  },
  oTigreDeVidro: {
    BR: {
      kindle: "https://www.amazon.com.br/s?k=O+Tigre+de+Vidro+Cemit%C3%A9rio+de+Ilus%C3%B5es+Kindle",
      print: "https://www.amazon.com.br/s?k=O+Tigre+de+Vidro+Cemit%C3%A9rio+de+Ilus%C3%B5es+livro"
    },
    US: {
      kindle: "https://www.amazon.com/s?k=The+Glass+Tiger+Cemetery+of+Illusions+Kindle",
      print: "https://www.amazon.com/s?k=The+Glass+Tiger+Cemetery+of+Illusions+paperback"
    }
  }
};
