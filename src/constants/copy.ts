export const COPY = {
  nav: {
    links: [
      { label: "The System", href: "#the-system" },
      { label: "About", href: "#story" },
      { label: "Retreat", href: "#retreat" },
      { label: "Book", href: "#book" },
      { label: "Community", href: "#community" },
    ],
  },
  hero: {
    eyebrow: "For Ambitious Women",
    headline: "Stop Hoping.",
    headlineAccent: "Start Strategizing.",
    subhead:
      "You ran due diligence on your last hire. Why not your next relationship? Marry Like a CEO applies proven business frameworks to the most important partnership of your life.",
    cta: "Get the Strategy",
    micro: "Join 2,000+ women who stopped leaving love to chance.",
  },
  strategyGap: {
    eyebrow: "The Problem",
    headline: "Your Standards Aren't Too High.",
    headlineAccent: "Your Strategy Is Too Vague.",
    paragraphs: [
      "You've built a career with precision. Clear goals, measured outcomes, strategic moves. But when it comes to relationships, you're winging it.",
      "You swipe. You hope. You settle for 'good enough' — or you hold out indefinitely with no system for what you actually want.",
      "There's a better way. And it starts with treating your love life like the high-stakes decision it is.",
    ],
  },
  theSystem: {
    eyebrow: "The Framework",
    headline: "The CEO",
    headlineAccent: "Method",
    body: [
      "A proven, step-by-step system that takes you from 'I don't know what I want' to 'I know exactly what I'm building — and with whom.'",
    ],
    cards: [
      {
        step: "01",
        title: "Audit",
        body: "Map your relationship patterns, identify what's actually working, and define your non-negotiables with radical clarity.",
      },
      {
        step: "02",
        title: "Strategy",
        body: "Build your relationship roadmap — who you're looking for, where to find them, and how to evaluate fit without wasting time.",
      },
      {
        step: "03",
        title: "Execute",
        body: "Put the plan into action with weekly accountability, real-time coaching, and the frameworks to navigate every conversation.",
      },
      {
        step: "04",
        title: "Close",
        body: "Move from dating to commitment with confidence. Negotiate the relationship you actually want — not the one you stumbled into.",
      },
    ],
  },
  story: {
    eyebrow: "The Founder",
    quote:
      "I built a company, moved across continents, and still couldn't figure out dating — until I treated it like a business problem.",
    paragraphs: [
      "Ariel spent a decade building businesses in tech. She was strategic about everything — except her love life. After one too many relationships that 'just happened,' she decided to apply the same frameworks she used to scale startups to finding her partner.",
      "It worked. Within 18 months, she met and married the person she'd been looking for. Now she teaches other ambitious women to do the same.",
    ],
    beat: "This isn't theory. It's what she did — and what her clients repeat.",
  },
  retreat: {
    eyebrow: "Immersive Experience",
    headline: "The CEO",
    headlineAccent: "Retreat",
    body: "Three days of intensive strategy work in an intimate setting. Limited to 12 women. You'll leave with a complete relationship roadmap, a vetted peer network, and the clarity most people spend years chasing.",
    details: [
      { label: "Duration", value: "3 Days" },
      { label: "Group Size", value: "12 Women Max" },
      { label: "Location", value: "Tel Aviv" },
      { label: "Next Cohort", value: "Fall 2026" },
    ],
    micro: "Applications open soon.",
    form: {
      headline: "Get Early Access",
      subhead:
        "Be the first to know when applications open. Priority access for waitlist members.",
      cta: "Join the Waitlist",
    },
  },
  book: {
    eyebrow: "The Book",
    title: "Marry Like a CEO",
    subtitle: "The Strategic Woman's Guide to Finding Her Partner",
    body: "Everything from the coaching program, distilled into a step-by-step playbook. Coming soon.",
    cta: "Notify Me When It Drops",
  },
  community: {
    eyebrow: "The Network",
    headline: "Your Board of Advisors",
    body: "A private community of ambitious women navigating relationships with the same rigor they bring to their careers. Weekly strategy calls, curated resources, and the peer accountability that makes the system work.",
    channels: [
      { name: "Weekly Strategy Calls", description: "Live coaching with Ariel every Thursday." },
      { name: "Accountability Pods", description: "Small groups matched by stage and goals." },
      { name: "Resource Library", description: "Templates, scripts, and frameworks from the program." },
    ],
  },
  finalCta: {
    headline: "Your Next Move",
    headlineAccent: "Is Yours to Make.",
    subhead:
      "You've read the playbook. You know the system works. The only question left — are you ready to stop leaving the most important decision of your life to chance?",
    cta: "Start Your Strategy",
    hashtag: "#MarryLikeACEO",
  },
  footer: {
    tagline: "Strategic love. Intentional partnership. Zero guesswork.",
    email: "hello@marrylikeceo.com",
    copyright: `\u00A9 ${new Date().getFullYear()} Marry Like a CEO. All rights reserved.`,
  },
} as const;
