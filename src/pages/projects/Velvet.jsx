import React from "react";
import Footer from "../../components/Footer.jsx";
import { projects } from "../../data/projects.js";
import BackBtn from "./BackBtn.jsx";

const HERO = "/images/velvet/hero.png";

const ACT_I = [
  "/images/velvet/lookbook-1.png",
  "/images/velvet/lookbook-2.png",
  "/images/velvet/lookbook-3.png",
];

const ACT_II = ["/images/velvet/saree-1.png", "/images/velvet/saree-2.png"];

export default function Velvet({ onBack }) {
  const p = projects.find((x) => x.slug === "velvet");
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
        <div className="proj-detail-content-mobile absolute bottom-15 left-8 md:left-15 right-8 md:right-15 flex justify-between items-end">
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

      {/* ACT I — THE LEHENGA */}
      <div className="px-8 md:px-15 py-14 md:py-20">
        <span className="text-[10px] tracking-[0.26em] uppercase text-terracotta block mb-10">
          Act I: The Lehenga
        </span>
        <div className="outcome-grid">
          <img
            className="w-full aspect-3/4 object-cover object-top block transition-transform duration-400 hover:scale-[1.03]"
            src={ACT_I[0]}
            alt="Raat lehenga full"
          />
          <img
            className="w-full aspect-3/4 object-cover object-top block transition-transform duration-400 hover:scale-[1.03]"
            src={ACT_I[1]}
            alt="Raat lehenga back"
          />
          <img
            className="w-full aspect-3/4 object-cover object-top block transition-transform duration-400 hover:scale-[1.03]"
            src={ACT_I[2]}
            alt="Raat lehenga front"
          />
        </div>
      </div>

      {/* ACT II — THE SAREE */}
      <div className="px-8 md:px-15 py-14 md:py-20 bg-charcoal">
        <span className="text-[10px] tracking-[0.26em] uppercase text-white/45 block mb-10">
          Act II: The Saree (Same Blouse, New Life)
        </span>
        <div className="outcome-grid">
          <img
            className="w-full aspect-3/4 object-cover object-top block transition-transform duration-400 hover:scale-[1.03]"
            src={ACT_II[0]}
            alt="Raat saree full"
          />
          <img
            className="w-full aspect-3/4 object-cover object-top block transition-transform duration-400 hover:scale-[1.03]"
            src={ACT_II[1]}
            alt="Raat saree standing"
          />
          <div className="bg-[#1a1a18] flex items-center justify-center aspect-3/4">
            <div className="text-center p-10">
              <p className="text-[10px] tracking-[0.22em] uppercase text-white/35 mb-4">
                Finishing Details
              </p>
              <p className="font-serif text-[22px] italic text-white/60 leading-relaxed">
                Hand-stitched fall
                <br />
                &amp; lace border
                <br />
                added to pallu
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer copy={p.footerCopy} />
    </section>
  );
}
