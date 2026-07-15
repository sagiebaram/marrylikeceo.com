"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { COPY } from "@/constants/copy";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export const StrategyGap = () => (
  <Section theme="light" className="overflow-hidden py-20 lg:py-28 xl:py-32">
    <div className="relative max-w-[900px]">
      <motion.div {...fadeUp(0)} className="flex items-center gap-4">
        <span className="hairline-gold w-10 flex-none" aria-hidden="true" />
        <Eyebrow color="gold">{COPY.strategyGap.eyebrow}</Eyebrow>
      </motion.div>

      <motion.h2
        {...fadeUp(0.1)}
        className="mt-9 font-[family-name:var(--font-cormorant-garamond)] font-light text-[clamp(38px,6vw,80px)] leading-[1.04] tracking-[-0.01em] text-[var(--text-dark)]"
      >
        {COPY.strategyGap.headline}
        <br />
        <em>{COPY.strategyGap.headlineAccent}</em>
      </motion.h2>
    </div>

    <div className="relative mt-10 grid gap-10 md:grid-cols-12 lg:mt-14">
      <motion.p
        {...fadeUp(0.2)}
        className="font-[family-name:var(--font-dm-sans)] font-light text-[17px] leading-relaxed text-[#555] md:col-span-4 md:col-start-3"
      >
        {COPY.strategyGap.paragraphs[0]}
      </motion.p>

      <div className="md:col-span-4 md:col-start-8">
        <motion.p
          {...fadeUp(0.32)}
          className="font-[family-name:var(--font-dm-sans)] font-light text-[17px] leading-relaxed text-[#555]"
        >
          {COPY.strategyGap.paragraphs[1]}
        </motion.p>

        <motion.p
          {...fadeUp(0.45)}
          className="mt-8 text-right font-[family-name:var(--font-cormorant-garamond)] text-[clamp(24px,3.2vw,36px)] font-light leading-snug text-[var(--text-dark)]"
        >
          {COPY.strategyGap.closingBold}
          <br />
          <em className="text-[var(--gold)]">{COPY.strategyGap.closingAccent}</em>
        </motion.p>
      </div>

      {/* Hand-drawn heel illustration filling the open left column */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-[200px] md:col-span-5 md:col-start-1 md:mx-0 md:-mt-2 md:w-full md:max-w-[300px] md:pl-2"
        aria-hidden="true"
      >
        <Image
          src="/images/heel-illustration.png"
          alt=""
          width={880}
          height={787}
          className="h-auto w-full"
          sizes="(max-width: 768px) 240px, 380px"
        />
      </motion.div>
    </div>
  </Section>
);
