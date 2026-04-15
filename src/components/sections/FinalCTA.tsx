"use client";

import { motion } from "motion/react";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { COPY } from "@/constants/copy";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6 },
};

export const FinalCTA = () => {
  const { finalCta } = COPY;

  return (
    <Section
      theme="dark"
      className="relative overflow-hidden border-t border-[var(--divider-dark)] py-[140px]!"
    >
      {/* Atmospheric glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(193,39,45,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[640px] text-center">
        <motion.h2
          {...fadeUp}
          className="font-[family-name:var(--font-cormorant-garamond)] font-light text-[clamp(28px,4vw,46px)]"
        >
          {finalCta.headline}
          <br />
          <em className="text-[var(--gold)]">{finalCta.headlineAccent}</em>
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 font-[family-name:var(--font-dm-sans)] font-light text-lg text-[var(--text-secondary)]"
        >
          {finalCta.subhead}
        </motion.p>

        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="mt-10">
          <Button variant="primary" href="#retreat">
            {finalCta.cta}
          </Button>
        </motion.div>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 font-[family-name:var(--font-dm-sans)] text-sm font-medium tracking-[0.2em] text-[var(--gold)]/70"
        >
          {finalCta.hashtag}
        </motion.p>
      </div>
    </Section>
  );
};
