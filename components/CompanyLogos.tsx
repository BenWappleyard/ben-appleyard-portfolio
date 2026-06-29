"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const logos = [
  { src: "/axis.svg",      alt: "Axis Workshops", width: 93,  height: 39,  className: "shrink-0 h-[31px] w-auto" },
  { src: "/bwin.svg",      alt: "Bwin",           width: 153, height: 49,  className: "shrink-0 h-[26px] w-auto" },
  { src: "/coral.svg",     alt: "Coral",          width: 355, height: 56,  className: "shrink-0 h-[22px] w-auto" },
  { src: "/baandy.svg",    alt: "Baandy",         width: 219, height: 64,  className: "shrink-0 h-[26px] w-auto" },
  { src: "/ladbrokes.svg", alt: "Ladbrokes",      width: 114, height: 20,  className: "shrink-0 h-4 w-auto" },
  { src: "/entain.svg",    alt: "Entain",         width: 594, height: 168, className: "shrink-0 h-[26px] w-auto" },
  { src: "/betmgm.svg",    alt: "BetMGM",         width: 217, height: 59,  className: "shrink-0 h-[26px] w-auto" },
  { src: "/zakki.svg",     alt: "ZAKKI",          width: 720, height: 183, className: "shrink-0 h-[26px] w-auto" },
];

// Light mode: black. Dark mode: twilight purple (~#b0a8d4)
const lightFilter = "brightness(0)";
const darkFilter  = "brightness(0) invert(1) sepia(0.5) hue-rotate(235deg) saturate(1.6) brightness(0.72)";

function LogoRow({ isDark }: { isDark: boolean }) {
  return (
    <div
      className="flex items-center"
      style={{
        gap: "180px",
        width: "max-content",
        animation: "marquee 35s linear infinite",
      }}
    >
      {[...logos, ...logos].map((logo, i) => (
        <Image
          key={`${logo.alt}-${i}`}
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className={logo.className}
          style={{
            filter: isDark ? darkFilter : lightFilter,
            transition: "filter 0.7s ease",
          }}
        />
      ))}
    </div>
  );
}

export default function CompanyLogos() {
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const work = document.getElementById("work");
    if (!work) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { rootMargin: "0px 0px -50% 0px" }
    );

    observer.observe(work);
    return () => observer.disconnect();
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <motion.section
      className="overflow-hidden"
      animate={{ opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="h-[100px] mt-[72px] 2xl:mt-0 flex items-center">
        <LogoRow isDark={isDark} />
      </div>
    </motion.section>
  );
}
