"use client";

import { motion } from "motion/react";

import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { COPY } from "@/constants/copy";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6 },
};

export const Story = () => {
  const { story } = COPY;

  return (
    <Section theme="dark" id="story" className="border-t border-[var(--divider-dark)]">
      <div className="mx-auto max-w-[780px]">
        <motion.div {...fadeUp} className="text-center">
          <Eyebrow color="gold" className="text-center">
            {story.eyebrow}
          </Eyebrow>
        </motion.div>

        <motion.blockquote
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 text-center font-[family-name:var(--font-cormorant-garamond)] font-light italic text-[clamp(24px,3.5vw,36px)] leading-snug"
        >
          <span className="relative top-1 text-[1.4em] text-[var(--gold)]">&ldquo;</span>
          {story.quote}
          <span className="relative top-1 text-[1.4em] text-[var(--gold)]">&rdquo;</span>
        </motion.blockquote>

        <div className="mx-auto mt-12 max-w-[620px]">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-[family-name:var(--font-dm-sans)] font-light text-[17px] leading-relaxed text-[var(--text-secondary)]"
          >
            {story.paragraphs[0]}
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="py-4 text-center font-[family-name:var(--font-cormorant-garamond)] text-xl italic text-[var(--text-light)]"
          >
            {story.beat}
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-[family-name:var(--font-dm-sans)] font-light text-[17px] leading-relaxed text-[var(--text-secondary)]"
          >
            {story.paragraphs[1]}
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 font-[family-name:var(--font-dm-sans)] font-normal text-[17px] leading-relaxed text-[var(--text-light)]"
          >
            {story.paragraphs[2]}
            <br />
            <span className="text-[var(--gold)]">{story.closing}</span>
          </motion.p>
        </div>
      </div>
    </Section>
  );
};
