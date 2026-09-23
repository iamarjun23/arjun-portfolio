import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fafaf8",
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#2440f0",
            color: "#ffffff",
            fontSize: 25,
            fontWeight: 700,
            letterSpacing: -2,
            transform: "rotate(45deg)",
          }}
        >
          <span style={{ transform: "rotate(-45deg)" }}>A</span>
        </div>
      </div>
    ),
    size,
  );
}
