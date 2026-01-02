import BookLanding from "@/components/BookLanding";

export const metadata = {
  title: "A Fome do Tigre | Tiger Effect",
  description:
    "Vol. 2 — A arquitetura do sistema: retenção, quase-vitórias e o algoritmo que aprende com cada clique."
};

export default function Page() {
  return <BookLanding bookKey="aFomeDoTigre" />;
}
