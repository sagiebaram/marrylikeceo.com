"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

interface HeelSketchProps {
  readonly className?: string;
}

/**
 * Hand-drawn stiletto line sketch — fashion-illustration style.
 * Strokes draw themselves in on scroll. Crimson is the single
 * accent; the ground swash stays gold.
 */
export const HeelSketch = ({ className }: HeelSketchProps) => {
  const stroke = (delay: number, duration: number) => ({
    initial: { pathLength: 0, opacity: 0 },
    whileInView: { pathLength: 1, opacity: 1 },
    viewport: { once: true, amount: 0.5 },
    transition: {
      pathLength: { duration, delay, ease: EASE },
      opacity: { duration: 0.01, delay },
    },
  });

  return (
    <svg
      viewBox="0 0 420 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-full", className)}
      role="img"
      aria-label="Line sketch of a crimson stiletto heel"
    >
      {/* Main silhouette — pointed toe, topline, counter, raked stiletto pin */}
      <motion.path
        {...stroke(0.2, 1.6)}
        d="M 28 206
           C 66 196, 104 180, 140 162
           C 180 142, 220 112, 248 92
           C 262 82, 282 72, 296 74
           C 308 76, 313 86, 313 100
           C 313 116, 311 126, 310 138
           C 313 158, 316 182, 318 206"
        stroke="var(--crimson)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* Sole — flat under the forefoot, arch rising to the heel breast */}
      <motion.path
        {...stroke(0.7, 1.2)}
        d="M 30 208
           C 62 211, 100 211, 138 208
           C 172 205, 200 196, 226 184
           C 252 172, 274 156, 288 146
           C 293 142, 296 140, 297 141"
        stroke="var(--crimson)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* Pin front edge — thin, tapering to the ground */}
      <motion.path
        {...stroke(1.5, 0.6)}
        d="M 296 141 C 301 160, 306 183, 311 206"
        stroke="var(--crimson)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Topline echo — loose second pass, hand-drawn imperfection */}
      <motion.path
        {...stroke(1.1, 0.9)}
        d="M 150 162
           C 192 143, 224 118, 246 96"
        stroke="var(--crimson)"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.45"
      />
      {/* Ground swash — gold flourish beneath */}
      <motion.path
        {...stroke(1.7, 1)}
        d="M 16 222 C 130 213, 270 213, 404 221"
        stroke="var(--gold)"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
};
