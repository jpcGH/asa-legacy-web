import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  GraduationCap,
  FlaskConical,
  Laptop,
  Trophy,
  HeartHandshake,
  UsersRound,
  Calendar,
  BookOpen,
  Microscope,
  Briefcase,
  Palette,
  ChevronRight,
  Quote,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import heroImg from "@/assets/hero-campus.jpg";
import principalImg from "@/assets/principal.jpg";
import classroomImg from "@/assets/classroom.jpg";
import labImg from "@/assets/laboratory.jpg";
import sportsImg from "@/assets/sports.jpg";
import ictImg from "@/assets/ict-lab.jpg";
import gradImg from "@/assets/graduation.jpg";
import frontImg from "@/assets/school-front.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Asa LG Senior Secondary School, Budo-Egba — Kwara State" },
      { name: "description", content: "Public senior secondary school in Budo-Egba, Asa LGA, Kwara State. Discipline, academic excellence and character — No Sweat No Sweet." },
      { property: "og:title", content: "Asa LG Senior Secondary School, Budo-Egba" },
      { property: "og:description", content: "Public senior secondary school in Budo-Egba serving Asa LGA with discipline and academic excellence." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <PrincipalWelcome />
      <WhyChoose />
      <Programmes />
      <Stats />
      <NewsPreview />
      <GalleryPreview />
      <Testimonials />
      <ContactCTA />
    </>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center text-white overflow-hidden">
      <img
        src={heroImg}
        alt="Asa Local Government Senior Secondary School campus"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--navy)]/90 via-[color:var(--navy)]/70 to-[color:var(--navy)]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      <div className="container-page relative py-24 md:py-32">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur text-xs font-semibold uppercase tracking-widest">
            <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
            Est. Public Senior Secondary School · Kwara State
          </div>
          <h1 className="mt-6 text-white font-display font-bold text-4xl md:text-6xl leading-[1.05]">
            Asa Local Government<br />
            <span className="text-white/95">Senior Secondary School,</span><br />
            <span className="text-[color:var(--accent)]">Budo-Egba</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl">
            Shaping disciplined, knowledgeable and patriotic young Nigerians through
            rigorous academics, character formation and community service.
          </p>
          <div className="mt-4 inline-block font-display italic text-[color:var(--accent)] text-xl md:text-2xl border-l-4 border-[color:var(--accent)] pl-4">
            “No Sweat No Sweet”
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/admissions" className="btn-primary">
              Apply for Admission <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/about" className="btn-secondary">
              Explore Our School
            </Link>
          </div>
        </div>
      </div>

      {/* hero stat strip */}
      <div className="absolute bottom-0 inset-x-0 hidden md:block">
        <div className="container-page">
          <div className="bg-white shadow-elevated grid grid-cols-3 divide-x divide-border rounded-t-xl overflow-hidden">
            {[
              { k: "WAEC Pass Rate", v: "92%" },
              { k: "Qualified Teachers", v: "60+" },
              { k: "Years of Excellence", v: "30+" },
            ].map((s) => (
              <div key={s.k} className="px-6 py-5 text-center">
                <div className="font-display text-2xl font-bold text-[color:var(--primary-dark)]">{s.v}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.k}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT INTRO ---------------- */
function AboutIntro() {
  return (
    <section className="section">
      <div className="container-page grid gap-12 lg:grid-cols-2 items-center">
        <div className="relative">
          <img
            src={frontImg}
            alt="School building"
            loading="lazy"
            width={1280}
            height={854}
            className="rounded-xl shadow-[var(--shadow-elevated)] w-full h-auto object-cover"
          />
          <div className="hidden md:block absolute -bottom-8 -right-8 bg-[color:var(--accent)] text-white p-6 rounded-xl shadow-xl max-w-[220px]">
            <div className="font-display text-3xl font-bold">1992</div>
            <div className="text-xs uppercase tracking-widest mt-1 opacity-90">Founded by Kwara State Government</div>
          </div>
        </div>

        <div>
          <div className="eyebrow">About Our School</div>
          <h2 className="mt-3 text-3xl md:text-4xl">
            A trusted public secondary school serving Asa Local Government
          </h2>
          <p className="mt-5 text-base md:text-lg">
            Located in the historic community of Budo-Egba, Asa Local Government
            Senior Secondary School has, for over three decades, prepared
            generations of young men and women for excellence in academics,
            leadership and citizenship.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-5">
            {[
              { t: "Our Mission", d: "Quality, affordable secondary education rooted in discipline and character." },
              { t: "Our Vision", d: "To be the most respected public secondary school in Kwara State." },
              { t: "Our Values", d: "Integrity, hard work, humility, service and patriotism." },
            ].map((v) => (
              <div key={v.t} className="border-t-2 border-[color:var(--accent)] pt-4">
                <h3 className="text-base font-display">{v.t}</h3>
                <p className="text-sm mt-2 text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>

          <Link to="/about" className="btn-outline mt-8">
            Read Our Full Story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRINCIPAL ---------------- */
function PrincipalWelcome() {
  return (
    <section className="section bg-[color:var(--surface)]">
      <div className="container-page grid gap-12 lg:grid-cols-[360px_1fr] items-start">
        <div>
          <div className="relative">
            <img
              src={principalImg}
              alt="Principal"
              loading="lazy"
              width={800}
              height={1024}
              className="w-full h-auto rounded-xl object-cover shadow-[var(--shadow-elevated)]"
            />
            <div className="absolute -top-4 -left-4 h-24 w-24 border-4 border-[color:var(--accent)] rounded-xl -z-0" />
          </div>
          <div className="mt-5 text-center lg:text-left">
            <div className="font-display text-lg font-bold text-[color:var(--heading)]">Mr. Yusuf A. Salami</div>
            <div className="text-sm text-[color:var(--accent)] font-semibold">Principal</div>
          </div>
        </div>

        <div>
          <div className="eyebrow">Principal’s Welcome</div>
          <h2 className="mt-3 text-3xl md:text-4xl">A message to our students, parents and community</h2>
          <Quote className="h-10 w-10 text-[color:var(--primary)]/30 mt-6" />
          <blockquote className="mt-2 text-base md:text-lg leading-relaxed">
            “At Asa Local Government Senior Secondary School, we believe that every child carries within
            them the seed of greatness. Our duty as educators, parents and a community
            is to provide the soil, water and sunlight for that seed to flourish. Our
            motto — <span className="font-semibold text-[color:var(--accent)]">No Sweat No Sweet</span> —
            reminds our students daily that meaningful achievement is the reward of
            disciplined effort. We welcome you to our school family.”
          </blockquote>
          <Link to="/about" className="btn-outline mt-8">
            Read Full Message <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY CHOOSE ---------------- */
function WhyChoose() {
  const items = [
    { icon: GraduationCap, t: "Qualified Teachers", d: "A dedicated team of NCE- and degree-holding educators committed to your child." },
    { icon: BookOpen, t: "Strong Academic Performance", d: "Consistent WAEC and NECO results above state averages." },
    { icon: FlaskConical, t: "Well-Equipped Laboratories", d: "Functional Physics, Chemistry, Biology and Agriculture laboratories." },
    { icon: Laptop, t: "ICT Education", d: "A modern computer laboratory and digital literacy from JSS to SSS." },
    { icon: HeartHandshake, t: "Character Development", d: "Daily moral instruction, mentorship and guidance counselling." },
    { icon: Trophy, t: "Sports & Extracurriculars", d: "Football, athletics, debate, drama, cultural and JETS clubs." },
  ];
  return (
    <section className="section">
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="eyebrow">Why Choose Our School</div>
          <h2 className="mt-3 text-3xl md:text-4xl">An education built on solid Nigerian values</h2>
          <p className="mt-4">
            We combine the rigour of Nigeria’s national curriculum with the warmth and
            discipline of a community school.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.t} className="card-soft p-6">
              <div className="h-12 w-12 rounded-lg bg-[color:var(--primary)]/10 text-[color:var(--primary-dark)] inline-flex items-center justify-center">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg">{it.t}</h3>
              <p className="text-sm mt-2 text-muted-foreground">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROGRAMMES ---------------- */
function Programmes() {
  const depts = [
    { icon: Microscope, t: "Science Department", d: "Physics, Chemistry, Biology, Agricultural Science, Further Maths.", img: labImg },
    { icon: Briefcase, t: "Commercial Department", d: "Financial Accounting, Commerce, Economics and Office Practice.", img: ictImg },
    { icon: Palette, t: "Arts Department", d: "Literature, Government, History, CRS/IRS, Yoruba and Visual Arts.", img: classroomImg },
  ];
  return (
    <section className="section bg-[color:var(--surface)]">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="eyebrow">Academic Programmes</div>
            <h2 className="mt-3 text-3xl md:text-4xl">Three departments. One standard of excellence.</h2>
          </div>
          <Link to="/academics" className="btn-outline self-start">
            See All Programmes <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-7">
          {depts.map((d) => (
            <article key={d.t} className="card-soft overflow-hidden flex flex-col">
              <div className="relative h-52">
                <img src={d.img} alt={d.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/80 to-transparent" />
                <div className="absolute bottom-4 left-4 h-11 w-11 rounded-lg bg-white text-[color:var(--accent)] inline-flex items-center justify-center">
                  <d.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg">{d.t}</h3>
                <p className="text-sm mt-2 text-muted-foreground">{d.d}</p>
                <Link to="/academics" className="mt-4 inline-flex items-center text-sm font-semibold text-[color:var(--primary-dark)] hover:text-[color:var(--accent)]">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STATS COUNTERS ---------------- */
function Stats() {
  const items = [
    { value: 1240, label: "Students Enrolled", icon: UsersRound },
    { value: 64, label: "Teaching Staff", icon: GraduationCap },
    { value: 8500, label: "Proud Graduates", icon: Trophy },
    { value: 32, label: "Years of Excellence", icon: Calendar },
  ];
  return (
    <section className="section bg-[color:var(--primary-dark)] text-white relative overflow-hidden">
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[color:var(--primary)]/40 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[color:var(--accent)]/30 blur-3xl" />
      <div className="container-page relative">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow !text-white/80 before:bg-white/60">By the Numbers</div>
          <h2 className="mt-3 text-white text-3xl md:text-4xl">Three decades of impact in Asa Local Government</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <Counter key={it.label} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value, label, icon: Icon }: { value: number; label: string; icon: React.ComponentType<{ className?: string }> }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 1400;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            setN(Math.floor(p * value));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);
  return (
    <div ref={ref} className="text-center">
      <Icon className="h-7 w-7 mx-auto text-[color:var(--accent)]" />
      <div className="font-display text-4xl md:text-5xl font-bold mt-3 text-white">
        {n.toLocaleString()}{value >= 100 ? "+" : ""}
      </div>
      <div className="text-xs uppercase tracking-widest text-white/75 mt-2">{label}</div>
    </div>
  );
}

/* ---------------- NEWS ---------------- */
function NewsPreview() {
  const news = [
    { tag: "WAEC", date: "12 Mar 2026", title: "WAEC 2026 registration now open for SS3 candidates", excerpt: "Parents are required to submit the registration slip and passport photographs at the bursary." },
    { tag: "Event", date: "28 Feb 2026", title: "Annual Inter-House Sports Competition holds 14 March", excerpt: "All four houses — Red, Green, Yellow and Blue — will compete across athletics and field events." },
    { tag: "Admissions", date: "10 Feb 2026", title: "SS1 admission forms for 2026/2027 session", excerpt: "Forms are available at the school bursary or via our online application portal." },
  ];
  return (
    <section className="section">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="eyebrow">News & Announcements</div>
            <h2 className="mt-3 text-3xl md:text-4xl">Latest from our notice board</h2>
          </div>
          <Link to="/news" className="btn-outline self-start">
            All News <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {news.map((n) => (
            <article key={n.title} className="card-soft p-6 flex flex-col">
              <div className="flex items-center gap-3 text-xs">
                <span className="px-2.5 py-1 rounded-full bg-[color:var(--accent)]/10 text-[color:var(--accent)] font-semibold uppercase tracking-wider">{n.tag}</span>
                <span className="text-muted-foreground">{n.date}</span>
              </div>
              <h3 className="text-lg mt-4">{n.title}</h3>
              <p className="text-sm mt-3 text-muted-foreground flex-1">{n.excerpt}</p>
              <Link to="/news" className="mt-5 inline-flex items-center text-sm font-semibold text-[color:var(--primary-dark)] hover:text-[color:var(--accent)]">
                Read more <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY PREVIEW ---------------- */
function GalleryPreview() {
  const imgs = [
    { src: classroomImg, alt: "Classroom" },
    { src: labImg, alt: "Science laboratory" },
    { src: ictImg, alt: "ICT laboratory" },
    { src: sportsImg, alt: "School sports" },
    { src: gradImg, alt: "Graduation ceremony" },
    { src: frontImg, alt: "Main school building" },
  ];
  return (
    <section className="section bg-[color:var(--surface)]">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="eyebrow">Gallery</div>
            <h2 className="mt-3 text-3xl md:text-4xl">Life on campus</h2>
          </div>
          <Link to="/gallery" className="btn-outline self-start">
            View Full Gallery <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {imgs.map((g, i) => (
            <div key={i} className={`relative overflow-hidden rounded-lg group ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const t = [
    { name: "Adebisi Ogunlade", role: "Alumna, 2014 set · Medical Doctor", quote: "The discipline I learned at ALGSSS shaped everything I became. The teachers genuinely cared about our future." },
    { name: "Mrs. Halimat Bello", role: "Parent of SS2 student", quote: "My daughter has grown in confidence and academic ability. The school has lived up to its reputation in our community." },
    { name: "Ibrahim Yakubu", role: "Current SS3 student", quote: "From JETS Club to my Further Maths class, I feel prepared for university. ‘No Sweat No Sweet’ is real here." },
  ];
  return (
    <section className="section">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow justify-center">Voices from our community</div>
          <h2 className="mt-3 text-3xl md:text-4xl">Trusted by students, parents and alumni</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {t.map((x) => (
            <figure key={x.name} className="card-soft p-7">
              <Quote className="h-7 w-7 text-[color:var(--accent)]" />
              <blockquote className="mt-4 text-base leading-relaxed">“{x.quote}”</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <div className="font-display font-bold text-[color:var(--heading)]">{x.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{x.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT CTA ---------------- */
function ContactCTA() {
  return (
    <section className="section bg-[color:var(--surface)]">
      <div className="container-page">
        <div className="rounded-2xl overflow-hidden bg-[color:var(--primary-dark)] text-white relative">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "linear-gradient(135deg, transparent 40%, rgba(255,255,255,.15) 50%, transparent 60%)",
          }} />
          <div className="relative grid lg:grid-cols-2 gap-10 p-8 md:p-14">
            <div>
              <div className="eyebrow !text-white before:bg-white/60">Get in touch</div>
              <h2 className="text-white mt-3 text-3xl md:text-4xl">Visit us in Budo-Egba</h2>
              <p className="mt-4 text-white/80 max-w-md">
                We welcome enquiries from prospective parents, alumni, government
                officials and community partners.
              </p>
              <ul className="mt-8 space-y-4 text-white/90 text-sm">
                <li className="flex items-start gap-3"><MapPin className="h-5 w-5 text-[color:var(--accent)]" />P.O. Box 299, Afon, Asa LGA, Kwara State</li>
                <li className="flex items-start gap-3"><Phone className="h-5 w-5 text-[color:var(--accent)]" />+234 803 000 0000</li>
                <li className="flex items-start gap-3"><Mail className="h-5 w-5 text-[color:var(--accent)]" />info@algsss-budoegba.edu.ng</li>
              </ul>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <Link to="/admissions" className="btn-primary !py-3.5 !px-7 text-base">
                Apply for Admission <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/contact" className="btn-secondary !py-3.5 !px-7 text-base">
                Contact the School
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
