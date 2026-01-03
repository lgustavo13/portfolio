import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-start pt-20">
      <div className="space-y-4 animate-fade-in-up">
        <span className="text-cyan-400 font-medium tracking-wider text-sm uppercase bg-cyan-950/30 px-3 py-1 rounded-full border border-cyan-900/50">
          Disponível para novos projetos
        </span>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          Criando aplicações
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
            Web extraordinárias
          </span>
        </h1>

        <p className="max-w-xl text-slate-400 text-lg md:text-xl leading-relaxed mt-6">
          Sou um Desenvolvedor Front-end focado em construir interfaces
          modernas, performáticas e acessíveis utilizando a stack React e
          Next.js.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link
            href="/projetos"
            className="px-8 py-3 bg-white text-slate-950 font-semibold rounded-lg hover:bg-slate-200 transition-colors duration-200"
          >
            Ver Projetos
          </Link>
          <Link
            href="/contato"
            className="px-8 py-3 bg-transparent border border-slate-700 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors duration-200"
          >
            Contato
          </Link>
        </div>
      </div>

      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none opacity-30"></div>
    </section>
  );
}
