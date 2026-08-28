import type { Job } from "@/data/experience";

export function ExperienceRow({ job }: { job: Job }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[clamp(18px,3vw,48px)] border-t border-[color:var(--border-1)] py-[clamp(26px,4vw,40px)]">
      <div>
        <div className="text-[clamp(21px,2.4vw,27px)] leading-[1.2] font-medium tracking-[-0.02em]">{job.role}</div>
        <div className="mt-2 text-[15px] text-accent">{job.org}</div>
        <div className="mt-3.5 font-mono text-xs tracking-[0.08em] text-muted">{job.dates}</div>
        <div className="mt-1.5 text-[13.5px] text-muted">{job.place}</div>
      </div>
      <div className="col-span-2 min-w-0">
        <div className="grid gap-3">
          {job.bullets.map((bullet) => (
            <div key={bullet} className="grid grid-cols-[16px_1fr] gap-2.5 text-[15.5px] leading-[1.6] text-body text-pretty">
              <span className="text-marker" aria-hidden="true">
                —
              </span>
              <span>{bullet}</span>
            </div>
          ))}
        </div>
        {job.links ? (
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            {job.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12.5px] tracking-[0.04em] text-muted-2 underline decoration-[color:var(--border-3)] underline-offset-4 hover:text-accent hover:decoration-accent"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
