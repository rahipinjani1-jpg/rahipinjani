export default function Footer({ copy = "Mumbai, India" }) {
  return (
    <footer className="border-t border-rule px-8 md:px-15 py-8 md:py-10 flex items-center justify-between">
      <span className="font-serif text-base italic text-muted">
        Rahi Pinjani
      </span>
      <span className="text-[11px] tracking-widest text-muted">
        © 2025 — {copy}
      </span>
    </footer>
  );
}
