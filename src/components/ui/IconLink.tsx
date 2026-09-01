import Link from "next/link";

export function IconLink({
  href,
  label,
  external,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      title={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border-3)] text-muted-2 transition-colors duration-200 hover:border-accent hover:text-accent"
    >
      {children}
    </Link>
  );
}
