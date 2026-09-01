import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="relative flex flex-wrap items-center justify-between gap-3 border-t border-[color:var(--border-1)] px-5 py-[30px] text-[13.5px] text-muted sm:px-10">
      <div>
        {profile.name} — {profile.location}
      </div>
      <a href="#top" className="hover:text-accent">
        Back to top ↑
      </a>
    </footer>
  );
}
