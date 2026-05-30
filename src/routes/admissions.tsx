import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Download, FileText, ChevronDown, ChevronUp } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — Asa LG Senior Secondary School" },
      { name: "description", content: "How to apply for SS1 admission at Asa LG Senior Secondary School, Budo-Egba. Requirements, application steps and FAQs." },
      { property: "og:title", content: "Admissions — Asa LGSSS" },
      { property: "og:description", content: "Apply for the new session. Requirements, application steps and downloadable forms." },
      { property: "og:url", content: "/admissions" },
    ],
    links: [{ rel: "canonical", href: "/admissions" }],
  }),
  component: AdmissionsPage,
});

function AdmissionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Become a part of the Asa LGSSS family."
        description="Admission into SS1 is open to all candidates who have successfully completed JSS3 and obtained the Basic Education Certificate (BECE)."
      />

      <section className="section">
        <div className="container-page grid lg:grid-cols-2 gap-12">
          <div>
            <div className="eyebrow">Requirements</div>
            <h2 className="mt-3 text-3xl md:text-4xl">What you’ll need to apply</h2>
            <ul className="mt-7 space-y-4">
              {[
                "Original and photocopy of JSS3 / BECE result slip",
                "Birth certificate or declaration of age",
                "Two recent passport photographs (white background)",
                "Completed admission form (downloadable or collected at the bursary)",
                "Letter of attestation from previous school",
                "Indigeneship or residence verification (where applicable)",
              ].map((x) => (
                <li key={x} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-[color:var(--accent)] mt-0.5 shrink-0" />{x}</li>
              ))}
            </ul>
          </div>

          <div className="card-soft p-8">
            <div className="eyebrow">Application Steps</div>
            <ol className="mt-6 space-y-6">
              {[
                ["Obtain the admission form", "Collect a hard copy at the bursary or download it from the link below."],
                ["Submit completed form", "Return the form with required documents to the school office."],
                ["Sit for entrance assessment", "Candidates take a brief screening in English, Mathematics and General Knowledge."],
                ["Receive admission letter", "Successful candidates collect their letter from the principal’s office."],
                ["Resumption & registration", "Pay session dues at the bursary and report on the resumption date."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-[color:var(--primary)] text-white inline-flex items-center justify-center font-display font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-display font-bold text-[color:var(--heading)]">{t}</div>
                    <p className="text-sm text-muted-foreground mt-1">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section bg-[color:var(--surface)]">
        <div className="container-page grid md:grid-cols-2 gap-6">
          {[
            { t: "Download Admission Form", d: "PDF · A4 · 2 pages", icon: Download },
            { t: "Download Prospectus", d: "PDF · A5 booklet · 16 pages", icon: FileText },
          ].map((x) => (
            <a key={x.t} href="#" className="card-soft p-7 flex items-center justify-between gap-6 hover:border-[color:var(--accent)]">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-[color:var(--accent)]/10 text-[color:var(--accent)] inline-flex items-center justify-center">
                  <x.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-display font-bold text-[color:var(--heading)]">{x.t}</div>
                  <div className="text-xs text-muted-foreground mt-1">{x.d}</div>
                </div>
              </div>
              <span className="text-[color:var(--accent)] font-semibold text-sm">Download →</span>
            </a>
          ))}
        </div>
      </section>

      <FAQ />

      <section className="section bg-[color:var(--primary-dark)] text-white">
        <div className="container-page text-center max-w-2xl mx-auto">
          <h2 className="text-white text-3xl md:text-4xl">Apply online today</h2>
          <p className="mt-4 text-white/80">Save time by submitting your details through our online application portal.</p>
          <a href="#" className="btn-primary mt-7 inline-flex !py-3 !px-7">Start Online Application</a>
        </div>
      </section>
    </>
  );
}

function FAQ() {
  const items = [
    ["When does the application window close?", "Applications for the 2026/2027 session close on 31 August 2026."],
    ["Is there an application fee?", "Yes — a non-refundable fee of ₦2,000 covers screening, processing and form materials."],
    ["Are boarding facilities available?", "We currently operate as a day school. Boarding is under planning by the Kwara State Ministry of Education."],
    ["Does the school admit transfer students?", "Yes, into SS1 and SS2. Transfer candidates must submit transcripts from their previous school."],
    ["What about scholarships?", "Limited bursaries are available each session for academically outstanding indigent candidates."],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section">
      <div className="container-page max-w-3xl">
        <div className="eyebrow">FAQs</div>
        <h2 className="mt-3 text-3xl md:text-4xl">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {items.map(([q, a], i) => (
            <div key={q} className="py-2">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-4 text-left"
              >
                <span className="font-display font-bold text-[color:var(--heading)]">{q}</span>
                {open === i ? <ChevronUp className="h-5 w-5 text-[color:var(--accent)]" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
              </button>
              {open === i && <p className="pb-5 text-muted-foreground">{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
