export default function BackBtn({ onClick }) {
  return (
    <a
      onClick={onClick}
      className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase text-muted hover:text-terracotta no-underline cursor-pointer py-7 px-15 transition-colors duration-200 border-b border-rule w-full"
    >
      ← All Projects
    </a>
  );
}
