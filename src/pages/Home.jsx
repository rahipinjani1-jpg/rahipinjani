import React from "react";
import Footer from "../components/Footer.jsx";
import { projects } from "../data/projects.js";
import { prefetchProject } from "../utils/prefetch.js";

const previewImgs = {
  patchwork: "/images/patchwork/thumbnail.png",
  wire: "/images/wire/thumbnail.png",
  tulip: "/images/tulip/thumbnail.png",
};

export default function Home({ onNav, onProject }) {
  const featured = projects.slice(0, 3);

  return (
    <section>
      {/* HERO */}
      <div className="flex flex-col md:flex-row md:justify-between h-full pt-6 md:pt-6 lg:pt-10 px-8 md:px-15 w-full">
        <div className="flex flex-col items-center justify-center py-20 w-full">
          <p className="text-center md:text-left text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-terracotta mb-6 md:mb-6 font-normal">
            Fashion Designer &amp; <br className="md:hidden" /> Creative Maker
          </p>
          <h1
            className="flex items-center gap-4 text-center md:text-left font-serif font-medium leading-[0.95] text-ink mb-6 md:mb-6 tracking-[-0.01em]"
            style={{ fontSize: "clamp(52px, 6vw, 86px)" }}
          >
            Rahi
            <img
              className="hidden md:block md:w-40 lg:w-60"
              src="/images/hero.png"
              alt=""
            />
            <em className="italic font-light text-terracotta"> Pinjani</em>
          </h1>
          <p className="text-center text-sm font-light leading-[1.9] text-muted max-w-120 mb-8 md:mb-8">
            Crafting wearable stories from discarded cloth, bent wire, and
            hand-applied paint. A designer who thinks with her hands, and
            finishes with intention.
          </p>
          <img
            className="w-110 h-auto object-contain sm:block md:hidden mb-12"
            src="/images/hero.png"
            alt="Rahi Pinjani"
          />
          <div className="flex sm:w-full md:w-fit justify-center items-center">
            <a
              onClick={() => onNav("projects")}
              className="inline-flex items-center gap-4 text-[11px] tracking-[0.22em] uppercase no-underline cursor-pointer text-ink hover:text-terracotta pb-1.5 border-b border-sand hover:border-terracotta transition-[color,border-color] duration-200"
            >
              View Work
            </a>
          </div>
          <div className="mt-12 sm:w-full md:w-fit justify-center flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-muted">
            <span className="scroll-line" />
            Scroll
          </div>
        </div>

        <div className="hidden   items-center justify-center overflow-hidden">
          <img
            className="w-110 h-auto object-contain"
            src="/images/hero.png"
            alt="Rahi Pinjani"
          />
        </div>
      </div>

      {/* FEATURED STRIP */}
      {/* <div className="flex items-center border-t border-b border-rule overflow-hidden">
        {featured.map((p, i) => (
          <FeaturedItem
            key={p.slug}
            num={`0${i + 1}`}
            label={p.label.split("·")[0].trim()}
            title={`${p.name} — ${p.desc}`}
            onClick={() => onProject(p.slug)}
            isLast={i === featured.length - 1}
          />
        ))}
      </div> */}

      {/* PROJECTS PREVIEW */}
      <div className="px-8 md:px-15 pb-20">
        <div className="mb-8 md:mb-15">
          <span className="section-label block">Selected Projects</span>
        </div>
        <div className="projects-grid">
          {featured.map((p, i) => (
            <div
              key={p.slug}
              className={`proj-card-${["a", "b", "c"][i]} cursor-pointer overflow-hidden relative group pb-12 md:pb-0`}
              onMouseEnter={() => prefetchProject(p.images)}
              onClick={() => onProject(p.slug)}
            >
              <div className="overflow-hidden">
                <img
                  className="w-full object-cover object-top block duration-500 ease-out saturate-85 group-hover:scale-[1.04] aspect-2/2.5"
                  src={previewImgs[p.slug]}
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
          ))}
          <div className="proj-card-more pt-6 md:pt-15">
            <ViewAllBtn onClick={() => onNav("projects")}>
              View All Projects →
            </ViewAllBtn>
          </div>
        </div>
      </div>

      <Footer copy="Mumbai, India" />
    </section>
  );
}

function HeroCta({ children, onClick }) {
  return (
    <a
      onClick={onClick}
      className="inline-flex items-center gap-3.5 hover:gap-[22px] text-[11px] tracking-[0.2em] uppercase text-ink hover:text-terracotta no-underline cursor-pointer font-normal transition-[gap,color] duration-300"
    >
      {children} →
    </a>
  );
}

function FeaturedItem({ num, label, title, onClick, isLast }) {
  return (
    <div
      onClick={onClick}
      className={`flex-1 py-6 px-8 flex items-center gap-4 cursor-pointer hover:bg-cream transition-colors duration-200 ${!isLast ? "border-r border-rule" : ""}`}
    >
      <span className="font-serif text-[28px] font-light italic text-sand shrink-0">
        {num}
      </span>
      <div>
        <p className="text-[9px] tracking-[0.24em] uppercase text-terracotta">
          {label}
        </p>
        <p className="font-serif text-lg font-normal text-ink">{title}</p>
      </div>
    </div>
  );
}

function ViewAllBtn({ children, onClick }) {
  return (
    <a
      onClick={onClick}
      className="inline-flex items-center gap-4 text-[11px] tracking-[0.22em] uppercase no-underline cursor-pointer text-ink hover:text-terracotta pb-1.5 border-b border-sand hover:border-terracotta transition-[color,border-color] duration-200"
    >
      {children}
    </a>
  );
}
