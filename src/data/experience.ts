export type BulletLink = {
  label: string;
  href: string;
};

export type Job = {
  role: string;
  org: string;
  dates: string;
  place: string;
  bullets: string[];
  links?: BulletLink[];
};

export const jobs: Job[] = [
  {
    role: "Lead iOS Developer",
    org: "TGI",
    dates: "Aug 2022 — Present",
    place: "Lahore, Pakistan",
    bullets: [
      "Lead iOS engineering at TGI, building projects from the ground up and defining project structure and the network layer for each new app.",
      "Ship and maintain AgeWiser AI, CareWiser and NinjaHR on the App Store.",
      "Lead project initiatives and mentor junior developers, staying current with iOS and mobile development trends.",
    ],
    links: [
      { label: "AgeWiser AI", href: "https://apps.apple.com/us/app/agewiser-ai-senior-care-app/id6468810140" },
      { label: "CareWiser", href: "https://apps.apple.com/us/app/carewiser/id6651834761" },
      { label: "NinjaHR", href: "https://apps.apple.com/pk/app/ninjahr/id6529541006" },
    ],
  },
  {
    role: "Senior iOS Engineer",
    org: "GrocerApp",
    dates: "Sep 2020 — Jul 2022",
    place: "Lahore, Pakistan",
    bullets: [
      "Built and maintained GrocerApp, an e-commerce grocery app with 100K+ downloads and 4.5K+ ratings on the App Store.",
      "Instrumented analytics across Branch.io, Google Analytics, Facebook and CleverTap, and integrated Checkout and PayFast for card payments.",
      "Shipped the Flash Deals feature and the Grocer Club membership program, while maintaining a 99% crash-free rate on Firebase Crashlytics.",
    ],
    links: [{ label: "GrocerApp", href: "https://apps.apple.com/pk/app/grocer-app/id1119311709" }],
  },
  {
    role: "Junior iOS Developer",
    org: "Coding Pixel",
    dates: "Sep 2018 — Sep 2020",
    place: "Lahore, Pakistan",
    bullets: [
      "Built short-form video features for TikTok-style social apps — segmented capture, speed adjustment and music/audio editing.",
      "Integrated OneSignal push notifications and Socket.io for real-time one-to-one and group chat.",
      "Used the Stripe API to manage customer cards, including adding and deleting saved payment methods.",
    ],
  },
];
