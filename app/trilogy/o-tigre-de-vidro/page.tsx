import BookLanding from "@/components/BookLanding";

export const metadata = {
  title: "O Tigre de Vidro | Tiger Effect",
  description:
    "Vol. 3 — Recuperação: grupo de apoio, consciência e a interrupção do ciclo sem moralismo.",
  openGraph: {
    title: "O Tigre de Vidro | Tiger Effect",
    description:
      "Vol. 3 — Recuperação: grupo de apoio, consciência e a interrupção do ciclo sem moralismo.",
    images: [{ url: "/trilogy/o-tigre-de-vidro/opengraph-image", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "O Tigre de Vidro | Tiger Effect",
    description:
      "Vol. 3 — Recuperação: grupo de apoio, consciência e a interrupção do ciclo sem moralismo.",
    images: ["/trilogy/o-tigre-de-vidro/opengraph-image"]
  }
};

export default function Page() {
  return <BookLanding bookKey="oTigreDeVidro" />;
}
