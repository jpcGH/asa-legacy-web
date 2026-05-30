import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/staff")({
  head: () => ({
    meta: [
      { title: "Staff Directory — Asa LG Senior Secondary School" },
      { name: "description", content: "Meet the principal, vice principals, teaching and administrative staff of Asa LG Senior Secondary School, Budo-Egba." },
      { property: "og:title", content: "Staff Directory — Asa LGSSS" },
      { property: "og:description", content: "Our leadership, teachers and administrative team." },
      { property: "og:url", content: "/staff" },
    ],
    links: [{ rel: "canonical", href: "/staff" }],
  }),
  component: StaffPage,
});

const leadership = [
  ["Mr. Yusuf A. Salami", "Principal", "B.Sc. Ed., M.Ed. Administration"],
  ["Mrs. Kafayat Abdullahi", "Vice Principal (Academic)", "B.Sc. Ed. Mathematics"],
  ["Mr. Tunde Adeyemi", "Vice Principal (Administration)", "B.A. Ed. English"],
];

const teaching = [
  ["Mrs. Aisha Lawal", "Head of Sciences", "Chemistry / Further Maths"],
  ["Mr. Samson Olatunji", "Head of Commercials", "Economics / Accounting"],
  ["Mrs. Folake Ajayi", "Head of Arts", "Literature / Government"],
  ["Mr. Sunday Adeniyi", "Biology", "B.Sc. Ed. Biology"],
  ["Mrs. Halimat Yusuf", "English Language", "B.A. Ed. English"],
  ["Mr. Olawale Ibrahim", "Mathematics", "B.Sc. Mathematics"],
  ["Mrs. Bilkisu Mohammed", "Civic Education", "B.A. Political Science"],
  ["Mr. Daniel Akande", "Computer Studies / ICT", "B.Sc. Computer Science"],
];

const admin = [
  ["Mrs. Ngozi Eze", "Bursar"],
  ["Mr. Lateef Bello", "Examinations Officer"],
  ["Mrs. Toyin Adebayo", "Guidance Counsellor"],
  ["Mr. Musa Abdulrahman", "Librarian"],
];

function StaffPage() {
  return (
    <>
      <PageHeader
        eyebrow="Staff Directory"
        title="The people behind Asa LGSSS."
        description="Our school is led by a team of qualified, dedicated educators committed to the success and welfare of every student."
      />

      <Section title="Principal & Vice Principals">
        <div className="grid md:grid-cols-3 gap-6">
          {leadership.map(([n, r, q]) => (
            <StaffCard key={n} name={n} role={r} qual={q} accent />
          ))}
        </div>
      </Section>

      <Section title="Teaching Staff" surface>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {teaching.map(([n, r, q]) => (
            <StaffCard key={n} name={n} role={r} qual={q} />
          ))}
        </div>
      </Section>

      <Section title="Administrative Staff">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {admin.map(([n, r]) => (
            <StaffCard key={n} name={n} role={r} />
          ))}
        </div>
      </Section>
    </>
  );
}

function Section({ title, children, surface }: { title: string; children: React.ReactNode; surface?: boolean }) {
  return (
    <section className={`section ${surface ? "bg-[color:var(--surface)]" : ""}`}>
      <div className="container-page">
        <h2 className="text-2xl md:text-3xl">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function StaffCard({ name, role, qual, accent }: { name: string; role: string; qual?: string; accent?: boolean }) {
  const initials = name.replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s*/, "").split(" ").map((p) => p[0]).slice(0, 2).join("");
  return (
    <div className={`card-soft p-6 text-center ${accent ? "border-t-4 border-t-[color:var(--accent)]" : ""}`}>
      <div className="mx-auto h-20 w-20 rounded-full bg-[color:var(--primary)]/10 text-[color:var(--primary-dark)] inline-flex items-center justify-center font-display text-xl font-bold">
        {initials}
      </div>
      <div className="mt-4 font-display font-bold text-[color:var(--heading)]">{name}</div>
      <div className="text-xs text-[color:var(--accent)] uppercase tracking-widest mt-1">{role}</div>
      {qual && <div className="text-xs text-muted-foreground mt-2">{qual}</div>}
      <div className="mt-4 flex justify-center gap-2 text-muted-foreground">
        <Mail className="h-4 w-4" />
        <Phone className="h-4 w-4" />
      </div>
    </div>
  );
}
