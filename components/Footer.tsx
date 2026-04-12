export default function Footer() {
  return (
    <footer className="bg-white border-t border-gl py-12">
      <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        <div className="gap-2 text-2xl md:text-3xl font-serif tracking-tighter font-bold">
          PraDha <span className="text-gold text-2xl md:text-3xl">.</span>
        </div>
        <p className="text-gray-500">
          © 2026 PraDha • Engineered with Precision
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gold">
            LinkedIn
          </a>
          <a href="#" className="hover:text-gold">
            GitHub
          </a>
          <a href="#" className="hover:text-gold">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
