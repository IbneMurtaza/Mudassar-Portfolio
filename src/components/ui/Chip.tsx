import { cn } from "@/lib/utils";

export function Chip({ className, children }: { className?: string; children: React.ReactNode }) {
  return <span className={cn("chip", className)}>{children}</span>;
}
