export default function AmbientHaze() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Top-right — blue */}
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          top: "-15%",
          right: "-10%",
          background: "radial-gradient(circle, #4ade80 0%, transparent 70%)",
          opacity: 0.22,
          filter: "blur(80px)",
          animation: "haze-1 22s ease-in-out infinite",
        }}
      />
      {/* Mid-left — indigo */}
      <div
        style={{
          position: "absolute",
          width: 550,
          height: 550,
          top: "35%",
          left: "-12%",
          background: "radial-gradient(circle, #22c55e 0%, transparent 70%)",
          opacity: 0.16,
          filter: "blur(80px)",
          animation: "haze-2 28s ease-in-out infinite",
        }}
      />
      {/* Lower-centre — pale cyan */}
      <div
        style={{
          position: "absolute",
          width: 450,
          height: 450,
          bottom: "8%",
          left: "25%",
          background: "radial-gradient(circle, #86efac 0%, transparent 70%)",
          opacity: 0.13,
          filter: "blur(80px)",
          animation: "haze-3 34s ease-in-out infinite",
        }}
      />
    </div>
  );
}
