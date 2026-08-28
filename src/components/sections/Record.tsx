"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stats } from "@/data/stats";
import { siteConfig } from "@/data/config";
import { useCountUp } from "@/hooks/useCountUp";

export function Record() {
  const { ref, values } = useCountUp(
    stats.map((s) => s.value),
    siteConfig.animateCounters
  );

  return (
    <section id="record" className="band band-alt">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="Record"
          title="The numbers so far"
          intro="A quick look at six years of shipping native iOS apps."
        />
        <div
          ref={ref}
          className="mt-[clamp(30px,5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-3.5"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="card px-[22px] pt-[26px] pb-[22px]">
              <div className="text-[clamp(38px,5vw,56px)] leading-none font-bold tracking-[-0.04em]">
                {values[i].toFixed(stat.decimals)}
                {stat.suffix}
              </div>
              <div className="mt-3.5 font-mono text-xs tracking-[0.16em] text-accent uppercase">{stat.label}</div>
              <div className="mt-2 text-sm leading-[1.5] text-muted-2">{stat.note}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
