import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/school-logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/academics", label: "Academics" },
  { to: "/admissions", label: "Admissions" },
  { to: "/student-life", label: "Student Life" },
  { to: "/news", label: "News & Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/staff", label: "Staff" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      {/* Top utility bar */}
      <div className="bg-[color:var(--navy)] text-white text-xs">
        <div className="container-page flex flex-wrap items-center justify-between gap-2 py-2">
          <span className="opacity-80">P.O. Box 299, Afon, Asa LGA, Kwara State</span>
          <div className="flex items-center gap-4 opacity-90">
            <a href="#" className="hover:text-white/90">Student Portal</a>
            <span className="opacity-40">|</span>
            <a href="#" className="hover:text-white/90">Staff Portal</a>
            <span className="opacity-40">|</span>
            <a href="#" className="hover:text-white/90">Check Results</a>
          </div>
        </div>
      </div>

      <div className="container-page flex items-center justify-between py-3 gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="ALGSSS crest" width={48} height={48} className="h-12 w-12 object-contain" />
          <div className="leading-tight">
            <div className="font-display font-bold text-[color:var(--heading)] text-sm md:text-base">
              Asa LG Senior Secondary School
            </div>
            <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest">
              Budo-Egba · Kwara State
            </div>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3 py-2 text-sm font-medium text-[color:var(--heading)] hover:text-[color:var(--primary)] transition-colors"
              activeProps={{ className: "px-3 py-2 text-sm font-semibold text-[color:var(--primary)]" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/admissions" className="hidden md:inline-flex btn-primary !py-2 !px-4 !text-sm">
            Apply for Admission
          </Link>
          <button
            type="button"
            className="xl:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-[color:var(--heading)]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden border-t border-border bg-white">
          <nav className="container-page py-4 grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-md text-sm font-medium text-[color:var(--heading)] hover:bg-secondary"
                activeProps={{ className: "px-3 py-2.5 rounded-md text-sm font-semibold text-white bg-[color:var(--primary)]" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/admissions" onClick={() => setOpen(false)} className="btn-primary mt-3 !py-2.5">
              Apply for Admission
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
