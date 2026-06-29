"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRestoration() {
  const pathname = usePathname();
  const prevPathname = useRef<string | null>(null);

  useEffect(() => {
    // Hand scroll restoration back to the browser for native back/forward
    window.history.scrollRestoration = "auto";
  }, []);

  useEffect(() => {
    // Save the scroll position of the page we're leaving
    if (prevPathname.current && prevPathname.current !== pathname) {
      sessionStorage.setItem(
        `scroll:${prevPathname.current}`,
        String(window.scrollY)
      );
    }

    // Restore scroll for the page we've arrived at
    const saved = sessionStorage.getItem(`scroll:${pathname}`);
    if (saved) {
      requestAnimationFrame(() => {
        window.scrollTo({ top: parseInt(saved, 10), behavior: "instant" });
      });
    }

    prevPathname.current = pathname;
  }, [pathname]);

  return null;
}
