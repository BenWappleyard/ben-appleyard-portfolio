"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const HOLD_MS = 2200;
const SPIN = 0.28;
const ease = [0.4, 0, 0.2, 1] as const;

export default function LadbrokesShowcase() {
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setShowAfter((v) => !v), HOLD_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      style={{ perspective: "900px" }}
    >
      <AnimatePresence mode="wait">
        {!showAfter ? (
          <motion.div
            key="before"
            className="overflow-hidden rounded-[28px] flex-shrink-0"
            style={{
              height: "72%",
              aspectRatio: "390 / 844",
              boxShadow: "0 20px 60px rgba(0,0,0,0.55)",
            }}
            initial={{ rotateY: -90 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 90 }}
            transition={{ duration: SPIN, ease }}
          >
            <img
              src="/ladbrokes-before.png"
              alt="Before redesign"
              draggable={false}
              className="w-full h-full object-cover object-top select-none"
            />
          </motion.div>
        ) : (
          <motion.div
            key="after"
            className="overflow-hidden rounded-[28px] flex-shrink-0"
            style={{
              height: "90%",
              aspectRatio: "390 / 844",
              boxShadow: "0 24px 72px rgba(0,0,0,0.6)",
            }}
            initial={{ rotateY: -90, scale: 0.88 }}
            animate={{ rotateY: 0, scale: 1 }}
            exit={{ rotateY: 90 }}
            transition={{ duration: SPIN, ease }}
          >
            <img
              src="/ladbrokes-after.png"
              alt="After redesign"
              draggable={false}
              className="w-full h-full object-cover object-top select-none"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
