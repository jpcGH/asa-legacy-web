import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Target, Eye, Heart, Award } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import principal from "@/assets/principal.jpg";
import front from "@/assets/school-front.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Asa LG Senior Secondary School" },
      { name: "description", content: "Our history, mission, vision and the leadership behind Asa Local Government Senior Secondary School, Budo-Egba." },
      { property: "og:title", content: "About Asa LG Senior Secondary School" },
      { property: "og:description", content: "Decades of educating young Nigerians with discipline and academic excellence." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A community school with a national standard."
        description="Founded to bring quality public secondary education to the children of Asa Local Government, our school has grown into one of the most trusted institutions in Kwara State."
      />

      <section className="section">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          <img src={front} alt="School front view" loading="lazy" className="rounded-xl shadow-[var(--shadow-elevated)] w-full" />
          <div>
            <div className="eyebrow">Our History</div>
            <h2 className="mt-3 text-3xl md:text-4xl">From a community vision to a household name in Kwara</h2>
            <p className="mt-5">
              Asa Local Government Senior Secondary School was established in the early
              1990s under the educational reform programmes of the Kwara State Government,
              in response to the rising demand for quality secondary education in Asa
              Local Government Area.
            </p>
            <p className="mt-4">
              Sited in the agricultural community of Budo-Egba, just off the
              Ilorin–Afon road, the school began with a modest enrolment and a handful
              of classroom blocks. Today, it serves over a thousand students across
              Junior and Senior Secondary levels, supported by qualified teachers and
              functional science and ICT facilities.
            </p>
            <p className="mt-4">
              Generations of our alumni now serve Nigeria as teachers, civil servants,
              health professionals, military officers, traders and entrepreneurs —
              a living testimony to our motto, <em>No Sweat No Sweet.</em>
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-[color:var(--surface)]">
        <div className="container-page">
          <div className="grid md:grid-cols-3 gap-7">
            {[
              { icon: Target, t: "Our Mission", d: "To provide affordable, disciplined, character-building secondary education that prepares every learner for tertiary study, vocation and good citizenship." },
              { icon: Eye, t: "Our Vision", d: "To be the most respected public senior secondary school in Kwara State — known for academic rigour, integrity and community service." },
              { icon: Heart, t: "Our Core Values", d: "Discipline, hard work, integrity, respect for elders and authority, patriotism and service to humanity." },
            ].map((v) => (
              <div key={v.t} className="card-soft p-7">
                <div className="h-12 w-12 rounded-lg bg-[color:var(--primary)]/10 text-[color:var(--primary-dark)] inline-flex items-center justify-center">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl">{v.t}</h3>
                <p className="mt-3 text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid lg:grid-cols-[360px_1fr] gap-12">
          <img src={principal} alt="Principal" loading="lazy" className="rounded-xl shadow-[var(--shadow-elevated)] w-full" />
          <div>
            <div className="eyebrow">From the Principal’s Desk</div>
            <h2 className="mt-3 text-3xl md:text-4xl">A welcome from Mr. Yusuf A. Salami</h2>
            <p className="mt-5">
              On behalf of the staff, students and parent body, I warmly welcome you to
              Asa Local Government Senior Secondary School. Our school is a community
              of learners committed to building disciplined, knowledgeable and morally
              upright Nigerians.
            </p>
            <p className="mt-4">
              We are proud of our consistent academic performance in WAEC and NECO, our
              vibrant student activities, and the dedication of our teaching staff. We
              partner with parents and the wider Asa community to give every child a
              fair chance at greatness.
            </p>
            <p className="mt-4">
              Whether you are a prospective parent, a returning alumnus or a partner in
              education — there is room for you at Asa LGSSS.
            </p>
            <p className="mt-6 font-display italic text-[color:var(--accent)]">— Mr. Yusuf A. Salami, Principal</p>
          </div>
        </div>
      </section>

      <section className="section bg-[color:var(--surface)]">
        <div className="container-page">
          <div className="max-w-2xl">
            <div className="eyebrow">Leadership Team</div>
            <h2 className="mt-3 text-3xl md:text-4xl">Guiding the school with experience and integrity</h2>
          </div>
          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {[
              ["Mr. Yusuf A. Salami", "Principal"],
              ["Mrs. Kafayat Abdullahi", "Vice Principal (Academic)"],
              ["Mr. Tunde Adeyemi", "Vice Principal (Administration)"],
              ["Mrs. Aisha Lawal", "Head of Studies"],
            ].map(([name, role]) => (
              <div key={name} className="card-soft p-6 text-center">
                <div className="mx-auto h-20 w-20 rounded-full bg-[color:var(--primary)]/10 inline-flex items-center justify-center text-[color:var(--primary-dark)] font-display text-2xl font-bold">
                  {name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                </div>
                <div className="mt-4 font-display font-bold text-[color:var(--heading)]">{name}</div>
                <div className="text-xs text-[color:var(--accent)] uppercase tracking-widest mt-1">{role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid md:grid-cols-2 gap-12">
          <div>
            <div className="eyebrow">Achievements</div>
            <h2 className="mt-3 text-3xl md:text-4xl">A record of consistent excellence</h2>
          </div>
          <ul className="space-y-4">
            {[
              "Above 90% credit pass rate in WAEC English and Mathematics for five consecutive years",
              "Multiple Kwara State JETS Olympiad finalists in Mathematics and Physics",
              "Winner, Asa LGA Inter-Secondary School Debate (2022, 2024)",
              "Runners-up, Kwara State Inter-School Football Competition (2023)",
              "Recognition by Kwara State Ministry of Education for best-kept rural school grounds",
            ].map((a) => (
              <li key={a} className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-[color:var(--accent)] mt-1 shrink-0" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </>
  );
}

function CTA() {
  return (
    <section className="bg-[color:var(--primary-dark)] text-white py-16">
      <div className="container-page flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h3 className="text-white text-2xl">Ready to join the Asa LGSSS family?</h3>
          <p className="text-white/80 mt-2">Admissions for the new session are open.</p>
        </div>
        <Link to="/admissions" className="btn-primary !py-3 !px-7">
          Begin Application <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
