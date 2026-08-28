import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="band">
      <Container>
        <Reveal>
          <SectionHeading index="03" eyebrow="Toolkit" title="What I work with" />
        </Reveal>
        <div className="mt-[clamp(30px,5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-3.5">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delayMs={i * 60}>
              <div className="card p-6">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                  <span className="font-mono text-xs tracking-[0.16em] text-ink uppercase">{group.title}</span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
