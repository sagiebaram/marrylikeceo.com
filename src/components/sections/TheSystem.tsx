import { Target, DollarSign, Search, Heart } from "lucide-react";
import { motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { COPY } from "@/constants/copy";

const ICONS = { Target, DollarSign, Search, Heart } as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

export const TheSystem = () => (
  <Section theme="light" id="the-system">
    <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start flex-wrap">
      {/* Left column */}
      <div className="flex-1 min-w-[300px]">
        <motion.div {...fadeUp(0)}>
          <Eyebrow color="crimson">{COPY.theSystem.eyebrow}</Eyebrow>
        </motion.div>

        <motion.h2
          {...fadeUp(0.1)}
          className="mt-6 font-[family-name:var(--font-cormorant-garamond)] font-light text-[clamp(28px,3.5vw,42px)] text-[var(--text-dark)]"
        >
          {COPY.theSystem.headline}
          <br />
          <span className="italic">{COPY.theSystem.headlineAccent}</span>
        </motion.h2>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-6 font-[family-name:var(--font-dm-sans)] font-light text-[17px] text-[#555] leading-relaxed"
        >
          {COPY.theSystem.body[0]}
        </motion.p>

        <motion.p
          {...fadeUp(0.3)}
          className="mt-4 font-[family-name:var(--font-dm-sans)] font-light text-[17px] text-[#555] leading-relaxed"
        >
          {COPY.theSystem.body[1]}
          <br />
          <span className="font-medium text-[var(--text-dark)]">
            {COPY.theSystem.bodyClosing}
          </span>
        </motion.p>
      </div>

      {/* Right column — card grid */}
      <div className="flex-1 min-w-[300px] grid grid-cols-1 sm:grid-cols-2 gap-5">
        {COPY.theSystem.cards.map((card, i) => {
          const Icon = ICONS[card.icon as keyof typeof ICONS];
          return (
            <motion.div
              key={card.step}
              {...fadeUp(0.12 * i)}
              className="bg-[var(--bg-elevated)] rounded-sm p-8 border-t-2 border-[var(--gold)] hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon size={22} className="text-[var(--gold)]" />
                <span className="font-[family-name:var(--font-dm-sans)] font-medium text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
                  {card.step}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-dm-sans)] font-medium text-base text-[var(--text-light)]">
                {card.title}
              </h3>
              <p className="mt-2 font-[family-name:var(--font-dm-sans)] font-light text-sm text-[var(--text-secondary)] leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </Section>
);
