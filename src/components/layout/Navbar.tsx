"use client";

import { navItems, sectionIds } from "@/data/nav";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

export function Navbar() {
  const active = useActiveSection(sectionIds);

  return (
    <nav className="sticky top-0 z-50 flex justify-center px-4 py-3.5 backdrop-blur-[14px] [background:linear-gradient(#100f0dee,#100f0d99)] sm:px-10">
      <div className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-[color:var(--border-2)] bg-[var(--fill-2)] p-1.5">
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "whitespace-nowrap rounded-full px-3.5 py-2 text-[13.5px] tracking-[0.01em] transition-colors duration-200",
                isActive ? "bg-ink text-accent-ink" : "text-body hover:text-accent"
              )}
            >
              {item.label}
            </a>
          );
        })}
        <a
          href="#contact"
          className="whitespace-nowrap rounded-full bg-accent px-4 py-2 text-[13.5px] font-medium text-accent-ink"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
