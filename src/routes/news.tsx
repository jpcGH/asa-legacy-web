import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Megaphone, Award, FileText } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Events — Asa LG Senior Secondary School" },
      { name: "description", content: "Latest announcements, event calendar, achievements and examination notices from Asa LG Senior Secondary School." },
      { property: "og:title", content: "News & Events — Asa LGSSS" },
      { property: "og:description", content: "Announcements, achievements and the school event calendar." },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: NewsPage,
});

function NewsPage() {
  const news = [
    { tag: "WAEC", icon: FileText, date: "12 Mar 2026", title: "WAEC 2026 registration open for SS3 candidates", body: "All SS3 candidates are to register at the bursary on or before 28 March 2026. Required documents include the registration slip and two passport photographs." },
    { tag: "Achievement", icon: Award, date: "5 Mar 2026", title: "Two students qualify for state JETS Olympiad finals", body: "Our SS2 students Aisha Ibrahim and Tunde Olawale will represent the school in Mathematics and Physics at the Kwara State JETS Olympiad finals in Ilorin." },
    { tag: "Event", icon: Calendar, date: "28 Feb 2026", title: "Annual Inter-House Sports Competition holds 14 March", body: "All four houses will compete across athletics, football and field events. Parents and well-wishers are warmly invited." },
    { tag: "Announcement", icon: Megaphone, date: "10 Feb 2026", title: "SS1 admission forms now available", body: "Forms for the 2026/2027 session can be obtained at the school bursary or downloaded from the admissions page." },
    { tag: "Event", icon: Calendar, date: "20 Jan 2026", title: "PTA general meeting — 27 January", body: "All parents and guardians are requested to attend the first-term PTA meeting at the school assembly hall by 10:00am." },
    { tag: "Achievement", icon: Award, date: "12 Dec 2025", title: "Best-kept school grounds — LGA recognition", body: "Asa LGSSS has been recognised by the Asa LGA Education Authority as the best-kept secondary school grounds for 2025." },
  ];
  return (
    <>
      <PageHeader
        eyebrow="News & Events"
        title="What’s happening on campus."
        description="Stay informed about academic notices, school events, achievements and important announcements."
      />

      <section className="section">
        <div className="container-page grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {news.map((n) => (
              <article key={n.title} className="card-soft p-7">
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-[color:var(--accent)]/10 text-[color:var(--accent)] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <n.icon className="h-3.5 w-3.5" /> {n.tag}
                  </span>
                  <span className="text-muted-foreground">{n.date}</span>
                </div>
                <h2 className="text-xl md:text-2xl mt-4">{n.title}</h2>
                <p className="mt-3 text-muted-foreground">{n.body}</p>
              </article>
            ))}
          </div>

          <aside className="space-y-6">
            <div className="card-soft p-6">
              <h3 className="text-lg flex items-center gap-2"><Calendar className="h-5 w-5 text-[color:var(--accent)]" /> Upcoming Events</h3>
              <ul className="mt-4 divide-y divide-border">
                {[
                  ["14 Mar", "Inter-House Sports"],
                  ["28 Mar", "First Term Closes"],
                  ["12 Apr", "Easter Break Begins"],
                  ["4 May", "Resumption (Third Term)"],
                  ["10 Jun", "WAEC English Paper"],
                ].map(([d, t]) => (
                  <li key={t} className="flex gap-4 py-3 text-sm">
                    <span className="font-display font-bold text-[color:var(--primary-dark)] w-16">{d}</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-soft p-6 bg-[color:var(--primary-dark)] text-white">
              <h3 className="text-lg text-white flex items-center gap-2"><Megaphone className="h-5 w-5 text-[color:var(--accent)]" /> Notice Board</h3>
              <p className="mt-3 text-sm text-white/80">All SS3 students should report to the examinations office to confirm WAEC registration details before 25 March.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
