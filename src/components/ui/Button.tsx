import Link from "next/link";
import { cn } from "@/lib/utils";

type CommonProps = {
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className">;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-[22px] py-3 text-sm font-medium transition-colors duration-200";
const variants = {
  primary: "bg-ink text-accent-ink hover:bg-accent",
  secondary: "border border-[color:var(--border-5)] text-ink hover:border-accent hover:text-accent",
};

export function Button({ href, variant = "primary", className, children, ...rest }: ButtonAsLink) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], className)}
      {...(isExternal ? { target: href.startsWith("mailto:") ? undefined : "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </Link>
  );
}
