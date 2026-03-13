export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-white/5 bg-black">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-white/20">
          © {year} Lorenzo Grassi
        </span>
      </div>
    </footer>
  );
}
