"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import TreeSVG from "@/components/TreeSVG";

interface Props {
  size?: number;
}

export default function AppleTree({ size = 130 }: Props) {
  const containerRef        = useRef<HTMLDivElement>(null);
  const wrapperControls     = useAnimation();
  const trunkControls       = useAnimation();
  const leafControls        = useAnimation();
  const leafOpacityControls = useAnimation();
  const appleControls       = useAnimation();

  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = mounted && resolvedTheme === "dark";

  const appleStateRef = useRef<"hidden" | "visible" | "falling">("hidden");
  const isRustlingRef = useRef(false);

  const scale      = size / 387;
  const rustleDist = 280 * scale;
  const dropDist   = 120 * scale;
  const fallY      = 380 * scale;

  useEffect(() => { setMounted(true); }, []);

  // Initial reveal
  useEffect(() => {
    wrapperControls
      .start({
        clipPath: "inset(0% 0% 0% 0%)",
        transition: { duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.7 },
      })
      .then(() => {
        appleControls.start({
          opacity: 1,
          scale: 1,
          transition: { duration: 0.45, ease: [0.34, 1.56, 0.64, 1] },
        });
        appleStateRef.current = "visible";
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Fade leaves out in dark mode, back in on light mode
  useEffect(() => {
    if (!mounted) return;
    leafOpacityControls.start({
      opacity: isDark ? 0 : 1,
      transition: { duration: 0.9, ease: "easeInOut" },
    });
  }, [isDark, mounted]); // eslint-disable-line react-hooks/exhaustive-deps

  // Mouse interactions
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || appleStateRef.current !== "visible") return;

      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.hypot(e.clientX - cx, e.clientY - cy);

      if (dist < rustleDist && !isRustlingRef.current) {
        isRustlingRef.current = true;
        trunkControls.start({
          rotate: [0, 0.5, -0.4, 0.3, -0.2, 0],
          transition: { duration: 0.7, ease: "easeInOut" },
        });
        leafControls
          .start({
            rotate: [0, 2.8, -2.2, 1.6, -1.1, 0.6, -0.3, 0],
            transition: { duration: 0.7, ease: "easeInOut" },
          })
          .then(() => { isRustlingRef.current = false; });
      }

      if (dist < dropDist) {
        appleStateRef.current = "falling";

        appleControls.start({
          y: fallY,
          x: -24 * scale,
          rotate: 400,
          opacity: 0,
          transition: { duration: 0.85, ease: [0.4, 0, 0.9, 1] },
        });

        setTimeout(async () => {
          appleControls.set({ opacity: 0, scale: 0, y: 14 * scale, x: 0, rotate: 13.4 });
          await appleControls.start({
            opacity: 1,
            scale: 1,
            transition: { duration: 0.45, ease: [0.34, 1.56, 0.64, 1], delay: 0.2 },
          });
          appleStateRef.current = "visible";
        }, 3000);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      ref={containerRef}
      style={{ width: size, height: size }}
      className="relative shrink-0"
    >
      <motion.div
        className="w-full h-full"
        animate={wrapperControls}
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      >
        <TreeSVG
          trunkControls={trunkControls}
          leafControls={leafControls}
          leafOpacityControls={leafOpacityControls}
        />
      </motion.div>

      <motion.div
        className="absolute"
        style={{ top: "22.9%", right: "64.03%", bottom: "62.71%", left: "21.72%" }}
        animate={appleControls}
        initial={{ opacity: 0, scale: 0, y: 14 * scale, rotate: 13.4 }}
      >
        <img
          src="/hero-apple.svg"
          alt=""
          className="absolute inset-0 w-full h-full object-contain transition-opacity duration-700"
          style={{ opacity: isDark ? 0 : 1 }}
        />
        <img
          src="/hero-apple-dark.svg"
          alt=""
          className="absolute inset-0 w-full h-full object-contain transition-opacity duration-700"
          style={{ opacity: isDark ? 1 : 0 }}
        />
      </motion.div>
    </div>
  );
}
