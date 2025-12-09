import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-slate-800/50 py-8 mt-12 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} DevPortfolio. Todos os direitos
          reservados.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link
            href="https://github.com/lgustavo13"
            target="_blank"
            className="hover:text-cyan-400 transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/luiz-gustavo-silva-194b6b1a1/"
            target="_blank"
            className="hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
};
