interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  github?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Finance AI",
    description:
      "Um sistema de gerenciamento financeiro que utiliza IA para gerar insights e dicas de como melhorar sua vida financeira.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Recharts", "Stripe", "Clerk"],
    imageUrl: "/finance-ai.png",
    link: "https://finance-ai-rho-smoky.vercel.app",
    github: "https://github.com/lgustavo13/finance-ai",
  },
  {
    id: 2,
    title: "Notes",
    description:
      "Um bloco de notas que tem a funcionalidade de comando de voz para digitar suas notas.",
    tags: ["React", "TypeScript", "Tailwind"],
    imageUrl: "/notes.png",
    link: "https://notes-self-tau.vercel.app/",
    github: "https://github.com/lgustavo13/notes",
  },
  {
    id: 3,
    title: "Hamburgueria",
    description: "Aplicativo de hamburgueria usando JavaScript puro.",
    tags: ["JavaScript", "HTML", "CSS", "Tailwind"],
    imageUrl: "/hamburgueria.png",
    link: "https://hamburgueria-self-one.vercel.app/",
    github: "https://github.com/lgustavo13/hamburgueria",
  },
  {
    id: 4,
    title: "EduManager",
    description: "Aplicativo escolar de gerenciamento de estudantes.",
    tags: ["React", "TypeScript", "Tailwind", "Vite", "Recharts"],
    imageUrl: "/eduManager.png",
    link: "https://edu-manager-vert.vercel.app/",
    github: "https://github.com/lgustavo13/eduManager",
  },
];
