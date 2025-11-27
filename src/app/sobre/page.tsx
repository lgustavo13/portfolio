import Image from "next/image";

export default function Sobre() {
  const HARD_SKILLS = [
    { name: "React / Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Node.js", category: "Backend" },
    { name: "Rest API", category: "API" },
    { name: "Figma", category: "Design" },
    { name: "Jest / Testing Lib", category: "Testing" },
    { name: "Git / CI/CD", category: "DevOps" },
  ];

  const SOFT_SKILLS = [
    {
      title: "Comunicação Eficaz",
      description:
        "Habilidade de traduzir requisitos técnicos para stakeholders e colaborar com designers.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
      ),
    },
    {
      title: "Resolução de Problemas",
      description:
        "Pensamento analítico focado em encontrar soluções performáticas e escaláveis.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Adaptabilidade",
      description:
        "Facilidade em aprender novas stacks e se adaptar a mudanças rápidas de escopo.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
    {
      title: "Liderança Técnica",
      description:
        "Experiência em mentoria de desenvolvedores júnior e Code Reviews construtivos.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
  ];
  return (
    <section className="py-20 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Mais que código, <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
              construo soluções.
            </span>
          </h2>
          <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
            <p>
              Olá! Sou um Engenheiro de Software apaixonado pelo ecossistema
              Front-end. Com mais de 5 anos de experiência, especializei-me em
              criar interfaces que não são apenas bonitas, mas extremamente
              funcionais e acessíveis.
            </p>
            <p>
              Minha jornada começou com HTML e CSS básicos, evoluindo para
              arquiteturas complexas usando Next.js e renderização no servidor.
              Acredito que a tecnologia deve ser invisível, permitindo que o
              usuário atinja seus objetivos sem atrito.
            </p>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-linear-to-tr from-cyan-500 to-purple-600 rounded-2xl rotate-6 opacity-50 blur-lg"></div>
            <div className="relative w-full h-full bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <Image
                src="https://picsum.photos/400/400?grayscale"
                alt="Profile"
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>
          Hard Skills
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {HARD_SKILLS.map((skill, index) => (
            <div
              key={index}
              className="border-b border-white/10 bg-slate-900/50 backdrop-blur-md p-4 rounded-xl border hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all duration-300 group"
            >
              <div className="text-xs text-cyan-400 mb-1 font-medium tracking-wide uppercase">
                {skill.category}
              </div>
              <div className="font-bold text-slate-200 group-hover:text-white">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
          Soft Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SOFT_SKILLS.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 flex gap-4 hover:bg-slate-800/50 transition-colors"
            >
              <div className="shrink-0 w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-purple-400">
                {skill.icon}
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {skill.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
