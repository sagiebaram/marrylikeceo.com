"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { COPY } from "@/constants/copy";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

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
      {/* Background image — no overlay, full clarity */}
      <Image
        src="/images/hero.jpg"
        alt="Marry Like a CEO"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Subtle bottom gradient for button readability */}
      <div
        className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, var(--bg-dark) 0%, transparent 100%)",
        }}
      />

      {/* CTA at bottom center */}
      <div className="absolute inset-x-0 bottom-16 z-10 flex flex-col items-center gap-4">
        {mounted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: EASE }}
            className="flex flex-col items-center gap-3"
          >
            <Button
              variant="primary"
              href={COPY.hero.whatsappLink}
              className="!px-10 !py-4 !text-base"
            >
              {COPY.hero.cta}
            </Button>
            <p className="font-[family-name:var(--font-dm-sans)] text-xs text-[var(--text-secondary)]">
              {COPY.hero.micro}
            </p>
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-40">
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
