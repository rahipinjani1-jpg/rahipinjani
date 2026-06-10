import React from "react";
import Footer from "../../components/Footer.jsx";
import { projects } from "../../data/projects.js";
import BackBtn from "./BackBtn.jsx";

const HERO = "/images/patchwork/hero.png";

const PROCESS = [
  { src: "/images/patchwork/process-1.png", label: "Sorting Remnants" },
  { src: "/images/patchwork/process-2.png", label: "Curating the Palette" },
  { src: "/images/patchwork/process-3.png", label: "At the JACK Machine" },
  { src: "/images/patchwork/process-4.png", label: "Piecing the Grid" },
];

const LOOKBOOK = [
  "/images/patchwork/lookbook-1.png",
  "/images/patchwork/lookbook-2.png",
  "/images/patchwork/lookbook-3.png",
];

export default function Patchwork({ onBack }) {
  const p = projects.find((x) => x.slug === "patchwork");
  return (
    <section className="pt-17">
      {/* <BackBtn onClick={onBack} /> */}

      {/* HERO */}
      <div className="h-[calc(90vh-68px)] relative overflow-hidden bg-charcoal">
        <img
          src={HERO}
          alt={p.name}
          className="w-full h-full object-cover opacity-75 object-top"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 30%, rgba(28,28,26,0.7))",
          }}
        />
        <div className="proj-detail-content-mobile absolute bottom-15 left-8 md:left-15 right:8 md:right-15 flex justify-between items-end">
          <div>
            <p className="text-[10px] tracking-[0.28em] uppercase text-white/60 mb-3">
              {p.detailLabel}
            </p>
            <h1
              className="font-serif font-light italic text-white leading-[0.95]"
              style={{ fontSize: "clamp(48px,6vw,80px)" }}
            >
              {p.name}
            </h1>
          </div>
          <div className="md:text-right">
            {p.meta.map((m, i) => (
              <p
                key={i}
                className="text-[11px] tracking-[0.14em] text-white/55 uppercase leading-[2.2]"
              >
                {m}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* CONCEPT */}
      <div className="px-8 md:px-15 py-14 md:py-20">
        <div className="proj-section-inner wide">
          <div>
            <span className="text-[10px] tracking-[0.26em] uppercase text-terracotta mb-4 block">
              Concept
            </span>
            <h2 className="font-serif text-[42px] italic font-light leading-[1.1] text-ink mb-6">
              {p.concept.heading.split("\n").map((line, i, arr) => (
                <React.Fragment key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>
          </div>
          <div className="text-sm leading-[1.95] text-muted font-light">
            {p.concept.paragraphs.map((para, i) => (
              <p
                key={i}
                className={i > 0 ? "mt-4" : ""}
                dangerouslySetInnerHTML={{ __html: para }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* PROCESS */}
      <div className="px-8 md:px-15 py-14 md:py-20 bg-cream">
        <h3 className="font-serif text-[38px] italic text-ink mb-12">
          <em>{p.processTitle}</em>
        </h3>
        <div className="process-imgs">
          {PROCESS.map((item, i) => (
            <div key={i} className="overflow-hidden">
              <img
                src={item.src}
                alt={item.label}
                className="w-full aspect-3/4 object-cover block transition-transform duration-400 hover:scale-[1.03]"
              />
              <p className="text-[11px] text-muted tracking-widest mt-2.5 uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* LOOKBOOK */}
      <div className="px-8 md:px-15 py-14 md:py-20">
        <span className="text-[10px] tracking-[0.26em] uppercase text-terracotta block mb-10">
          {p.lookbookLabel}
        </span>
        <div className="outcome-grid">
          {LOOKBOOK.map((src, i) => (
            <img
              key={i}
              className="w-full aspect-3/4 object-cover object-bottom block transition-transform duration-400 hover:scale-[1.03]"
              src={src}
              alt={`${p.name} ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <Footer copy={p.footerCopy} />
    </section>
  );
}
