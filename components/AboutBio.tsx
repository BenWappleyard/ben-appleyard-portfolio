"use client";

import { useState } from "react";
import Typewriter from "@/components/Typewriter";

const rest = `

I am a senior/lead designer who is firmly invested in product strategy and thoughtful utilisation of technology.

My aim is to help create and nurture high-performing environments that solve problems, drive business value, delight people, generate growth and influence culture.

I've been lucky to work with people all over the world in a range of environments, from FTSE100 organisations to small start-ups.

I believe in humility and curiosity but take pride in responsibility and intent. I've enjoyed the wins and always try to learn from the failures.`;

export default function AboutBio() {
  const [done, setDone] = useState(false);

  return (
    <div
      className="text-[17px] text-[#444] dark:text-[#bbb] leading-[175%]"
      style={{ whiteSpace: "pre-wrap" }}
    >
      <Typewriter text="Hi, I'm Ben." delay={300} speed={60} onComplete={() => setDone(true)} />
      <span
        style={{
          opacity: done ? 1 : 0,
          transition: "opacity 1.4s ease",
        }}
      >
        {rest}
      </span>
    </div>
  );
}
