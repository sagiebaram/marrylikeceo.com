"use client";

import { motion } from "motion/react";
import { MessageCircle, Users, Music2, ArrowRight } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { COPY } from "@/constants/copy";

const InstagramIcon = ({ className, size = 18 }: { readonly className?: string; readonly size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ className, size = 18 }: { readonly className?: string; readonly size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const iconMap: Record<string, React.ComponentType<{ readonly className?: string; readonly size?: number }>> = {
  MessageCircle,
  Users,
  Instagram: InstagramIcon,
  Music2,
  Linkedin: LinkedinIcon,
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6 },
};

export const Community = () => {
  const { community } = COPY;

  return (
    <Section theme="light" id="community" className="text-center">
      <div className="mx-auto max-w-[1000px]">
        <motion.div {...fadeUp}>
          <Eyebrow color="crimson">{community.eyebrow}</Eyebrow>
        </motion.div>

        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 font-[family-name:var(--font-cormorant-garamond)] font-light text-[clamp(26px,3.5vw,38px)] text-[var(--text-dark)]"
        >
          {community.headline}
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 font-[family-name:var(--font-dm-sans)] font-light text-[var(--text-secondary)]"
        >
          {community.body}
        </motion.p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {community.channels.map((channel, i) => {
            const Icon = iconMap[channel.icon];
            return (
              <motion.a
                key={channel.name}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="flex min-w-[200px] items-center gap-3 rounded-sm border border-[var(--divider-dark)] bg-[var(--bg-dark)] px-7 py-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--gold)] hover:shadow-[0_0_20px_rgba(184,151,90,0.1)]"
              >
                {Icon && <Icon size={18} className="text-[var(--gold)]" />}
                <span className="flex-1 text-left font-[family-name:var(--font-dm-sans)] text-sm font-medium text-[var(--text-light)]">
                  {channel.name}
                </span>
                <ArrowRight size={14} className="text-[var(--text-secondary)]" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
