import { Logo } from "@/components/ui/Logo";
import { Section } from "@/components/ui/Section";

export const Navbar = () => (
  <Section theme="dark" className="!py-4 lg:!py-4">
    <nav className="flex items-center justify-between">
      <Logo />
    </nav>
  </Section>
);
