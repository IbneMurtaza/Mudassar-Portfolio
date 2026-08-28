export type Stat = {
  value: number;
  suffix: string;
  decimals: number;
  label: string;
  note: string;
};

export const stats: Stat[] = [
  {
    value: 6,
    suffix: "+",
    decimals: 0,
    label: "Years of experience",
    note: "Native iOS development, from junior to lead engineer.",
  },
  {
    value: 100,
    suffix: "K+",
    decimals: 0,
    label: "App downloads",
    note: "GrocerApp, an e-commerce grocery app on the App Store.",
  },
  {
    value: 99,
    suffix: "%",
    decimals: 0,
    label: "Crash-free users",
    note: "Maintained on Firebase Crashlytics for GrocerApp.",
  },
  {
    value: 6,
    suffix: "+",
    decimals: 0,
    label: "Apps shipped",
    note: "Across TGI and GrocerApp, live on the App Store.",
  },
];
