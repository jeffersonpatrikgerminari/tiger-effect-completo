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
          background: "linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(20,20,20,1) 55%, rgba(0,0,0,1) 100%)",
          color: "white"
        }}
      >
        <div style={{ fontSize: 68, fontWeight: 800, letterSpacing: -1 }}>Efeito Tigre</div>
        <div style={{ marginTop: 6, fontSize: 38, fontWeight: 650, opacity: 0.9 }}>Tiger Effect</div>
        <div style={{ marginTop: 20, fontSize: 26, opacity: 0.75, maxWidth: 920, lineHeight: 1.25 }}>
          Trilogia sobre vício em apostas digitais e algoritmos predatórios — a queda, a arquitetura do “quase” e a recuperação como ato coletivo.
        </div>
        <div style={{ marginTop: 32, display: "flex", gap: 12, fontSize: 18, opacity: 0.85 }}>
          <span style={{ padding: "8px 12px", borderRadius: 999, border: "1px solid rgba(255,255,255,.14)", background: "rgba(255,255,255,.06)" }}>
            Dark Noir / Tech
          </span>
          <span style={{ padding: "8px 12px", borderRadius: 999, border: "1px solid rgba(255,255,255,.14)", background: "rgba(255,255,255,.06)" }}>
            Portal de Apoio
          </span>
          <span style={{ padding: "8px 12px", borderRadius: 999, border: "1px solid rgba(255,255,255,.14)", background: "rgba(255,255,255,.06)" }}>
            Fórum & Recursos
          </span>
        </div>
      </div>
    ),
    { width: size.width, height: size.height }
  );
}
