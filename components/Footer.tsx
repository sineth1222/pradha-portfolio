export default function Footer() {
  return (
    <footer className="bg-white border-t border-gl py-12">
      <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        <div className="font-serif text-xl">PraDha</div>
        <p className="text-gray-500">
          © 2026 Sineth Mashenka • Engineered with Precision
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
