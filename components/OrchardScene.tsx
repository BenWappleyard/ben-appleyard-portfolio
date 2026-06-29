"use client";

// Orchard illustration — three rows of trees receding into the distance.
// Canopy style matches the logo: overlapping circles creating a bumpy silhouette.
// Blue & red fruit scattered through the foliage.
// Built to be interactive later (hover, cursor tracking, falling fruit, etc.)

const C = {
  sky:     "#F4F3EE",
  ground:  "#E8E4DA",
  rowDark: "#DDD7CA",
  horizon: "#C4BDB0",
  ink:     "#111111",
  fruitB:  "#1A1AFF", // accent blue
  fruitR:  "#CC2B1A", // apple red
};

// Fruit positions relative to canopy centre (at scale 1)
const FRUITS = [
  { dx: -17, dy:  -6, c: "B" },
  { dx:  11, dy: -17, c: "R" },
  { dx:  21, dy:   5, c: "B" },
  { dx:  -5, dy:  15, c: "R" },
  { dx: -23, dy:   7, c: "B" },
  { dx:   4, dy:  24, c: "R" },
  { dx:  14, dy: -10, c: "B" },
];

function Tree({ x, by, s }: { x: number; by: number; s: number }) {
  const tW  = 10 * s;           // trunk width
  const tH  = 48 * s;           // trunk height
  const cy  = by - tH - 22 * s; // canopy centre Y

  // Minimum fruit radius so back-row fruit stays visible
  const fr = Math.max(2, 4.5 * s);

  return (
    <g>
      {/* Trunk */}
      <rect
        x={x - tW / 2}
        y={by - tH}
        width={tW}
        height={tH}
        rx={2 * s}
        fill={C.ink}
      />

      {/* Canopy — stacked overlapping circles */}
      <circle cx={x}          cy={cy}          r={24 * s} fill={C.ink} />
      <circle cx={x - 20 * s} cy={cy +  6 * s} r={17 * s} fill={C.ink} />
      <circle cx={x + 20 * s} cy={cy +  6 * s} r={17 * s} fill={C.ink} />
      <circle cx={x -  9 * s} cy={cy - 16 * s} r={14 * s} fill={C.ink} />
      <circle cx={x +  9 * s} cy={cy - 16 * s} r={14 * s} fill={C.ink} />
      <circle cx={x}          cy={cy + 20 * s} r={15 * s} fill={C.ink} />

      {/* Fruit */}
      {FRUITS.map((f, i) => (
        <circle
          key={i}
          cx={x + f.dx * s}
          cy={cy + f.dy * s}
          r={fr}
          fill={f.c === "B" ? C.fruitB : C.fruitR}
        />
      ))}
    </g>
  );
}

// Rows defined back → front so SVG painter's algorithm renders correctly
const ROWS: { by: number; s: number; xs: number[] }[] = [
  { by: 258, s: 0.36, xs: [52, 162, 274, 386, 498] },   // back
  { by: 366, s: 0.58, xs: [96, 228, 362, 494] },         // middle
  { by: 494, s: 0.88, xs: [118, 290, 460] },             // front
];

export default function OrchardScene() {
  return (
    <svg
      viewBox="0 0 580 520"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Orchard with rows of fruit trees"
      className="w-full h-full"
    >
      {/* Sky */}
      <rect width="580" height="222" fill={C.sky} />

      {/* Ground */}
      <rect x="0" y="220" width="580" height="300" fill={C.ground} />

      {/* Subtle row bands — slightly darker where each tree line sits */}
      <rect x="0" y="220" width="580" height="52"  fill={C.rowDark} opacity="0.55" />
      <rect x="0" y="308" width="580" height="72"  fill={C.rowDark} opacity="0.40" />
      <rect x="0" y="418" width="580" height="102" fill={C.rowDark} opacity="0.30" />

      {/* Horizon line */}
      <line x1="0" y1="220" x2="580" y2="220" stroke={C.horizon} strokeWidth="1.5" />

      {/* Faint ground lines suggesting furrows */}
      {[258, 308, 362, 418, 472].map((y) => (
        <line
          key={y}
          x1="0" y1={y}
          x2="580" y2={y}
          stroke={C.horizon}
          strokeWidth="0.6"
          opacity="0.35"
        />
      ))}

      {/* Trees — painted back to front */}
      {ROWS.map((row, ri) =>
        row.xs.map((x, ti) => (
          <Tree key={`r${ri}t${ti}`} x={x} by={row.by} s={row.s} />
        ))
      )}
    </svg>
  );
}
