import Footer from "../components/Footer.jsx";
import { projects } from "../data/projects.js";
import { prefetchProject } from "../utils/prefetch.js";

const thumbImgs = {
  patchwork: "/images/patchwork/thumbnail.png",
  wire: "/images/wire/thumbnail.png",
  tulip: "/images/tulip/thumbnail.png",
  kurti: "/images/kurti/thumbnail.png",
  lehenga: "/images/lehenga/thumbnail.png",
  velvet: "/images/velvet/thumbnail.png",
  navratri: "/images/navratri/thumbnail.png",
  suit: "/images/suit/thumbnail.png",
  khushi: "/images/khushi/thumbnail.png",
};

export default function Projects({ onProject }) {
  return (
    <section className="pt-17">
      <div className="projects-hero-header-inner px-8 md:px-15 pt-12 md:pt-20 pb-15 border-b border-rule flex items-end justify-between gap-10">
        <h1 className="display-title max-w-150">
          <em>Selected</em>
          <br />
          <span>Work</span>
        </h1>
        <p className="max-w-90 text-sm leading-[1.85] text-muted font-light">
          A body of work exploring material transformation, from reclaimed
          textile to sculptural wire, from raw cloth to painted surface. Each
          project is handmade, concept-driven, and rooted in Indian craft
          sensibility.
        </p>
      </div>

      <div className="px-8 md:px-15 pt-20 pb-20 md:pb-32">
        <div className="all-projects-grid">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} onProject={onProject} />
          ))}
        </div>
      </div>

      <Footer copy="Mumbai, India" />
    </section>
  );
}

function ProjectCard({ project: p, onProject }) {
  return (
    <div
      className="cursor-pointer overflow-hidden relative group"
      onMouseEnter={() => prefetchProject(p.images)}
      onClick={() => onProject(p.slug)}
    >
      <div className="overflow-hidden">
        <img
          className="w-full object-cover object-top block duration-500 ease-out saturate-85 group-hover:scale-[1.04] aspect-2/2.5"
          src={thumbImgs[p.slug]}
          alt={p.name}
        />
      </div>
      <div className="pt-5 pb-2">
        <p className="text-[10px] tracking-[0.22em] text-terracotta uppercase">
          {p.num} · {p.label.split("·")[0].trim()}
        </p>
        <p className="font-serif text-[22px] font-normal italic text-ink my-1">
          {p.name}
        </p>
        <p className="text-xs text-muted tracking-[0.04em]">{p.desc}</p>
      </div>
    </div>
  );
}
