"use client";

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

export const TheSystem = () => (
  <Section theme="ivory" id="the-system" className="overflow-hidden">
    <div className="relative grid gap-14 lg:grid-cols-12 lg:gap-20">
      {/* Sticky intro rail */}
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-32">
          <motion.div {...fadeUp(0)}>
            <Eyebrow color="crimson">{COPY.theSystem.eyebrow}</Eyebrow>
          </motion.div>

          <motion.h2
            {...fadeUp(0.1)}
            className="mt-7 font-[family-name:var(--font-cormorant-garamond)] font-light text-[clamp(38px,4.5vw,64px)] leading-[1.04] text-[var(--text-dark)]"
          >
            {COPY.theSystem.headline}
            <br />
            <em>{COPY.theSystem.headlineAccent}</em>
          </motion.h2>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-7 font-[family-name:var(--font-dm-sans)] font-light text-[16px] leading-relaxed text-[#555]"
          >
            {COPY.theSystem.body[0]}
          </motion.p>

          <motion.p
            {...fadeUp(0.28)}
            className="mt-4 font-[family-name:var(--font-dm-sans)] font-light text-[16px] leading-relaxed text-[#555]"
          >
            {COPY.theSystem.body[1]}{" "}
            <span className="font-medium text-[var(--text-dark)]">
              {COPY.theSystem.bodyClosing}
            </span>
          </motion.p>
        </div>
      </div>

      {/* Framework rows */}
      <div className="lg:col-span-8">
        <div className="flex flex-col">
          {COPY.theSystem.cards.map((card, i) => (
            <motion.div
              key={card.step}
              {...fadeUp(0.12 + i * 0.08)}
              className="group border-t border-[var(--divider-light)] py-10 transition-all duration-500 first:border-t-0 first:pt-0 hover:pl-4 lg:py-12"
            >
              <div className="flex items-start gap-7 lg:gap-10">
                <span className="font-[family-name:var(--font-cormorant-garamond)] text-[clamp(44px,4.5vw,64px)] font-light leading-[0.9] text-[var(--gold)] transition-colors duration-500">
                  {card.step}
                </span>
                <div className="pt-1.5">
                  <h3 className="font-[family-name:var(--font-cormorant-garamond)] text-[clamp(24px,2.4vw,32px)] font-normal leading-tight text-[var(--text-dark)]">
                    {card.title}
                  </h3>
                  <p className="mt-3 max-w-[480px] font-[family-name:var(--font-dm-sans)] font-light text-[16px] leading-relaxed text-[#555]">
                    {card.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);
