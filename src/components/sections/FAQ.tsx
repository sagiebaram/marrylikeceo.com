"use client";

import { useState, useCallback } from "react";
import { motion } from "motion/react";

import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccordionItem } from "@/components/ui/Accordion";
import { FAQ_DATA } from "@/lib/faq-data";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6 },
};

export const FAQ = () => {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const handleToggle = useCallback((slug: string) => {
    setOpenSlug((prev) => (prev === slug ? null : slug));
  }, []);

  return (
    <Section theme="ivory" id="faq">
      <div className="mx-auto max-w-[800px]">
        <motion.div {...fadeUp} className="text-center">
          <Eyebrow color="crimson">FAQ</Eyebrow>
        </motion.div>

        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-center font-[family-name:var(--font-cormorant-garamond)] font-light text-[clamp(28px,3.5vw,42px)] text-[var(--text-dark)]"
        >
          Questions, answered.
        </motion.h2>

        <div className="mt-16 flex flex-col gap-12">
          {FAQ_DATA.map((category, catIdx) => (
            <motion.div
              key={category.slug}
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.15 + catIdx * 0.05 }}
            >
              <h3
                id={`faq-${category.slug}`}
                className="mb-2 font-[family-name:var(--font-cormorant-garamond)] text-[22px] font-light text-[var(--text-dark)] italic"
              >
                {category.title}
              </h3>

              <div>
                {category.items.map((item) => (
                  <AccordionItem
                    key={item.slug}
                    id={`faq-${item.slug}`}
                    question={item.question}
                    isOpen={openSlug === item.slug}
                    onToggle={() => handleToggle(item.slug)}
                  >
                    <div className="flex flex-col gap-4">
                      {item.answer.map((paragraph, pIdx) => (
                        <p
                          key={pIdx}
                          className="font-[family-name:var(--font-dm-sans)] font-light text-[15px] leading-relaxed text-[#555] whitespace-pre-line"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </AccordionItem>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
