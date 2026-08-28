import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { aboutContent } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="band">
      <Container>
        <Reveal>
          <SectionHeading index="01" eyebrow="About" title="Who I am" />
        </Reveal>
        <div className="mt-[clamp(30px,5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(24px,4vw,56px)]">
          <Reveal delayMs={80}>
            <div className="grid gap-5 text-[clamp(16px,1.5vw,18.5px)] leading-[1.65] text-body text-pretty">
              {aboutContent.paragraphs.map((p) => (
                <p key={p} className="m-0">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delayMs={160}>
            <div className="grid gap-5 text-[clamp(16px,1.5vw,18.5px)] leading-[1.65] text-body text-pretty">
              <p className="m-0">{aboutContent.paragraphRight}</p>
              <blockquote className="border-l-2 border-accent pl-[18px] font-serif text-[clamp(19px,2.2vw,25px)] leading-[1.35] text-ink italic">
                {aboutContent.quote}
              </blockquote>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
