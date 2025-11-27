import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

export default function Projetos() {
  const MOCK_PROJECTS: Project[] = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      description:
        "Um painel administrativo completo com gráficos em tempo real, gerenciamento de estoque e temas escuro/claro.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
      imageUrl: "https://picsum.photos/800/600?random=1",
      link: "#",
    },
    {
      id: 2,
      title: "AI Image Generator",
      description:
        "Aplicação SaaS que utiliza IA generativa para criar imagens baseadas em prompts de texto do usuário.",
      tags: ["React", "Gemini API", "Node.js", "Stripe"],
      imageUrl: "https://picsum.photos/800/600?random=2",
      link: "#",
    },
    {
      id: 3,
      title: "Finance Tracker App",
      description:
        "Aplicativo mobile-first para controle financeiro pessoal com sincronização em nuvem e modo offline.",
      tags: ["React Native", "Firebase", "Redux", "Expo"],
      imageUrl: "https://picsum.photos/800/600?random=3",
      link: "#",
    },
  ];

  return (
    <section className="py-20 animate-fade-in">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Meus Projetos
        </h2>
        <p className="text-slate-400 max-w-2xl">
          Uma coleção de trabalhos recentes que demonstram minha paixão por
          design e código de alta qualidade.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group glass-panel rounded-xl overflow-hidden"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent opacity-60"></div>
            </div>

            <Card className="bg-slate-900/50 backdrop-blur-md border border-slate-900 border-t-0 rounded-t-none hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.link}
                  className="inline-flex items-center text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Ver Projeto
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
