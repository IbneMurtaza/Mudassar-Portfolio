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
  /** CSS aspect-ratio for this project's shot tiles, e.g. "750/1333". Defaults to 9/16 — set this when the App Store screenshots were captured on a device with a different aspect ratio, so tiles crop to fit instead of stretching/cropping content away. */
  shotAspect?: string;
};

export const projects: Project[] = [
  {
    name: "Ride Safr",
    org: "TGI Link",
    status: "Live",
    blurb:
      "Rider-facing app for TGI Link. Users book rides, view scheduled rides, and see routes with distance and time estimation on the map. Includes insurance-eligibility checks and access to health ride services. I work on new features and maintain existing functionality.",
    stack: ["Swift", "MVVM", "Google Maps", "REST APIs"],
    links: [{ label: "View on the App Store", href: "https://apps.apple.com/pk/app/ride-safr-care/id1151088240" }],
    shots: [
      { src: "/projects/ridesafr/shot-1.jpg", caption: "Request a ride" },
      { src: "/projects/ridesafr/shot-2.jpg", caption: "Select pickup point" },
      { src: "/projects/ridesafr/shot-3.jpg", caption: "Confirm drop-off location" },
      { src: "/projects/ridesafr/shot-4.jpg", caption: "Choose special requirement" },
      { src: "/projects/ridesafr/shot-5.jpg", caption: "Billing & insurance coverage" },
    ],
  },
  {
    name: "Drive Safr",
    org: "TGI Link",
    status: "Live",
    blurb:
      "Driver-facing counterpart to Ride Safr. Drivers view assigned rides and navigate to the customer's destination on the map. I built the application from scratch, migrating it from Objective-C to Swift.",
    stack: ["Swift", "MVVM", "Maps & Navigation", "Objective-C → Swift"],
    links: [{ label: "View on the App Store", href: "https://apps.apple.com/pk/app/drive-safr/id1150994305" }],
    shots: [
      { src: "/projects/drivesafr/shot-1.jpg", caption: "Online — view assigned rides" },
      { src: "/projects/drivesafr/shot-2.jpg", caption: "Confirm a scheduled ride" },
      { src: "/projects/drivesafr/shot-3.jpg", caption: "Chat with your rider" },
      { src: "/projects/drivesafr/shot-4.jpg", caption: "Emergency contacts" },
      { src: "/projects/drivesafr/shot-5.jpg", caption: "Navigate to destination" },
    ],
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
      { src: "/projects/grocerapp/shot-5.jpg", caption: "Brand partners" },
      { src: "/projects/grocerapp/shot-6.jpg", caption: "Live chat support" },
      { src: "/projects/grocerapp/shot-7.jpg", caption: "Payment options" },
    ],
  },
  {
    name: "AgeWiser AI",
    org: "TGI",
    status: "Shipped",
    dates: "2022 — Present",
    blurb:
      "Senior care and wellness app built from the ground up at TGI, including project structure and the network layer. Tracks mobility (gait speed, balance, range-of-motion exercises) and offers brain-training games to support cognitive health.",
    stack: ["Swift", "SwiftUI", "Clean Architecture", "Network Layer"],
    links: [{ label: "View on the App Store", href: "https://apps.apple.com/us/app/agewiser-ai-senior-care-app/id6468810140" }],
    shots: [
      { src: "/projects/agewiser/shot-1.jpg", caption: "Login" },
      { src: "/projects/agewiser/shot-2.jpg", caption: "Home" },
      { src: "/projects/agewiser/shot-3.jpg", caption: "Daily recommendation" },
      { src: "/projects/agewiser/shot-4.jpg", caption: "Brain games" },
    ],
  },
  {
    name: "CareWiser",
    org: "TGI",
    status: "Shipped",
    dates: "2022 — Present",
    blurb:
      "Care-giving app built from the ground up at TGI, including project structure and the network layer. Pairs an AI care-giver with real-time chat and voice messaging, plus structured functional assessments and results.",
    stack: ["Swift", "SwiftUI", "Clean Architecture", "Network Layer"],
    links: [{ label: "View on the App Store", href: "https://apps.apple.com/us/app/carewiser/id6651834761" }],
    shots: [
      { src: "/projects/carewiser/shot-1.jpg", caption: "Home" },
      { src: "/projects/carewiser/shot-2.jpg", caption: "Voice chat" },
      { src: "/projects/carewiser/shot-3.jpg", caption: "Chat" },
      { src: "/projects/carewiser/shot-4.jpg", caption: "Assessment" },
      { src: "/projects/carewiser/shot-5.jpg", caption: "Assessment results" },
    ],
  },
  {
    name: "NinjaHR",
    org: "TGI",
    status: "Shipped",
    dates: "2022 — Present",
    blurb:
      "Employee self-service HR app built from the ground up at TGI, including project structure and the network layer. Covers attendance tracking, a leave-management workflow, and a personal performance overview.",
    stack: ["Swift", "SwiftUI", "Clean Architecture", "Network Layer"],
    links: [{ label: "View on the App Store", href: "https://apps.apple.com/pk/app/ninjahr/id6529541006" }],
    shots: [
      { src: "/projects/ninjahr/shot-1.jpg", caption: "Overview" },
      { src: "/projects/ninjahr/shot-2.jpg", caption: "Leaves management" },
      { src: "/projects/ninjahr/shot-3.jpg", caption: "My attendance" },
      { src: "/projects/ninjahr/shot-4.jpg", caption: "Apply for leave" },
    ],
  },
  {
    name: "People-i",
    org: "People",
    status: "Shipped",
    blurb:
      "HR management app for People, an HR outsourcing provider across the Middle East and South Central Asia. Employees mark attendance with geo-location, apply for leave, expenses and travel, and managers review and approve requests — across employee, line-manager and HR portals.",
    stack: ["Swift", "Core Location", "REST APIs"],
    links: [{ label: "View on the App Store", href: "https://apps.apple.com/pk/app/people-i/id1536735821" }],
    shotAspect: "614/1334",
    shots: [
      { src: "/projects/peoplei/shot-1.jpg", caption: "Sign in" },
      { src: "/projects/peoplei/shot-2.jpg", caption: "Employee dashboard" },
      { src: "/projects/peoplei/shot-3.jpg", caption: "Apply for leave" },
      { src: "/projects/peoplei/shot-4.jpg", caption: "Geo-location attendance" },
      { src: "/projects/peoplei/shot-5.jpg", caption: "Attendance calendar & reports" },
      { src: "/projects/peoplei/shot-6.jpg", caption: "Manager approvals" },
      { src: "/projects/peoplei/shot-7.jpg", caption: "Team location tracking" },
    ],
  },
];
