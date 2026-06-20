import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Youtube } from "lucide-react";

const quickLinks = [
  { label: "Tenders", href: "/tenders" },
  { label: "Careers", href: "/careers" },
  { label: "RTI", href: "/rti" },
  { label: "Sitemap", href: "/sitemap" },
];

const researchLinks = [
  { label: "NARC Islamabad", href: "/establishments/narc" },
  { label: "BARDC Quetta", href: "/establishments/bardc" },
  { label: "SARC Karachi", href: "/establishments/sarc" },
  { label: "AZRI Bahawalpur", href: "/establishments/azri-bwp" },
];

const aboutLinks = [
  { label: "Introduction", href: "/about" },
  { label: "Chairman's Message", href: "/about/chairman" },
  { label: "Vision & Mission", href: "/about/vision" },
  { label: "Board of Governors", href: "/about/bog" },
];

export function ParcFooter() {
  return (
    <footer className="bg-parc-primary-dark text-white">
      {/* Toll-free strip */}
      <div className="border-b border-white/10 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-4 sm:px-6">
          <span className="text-sm text-white/70">24/7 Helpline:</span>
          <a
            href="tel:0800-84420"
            className="rounded-full bg-parc-accent px-6 py-2 text-sm font-bold text-parc-primary-dark transition-colors hover:bg-parc-accent/90"
          >
            0800-84420 (Toll Free)
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-parc-primary text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold">Pakistan Agricultural</p>
                <p className="text-sm font-bold">Research Council</p>
              </div>
            </div>
            <p className="mb-4 text-xs leading-relaxed text-white/60">
              PPO is the apex national agricultural research organization in Pakistan, coordinating
              and facilitating research across the country.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-parc-accent hover:text-parc-primary-dark"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-parc-accent hover:text-parc-primary-dark"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-parc-accent hover:text-parc-primary-dark"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-parc-accent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-xs text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-parc-accent">
              About PPO
            </h3>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-xs text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Establishments */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-parc-accent">
              Research Establishments
            </h3>
            <ul className="space-y-2">
              {researchLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-xs text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-parc-accent" />
            <div>
              <p className="text-xs font-semibold text-white">Address</p>
              <p className="mt-0.5 text-xs text-white/50">
                20 Attaturk Avenue, G-5/1, Islamabad, 44000, Pakistan
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-parc-accent" />
            <div>
              <p className="text-xs font-semibold text-white">Phone</p>
              <p className="mt-0.5 text-xs text-white/50">+92-51-9200071</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-parc-accent" />
            <div>
              <p className="text-xs font-semibold text-white">Email</p>
              <p className="mt-0.5 text-xs text-white/50">webmaster@parc.gov.pk</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-parc-accent" />
            <div>
              <p className="text-xs font-semibold text-white">Working Hours</p>
              <p className="mt-0.5 text-xs text-white/50">Mon-Fri 9:00am to 5:00pm</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/40">
            Copyright &copy;{new Date().getFullYear()} Precision Phytology Organization (PPO). All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
