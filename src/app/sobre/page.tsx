import Image from "next/image";
import { HARD_SKILLS, SOFT_SKILLS } from "./_utils";

export default function Sobre() {
  return (
    <section className="py-20 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Transformando ideias em <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
              aplicações web robustas e acessíveis.
            </span>
          </h2>
          <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
            <p>
              Olá! Sou desenvolvedor Front-end com mais de 4 anos de
              experiência, especializado em transformar ideias complexas em
              aplicações web de alta performance. Meu foco é garantir que cada
              interface seja intuitiva, acessível e capaz de escalar conforme o
              seu negócio cresce.
            </p>
            <p>
              Por vir de uma base sólida em QA, trago um olhar crítico para a
              qualidade do código e atenção minuciosa aos detalhes. Trabalho
              principalmente com o ecossistema React, Next.js e TypeScript,
              garantindo que cada solução seja robusta, testada e pronta para o
              mercado.
            </p>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-linear-to-tr from-cyan-500 to-purple-600 rounded-2xl rotate-6 opacity-50 blur-lg"></div>
            <div className="relative w-full h-full bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <Image
                src="/profile.jpg"
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
