"use client";

import { motion } from "framer-motion";
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
function AnimatedName() {
  const h1Style: React.CSSProperties = {
    fontFamily: "ThermalLight",
    fontWeight: 300,
    letterSpacing: "-2px",
  };
  const cls = "text-[58px] md:text-[72px] lg:text-[94px] font-bold leading-[1.0]";

  return (
    <h1 className={`${cls} text-ink`} style={h1Style}>
      {NAME}
    </h1>
  );
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
