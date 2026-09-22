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
          background: "#fbfbfa",
          padding: 80,
          color: "#16181d",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#16181d",
              color: "#fbfbfa",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            AL
          </div>
          <div style={{ fontSize: 28, color: "#4a4f59" }}>{site.location}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, fontWeight: 600, letterSpacing: -4, lineHeight: 1 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 44, color: "#4a4f59", marginTop: 20 }}>
            {`${site.role} · Backend & full-stack`}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 28, color: "#4a4f59" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#178a4c" }} />
          Open to SDE-1 roles
        </div>
      </div>
    ),
    size,
  );
}
