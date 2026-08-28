export const profile = {
  firstName: "Muhammad",
  lastName: "Mudassar",
  name: "Muhammad Mudassar",
  title: "Senior iOS Developer",
  tagline:
    "Senior iOS Developer building scalable, native mobile products — from the network layer to the App Store.",
  location: "Lahore, Punjab, Pakistan",
  email: "m.mudassarmurtaza@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/muhammad-mudassar-b580ba159/",
  linkedinLabel: "linkedin.com/in/muhammad-mudassar-b580ba159",
  resumeUrl: "/resume/Muhammad-Mudassar-CV.pdf",
  /** Set to e.g. "/portrait.jpg" (dropped in /public) to replace the hero's placeholder slot with a real photo. */
  portraitSrc: "/portrait.jpeg" as string | null,
  yearsExperience: 6,
} as const;

export const aboutContent = {
  paragraphs: [
    "I'm a Senior iOS Developer with 6 years of experience building native applications in Swift and Objective-C, currently leading iOS engineering at TGI in Lahore. I care about clean architecture, performance, and apps that hold up long after launch.",
    "My day-to-day spans SwiftUI, UIKit and MVVM, with the frameworks that round out a modern iOS app — Core ML, ARKit, Combine and Firebase Crashlytics — plus the release tooling that ships it: Xcode, Git and CI.",
  ],
  paragraphRight:
    "I lead projects from the ground up — defining structure and the network layer — mentor junior developers, and work in Agile teams that ship on a schedule.",
  quote:
    "Six years of shipping native iOS apps, from the first commit to the App Store.",
} as const;
