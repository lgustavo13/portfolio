export const Footer = () => {
  return (
    <footer className="border-t border-slate-800/50 py-8 mt-12 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
        <p>&copy; 2024 DevPortfolio. Built with React & Tailwind.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-cyan-400 transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-cyan-400 transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-cyan-400 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
