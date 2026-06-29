"use client";

import { useSearchParams } from "next/navigation";

const sources: Record<string, { label: string; href: string }> = {
  writing: { label: "← Writing", href: "/writing" },
};

const defaultSource = { label: "← Home", href: "/" };

export default function BackLink() {
  const params = useSearchParams();
  const from = params.get("from") ?? "";
  const { label, href } = sources[from] ?? defaultSource;

  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 text-[13px] font-medium text-muted hover:text-ink transition-colors duration-200 mb-12"
    >
      {label}
    </a>
  );
}
