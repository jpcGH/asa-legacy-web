import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/school-logo.png";

export function Footer() {
  return (
    <footer className="bg-[color:var(--navy)] text-white/80 mt-16">
      <div className="container-page py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="ALGSSS crest" className="h-14 w-14 object-contain" />
            <div>
              <div className="font-display font-bold text-white text-base leading-tight">
                Asa LG Senior<br />Secondary School
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-white/70">
            A respected public senior secondary school in Budo-Egba committed to
            discipline, academic excellence and community impact since its founding.
          </p>
          <p className="mt-4 font-display italic text-[color:var(--accent)] font-semibold">
            “No Sweat No Sweet”
          </p>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["/about", "About Us"],
              ["/academics", "Academics"],
              ["/admissions", "Admissions"],
              ["/student-life", "Student Life"],
              ["/staff", "Staff Directory"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-white transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Student Portal</a></li>
            <li><a href="#" className="hover:text-white">Staff Portal</a></li>
            <li><a href="#" className="hover:text-white">Result Checking</a></li>
            <li><a href="#" className="hover:text-white">Download Centre</a></li>
            <li><a href="#" className="hover:text-white">Notice Board</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-[color:var(--accent)] shrink-0" />P.O. Box 299, Afon, Asa LGA, Kwara State, Nigeria</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-[color:var(--accent)] shrink-0" />+234 803 000 0000</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-[color:var(--accent)] shrink-0" />info@algsss-budoegba.edu.ng</li>
          </ul>
          <div className="flex items-center gap-3 mt-5">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-white/20 hover:bg-[color:var(--accent)] hover:border-[color:var(--accent)] transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Asa Local Government Senior Secondary School, Budo-Egba. All rights reserved.</p>
          <p>Kwara State Ministry of Education</p>
        </div>
      </div>
    </footer>
  );
}
