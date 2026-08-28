import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { interests, education } from "@/data/education";

export function Beyond() {
  return (
    <section id="beyond" className="band band-alt">
      <Container>
        <Reveal>
          <SectionHeading index="06" eyebrow="Beyond" title="The rest of me" />
        </Reveal>

        <div className="mt-[clamp(30px,5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-3.5">
          {interests.map((interest, i) => (
            <Reveal key={interest.title} delayMs={i * 50}>
              <div className="card p-6">
                <div className="font-serif text-2xl tracking-[-0.01em] italic">{interest.title}</div>
                <p className="mt-3.5 text-[15px] leading-[1.6] text-muted-2 text-pretty">{interest.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-3.5">
          {education.map((edu) => (
            <div key={edu.degree} className="flex justify-between gap-4 border-t border-[color:var(--border-1)] pt-[18px]">
              <div>
                <div className="text-[17px] font-medium">{edu.degree}</div>
                <div className="mt-1.5 text-sm text-muted-2">{edu.school}</div>
              </div>
              {edu.note ? (
                <div className="font-mono text-xs whitespace-nowrap text-muted">{edu.note}</div>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
