import React from "react";
import Footer from "../../components/Footer.jsx";
import { projects } from "../../data/projects.js";
import BackBtn from "./BackBtn.jsx";

const HERO = "/images/wire/hero.png";

const PROCESS = [
  { src: "/images/wire/process-1.png", label: "Wire Gauge Study" },
  { src: "/images/wire/process-2.png", label: "Structural Form Research" },
  { src: "/images/wire/process-3.png", label: "Wire Sculpting Techniques" },
  // {
  //   isQuote: true,
  //   quote: '"Drawing with wire is like sketching — but the line is permanent."',
  //   label: "Wire Forms",
  // },
];

const LOOKBOOK = [
  "/images/wire/lookbook-1.png",
  "/images/wire/lookbook-2.png",
  "/images/wire/lookbook-3.png",
];

export default function Wire({ onBack }) {
  const p = projects.find((x) => x.slug === "wire");
  return (
    <section style={{ paddingTop: "68px" }}>
      {/* <BackBtn onClick={onBack} /> */}

      {/* HERO */}
      <div
        style={{
          height: "calc(90vh - 68px)",
          position: "relative",
          overflow: "hidden",
          background: "var(--charcoal)",
        }}
      >
        <img
          src={HERO}
          alt={p.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.75,
            objectPosition: "center top",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, transparent 30%, rgba(28,28,26,0.7))",
          }}
        />
        <div className="proj-detail-content-mobile absolute bottom-15 left-8 md:left-15 right-8 md:right-15 flex justify-between items-end">
          <div>
            <p
              style={{
                fontSize: "10px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                marginBottom: "12px",
              }}
            >
              {p.detailLabel}
            </p>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(48px, 6vw, 80px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "#fff",
                lineHeight: 0.95,
              }}
            >
              {p.name}
            </h1>
          </div>
          <div className="md:text-right">
            {p.meta.map((m, i) => (
              <p
                key={i}
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.14em",
                  color: "rgba(255,255,255,0.55)",
                  textTransform: "uppercase",
                  lineHeight: 2.2,
                }}
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
            <span
              style={{
                fontSize: "10px",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "var(--terracotta)",
                marginBottom: "16px",
                display: "block",
              }}
            >
              Concept
            </span>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontSize: "42px",
                fontStyle: "italic",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "var(--ink)",
                marginBottom: "24px",
              }}
            >
              {p.concept.heading.split("\n").map((line, i, arr) => (
                <React.Fragment key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>
          </div>
          <div
            style={{
              fontSize: "14px",
              lineHeight: 1.95,
              color: "var(--muted)",
              fontWeight: 300,
            }}
          >
            {p.concept.paragraphs.map((para, i) => (
              <p
                key={i}
                style={{ marginTop: i > 0 ? "16px" : 0 }}
                dangerouslySetInnerHTML={{ __html: para }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* PROCESS */}
      <div className="px-8 md:px-15 py-14 md:py-20 bg-cream">
        <h3
          style={{
            fontFamily: "var(--serif)",
            fontSize: "38px",
            fontStyle: "italic",
            color: "var(--ink)",
            marginBottom: "48px",
          }}
        >
          <em>{p.processTitle}</em>
        </h3>
        <div className="process-imgs">
          {PROCESS.map((item, i) => (
            <div key={i} style={{ overflow: "hidden" }}>
              {item.isQuote ? (
                <div
                  style={{
                    background: "var(--sand)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    aspectRatio: "3/4",
                    padding: "24px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "16px",
                      fontStyle: "italic",
                      color: "var(--ink)",
                      textAlign: "center",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.quote}
                  </p>
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={item.label}
                  style={{
                    width: "100%",
                    aspectRatio: "3/4",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.4s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.03)")
                  }
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                />
              )}
              <p
                style={{
                  fontSize: "11px",
                  color: "var(--muted)",
                  letterSpacing: "0.1em",
                  marginTop: "10px",
                  textTransform: "uppercase",
                }}
              >
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
              className="w-full aspect-3/4 object-cover object-top block transition-transform duration-400 hover:scale-[1.03]"
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
