"use client";

import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/useReveal";

export function Reveal({
  className,
  delayMs = 0,
  children,
}: {
  className?: string;
  delayMs?: number;
  children: React.ReactNode;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn("reveal min-w-0", visible && "is-visible", className)}
      style={{ transitionDelay: delayMs ? `${delayMs}ms` : undefined }}
    >
      {children}
    </div>
  );
}
