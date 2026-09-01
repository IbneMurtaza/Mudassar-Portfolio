import Image from "next/image";
import type { Project } from "@/data/projects";
import { Chip } from "@/components/ui/Chip";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card min-w-0 rounded-lg p-[clamp(22px,3vw,36px)]">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <div className="text-[clamp(24px,3vw,34px)] leading-[1.1] font-bold tracking-[-0.03em]">{project.name}</div>
          <div className="mt-2 text-[14.5px] text-muted-2">{project.org}</div>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-accent-ink">
            {project.status}
          </span>
          {project.dates ? (
            <span className="font-mono text-xs text-muted">{project.dates}</span>
          ) : null}
        </div>
      </div>

      <p className="mt-5 max-w-[70ch] text-base leading-[1.65] text-body text-pretty">{project.blurb}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Chip key={tech} className="text-[13px] text-muted-2">
            {tech}
          </Chip>
        ))}
      </div>

      {project.shots ? (
        <div className="shots-scroll mt-[26px] flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
          {project.shots.map((shot) => (
            <div key={shot.src} className="w-[140px] flex-none snap-start">
              <div
                className="relative aspect-[9/16] overflow-hidden rounded-[14px] border border-[color:var(--border-3)]"
                style={project.shotAspect ? { aspectRatio: project.shotAspect } : undefined}
              >
                <Image src={shot.src} alt={shot.caption} fill sizes="140px" className="object-cover" />
              </div>
              <div className="mt-[9px] text-[12.5px] leading-[1.4] text-muted">{shot.caption}</div>
            </div>
          ))}
        </div>
      ) : null}

      {project.links ? (
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-[color:var(--border-1)] pt-5">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13.5px] text-ink underline decoration-[color:var(--border-3)] underline-offset-4 hover:text-accent hover:decoration-accent"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
