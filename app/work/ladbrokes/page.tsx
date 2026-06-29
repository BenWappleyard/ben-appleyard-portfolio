import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reimagining and redesigning Ladbrokes — Ben Appleyard",
  description:
    "Leading the redesign of the Ladbrokes sportsbook, whilst reimagining and repurposing the entire platform.",
};

export default function LadbrokesProject() {
  return (
    <main className="min-h-screen bg-surface">
      <div className="max-w-[680px] mx-auto px-6 md:px-8 pt-24 pb-32">

        <a
          href="/"
          className="inline-flex items-center gap-2 text-[13px] font-medium text-muted hover:text-ink transition-colors duration-200 mb-12"
        >
          ← Home
        </a>

        <h1 className="text-[36px] md:text-[48px] font-extrabold text-ink tracking-[-1.5px] leading-[1.1] mb-8">
          Reimagining and redesigning Ladbrokes
        </h1>

        <p className="text-[18px] text-ink leading-[175%] mb-16">
          I&apos;m leading the redesign of the Ladbrokes sportsbook, whilst reimagining and repurposing the entire platform.
        </p>

        {/* Content placeholder */}
        <div className="flex flex-col gap-12">
          <div className="w-full aspect-[16/9] bg-surface-alt rounded-xl" />
          <div className="w-full aspect-[16/9] bg-surface-alt rounded-xl" />
        </div>

      </div>
    </main>
  );
}
