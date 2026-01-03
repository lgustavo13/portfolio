type Translator = (key: string) => string;

export const getProjects = (t: Translator) => [
  {
    id: 1,
    title: "Finance AI",
    description: t("projects.finance_ai_description"),
    tags: ["Next.js", "TypeScript", "Tailwind", "Recharts", "Stripe", "Clerk"],
    imageUrl: "/finance-ai.png",
    link: "https://finance-ai-rho-smoky.vercel.app",
    github: "https://github.com/lgustavo13/finance-ai",
  },
  {
    id: 2,
    title: "EduManager",
    description: t("projects.edu_manager_description"),
    tags: ["React", "TypeScript", "Tailwind", "Vite", "Recharts"],
    imageUrl: "/eduManager.png",
    link: "https://edu-manager-vert.vercel.app/",
    github: "https://github.com/lgustavo13/eduManager",
  },
  {
    id: 3,
    title: "Notes",
    description: t("projects.notes_description"),
    tags: ["React", "TypeScript", "Tailwind"],
    imageUrl: "/notes.png",
    link: "https://notes-self-tau.vercel.app/",
    github: "https://github.com/lgustavo13/notes",
  },
  {
    id: 4,
    title: "Hamburgueria",
    description: t("projects.hamburgueria_description"),
    tags: ["JavaScript", "HTML", "CSS", "Tailwind"],
    imageUrl: "/hamburgueria.png",
    link: "https://hamburgueria-self-one.vercel.app/",
    github: "https://github.com/lgustavo13/hamburgueria",
  },
];
