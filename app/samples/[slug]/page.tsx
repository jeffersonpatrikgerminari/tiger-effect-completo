import type { Metadata } from "next";
import SamplePageClient from "@/components/SamplePageClient";
import { getSampleBySlug, sampleSlugs } from "@/lib/samples";

export function generateStaticParams() {
  return sampleSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const sample = getSampleBySlug(params.slug);
  if (!sample) {
    return {
      title: "Sample not found | Efeito Tigre / Tiger Effect",
      description: "Sample page not found."
    };
  }

  const title = `${sample.title.pt} / ${sample.title.en} — Sample | Efeito Tigre`;
  const description = `${sample.lead.pt} / ${sample.lead.en}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: `/samples/${sample.slug}/opengraph-image`,
          width: 1200,
          height: 630
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/samples/${sample.slug}/opengraph-image`]
    }
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  return <SamplePageClient slug={params.slug} />;
}
