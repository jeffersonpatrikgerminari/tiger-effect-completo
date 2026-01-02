import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
        <div style={{ fontSize: 22, opacity: 0.75, letterSpacing: 2, textTransform: "uppercase" }}>Samples / Amostras</div>
        <div style={{ marginTop: 14, fontSize: 68, fontWeight: 800, letterSpacing: -1 }}>Efeito Tigre</div>
        <div style={{ marginTop: 6, fontSize: 38, fontWeight: 650, opacity: 0.9 }}>Tiger Effect</div>
        <div style={{ marginTop: 18, fontSize: 26, opacity: 0.75, maxWidth: 940, lineHeight: 1.25 }}>
          Read short samples from each volume and find your entry point.
        </div>
      </div>
    ),
    { width: size.width, height: size.height }
  );
}
