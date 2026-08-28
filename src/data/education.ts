export type Education = {
  degree: string;
  school: string;
  note?: string;
};

export const education: Education[] = [
  { degree: "BSc in Information Technology", school: "University of the Punjab" },
  { degree: "FSc Pre-Engineering", school: "Punjab College of Science" },
];

export type Interest = {
  title: string;
  body: string;
};

export const interests: Interest[] = [
  { title: "Chess", body: "Plays chess in his downtime — a natural fit for the pattern-first thinking of iOS architecture." },
  { title: "Cricket", body: "Follows and plays cricket." },
  { title: "Gardening", body: "Keeps a small garden going alongside a full engineering schedule." },
  { title: "Badminton", body: "Plays badminton to stay active outside of work." },
  {
    title: "Recognition",
    body: "Recipient of a laptop under the Prime Minister's Laptop Scheme, Government of Pakistan.",
  },
];
