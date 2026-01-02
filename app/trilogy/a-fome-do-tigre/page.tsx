import BookLanding from "@/components/BookLanding";

export const metadata = {
  title: "A Fome do Tigre | Tiger Effect",
  description:
    "Vol. 2 — A arquitetura do sistema: retenção, quase-vitórias e o algoritmo que aprende com cada clique.",
  openGraph: {
    title: "A Fome do Tigre | Tiger Effect",
    description:
      "Vol. 2 — A arquitetura do sistema: retenção, quase-vitórias e o algoritmo que aprende com cada clique.",
    images: [{ url: "/trilogy/a-fome-do-tigre/opengraph-image", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "A Fome do Tigre | Tiger Effect",
    description:
      "Vol. 2 — A arquitetura do sistema: retenção, quase-vitórias e o algoritmo que aprende com cada clique.",
    images: ["/trilogy/a-fome-do-tigre/opengraph-image"]
  }
};

export default function Page() {
  return <BookLanding bookKey="aFomeDoTigre" />;
}
