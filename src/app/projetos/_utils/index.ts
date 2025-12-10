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
      "Um painel administrativo completo com gráficos em tempo real, gerenciamento de estoque e temas escuro/claro.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Recharts", "Stripe", "Clerk"],
    imageUrl: "/finance-ai.png",
    link: "https://finance-ai-rho-smoky.vercel.app",
    github: "https://github.com/lgustavo13/finance-ai",
  },
  {
    id: 2,
    title: "Notes",
    description:
      "Aplicação SaaS que utiliza IA generativa para criar imagens baseadas em prompts de texto do usuário.",
    tags: ["React", "TypeScript", "Tailwind"],
    imageUrl: "/notes.png",
    link: "https://notes-self-tau.vercel.app/",
    github: "https://github.com/lgustavo13/notes",
  },
  {
    id: 3,
    title: "Hamburgueria",
    description:
      "Aplicativo mobile-first para controle financeiro pessoal com sincronização em nuvem e modo offline.",
    tags: ["JavaScript", "HTML", "CSS", "tailwind"],
    imageUrl: "/hamburgueria.png",
    link: "https://hamburgueria-self-one.vercel.app/",
    github: "https://github.com/lgustavo13/hamburgueria",
  },
];
