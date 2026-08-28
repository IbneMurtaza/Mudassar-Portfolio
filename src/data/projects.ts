export type Shot = {
  src: string;
  caption: string;
};

export type Project = {
  name: string;
  org: string;
  status: string;
  dates?: string;
  blurb: string;
  stack: string[];
  links?: { label: string; href: string }[];
  shots?: Shot[];
};

export const projects: Project[] = [
  {
    name: "Ride Safr",
    org: "TGI Link",
    status: "Live",
    blurb:
      "Rider-facing app for TGI Link. Users book rides, view scheduled rides, and see routes with distance and time estimation on the map. Includes insurance-eligibility checks and access to health ride services. I work on new features and maintain existing functionality.",
    stack: ["Swift", "MVVM", "Google Maps", "REST APIs"],
  },
  {
    name: "Drive Safr",
    org: "TGI Link",
    status: "Live",
    blurb:
      "Driver-facing counterpart to Ride Safr. Drivers view assigned rides and navigate to the customer's destination on the map. I built the application from scratch, migrating it from Objective-C to Swift.",
    stack: ["Swift", "MVVM", "Maps & Navigation", "Objective-C → Swift"],
  },
  {
    name: "GrocerApp",
    org: "GrocerApp",
    status: "Shipped",
    dates: "2020 — 2022",
    blurb:
      "E-commerce grocery app with 100K+ downloads and 4.5K+ ratings on the App Store. I shipped the Flash Deals feature and the Grocer Club membership program, integrated Checkout and PayFast payments, and kept a 99% crash-free rate on Firebase Crashlytics.",
    stack: ["Swift", "UIKit", "Firebase Crashlytics", "PayFast", "Branch.io"],
    links: [{ label: "View on the App Store", href: "https://apps.apple.com/pk/app/grocer-app/id1119311709" }],
    shots: [
      { src: "/projects/grocerapp/shot-1.jpg", caption: "Home — groceries delivered to your door" },
      { src: "/projects/grocerapp/shot-2.jpg", caption: "Categories" },
      { src: "/projects/grocerapp/shot-3.jpg", caption: "Product & deals" },
      { src: "/projects/grocerapp/shot-4.jpg", caption: "Grocer Club membership" },
    ],
  },
  {
    name: "TGI App Suite",
    org: "TGI",
    status: "Shipped",
    dates: "2022 — Present",
    blurb:
      "AgeWiser AI (senior care), CareWiser and NinjaHR — three products built and shipped from the ground up at TGI, including project structure and the network layer for each app.",
    stack: ["Swift", "SwiftUI", "Clean Architecture", "Network Layer"],
    links: [
      { label: "AgeWiser AI", href: "https://apps.apple.com/us/app/agewiser-ai-senior-care-app/id6468810140" },
      { label: "CareWiser", href: "https://apps.apple.com/us/app/carewiser/id6651834761" },
      { label: "NinjaHR", href: "https://apps.apple.com/pk/app/ninjahr/id6529541006" },
    ],
    shots: [
      { src: "/projects/agewiser/shot-1.jpg", caption: "AgeWiser AI — login" },
      { src: "/projects/agewiser/shot-2.jpg", caption: "AgeWiser AI — home" },
      { src: "/projects/carewiser/shot-1.jpg", caption: "CareWiser — home" },
      { src: "/projects/carewiser/shot-2.jpg", caption: "CareWiser — voice chat" },
      { src: "/projects/ninjahr/shot-1.jpg", caption: "NinjaHR — overview" },
      { src: "/projects/ninjahr/shot-2.jpg", caption: "NinjaHR — leaves management" },
    ],
  },
];
