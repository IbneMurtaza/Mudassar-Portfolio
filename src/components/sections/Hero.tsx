import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <header className="mx-auto max-w-[1180px] px-[clamp(20px,5vw,72px)] pt-[clamp(56px,12vh,130px)] pb-[clamp(56px,10vh,110px)]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-end gap-[clamp(28px,5vw,64px)]">
        <div className="min-w-0 @container [animation:rise_0.7s_ease_both]">
          <p className="font-mono text-[11.5px] tracking-[0.22em] text-accent uppercase">{profile.title}</p>
          <h1
            lang="en"
            className="mt-[22px] [hyphens:auto] text-[clamp(52px,16cqw,124px)] leading-[0.86] font-bold tracking-[-0.045em] break-words text-balance"
          >
            {profile.firstName}
            <br />
            {profile.lastName}
            <span className="text-accent">.</span>
          </h1>
          <p className="mt-[26px] max-w-[30ch] font-serif text-[clamp(19px,2.4vw,26px)] leading-[1.35] text-body italic">
            {profile.tagline}
          </p>
          <div className="mt-[34px] flex flex-wrap gap-2.5">
            <Button href="#about" variant="primary">
              Discover
            </Button>
            <Button href="#contact" variant="secondary">
              Get in touch
            </Button>
          </div>
        </div>

        <div className="min-w-0 [animation:rise_0.9s_ease_both]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[4px]">
            {profile.portraitSrc ? (
              <Image
                src={profile.portraitSrc}
                alt={profile.name}
                fill
                priority
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            ) : (
              <div className="hatch-slot flex h-full items-end p-[18px]">
                <span className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">Portrait — 4:5</span>
              </div>
            )}
          </div>
          <div className="mt-[18px] grid gap-2 text-sm text-muted-2">
            <a href={`mailto:${profile.email}`} className="w-fit">
              {profile.email}
            </a>
            <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="w-fit">
              LinkedIn
            </a>
            <div>{profile.location}</div>
          </div>
        </div>
      </div>
    </header>
  );
}
