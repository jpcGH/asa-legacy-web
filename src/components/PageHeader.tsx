import { type ReactNode } from "react";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <section className="relative bg-[color:var(--primary-dark)] text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)",
          backgroundSize: "48px 48px, 60px 60px",
        }}
      />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-[color:var(--primary)] -skew-x-12 opacity-40" />
      <div className="container-page relative py-20 md:py-28">
        {eyebrow && <div className="eyebrow text-white !text-white before:bg-white/80">{eyebrow}</div>}
        <h1 className="mt-4 text-white text-3xl md:text-5xl font-display font-bold max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-white/85 text-base md:text-lg">{description}</p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
