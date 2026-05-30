import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Microscope, Briefcase, Palette, BookOpen, Calendar, FileText } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — Asa LG Senior Secondary School" },
      { name: "description", content: "Curriculum, departments, WAEC/NECO preparation and the academic calendar at Asa LG Senior Secondary School." },
      { property: "og:title", content: "Academics at Asa LGSSS" },
      { property: "og:description", content: "Science, Commercial and Arts departments built on the Nigerian senior secondary curriculum." },
      { property: "og:url", content: "/academics" },
    ],
    links: [{ rel: "canonical", href: "/academics" }],
  }),
  component: AcademicsPage,
});

function AcademicsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="A curriculum built for university, vocation and life."
        description="We follow the Nigerian senior secondary curriculum approved by the Federal Ministry of Education and tailor our delivery to the needs of every learner."
      />

      <section className="section">
        <div className="container-page">
          <div className="max-w-2xl">
            <div className="eyebrow">Our Departments</div>
            <h2 className="mt-3 text-3xl md:text-4xl">Specialisation begins in SS1</h2>
            <p className="mt-4">
              In SS1, students choose a department in consultation with parents and
              counsellors, based on their JSS performance and career interests.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-7">
            {[
              { icon: Microscope, t: "Science Department", subjects: ["English Language", "Mathematics", "Physics", "Chemistry", "Biology", "Further Mathematics", "Agricultural Science", "Civic Education"] },
              { icon: Briefcase, t: "Commercial Department", subjects: ["English Language", "Mathematics", "Economics", "Financial Accounting", "Commerce", "Office Practice", "Marketing", "Civic Education"] },
              { icon: Palette, t: "Arts Department", subjects: ["English Language", "Mathematics", "Literature in English", "Government", "Christian/Islamic Studies", "History", "Yoruba", "Visual Arts"] },
            ].map((d) => (
              <article key={d.t} className="card-soft p-7">
                <div className="h-12 w-12 rounded-lg bg-[color:var(--accent)]/10 text-[color:var(--accent)] inline-flex items-center justify-center">
                  <d.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl">{d.t}</h3>
                <ul className="mt-5 space-y-2 text-sm">
                  {d.subjects.map((s) => (
                    <li key={s} className="flex gap-2"><span className="text-[color:var(--accent)]">•</span>{s}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[color:var(--surface)]">
        <div className="container-page grid md:grid-cols-2 gap-12">
          <div>
            <div className="eyebrow">WAEC & NECO Preparation</div>
            <h2 className="mt-3 text-3xl md:text-4xl">Disciplined drilling for examination success</h2>
            <p className="mt-5">
              Our SS3 students benefit from a structured West African Senior School
              Certificate Examination (WASSCE) and NECO preparation programme that
              begins from the first week of SS2.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Weekly past-question practice in all core subjects",
                "Saturday remedial coaching by subject masters",
                "Mock examinations under WAEC conditions",
                "Special coaching for English Language and Mathematics",
                "Career and tertiary admissions counselling",
              ].map((x) => (
                <li key={x} className="flex gap-2"><BookOpen className="h-5 w-5 text-[color:var(--primary)] mt-0.5" />{x}</li>
              ))}
            </ul>
          </div>

          <div className="card-soft p-8">
            <div className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-[color:var(--accent)]" />
              <h3 className="text-xl">Academic Calendar — 2026/2027 Session</h3>
            </div>
            <table className="w-full mt-6 text-sm">
              <tbody className="divide-y divide-border">
                {[
                  ["1st Term Begins", "15 Sept 2026"],
                  ["1st Term Ends", "12 Dec 2026"],
                  ["2nd Term Begins", "12 Jan 2027"],
                  ["2nd Term Ends", "10 Apr 2027"],
                  ["3rd Term Begins", "4 May 2027"],
                  ["3rd Term / WAEC Ends", "31 Jul 2027"],
                ].map(([a, b]) => (
                  <tr key={a}>
                    <td className="py-3 font-medium text-[color:var(--heading)]">{a}</td>
                    <td className="py-3 text-right text-muted-foreground">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link to="/news" className="btn-outline mt-7">
              View Examination Notices <FileText className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page text-center max-w-2xl mx-auto">
          <div className="eyebrow justify-center">Ready to take the next step?</div>
          <h2 className="mt-3 text-3xl md:text-4xl">Apply for admission to SS1</h2>
          <p className="mt-4">Forms for the 2026/2027 session are now available.</p>
          <Link to="/admissions" className="btn-primary mt-7 inline-flex">
            Start Application <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
