import { ImageResponse } from "next/og";
import { getSampleBySlug } from "@/lib/samples";

export const runtime = "edge";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage({ params }: { params: { slug: string } }) {
  const sample = getSampleBySlug(params.slug);

  const pt = sample?.title.pt || "Amostra";
  const en = sample?.title.en || "Sample";
  const lead = sample?.lead.pt || "Amostra de leitura";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(24,24,24,1) 55%, rgba(0,0,0,1) 100%)",
          color: "white"
        }}
      >
        <div style={{ fontSize: 22, opacity: 0.75, letterSpacing: 2, textTransform: "uppercase" }}>Sample / Amostra</div>
        <div style={{ marginTop: 14, fontSize: 64, fontWeight: 800, letterSpacing: -1 }}>{pt}</div>
        <div style={{ marginTop: 6, fontSize: 36, fontWeight: 650, opacity: 0.9 }}>{en}</div>
        <div style={{ marginTop: 18, fontSize: 24, opacity: 0.75, maxWidth: 940, lineHeight: 1.25 }}>{lead}</div>
        <div style={{ marginTop: 28, fontSize: 20, opacity: 0.85 }}>
          Efeito Tigre / Tiger Effect
        </div>
      </div>
    ),
    { width: size.width, height: size.height }
  );
}
