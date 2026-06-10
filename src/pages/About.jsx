import React, { useEffect, useState } from "react";
import { Fullscreen } from "lucide-react";
import Footer from "../components/Footer.jsx";

export default function About() {
  const artworks = [
    { src: "/images/other/Other 1.png", title: "Painting in Progress" },
    { src: "/images/other/Other 2.png", title: "Floral Panel Painting" },
    { src: "/images/other/Other 3.png", title: "Portrait Sketchbook" },
    {
      src: "/images/other/Other 4.png",
      title: "SpongeBob & Patrick Illustration",
    },
    { src: "/images/other/Other 5.png", title: "Custom Rose Bouquet" },
  ];
  const [activeIndex, setActiveIndex] = useState(null);
  const activeArtwork = activeIndex !== null ? artworks[activeIndex] : null;

  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
      if (activeIndex !== null) {
        if (event.key === "ArrowRight") {
          setActiveIndex((current) =>
            current === artworks.length - 1 ? 0 : current + 1,
          );
        }
        if (event.key === "ArrowLeft") {
          setActiveIndex((current) =>
            current === 0 ? artworks.length - 1 : current - 1,
          );
        }
      }
    };

    if (activeArtwork) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeArtwork, activeIndex, artworks.length]);

  return (
    <section className="pt-17">
      {/* HERO */}
      <div className="about-hero flex flex-col md:flex-row gap-10 md:gap-10 lg:gap-12 px-8 md:px-15 md:pr-20 py-14 md:py-16">
        <img
          className="w-full h-80 sm:h-96 md:h-90 md:w-auto lg:h-120 object-cover object-top shrink-0"
          src="/images/about-image.png"
          alt="Rahi Pinjani"
        />

        <div className=" flex flex-col ">
          <p className="text-[11px] tracking-[0.28em] uppercase text-terracotta mb-5">
            About the Designer
          </p>
          <h1
            className="font-serif leading-none mb-2 font-bold"
            style={{ fontSize: "clamp(42px, 5vw, 68px)" }}
          >
            Rahi
            <span className="italic text-terracotta font-light"> Pinjani</span>
          </h1>
          <p className="font-serif text-xl italic text-muted mb-10">
            Fashion Designer, Mumbai
          </p>
          <p className="text-[14px] font-light tracking-tight leading-[1.95] text-muted mb-10">
            Rahi Pinjani is a Mumbai-based fashion designer whose practice sits
            at the intersection of intuitive making and thoughtful craft. An MBA
            graduate in Marketing who followed a deeper calling, she approached
            fashion design not through convention, but through curiosity —
            learning directly at the machine, stitching garments by hand from
            reference, and building a design language rooted in material
            honesty.
            <br />
            <br />
            Her work draws heavily from the Indian textile tradition —
            block-printed cottons, kantha fabrics, organic forms — and
            reinterprets these through a contemporary lens. Whether repurposing
            leftover fabric into architectural soft furnishings, sculpting
            silver-tone wire into wearable forms, or painting botanicals
            directly onto handmade tops, Rahi's designs are always process-led
            and deeply personal.
          </p>

          <div className="">
            <p className="text-[8px] tracking-[0.26em] uppercase text-muted mb-4">
              Disciplines
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Garment Construction",
                "Pattern Making",
                "Surface Ornamentation",
                "Textile Upcycling",
                "Wire Accessory Design",
                "Fabric Painting",
                "Concept Development",
              ].map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ARTWORKS & BOUQUETS */}
      <div className="px-8 md:px-15 py-14 bg-cream md:py-16">
        <span className="text-[10px] tracking-[0.26em] uppercase text-terracotta block mb-3">
          Creative work
        </span>
        <h2 className="font-serif text-[38px] md:text-[48px] italic font-light leading-[1.05] text-ink">
          Studio creations and commissions
        </h2>
        <p className="text-sm font-light text-muted mt-4 max-w-120 leading-[1.9]">
          A selection of artwork, custom bouquets, and creative projects made to
          order.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
          {artworks.map((art, index) => (
            <button
              key={art.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative overflow-hidden bg-transparent text-left aspect-2/2.5 cursor-pointer"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                src={art.src}
                alt={art.title}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-black/55 to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 right-4 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                <Fullscreen className="h-4 w-4 text-white" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* INSTAGRAM — CONTENT CREATION */}
      <div className="px-8 md:px-15 py-14 md:py-16">
        <div className="mb-12">
          <span className="text-[10px] tracking-[0.26em] uppercase text-terracotta block mb-3">
            Beyond Design
          </span>
          <h2 className="font-serif text-[38px] md:text-[48px] italic font-light leading-[1.05] text-ink">
            I also share studio life and creative process
          </h2>
          <p className="text-sm font-light text-muted mt-4 max-w-120 leading-[1.9]">
            I document everyday life, style, and craft through Instagram.
          </p>
          <a
            href="https://www.instagram.com/simplyrahi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-6 text-[11px] tracking-[0.2em] uppercase text-ink hover:text-terracotta no-underline cursor-pointer pb-1 border-b border-sand hover:border-terracotta transition-all duration-200"
          >
            @simplyrahi →
          </a>
        </div>

        <div className="-mx-8 md:mx-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
          {[
            "https://www.instagram.com/p/DJ9SNjxTXTQ/",
            "https://www.instagram.com/p/DQRUGsaDOV0/",
            "https://www.instagram.com/p/DW5r5qTDGi8/",
          ].map((permalink) => (
            <div key={permalink} className="min-w-0">
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={permalink}
                data-instgrm-version="14"
                style={{ width: "100%", minWidth: 0, margin: 0 }}
              >
                <a
                  href="https://www.instagram.com/simplyrahi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Instagram
                </a>
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div
        className=" bg-cream py-14 md:py-20 px-8 md:px-15 flex flex-col md:grid gap-12 md:gap-15 items-start"
        style={{ gridTemplateColumns: "1fr 1fr" }}
      >
        <div>
          <span className="section-label block mb-5">Get In Touch</span>
          <h2
            className="font-serif font-light italic leading-[1.1] mb-7"
            style={{ fontSize: "clamp(36px, 4vw, 52px)" }}
          >
            Open to collaborations &amp; commissions
          </h2>
          <p className="text-sm leading-[1.9] text-muted max-w-105">
            Available for custom garment design, styling consultations, surface
            embellishment projects, and collaborative creative work. Based in
            Mumbai, open to projects across India.
          </p>
        </div>

        <div className="flex flex-col gap-7">
          {[
            {
              label: "Email",
              value: "rahipinjani1@gmail.com",
              href: "mailto:rahipinjani1@gmail.com",
            },
            {
              label: "Phone",
              value: "+91 87998 11448",
              href: "tel:+918799811448",
            },
            {
              label: "Location",
              value: "Mumbai, Maharashtra, India",
              href: null,
            },
            {
              label: "Instagram",
              value: "@simplyrahi",
              href: "https://www.instagram.com/simplyrahi/",
            },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[9px] tracking-[0.26em] uppercase text-terracotta mb-1.5">
                {item.label}
              </p>
              <div className="w-10 h-px bg-rule my-2" />
              <p className="font-serif text-xl font-normal text-ink">
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-ink no-underline hover:text-terracotta transition-colors duration-200"
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </p>
            </div>
          ))}
        </div>
      </div>

      {activeArtwork && (
        <div
          className="fixed inset-0 z-9999 bg-black/80"
          onClick={() => setActiveIndex(null)}
        >
          <div className="relative flex min-h-screen items-center justify-center p-4">
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-4 top-4 rounded-full bg-white/95 px-4 py-2.5 cursor-pointer text-ink hover:bg-white"
              aria-label="Close image"
            >
              ✕
            </button>
            <div
              className="relative w-auto max-w-[95vw] max-h-[95vh] overflow-hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={activeArtwork.src}
                alt={activeArtwork.title}
                className="w-full max-h-[80vh] object-contain"
              />
              <div className="mt-4 text-center text-white">
                <p className="text-base font-medium tracking-wide">
                  {activeArtwork.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer copy="Mumbai, India" />
    </section>
  );
}

function SkillTag({ children }) {
  return (
    <span className="text-[11px] tracking-widest uppercase text-ink hover:text-terracotta border border-rule hover:border-terracotta px-3 py-2 transition-all duration-200 cursor-default">
      {children}
    </span>
  );
}
