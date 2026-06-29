export default function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      aria-label="Ben Appleyard"
    >
      <defs>
        {/* ── Tree silhouette ─────────────────────────────── */}
        <clipPath id="tree-shape">
          {/* Center tree — stacked circles */}
          <circle cx="100" cy="20"  r="22" />
          <circle cx="83"  cy="32"  r="16" />
          <circle cx="117" cy="32"  r="16" />
          <circle cx="74"  cy="47"  r="14" />
          <circle cx="100" cy="50"  r="18" />
          <circle cx="126" cy="47"  r="14" />
          <circle cx="87"  cy="62"  r="13" />
          <circle cx="113" cy="62"  r="13" />
          {/* Left tree */}
          <circle cx="52"  cy="46"  r="16" />
          <circle cx="38"  cy="57"  r="14" />
          <circle cx="54"  cy="66"  r="13" />
          <circle cx="26"  cy="67"  r="12" />
          <circle cx="40"  cy="76"  r="12" />
          {/* Right tree */}
          <circle cx="148" cy="46"  r="16" />
          <circle cx="162" cy="57"  r="14" />
          <circle cx="146" cy="66"  r="13" />
          <circle cx="174" cy="67"  r="12" />
          <circle cx="160" cy="76"  r="12" />
          {/* Bridge connectors between trees */}
          <circle cx="68"  cy="68"  r="11" />
          <circle cx="132" cy="68"  r="11" />
          {/* Left trunk */}
          <rect x="44"  y="75"  width="14" height="68" rx="2" />
          {/* Centre trunk */}
          <rect x="93"  y="63"  width="14" height="76" rx="2" />
          {/* Right trunk */}
          <rect x="142" y="75"  width="14" height="68" rx="2" />
        </clipPath>

        {/* ── Crescent clip regions ────────────────────────── */}
        <clipPath id="cr1"><circle cx="113" cy="26" r="13" /></clipPath>
        <clipPath id="cr2"><circle cx="94"  cy="18" r="10" /></clipPath>
        <clipPath id="cr3"><circle cx="122" cy="44" r="9"  /></clipPath>
        <clipPath id="cr4"><circle cx="28"  cy="65" r="9"  /></clipPath>
        <clipPath id="cr5"><circle cx="112" cy="60" r="9"  /></clipPath>
        <clipPath id="cr6"><circle cx="157" cy="54" r="9"  /></clipPath>
        <clipPath id="cr7"><circle cx="160" cy="72" r="8"  /></clipPath>
        <clipPath id="cr8"><circle cx="85"  cy="60" r="8"  /></clipPath>
      </defs>

      {/* ── Main silhouette ──────────────────────────────── */}
      <rect
        width="200"
        height="200"
        fill="currentColor"
        clipPath="url(#tree-shape)"
      />

      {/* ── White crescent shapes inside the foliage ─────── */}
      {/* Each is a circle clipped by a slightly smaller offset circle,
          creating a crescent / leaf-shadow effect */}
      <circle cx="121" cy="24" r="12" fill="var(--color-surface,#F8F7F2)" clipPath="url(#cr1)" />
      <circle cx="102" cy="16" r="9"  fill="var(--color-surface,#F8F7F2)" clipPath="url(#cr2)" />
      <circle cx="130" cy="43" r="8"  fill="var(--color-surface,#F8F7F2)" clipPath="url(#cr3)" />
      <circle cx="34"  cy="65" r="8"  fill="var(--color-surface,#F8F7F2)" clipPath="url(#cr4)" />
      <circle cx="119" cy="58" r="8"  fill="var(--color-surface,#F8F7F2)" clipPath="url(#cr5)" />
      <circle cx="164" cy="52" r="8"  fill="var(--color-surface,#F8F7F2)" clipPath="url(#cr6)" />
      <circle cx="167" cy="70" r="7"  fill="var(--color-surface,#F8F7F2)" clipPath="url(#cr7)" />
      <circle cx="91"  cy="58" r="7"  fill="var(--color-surface,#F8F7F2)" clipPath="url(#cr8)" />
    </svg>
  );
}
