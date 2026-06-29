import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capte — Ben Appleyard",
};

export default function Capte() {
  return (
    <main className="min-h-screen bg-surface">
      <div className="max-w-[680px] mx-auto px-6 md:px-8 pt-24 pb-32">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-[13px] font-medium text-muted hover:text-ink transition-colors duration-200 mb-12"
        >
          ← Home
        </a>
      </div>
    </main>
  );
}
