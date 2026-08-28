export function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
}: {
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div>
      <p className="eyebrow">
        {index} — {eyebrow}
      </p>
      <h2 className="section-title">{title}</h2>
      {intro ? <p className="mt-[18px] max-w-[52ch] text-[17px] leading-[1.6] text-muted-2">{intro}</p> : null}
    </div>
  );
}
