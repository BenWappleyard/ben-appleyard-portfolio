import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing — Ben Appleyard",
  description: "Ramblings and observations about design, product and technology.",
};

const articles = [
  {
    title: "The Times They Are A-Changin'",
    date: "Apr 2026",
    readTime: "7 min",
    slug: "/writing/times-they-are-a-changin",
    live: true,
  },
  {
    title: "Placeholder — article title two",
    date: "—",
    readTime: "—",
    slug: "#",
    live: false,
  },
  {
    title: "Placeholder — article title three",
    date: "—",
    readTime: "—",
    slug: "#",
    live: false,
  },
];

export default function Writing() {
  return (
    <main className="min-h-screen bg-surface">
      <div className="max-w-[680px] mx-auto px-6 md:px-8 pt-24 pb-32">

        <a
          href="/"
          className="inline-flex items-center gap-2 text-[13px] font-medium text-muted hover:text-ink transition-colors duration-200 mb-12"
        >
          ← Home
        </a>

        <p className="text-[22px] font-bold text-ink leading-[140%] mb-12">
          Ramblings and observations about design, product and technology.
        </p>

        <div>
          {articles.map((a, i) => (
            <a
              key={i}
              href={a.live ? `${a.slug}?from=writing` : undefined}
              className={`flex items-center justify-between py-5 border-t border-edge transition-opacity duration-200 ${
                a.live ? "hover:opacity-60 cursor-pointer" : "cursor-default"
              }`}
            >
              <span className={`text-[18px] ${a.live ? "font-semibold text-ink" : "font-normal text-muted"}`}>
                {a.title}
              </span>
              <span className="text-[13px] text-muted shrink-0 ml-8">
                {a.date}{a.readTime !== "—" && <>&nbsp;&nbsp;·&nbsp;&nbsp;{a.readTime} read</>}
              </span>
            </a>
          ))}
          <div className="border-t border-edge" />
        </div>

      </div>
    </main>
  );
}
