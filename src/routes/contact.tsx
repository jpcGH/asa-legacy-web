import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Phone, Clock, Send, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Asa LG Senior Secondary School" },
      { name: "description", content: "Contact Asa LG Senior Secondary School, Budo-Egba: address, phone, email and enquiry form." },
      { property: "og:title", content: "Contact Asa LGSSS" },
      { property: "og:description", content: "P.O. Box 299, Afon, Asa LGA, Kwara State, Nigeria." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(20).optional(),
  subject: z.string().trim().min(3).max(150),
  message: z.string().trim().min(10, "Message is too short").max(1500),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[issue.path.join(".")] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="We’d love to hear from you."
        description="Whether you’re a prospective parent, an alumnus or a partner — please reach out."
      />

      <section className="section">
        <div className="container-page grid lg:grid-cols-[1fr_1.2fr] gap-12">
          <div className="space-y-5">
            <InfoRow icon={MapPin} title="Address" lines={["P.O. Box 299, Afon", "Asa Local Government Area", "Kwara State, Nigeria"]} />
            <InfoRow icon={Phone} title="Telephone" lines={["+234 803 000 0000", "+234 706 000 0000"]} />
            <InfoRow icon={Mail} title="Email" lines={["info@algsss-budoegba.edu.ng", "principal@algsss-budoegba.edu.ng"]} />
            <InfoRow icon={Clock} title="Office Hours" lines={["Monday – Friday · 8:00am – 4:00pm", "Saturday (by appointment) · 9:00am – 1:00pm"]} />
          </div>

          <div className="card-soft p-8">
            <h2 className="text-2xl">Send us a message</h2>
            <p className="mt-2 text-muted-foreground text-sm">We typically respond within two working days.</p>

            {sent ? (
              <div className="mt-8 p-6 rounded-lg bg-[color:var(--accent)]/10 border border-[color:var(--accent)]/30 flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-[color:var(--accent)] shrink-0" />
                <div>
                  <div className="font-display font-bold text-[color:var(--heading)]">Message received</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Thank you for contacting Asa LG Senior Secondary School. A member of
                    our administrative team will respond shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 grid gap-5">
                <Field label="Full name" name="name" error={errors.name} />
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Email" name="email" type="email" error={errors.email} />
                  <Field label="Phone (optional)" name="phone" error={errors.phone} />
                </div>
                <Field label="Subject" name="subject" error={errors.subject} />
                <Field label="Message" name="message" textarea error={errors.message} />
                <button className="btn-primary self-start mt-2">
                  Send Message <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page">
          <div className="overflow-hidden rounded-xl border border-border shadow-[var(--shadow-card)]">
            <iframe
              title="Map to Budo-Egba, Asa LGA"
              src="https://www.google.com/maps?q=Budo-Egba+Asa+LGA+Kwara+State&output=embed"
              loading="lazy"
              className="w-full h-[420px] border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({ icon: Icon, title, lines }: { icon: React.ComponentType<{ className?: string }>; title: string; lines: string[] }) {
  return (
    <div className="card-soft p-6 flex gap-4">
      <div className="h-12 w-12 rounded-lg bg-[color:var(--accent)]/10 text-[color:var(--accent)] inline-flex items-center justify-center shrink-0">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <div className="font-display font-bold text-[color:var(--heading)]">{title}</div>
        <div className="mt-1 text-sm text-muted-foreground space-y-0.5">
          {lines.map((l) => <div key={l}>{l}</div>)}
        </div>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", textarea, error }: { label: string; name: string; type?: string; textarea?: boolean; error?: string }) {
  const common = "w-full rounded-md border border-input bg-white px-3.5 py-2.5 text-sm text-[color:var(--heading)] focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent";
  return (
    <label className="block">
      <span className="text-sm font-medium text-[color:var(--heading)]">{label}</span>
      {textarea ? (
        <textarea name={name} rows={5} className={`${common} mt-1.5 resize-y`} />
      ) : (
        <input name={name} type={type} className={`${common} mt-1.5`} />
      )}
      {error && <span className="text-xs text-[color:var(--accent)] mt-1 block">{error}</span>}
    </label>
  );
}
