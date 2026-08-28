export type NavItem = {
  id: string;
  label: string;
};

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "record", label: "Record" },
  { id: "skills", label: "Toolkit" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "beyond", label: "Beyond" },
];

export const sectionIds = [...navItems.map((n) => n.id), "contact"];
