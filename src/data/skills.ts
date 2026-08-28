export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "iOS Development",
    items: ["Swift", "Objective-C", "SwiftUI", "UIKit", "Combine", "MVC", "MVVM"],
  },
  {
    title: "Frameworks & Technologies",
    items: [
      "Core ML",
      "ARKit",
      "Google Maps",
      "Socket.io",
      "Firebase Crashlytics",
      "Stripe API",
      "In-App Purchases",
    ],
  },
  {
    title: "Testing & Quality",
    items: ["UI Testing", "Unit Testing", "Debugging", "Crash Monitoring", "Clean Code"],
  },
  {
    title: "Tools & Workflow",
    items: ["Xcode", "GitHub", "SourceTree", "Jira", "Slack", "Agile"],
  },
];
