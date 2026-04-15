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

export const Book = () => {
  const { book } = COPY;

  return (
    <Section theme="dark" id="book" className="border-t border-[var(--divider-dark)] text-center">
      <div className="mx-auto max-w-[620px]">
        <motion.div {...fadeUp}>
          <Eyebrow color="gold">{book.eyebrow}</Eyebrow>
        </motion.div>

        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 font-[family-name:var(--font-cormorant-garamond)] font-light text-[clamp(36px,5vw,56px)]"
        >
          {book.title}
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-2 font-[family-name:var(--font-cormorant-garamond)] italic text-[clamp(16px,2vw,22px)] text-[var(--text-secondary)]"
        >
          {book.subtitle}
        </motion.p>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 font-[family-name:var(--font-dm-sans)] font-light text-[17px] text-[var(--text-secondary)]"
        >
          {book.body}
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-10 max-w-[440px]"
        >
          <EmailCapture
            source="book"
            variant="inline"
            showName={false}
            ctaText={book.cta}
          />
        </motion.div>
      </div>
    </Section>
  );
};
