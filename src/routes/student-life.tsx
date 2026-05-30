import { createFileRoute } from "@tanstack/react-router";
import { Users, Trophy, Drama, HandHeart, Globe2, Music } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import sports from "@/assets/sports.jpg";
import grad from "@/assets/graduation.jpg";

export const Route = createFileRoute("/student-life")({
  head: () => ({
    meta: [
      { title: "Student Life — Asa LG Senior Secondary School" },
      { name: "description", content: "Clubs, societies, sports and community engagement at Asa LG Senior Secondary School, Budo-Egba." },
      { property: "og:title", content: "Student Life at Asa LGSSS" },
      { property: "og:description", content: "Building character through clubs, sports and service to community." },
      { property: "og:url", content: "/student-life" },
    ],
    links: [{ rel: "canonical", href: "/student-life" }],
  }),
  component: StudentLifePage,
});

function StudentLifePage() {
  const clubs = [
    { icon: Globe2, t: "JETS Club", d: "Junior Engineers, Technicians and Scientists — competing in state-wide Olympiads." },
    { icon: Drama, t: "Drama & Literary", d: "Stage performances, debates and creative writing during cultural week." },
    { icon: HandHeart, t: "Red Cross & Scouts", d: "First-aid training, community projects and discipline programmes." },
    { icon: Music, t: "Cultural Troupe", d: "Showcasing Yoruba and pan-Nigerian heritage through dance, music and drama." },
    { icon: Users, t: "Press Club", d: "School journalism, photography and the termly Asa Voice publication." },
    { icon: Trophy, t: "Sports Council", d: "Football, athletics, table tennis, handball and inter-house competitions." },
  ];
  return (
    <>
      <PageHeader
        eyebrow="Student Life"
        title="Beyond the classroom, character is formed."
        description="Asa LGSSS offers a rich co-curricular programme that helps students discover their gifts, lead their peers and serve their community."
      />

      <section className="section">
        <div className="container-page">
          <div className="max-w-2xl">
            <div className="eyebrow">Clubs & Societies</div>
            <h2 className="mt-3 text-3xl md:text-4xl">A club for every passion</h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((c) => (
              <div key={c.t} className="card-soft p-6">
                <div className="h-12 w-12 rounded-lg bg-[color:var(--primary)]/10 text-[color:var(--primary-dark)] inline-flex items-center justify-center">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[color:var(--surface)]">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <img src={sports} alt="Students playing football" loading="lazy" className="rounded-xl w-full shadow-[var(--shadow-elevated)]" />
          <div>
            <div className="eyebrow">Sports & Recreation</div>
            <h2 className="mt-3 text-3xl md:text-4xl">Sound mind, sound body</h2>
            <p className="mt-5">
              Sports are a vital part of campus life. Our four houses — Red, Green,
              Yellow and Blue — compete annually in the Inter-House Sports Competition,
              while our football and athletics teams represent the school at the Asa
              LGA and Kwara State levels.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
              {["Football", "Athletics", "Table Tennis", "Handball", "Volleyball", "Chess"].map((s) => (
                <li key={s} className="flex gap-2"><Trophy className="h-4 w-4 text-[color:var(--accent)]" />{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow">Leadership & Service</div>
            <h2 className="mt-3 text-3xl md:text-4xl">Prefects, mentors and community service</h2>
            <p className="mt-5">
              Senior students serve as prefects in academic, sanitation, social and
              disciplinary portfolios. Through community-service days, students take
              part in road clean-ups, market sensitisation and visits to the local
              health centre — embodying our belief that service is the rent we pay
              for living in society.
            </p>
          </div>
          <img src={grad} alt="Graduating students" loading="lazy" className="rounded-xl w-full shadow-[var(--shadow-elevated)]" />
        </div>
      </section>
    </>
  );
}
