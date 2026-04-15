"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { COPY } from "@/constants/copy";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export const Hero = () => {

  return (
    <Section
      theme="dark"
      id="hero"
      className="!min-h-[75svh] md:!min-h-screen relative overflow-hidden !px-0 !py-0 lg:!px-0 lg:!py-0"
    >
      {/* Background image — dimmed on mobile, full clarity on desktop */}
      <Image
        src="/images/hero.jpg"
        alt="Marry Like a CEO"
        fill
        className="object-cover object-[70%_top] md:object-center opacity-30 md:opacity-100"
        priority
        sizes="100vw"
      />

      {/* Mobile gradient: transparent top → dark bottom for text readability */}
      <div
        className="absolute inset-0 pointer-events-none md:hidden"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 35%, var(--bg-dark) 65%)",
        }}
      />

      {/* Desktop gradient: subtle bottom fade for button readability */}
      <div
        className="absolute inset-x-0 bottom-0 h-48 pointer-events-none hidden md:block"
        style={{
          background:
            "linear-gradient(to top, var(--bg-dark) 0%, transparent 100%)",
        }}
      />

      {/* CTAs at bottom center */}
      <div className="absolute inset-x-0 bottom-12 z-10 flex flex-col items-center px-6 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: EASE }}
            className="flex flex-col sm:flex-row items-center gap-8"
          >
            <div className="flex flex-col items-center gap-2">
              <Button
                variant="primary"
                href={COPY.hero.whatsappLink}
                className="!px-10 !py-4 !text-base w-full md:w-auto"
              >
                {COPY.hero.cta}
              </Button>
              <p className="font-[family-name:var(--font-dm-sans)] text-xs text-[var(--text-secondary)]">
                {COPY.hero.ctaMicro}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button
                variant="secondary"
                href="#retreat"
                className="!px-10 !py-4 !text-base w-full md:w-auto"
              >
                {COPY.hero.retreatCta}
              </Button>
              <p className="font-[family-name:var(--font-dm-sans)] text-xs text-[var(--text-secondary)]">
                {COPY.hero.retreatMicro}
              </p>
            </div>
          </motion.div>
      </div>
    </Section>
  );
};
