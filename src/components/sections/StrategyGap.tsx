import { motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { COPY } from "@/constants/copy";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

export const StrategyGap = () => (
  <Section theme="dark" className="border-t border-[var(--divider-dark)]">
    <div className="mx-auto max-w-[680px] text-center">
      <motion.div {...fadeUp(0)}>
        <Eyebrow color="gold">{COPY.strategyGap.eyebrow}</Eyebrow>
      </motion.div>

      <motion.h2
        {...fadeUp(0.1)}
        className="mt-6 font-[family-name:var(--font-cormorant-garamond)] font-light text-[clamp(28px,4vw,42px)] leading-tight"
      >
        {COPY.strategyGap.headline}
        <br />
        <span className="italic">{COPY.strategyGap.headlineAccent}</span>
      </motion.h2>

      {COPY.strategyGap.paragraphs.map((p, i) => (
        <motion.p
          key={i}
          {...fadeUp(0.2 + i * 0.1)}
          className="mt-6 font-[family-name:var(--font-dm-sans)] font-light text-[17px] text-[var(--text-secondary)] leading-relaxed"
        >
          {p}
        </motion.p>
      ))}

      <motion.p
        {...fadeUp(0.2 + COPY.strategyGap.paragraphs.length * 0.1)}
        className="mt-6 font-[family-name:var(--font-dm-sans)] text-[17px] leading-relaxed text-[var(--text-light)]"
      >
        {COPY.strategyGap.closingBold}
        <br />
        <span className="text-[var(--gold)]">
          {COPY.strategyGap.closingAccent}
        </span>
      </motion.p>
    </div>
  </Section>
);
