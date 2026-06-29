"use client";

import { useRef, Suspense } from "react";
import { motion, useInView } from "framer-motion";
import LadbrokesShowcase from "@/components/LadbrokesShowcase";

const shadow = "0 8px 32px rgba(0,0,0,0.10)";

function MediaPlaceholder({ bg = "transparent", ratio = "16/9" }: { bg?: string; ratio?: string }) {
  return (
    <div
      className="relative rounded-xl w-full"
      style={{ backgroundColor: bg, aspectRatio: ratio }}
    >
    </div>
  );
}

type Project = {
  id: string;
  title: string;
  year: string;
  blurb: string;
  description?: string;
  bg: string;
  href?: string;
  linkText?: string;
};

export default function FeaturedProject({ project, borderTop = false }: { project: Project; borderTop?: boolean }) {
  const mediaRef = useRef<HTMLDivElement>(null);
  const inView = useInView(mediaRef, { margin: "0px 0px -60px 0px" });

  const isLadbrokes = project.id === "01";
  const isLangue = project.id === "02";
  const isBwin = project.id === "03";

  return (
    <div className={`group cursor-pointer ${borderTop ? "border-t border-edge" : ""}`}>
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 pt-[240px] pb-[160px] flex flex-col gap-6">

        {/* Text */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[15px] text-muted">{project.year}</span>
          <p
            className="text-[22px] font-bold text-ink leading-[140%] max-w-[640px]"
            style={{ fontFamily: "ThermalRegular", fontWeight: 400 }}
          >{project.blurb}</p>
          {project.description && (
            <p className="text-[15px] text-mid leading-[170%] max-w-[900px]">
              {project.description}
            </p>
          )}
        </motion.div>

        {/* Main media */}
        {isBwin ? (
          <div ref={mediaRef} className="grid grid-cols-3 gap-4 mt-12">
            {["/bwin-demo.mov", "/bwin-demo-2.mov", "/bwin-demo-3.mov"].map((src) => (
              <div key={src} className="relative rounded-xl w-full" style={{ aspectRatio: "3/4" }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      display: "block",
                      maxWidth: "85%",
                      maxHeight: "85%",
                      width: "auto",
                      height: "auto",
                      borderRadius: 12,
                      boxShadow: shadow,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            ref={mediaRef}
            className="relative rounded-xl w-full"
            style={{ backgroundColor: project.bg, aspectRatio: isLangue ? "32/9" : "16/9" }}
          >
            {isLadbrokes ? (
              <Suspense fallback={null}>
                <LadbrokesShowcase />
              </Suspense>
            ) : isLangue ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <video
                  src="/langue-demo.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ height: "55%", width: "auto", borderRadius: 8, boxShadow: shadow }}
                />
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[13px] text-white/25">[ prototype · video · demo ]</span>
              </div>
            )}
            <span className="absolute bottom-4 right-4 text-[11px] font-semibold text-white/20 tracking-[1px]">
              {project.id}
            </span>
          </div>
        )}

        {/* Sub-media slots */}
        {isLadbrokes ? (
          <>
            <div className="grid grid-cols-2 gap-4 mt-12">
              <div
                className="relative rounded-xl w-full"
                style={{ aspectRatio: "4/3" }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <video
                    src="/ladbrokes-tick.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      maxHeight: "100%",
                      width: "auto",
                      height: "auto",
                      borderRadius: 12,
                      boxShadow: shadow,
                    }}
                  />
                </div>
              </div>
              <div
                className="relative rounded-xl w-full"
                style={{ aspectRatio: "4/3" }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <video
                    src="/ladbrokes-cashout.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      maxHeight: "100%",
                      width: "auto",
                      height: "auto",
                      borderRadius: 12,
                      boxShadow: shadow,
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className="relative rounded-xl w-full mt-20"
              style={{ aspectRatio: "16/9" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <video
                  src="/ladbrokes-gaming.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    display: "block",
                    maxWidth: "92%",
                    maxHeight: "92%",
                    width: "auto",
                    height: "auto",
                    borderRadius: 12,
                    boxShadow: shadow,
                  }}
                />
              </div>
            </div>
          </>
        ) : isLangue ? (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div
                className="relative rounded-xl w-full bg-transparent"
                style={{ aspectRatio: "3/4" }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <video
                    src="/langue-demo-2.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ height: "80%", width: "auto", borderRadius: 8, boxShadow: shadow }}
                  />
                </div>
              </div>
              <div
                className="relative rounded-xl w-full bg-transparent"
                style={{ aspectRatio: "3/4" }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <video
                    src="/langue-demo-3.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ height: "80%", width: "auto", borderRadius: 8, boxShadow: shadow }}
                  />
                </div>
              </div>
            </div>
            <div
              className="relative rounded-xl w-full"
              style={{ aspectRatio: "16/9" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <video
                  src="/langue-demo-4.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ height: "70%", width: "auto", borderRadius: 8, boxShadow: shadow }}
                />
              </div>
            </div>
          </>
        ) : isBwin ? null : (
          <>
            <div className="grid grid-cols-2 gap-4">
              <MediaPlaceholder ratio="4/3" />
              <MediaPlaceholder ratio="4/3" />
            </div>
            <MediaPlaceholder ratio="16/9" />
          </>
        )}


      </div>
    </div>
  );
}
