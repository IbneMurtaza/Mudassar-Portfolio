import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/config";

export function Projects() {
  const columns =
    siteConfig.projectLayout === "grid" ? "repeat(auto-fit,minmax(420px,1fr))" : "1fr";

  return (
    <section id="projects" className="band">
      <Container>
        <Reveal>
          <SectionHeading
            index="05"
            eyebrow="Projects"
            title="Things I've built"
            intro="Native iOS products I've shipped or maintained end to end, from ride-hailing to e-commerce."
          />
        </Reveal>
        <div
          className="mt-[clamp(30px,5vw,56px)] grid gap-4"
          style={{ gridTemplateColumns: columns }}
        >
          {projects.map((project, i) => (
            <Reveal key={project.name} delayMs={i * 60}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
