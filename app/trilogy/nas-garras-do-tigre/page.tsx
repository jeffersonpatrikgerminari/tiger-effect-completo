import BookLanding from "@/components/BookLanding";

export const metadata = {
  title: "Nas Garras do Tigre | Tiger Effect",
  description:
    "Vol. 1 — A queda individual: madrugada, silêncio e um sistema que transforma esperança em repetição.",
  openGraph: {
    title: "Nas Garras do Tigre | Tiger Effect",
    description:
      "Vol. 1 — A queda individual: madrugada, silêncio e um sistema que transforma esperança em repetição.",
    images: [{ url: "/trilogy/nas-garras-do-tigre/opengraph-image", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Nas Garras do Tigre | Tiger Effect",
    description:
      "Vol. 1 — A queda individual: madrugada, silêncio e um sistema que transforma esperança em repetição.",
    images: ["/trilogy/nas-garras-do-tigre/opengraph-image"]
  }
};

export default function Page() {
  return <BookLanding bookKey="nasGarrasDoTigre" />;
}
