import { createFileRoute, Link } from "@tanstack/react-router";
import { Home, Info, Briefcase, FlaskConical, Building2, Newspaper, BookOpen, Download, DollarSign, Phone, FileText } from "lucide-react";

export const Route = createFileRoute("/sitemap")({
  component: SitemapPage,
});

const sections = [
  {
    title: "Main Pages",
    icon: Home,
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact Us", href: "/contact" },
      { label: "Blog", href: "/blog" },
      { label: "Downloads", href: "/downloads" },
      { label: "Get Membership", href: "/pricing" },
    ],
  },
  {
    title: "About PPO",
    icon: Info,
    links: [
      { label: "Introduction", href: "/about" },
      { label: "Chairman's Message", href: "/about/chairman" },
      { label: "Board of Governors", href: "/about/bog" },
      { label: "Vision & Mission", href: "/about/vision" },
      { label: "Organogram", href: "/about/organogram" },
    ],
  },
  {
    title: "Research Divisions",
    icon: FlaskConical,
    links: [
      { label: "Animal Sciences", href: "/research/animal-sciences" },
      { label: "Plant Sciences", href: "/research/plant-sciences" },
      { label: "Natural Resources", href: "/research/natural-resources" },
      { label: "Social Sciences", href: "/research/social-sciences" },
      { label: "Coordination & Monitoring", href: "/research/coordination" },
      { label: "Agricultural Engineering", href: "/research/engineering" },
    ],
  },
  {
    title: "Establishments",
    icon: Building2,
    links: [
      { label: "NARC Islamabad", href: "/establishments/narc" },
      { label: "BARDC Quetta", href: "/establishments/bardc" },
      { label: "SARC Karachi", href: "/establishments/sarc" },
      { label: "AZRI Bahawalpur", href: "/establishments/azri-bwp" },
      { label: "NSCRI Thatta", href: "/establishments/nscri" },
      { label: "Tea & High Value Crops", href: "/establishments/tea" },
      { label: "MARC Gilgit", href: "/establishments/marc" },
      { label: "AZRC D.I. Khan", href: "/establishments/azrc" },
      { label: "AZRI Umerkot", href: "/establishments/azri-umrkot" },
    ],
  },
  {
    title: "Media",
    icon: Newspaper,
    links: [
      { label: "Latest News", href: "/media/news" },
      { label: "Press Releases", href: "/media/press-releases" },
      { label: "Photo Gallery", href: "/media/gallery" },
    ],
  },
  {
    title: "Public Notice",
    icon: FileText,
    links: [
      { label: "Notifications", href: "/public-notice/notifications" },
      { label: "Circulars", href: "/public-notice/circulars" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Resources",
    icon: BookOpen,
    links: [
      { label: "PPJ — Precision Phytology Journal", href: "/ppj" },
      { label: "Information", href: "/information" },
      { label: "Right to Information", href: "/rti" },
    ],
  },
];

function SitemapPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">Sitemap</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />
        <p className="mt-4 text-sm text-[#65676b]">
          Complete directory of all pages on the PPO website.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="rounded-lg border border-[#e9e9e9] bg-[#f7f8fa] p-5">
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-[#0E8B1A]" />
                  <h2 className="text-sm font-bold text-[#212529]">{section.title}</h2>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="text-xs text-[#65676b] hover:text-[#104591] hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
