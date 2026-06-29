"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const HOLD_MS = 2600;
const ease = [0.22, 1, 0.36, 1] as const;

function RedSphere({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex items-center justify-center" style={{ width: 140, height: 140 }}>
      {/* Outer halo glow */}
      <div style={{
        position: "absolute",
        inset: -28,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(200,30,30,0.55) 0%, transparent 68%)",
        filter: "blur(16px)",
        pointerEvents: "none",
      }} />
      {/* Sphere */}
      <div style={{
        width: 140,
        height: 140,
        borderRadius: "50%",
        background: "radial-gradient(circle at 38% 32%, #e83535 0%, #c01818 45%, #880808 100%)",
        boxShadow: "0 0 40px rgba(200,20,20,0.65), 0 10px 32px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}>
        {children}
      </div>
    </div>
  );
}

export default function LadbrokesLogoAnimation() {
  const [showL, setShowL] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setShowL(v => !v), HOLD_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: "radial-gradient(ellipse at 50% 60%, #1a0608 0%, #080305 100%)" }}
    >
      <RedSphere>
        <AnimatePresence mode="wait">
          {!showL ? (
            <motion.div
              key="check"
              initial={{ opacity: 0, scale: 0.55 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.55 }}
              transition={{ duration: 0.32, ease }}
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <svg width="58" height="44" viewBox="0 0 58 44" fill="none">
                <path
                  d="M5 22L21 38L53 6"
                  stroke="white"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key="L"
              initial={{ opacity: 0, scale: 0.55 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.55 }}
              transition={{ duration: 0.32, ease }}
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <span style={{
                color: "white",
                fontSize: 64,
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: "-2px",
                fontFamily: "var(--font-sans)",
                userSelect: "none",
              }}>
                L
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </RedSphere>
    </div>
  );
}
