"use client";

import { motion } from "motion/react";

import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { EmailCapture } from "@/components/ui/EmailCapture";
import { COPY } from "@/constants/copy";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6 },
};

export const Retreat = () => {
  const { retreat } = COPY;

  return (
    <Section theme="ivory" id="retreat">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
        {/* Left column */}
        <div className="min-w-[280px] flex-1">
          <motion.div {...fadeUp}>
            <Eyebrow color="crimson">{retreat.eyebrow}</Eyebrow>
          </motion.div>

          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-[family-name:var(--font-cormorant-garamond)] font-light text-[clamp(28px,3.5vw,42px)] text-[var(--text-dark)]"
          >
            {retreat.headline}
            <br />
            <em>{retreat.headlineAccent}</em>
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 font-[family-name:var(--font-dm-sans)] font-light text-[17px] text-[#555]"
          >
            {retreat.body}
          </motion.p>

          <motion.ul
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col gap-4"
          >
            {retreat.details.map((detail) => (
              <li key={detail} className="flex items-start gap-3">
                <span className="text-[var(--crimson)]">&rarr;</span>
                <span className="font-[family-name:var(--font-dm-sans)] text-[15px] text-[var(--text-dark)]">
                  {detail}
                </span>
              </li>
            ))}
          </motion.ul>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 font-[family-name:var(--font-dm-sans)] text-sm italic text-[var(--text-secondary)]"
          >
            {retreat.micro}
          </motion.p>
        </div>

        {/* Right column */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="min-w-[280px] flex-1"
        >
          <div className="rounded-sm border border-[var(--divider-light)] bg-white p-11 shadow-lg shadow-black/5">
            <h3 className="mb-2 font-[family-name:var(--font-cormorant-garamond)] text-2xl font-light text-[var(--text-dark)]">
              {retreat.form.headline}
            </h3>

            <EmailCapture
              source="hero"
              variant="inline"
              showName={true}
              ctaText={retreat.form.cta}
              className="mt-6 flex-col! items-stretch!"
            />

            <p className="mt-4 font-[family-name:var(--font-dm-sans)] text-xs text-[var(--text-secondary)]">
              {retreat.form.privacy}
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
