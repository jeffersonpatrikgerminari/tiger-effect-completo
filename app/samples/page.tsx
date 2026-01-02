import type { Metadata } from "next";
import SamplesIndex from "@/components/SamplesIndex";

export const metadata: Metadata = {
  title: "Samples | Efeito Tigre / Tiger Effect",
  description: "Read short samples from each volume of the Efeito Tigre (Tiger Effect) trilogy.",
  openGraph: {
    title: "Samples | Efeito Tigre / Tiger Effect",
    description: "Read short samples from each volume of the Efeito Tigre (Tiger Effect) trilogy.",
    images: [{ url: "/samples/opengraph-image", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Samples | Efeito Tigre / Tiger Effect",
    description: "Read short samples from each volume of the Efeito Tigre (Tiger Effect) trilogy.",
    images: ["/samples/opengraph-image"]
  }
};

export default function Page() {
  return <SamplesIndex />;
}
