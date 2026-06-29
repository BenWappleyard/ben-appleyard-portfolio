"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import AppleTree from "@/components/AppleTree";
import CompanyLogos from "@/components/CompanyLogos";
import AmbientHaze from "@/components/AmbientHaze";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const NAME = 'Ben Appleyard';
const KEEP = [7, 8, 10, 12]; // l, e, a, d in "Appleyard"
function AnimatedName() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [pos, setPos] = useState<{ x: number; w: number }[] | null>(null);
  const [phase, setPhase] = useState<'name' | 'designer'>('name');

  useEffect(() => {
    const measure = () => {
      const h1 = nameRef.current;
      if (!h1) return;
      const base = h1.getBoundingClientRect();
      // Find the text node (single child of h1)
      let node: Text | null = null;
      for (const child of Array.from(h1.childNodes)) {
        if (child.nodeType === Node.TEXT_NODE) { node = child as Text; break; }
      }
      if (!node) return;
      setPos(
        Array.from({ length: NAME.length }, (_, i) => {
          const range = document.createRange();
          range.setStart(node!, i);
          range.setEnd(node!, i + 1);
          const r = range.getBoundingClientRect();
          return { x: r.left - base.left, w: r.width };
        })
      );
    };
    document.fonts.ready.then(measure);
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    if (!pos) return;
    let cancelled = false;
    const loop = async () => {
      while (!cancelled) {
        await delay(5000);
        if (cancelled) break;
        setPhase('designer');
        await delay(8200);
        if (cancelled) break;
        setPhase('name');
        await delay(2000);
      }
    };
    loop();
    return () => { cancelled = true; };
  }, [pos]);

  const isDesigner = phase === 'designer';
  const h1Style: React.CSSProperties = {
    fontFamily: "ThermalLight",
    fontWeight: 300,
    letterSpacing: "-2px",
  };
  const cls = "text-[58px] md:text-[72px] lg:text-[94px] font-bold leading-[1.0]";

  // For each keep char: how far it needs to travel to slot into "lead" at x=0
  const keepData = pos
    ? KEEP.map((ki, rank) => ({
        ki,
        char: NAME[ki],
        origX: pos[ki].x,
        dx: KEEP.slice(0, rank).reduce((sum, j) => sum + pos[j].w, 0) - pos[ki].x,
      }))
    : null;

  // " designer" starts after the full width of "lead"
  const designerX = pos ? KEEP.reduce((sum, j) => sum + pos[j].w, 0) : 0;

  return (
    <div className="relative">
      {/* Base text — single node, perfect kerning; fades out when animating */}
      <motion.h1
        ref={nameRef}
        className={`${cls} text-ink`}
        style={h1Style}
        animate={{ opacity: isDesigner ? 0 : 1 }}
        transition={{ duration: isDesigner ? 0.7 : 1.8, delay: isDesigner ? 0 : 2.1 }}
      >
        {NAME}
      </motion.h1>

      {/* Overlay: l, e, a, d slide to form "lead" + " designer" fades in */}
      {keepData && (
        <div className="absolute top-0 left-0 pointer-events-none">
          {keepData.map(({ ki, char, origX, dx }) => (
            <motion.span
              key={ki}
              className={`${cls} text-ink`}
              style={{ ...h1Style, position: 'absolute', left: origX, top: 0, whiteSpace: 'pre' }}
              initial={{ opacity: 0, x: 0 }}
              animate={{
                opacity: isDesigner ? 1 : 0,
                x: isDesigner ? dx : 0,
              }}
              transition={{
                opacity: { duration: isDesigner ? 0.6 : 1.8, delay: isDesigner ? 0 : 2.1 },
                x: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: isDesigner ? 1.4 : 0.3 },
              }}
            >
              {char}
            </motion.span>
          ))}

          <motion.span
            className={`${cls} text-ink`}
            style={{ ...h1Style, position: 'absolute', left: designerX, top: 0, whiteSpace: 'pre' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isDesigner ? 1 : 0 }}
            transition={{ duration: 0.7, delay: isDesigner ? 2.5 : 0.1 }}
          >
            {' designer'}
          </motion.span>
        </div>
      )}
    </div>
  );
}

function delay(ms: number) {
  return new Promise(r => setTimeout(r, ms));
}

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-60px)] flex flex-col pb-16 bg-surface">
      <AmbientHaze />
      <div className="relative max-w-[1440px] mx-auto w-full px-8 md:px-16 flex-1">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="pt-44 flex flex-col gap-6 hero-shift"
        >
          <motion.div variants={fadeUp}>
            <AppleTree size={130} />
          </motion.div>

          {/* Name + intro sentence */}
          <motion.div variants={fadeUp} className="flex flex-col max-w-[720px]">
            <AnimatedName />
            <p className="text-[15px] md:text-[16px] text-mid leading-[1.7] mt-5">
              I&rsquo;m passionate about combining meticulous design with intelligent technology.{" "}
              <a
                href="/about"
                className="text-[13px] font-medium text-muted hover:text-ink transition-colors duration-200 whitespace-nowrap ml-3"
              >
                More about me →
              </a>
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="bg-ink text-surface px-6 py-[11px] text-[14px] font-medium rounded-full hover:bg-[#2e2e2e] transition-colors duration-200"
            >
              View my work
            </a>
            <a
              href="#writing"
              className="px-6 py-[11px] text-[14px] font-medium rounded-full border border-ink text-ink hover:bg-[#e6f4e6] transition-colors duration-200"
            >
              Read my writing
            </a>
          </motion.div>
        </motion.div>
      </div>
      <CompanyLogos />
    </section>
  );
}
