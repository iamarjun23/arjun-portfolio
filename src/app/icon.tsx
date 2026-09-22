import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
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
          background: "#0a0a0a",
          color: "#ededed",
          fontSize: 20,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        A
        <div style={{ width: 5, height: 5, marginLeft: 1, marginTop: 10, borderRadius: 5, background: "#10b981" }} />
      </div>
    ),
    size,
  );
}
