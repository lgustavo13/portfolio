import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "./_utils";
import { ArrowRight } from "lucide-react";

export default function Projetos() {
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
        {PROJECTS.map((project) => (
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

            <Card className="h-[281px] bg-slate-900/50 backdrop-blur-md border border-slate-900 border-t-0 rounded-t-none hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col justify-between h-full">
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

                <div className="flex justify-between items-center">
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    target="_blank"
                  >
                    Ver Projeto
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                  {project.github && (
                    <Link
                      href={project.github}
                      className="inline-flex items-center text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                      target="_blank"
                    >
                      Ver Repositório
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
