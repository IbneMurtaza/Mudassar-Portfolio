import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#100f0d",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#e8a94a",
            marginBottom: 28,
          }}
        >
          {profile.title}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: -3,
            color: "#ece7df",
            lineHeight: 1,
          }}
        >
          <span>{profile.firstName}</span>
          <span style={{ display: "flex" }}>
            {profile.lastName}
            <span style={{ color: "#e8a94a" }}>.</span>
          </span>
        </div>
        <div style={{ fontSize: 28, color: "#9a938a", marginTop: 36, display: "flex" }}>
          {profile.yearsExperience}+ years building native iOS apps
        </div>
      </div>
    ),
    { ...size }
  );
}
