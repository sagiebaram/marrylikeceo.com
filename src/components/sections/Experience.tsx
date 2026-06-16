"use client";

import { useEffect } from "react";
import { motion } from "motion/react";

import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { COPY } from "@/constants/copy";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6 },
};

export const Experience = () => {
  const { experience } = COPY;

  useEffect(() => {
    if (window.location.hash === "#retreat") {
      history.replaceState(null, "", "#experience");
    }
  }, []);

  return (
    <Section theme="ivory" id="experience">
      <div className="mx-auto max-w-[760px]">
        <motion.div {...fadeUp}>
          <Eyebrow color="crimson">{experience.eyebrow}</Eyebrow>
        </motion.div>

        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 font-[family-name:var(--font-cormorant-garamond)] font-light text-[clamp(28px,3.5vw,42px)] text-[var(--text-dark)]"
        >
          {experience.headline}
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 font-[family-name:var(--font-cormorant-garamond)] font-light italic text-[clamp(20px,2.4vw,28px)] text-[var(--text-dark)]"
        >
          {experience.headlineAccent}
        </motion.p>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 font-[family-name:var(--font-dm-sans)] font-light text-[17px] text-[#555]"
        >
          {experience.body}
        </motion.p>

        <motion.ul
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col gap-4"
        >
          {experience.details.map((detail) => (
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
          className="mt-8 font-[family-name:var(--font-cormorant-garamond)] text-[19px] italic text-[var(--text-secondary)]"
        >
          {experience.closing}
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 flex flex-col items-start gap-3"
        >
          <Button variant="primary" href={experience.ctaHref} target="_blank">
            {experience.cta}
          </Button>
          <p className="font-[family-name:var(--font-dm-sans)] text-xs text-[var(--text-secondary)]">
            {experience.micro}
          </p>
        </motion.div>
      </div>
    </Section>
  );
};
