import type { Metadata } from "next";
import AboutBio from "@/components/AboutBio";

export const metadata: Metadata = {
  title: "About — Ben Appleyard",
  description:
    "Ben Appleyard is a design lead, builder and strategist working at the intersection of craft, clarity, and commercial impact.",
};

export default function About() {
  return (
    <main className="min-h-screen bg-surface">
      <div className="max-w-[680px] mx-auto px-6 md:px-8 pt-24 pb-32">

        {/* Back link */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-[13px] font-medium text-muted hover:text-ink transition-colors duration-200 mb-12"
        >
          ← Home
        </a>

        {/* Bio */}
        <AboutBio />

        {/* Contact CTA */}
        <div className="mt-16 pt-12 border-t border-edge">
          <p className="text-[15px] text-mid">
            Want to work together or just have a conversation?{" "}
            <a
              href="mailto:"
              className="text-ink font-medium hover:text-accent transition-colors duration-200"
            >
              Get in touch →
            </a>
          </p>
        </div>

      </div>
    </main>
  );
}
