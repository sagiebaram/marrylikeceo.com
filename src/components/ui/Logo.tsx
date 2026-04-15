import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  readonly className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <span
      className={cn(
        "inline-flex flex-row items-center gap-2 font-[family-name:var(--font-cormorant-garamond)] font-light text-2xl tracking-wide text-[var(--text-light)]",
        className,
      )}
    >
      <Image src="/images/logo-icon.svg" width={30} height={30} alt="MLCEO" />
      Marry Like a <span className="font-medium">CEO</span>
    </span>
  );
};
