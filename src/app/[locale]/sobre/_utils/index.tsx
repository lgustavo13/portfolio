import { Lamp } from "@/src/components/icon/Lamp";
import { FolderKanban, MessagesSquare, RefreshCcw } from "lucide-react";

type Translator = (key: string) => string;

export const getHardSkills = (t: Translator) => [
  { name: "React / Next.js", category: "Frontend" },
  { name: "TypeScript", category: t("skills.categories.language") },
  {
    name: "Tailwind CSS / Bootstrap",
    category: t("skills.categories.styling"),
  },
  { name: "Node.js", category: "Backend" },
  { name: "Rest API", category: "API" },
  { name: "Figma", category: "Design" },
  { name: "Vitest / Cypress", category: t("skills.categories.testing") },
  { name: "Git / CI/CD", category: "DevOps" },
];

export const getSoftSkills = (t: Translator) => [
  {
    title: t("skills.soft.communication.title"),
    description: t("skills.soft.communication.description"),
    icon: <MessagesSquare />,
  },
  {
    title: t("skills.soft.problemSolving.title"),
    description: t("skills.soft.problemSolving.description"),
    icon: <Lamp />,
  },
  {
    title: t("skills.soft.adaptability.title"),
    description: t("skills.soft.adaptability.description"),
    icon: <RefreshCcw />,
  },
  {
    title: t("skills.soft.organization.title"),
    description: t("skills.soft.organization.description"),
    icon: <FolderKanban />,
  },
];
