import { Link } from "react-router-dom";
import { Facebook, Instagram, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--surface-border)] surface backdrop-blur-sm">
      <div className="container-wide py-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm text-[var(--brand-dark)]/80">
        
        {/* School Info */}
        <div>
          <div className="font-semibold text-[var(--brand-dark)] mb-2">
            Thangamani Matriculation Higher Secondary School
          </div>
          <p>Pattabiram, Chennai, Tamil Nadu</p>
          <p className="mt-2">
            Affiliated: TN Matric (up to X), TN State Board (XI–XII)
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <div className="font-semibold text-[var(--brand-dark)] mb-2">Quick Links</div>
          <ul className="space-y-1">
            <li>
              <Link to="/about" className="hover:text-[var(--brand-accent)] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/admissions" className="hover:text-[var(--brand-accent)] transition">
                Admissions
              </Link>
            </li>
            <li>
              <Link to="/academics" className="hover:text-[var(--brand-accent)] transition">
                Academics
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[var(--brand-accent)] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <div className="font-semibold text-[var(--brand-dark)] mb-2">Follow Us</div>
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://www.facebook.com/ThangamaniMHSS/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full border border-[var(--brand-accent)]/40 hover:bg-[var(--brand-accent)]/10 transition-transform duration-300 hover:scale-110"
            >
              <Facebook size={20} className="text-[var(--brand-accent)]" />
            </a>
            <a
              href="https://www.instagram.com/explore/locations/624720147567950/thangamani-matriculation-higher-secondary-school/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full border border-[var(--brand-accent)]/40 hover:bg-[var(--brand-accent)]/10 transition-transform duration-300 hover:scale-110"
            >
              <Instagram size={20} className="text-[var(--brand-accent)]" />
            </a>
            <a
              href="https://en.wikipedia.org/wiki/Thangamani_Matriculation_Higher_Secondary_School"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full border border-[var(--brand-accent)]/40 hover:bg-[var(--brand-accent)]/10 transition-transform duration-300 hover:scale-110"
            >
              <Globe size={20} className="text-[var(--brand-accent)]" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs py-4 border-t border-[var(--surface-border)] bg-[var(--brand-accent)]/10 text-[var(--brand-dark)]/70">
        © {new Date().getFullYear()} Thangamani MHSS. All rights reserved. | Shaping bright futures with excellence.
      </div>
    </footer>
  );
}
