import { cn } from "@/lib/utils";

interface LogoProps {
  readonly className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <span
      className={cn(
        "font-[family-name:var(--font-cormorant-garamond)] font-light text-2xl tracking-wide text-[var(--text-light)]",
        className,
      )}
    >
      Marry Like a CEO
    </span>
  );
};
