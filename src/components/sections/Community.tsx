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
    <Section
      theme="light"
      id="community"
      className="relative overflow-hidden text-center"
    >
      {/* Soft warm glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[440px] w-[760px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(184,151,90,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1040px]">
        <motion.div {...fadeUp}>
          <Eyebrow color="crimson">{community.eyebrow}</Eyebrow>
        </motion.div>

        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 font-[family-name:var(--font-cormorant-garamond)] font-light text-[clamp(28px,3.8vw,42px)] text-[var(--text-dark)]"
        >
          {community.headline}
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-4 max-w-[520px] font-[family-name:var(--font-dm-sans)] font-light text-[var(--text-secondary)]"
        >
          {community.body}
        </motion.p>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
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
                className="group flex flex-col items-center gap-4 rounded-md border border-[var(--divider-light)] bg-white px-6 py-9 shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--gold)] hover:shadow-[0_18px_44px_rgba(184,151,90,0.22)]"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--bg-dark)] text-[var(--gold)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[var(--crimson)] group-hover:text-white">
                  {Icon && <Icon size={24} />}
                </span>
                <span className="font-[family-name:var(--font-dm-sans)] text-sm font-medium text-[var(--text-dark)]">
                  {channel.name}
                </span>
                <span className="flex items-center gap-1.5 font-[family-name:var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--text-secondary)] transition-colors duration-300 group-hover:text-[var(--crimson)]">
                  Follow
                  <ArrowRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
