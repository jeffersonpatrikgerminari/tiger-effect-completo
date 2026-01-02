import BookLanding from "@/components/BookLanding";

export const metadata = {
  title: "Efeito Tigre (Box) | Tiger Effect",
  description:
    "O box completo: queda, arquitetura do algoritmo e recuperação como ato coletivo.",
  openGraph: {
    title: "Efeito Tigre (Box) | Tiger Effect",
    description:
      "O box completo: queda, arquitetura do algoritmo e recuperação como ato coletivo.",
    images: [{ url: "/trilogy/efeito-tigre/opengraph-image", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Efeito Tigre (Box) | Tiger Effect",
    description:
      "O box completo: queda, arquitetura do algoritmo e recuperação como ato coletivo.",
    images: ["/trilogy/efeito-tigre/opengraph-image"]
  }
};

export default function Page() {
  return <BookLanding bookKey="efeitoTigre" />;
}
