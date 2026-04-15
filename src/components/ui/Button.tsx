import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  readonly variant?: ButtonVariant;
  readonly children: React.ReactNode;
  readonly onClick?: () => void;
  readonly className?: string;
  readonly href?: string;
  readonly type?: "button" | "submit";
  readonly disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--crimson)] text-white rounded-[2px] hover:bg-[var(--crimson-hover)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--crimson)]/25 transition-all duration-200",
  secondary:
    "border border-[var(--gold)] text-[var(--gold)] rounded-[2px] hover:bg-[var(--gold)] hover:text-white transition-all duration-200",
  ghost:
    "text-[var(--gold)] hover:underline underline-offset-4 transition-all duration-200",
};

export const Button = ({
  variant = "primary",
  children,
  onClick,
  className,
  href,
  type = "button",
  disabled,
}: ButtonProps) => {
  const styles = cn(
    "inline-flex items-center justify-center font-[family-name:var(--font-dm-sans)] font-medium text-sm tracking-wide px-8 py-3.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
    variantStyles[variant],
    className,
  );

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles} disabled={disabled}>
      {children}
    </button>
  );
};
