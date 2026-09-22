import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const dynamic = "force-static";
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAFAF8",
          padding: 72,
          color: "#0A0A0A",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 18,
              background: "#2440F0",
              transform: "rotate(45deg)",
            }}
          />
          <div style={{ fontSize: 26, color: "#1A30C4", letterSpacing: 2 }}>
            SOFTWARE ENGINEER · BANGALORE / REMOTE
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 128, fontWeight: 700, letterSpacing: -6, lineHeight: 1 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 46, color: "#52524E", marginTop: 18, letterSpacing: -1 }}>
            Backend · AI/RAG · Full-stack
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#6B6B66" }}>
          {site.url.replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    size,
  );
}
