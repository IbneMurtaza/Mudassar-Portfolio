import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ExperienceRow } from "@/components/sections/ExperienceRow";
import { jobs } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="band band-alt">
      <Container>
        <Reveal>
          <SectionHeading index="04" eyebrow="Experience" title="Where I've worked" />
        </Reveal>
        <div className="mt-[clamp(30px,5vw,56px)] grid">
          {jobs.map((job, i) => (
            <Reveal key={job.role + job.org} delayMs={i * 60}>
              <ExperienceRow job={job} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
