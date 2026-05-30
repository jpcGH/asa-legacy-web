import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import classroom from "@/assets/classroom.jpg";
import lab from "@/assets/laboratory.jpg";
import ict from "@/assets/ict-lab.jpg";
import sports from "@/assets/sports.jpg";
import grad from "@/assets/graduation.jpg";
import front from "@/assets/school-front.jpg";
import hero from "@/assets/hero-campus.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Asa LG Senior Secondary School" },
      { name: "description", content: "Photo gallery: academics, events, sports, facilities and graduation ceremonies at Asa LG Senior Secondary School." },
      { property: "og:title", content: "Gallery — Asa LGSSS" },
      { property: "og:description", content: "A visual look at our campus and school life." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const items = [
  { src: hero, cat: "Facilities", alt: "Campus" },
  { src: classroom, cat: "Academics", alt: "Classroom" },
  { src: lab, cat: "Academics", alt: "Science laboratory" },
  { src: ict, cat: "Facilities", alt: "ICT laboratory" },
  { src: sports, cat: "Sports", alt: "Football practice" },
  { src: grad, cat: "Graduation", alt: "Graduation ceremony" },
  { src: front, cat: "Facilities", alt: "School building" },
  { src: classroom, cat: "Events", alt: "Class session" },
  { src: sports, cat: "Sports", alt: "Inter-house sports" },
];

const cats = ["All", "Academics", "Events", "Sports", "Facilities", "Graduation"] as const;

function GalleryPage() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const filtered = cat === "All" ? items : items.filter((i) => i.cat === cat);
  return (
    <>
      <PageHeader eyebrow="Gallery" title="Moments from our school." description="A growing collection of photographs from classrooms, laboratories, sporting events and ceremonies." />

      <section className="section">
        <div className="container-page">
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  cat === c
                    ? "bg-[color:var(--accent)] text-white"
                    : "bg-secondary text-[color:var(--heading)] hover:bg-[color:var(--primary)]/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((it, i) => (
              <figure key={i} className="group relative overflow-hidden rounded-xl">
                <img src={it.src} alt={it.alt} loading="lazy" className="aspect-[4/3] w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[color:var(--navy)]/90 to-transparent p-4">
                  <span className="text-xs uppercase tracking-widest text-[color:var(--accent)] font-semibold">{it.cat}</span>
                  <div className="text-white text-sm font-display font-bold">{it.alt}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
