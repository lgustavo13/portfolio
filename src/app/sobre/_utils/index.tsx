import { Lamp } from "@/src/components/icon/Lamp";
import { FolderKanban, MessagesSquare, RefreshCcw } from "lucide-react";

export const HARD_SKILLS = [
  { name: "React / Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS / Bootstrap", category: "Styling" },
  { name: "Node.js", category: "Backend" },
  { name: "Rest API", category: "API" },
  { name: "Figma", category: "Design" },
  { name: "Vitest / Cypress", category: "Testing" },
  { name: "Git / CI/CD", category: "DevOps" },
];

export const SOFT_SKILLS = [
  {
    title: "Comunicação Eficaz",
    description:
      "Habilidade de traduzir requisitos técnicos e colaborar com designers.",
    icon: <MessagesSquare />,
  },
  {
    title: "Resolução de Problemas",
    description:
      "Pensamento analítico focado em encontrar soluções performáticas e escaláveis.",
    icon: <Lamp />,
  },
  {
    title: "Adaptabilidade",
    description:
      "Facilidade em aprender novas stacks e se adaptar a mudanças de escopo.",
    icon: <RefreshCcw />,
  },
  {
    title: "Organização",
    description: "Organização de projetos e gerenciamento de tempo.",
    icon: <FolderKanban />,
  },
];
