
import { cn } from "@/lib/utils";

type MonogramLogoProps = {
  className?: string;
};

export function MonogramLogo({ className }: MonogramLogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-current", className)}
      aria-label="Ananya Pande logo"
    >
      <path d="M20 90 L45 10 L50 10 L50 90 L45 90 L45 15 L24 90 Z M55 90 L55 10 L80 10 L80 15 L60 15 L60 47.5 L78 47.5 L78 52.5 L60 52.5 L60 85 L80 85 L80 90 Z" />
    </svg>
  );
}
