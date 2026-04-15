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
    cta: "Join the Community",
    ctaMicro: "Free WhatsApp group for ambitious women.",
    whatsappLink: "https://chat.whatsapp.com/PLACEHOLDER",
    retreatCta: "Join the Retreat Waitlist",
    retreatMicro: "Be first to know when the retreat + book launch in July.",
  },
  strategyGap: {
    eyebrow: "The Strategy Gap",
    headline: "You run due diligence on every hire.",
    headlineAccent: "Why not your next relationship?",
    paragraphs: [
      "You've closed deals, built teams, scaled businesses. You make sharp decisions in every room you walk into.",
      "But when it comes to love, you're operating without a system. No framework. No criteria. No conversion strategy.",
    ],
    closingBold: "You're not asking for too much.",
    closingAccent: "You're just missing a method.",
  },
  theSystem: {
    eyebrow: "The Methodology",
    headline: "Business frameworks.",
    headlineAccent: "Applied to love.",
    body: [
      "Marry Like a CEO is not dating advice. It's a system — the same one Ariel used to build a business that converts 50–75% of discovery calls, prices at 2–3x market rate, and scales with discipline.",
      "She applied it to her love life. It worked.",
    ],
    bodyClosing: "Now she teaches it.",
    cards: [
      {
        step: "01",
        icon: "Target",
        title: "Product-Market Fit",
        body: "Define exactly who you're looking for — and who's looking for you.",
      },
      {
        step: "02",
        icon: "DollarSign",
        title: "Pricing & Standards",
        body: "Know your value. Stop discounting yourself for the wrong market.",
      },
      {
        step: "03",
        icon: "Search",
        title: "The Discovery Process",
        body: "Run your dating life with the same rigor as a sales pipeline.",
      },
      {
        step: "04",
        icon: "Heart",
        title: "Conversion & Commitment",
        body: "From first date to forever — with a system, not a prayer.",
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
