"use client";

import { useState, useEffect, useRef } from "react";

export default function Typewriter({ text, delay = 0, speed = 55, onComplete }: { text: string; delay?: number; speed?: number; onComplete?: () => void }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        onCompleteRef.current?.();
      }
    }, speed);
    return () => clearInterval(id);
  }, [started, text, speed]);

  const done = displayed.length === text.length;

  return (
    <span>
      {displayed}
      <span
        className="inline-block w-[2px] h-[1em] bg-current align-middle ml-[1px] translate-y-[-1px]"
        style={{
          opacity: done ? 0 : 1,
          animation: done ? "none" : "typewriter-cursor 0.7s step-start infinite",
        }}
      />
    </span>
  );
}
