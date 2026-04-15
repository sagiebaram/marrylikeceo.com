"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { COPY } from "@/constants/copy";

const STAGGER = 0.2;
const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: EASE },
});

export const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Section
      theme="dark"
      id="hero"
      className="!min-h-screen relative overflow-hidden !px-0 !py-0 lg:!px-0 lg:!py-0"
    >
      {/* Background image */}
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        className="object-cover object-center"
        priority
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, var(--bg-dark) 85%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center px-6 md:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <div className="md:ml-auto md:mr-[10%] md:max-w-xl text-center md:text-left">
            {mounted && (
              <>
                <motion.div {...fadeUp(0)}>
                  <Eyebrow color="gold">{COPY.hero.eyebrow}</Eyebrow>
                </motion.div>

                <motion.h1
                  {...fadeUp(STAGGER)}
                  className="mt-6 font-[family-name:var(--font-cormorant-garamond)] font-light text-[clamp(36px,5.5vw,64px)] leading-tight text-[var(--text-light)]"
                >
                  {COPY.hero.headline}
                  <br />
                  <span className="italic text-[var(--gold)]">
                    {COPY.hero.headlineAccent}
                  </span>
                </motion.h1>

                <motion.p
                  {...fadeUp(STAGGER * 2)}
                  className="mt-6 max-w-lg font-[family-name:var(--font-dm-sans)] font-light text-lg text-[var(--text-secondary)] md:mx-0 mx-auto"
                >
                  {COPY.hero.subhead}
                </motion.p>

                <motion.div {...fadeUp(STAGGER * 3)} className="mt-8">
                  <Button variant="primary" href="#retreat">
                    {COPY.hero.cta}
                  </Button>
                  <p className="mt-3 font-[family-name:var(--font-dm-sans)] text-xs text-[var(--text-secondary)]">
                    {COPY.hero.micro}
                  </p>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
        <Eyebrow color="gold" className="!text-[10px]">
          {COPY.hero.scrollLabel}
        </Eyebrow>
        <ChevronDown size={18} className="text-[var(--gold)] animate-float" />
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        :global(.animate-float) {
          animation: float 2.5s infinite ease-in-out;
        }
      `}</style>
    </Section>
  );
};
