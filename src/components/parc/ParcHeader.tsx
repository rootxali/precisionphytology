"use client";

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", href: "/", hasDropdown: false },
  {
    label: "About Us",
    href: "/about",
    hasDropdown: true,
    children: [
      { label: "Introduction", href: "/about" },
      { label: "Chairman's Message", href: "/about/chairman" },
      { label: "Board of Governors", href: "/about/bog" },
      { label: "Vision & Mission", href: "/about/vision" },
      { label: "Organogram", href: "/about/organogram" },
    ],
  },
  {
    label: "Divisions",
    href: "/research",
    hasDropdown: true,
    children: [
      { label: "Animal Sciences", href: "/research/animal-sciences" },
      { label: "Plant Sciences", href: "/research/plant-sciences" },
      { label: "Natural Resources", href: "/research/natural-resources" },
      { label: "Social Sciences", href: "/research/social-sciences" },
      { label: "Coordination & Monitoring", href: "/research/coordination" },
      { label: "Agricultural Engineering", href: "/research/engineering" },
    ],
  },
  {
    label: "Research Establishments",
    href: "/establishments",
    hasDropdown: true,
    children: [
      { label: "NARC Islamabad", href: "/establishments/narc" },
      { label: "BARDC Quetta", href: "/establishments/bardc" },
      { label: "SARC Karachi", href: "/establishments/sarc" },
      { label: "AZRI Bahawalpur", href: "/establishments/azri-bwp" },
      { label: "NSCRI Thatta", href: "/establishments/nscri" },
    ],
  },
  {
    label: "Media",
    href: "/media",
    hasDropdown: true,
    children: [
      { label: "Latest News", href: "/media/news" },
      { label: "Press Releases", href: "/media/press-releases" },
      { label: "Photo Gallery", href: "/media/gallery" },
    ],
  },
  {
    label: "Careers",
    href: "/careers",
    hasDropdown: true,
    children: [
      { label: "Current Openings", href: "/careers" },
      { label: "How to Apply", href: "/careers/apply" },
    ],
  },
  {
    label: "Public Notice",
    href: "/public-notice",
    hasDropdown: true,
    children: [
      { label: "Tenders", href: "/tenders" },
      { label: "Notifications", href: "/notifications" },
      { label: "Circulars", href: "/circulars" },
    ],
  },
  {
    label: "Employees Corner",
    href: "/employees",
    hasDropdown: true,
    children: [
      { label: "Webmail", href: "/employees/webmail" },
      { label: "Leave Portal", href: "/employees/leave" },
      { label: "Payslips", href: "/employees/payslips" },
    ],
  },
  { label: "Information", href: "/information", hasDropdown: false },
  {
    label: "Contact Us",
    href: "/contact",
    hasDropdown: true,
    children: [
      { label: "Head Office", href: "/contact" },
      { label: "Regional Centers", href: "/contact/regional" },
    ],
  },
];

export function ParcHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50">
      {/* Logo Bar — white background */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0E8B1A] text-white">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <div>
              <p className="text-base font-bold leading-tight text-[#1a1a1a]">
                Precision Phytology Organization
              </p>
              <p className="text-[10px] text-gray-500">PPO</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Navigation Bar — solid green */}
      <nav className="bg-[#0E8B1A]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          {/* Desktop Nav */}
          <div className="hidden items-center lg:flex">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className="flex items-center gap-1 px-[18px] py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-white/15"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="h-3 w-3 opacity-70" />}
                </Link>
                {item.hasDropdown && openDropdown === item.label && (
                  <div className="absolute left-0 top-full z-50 min-w-[220px] border border-gray-200 bg-white py-1 shadow-lg">
                    {item.children?.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-[#1a1a1a] transition-colors hover:bg-[#0E8B1A]/5 hover:text-[#0E8B1A]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center justify-between py-2.5 lg:hidden">
            <span className="text-sm font-medium text-white">Menu</span>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white">
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="border-t border-white/20 bg-[#0E8B1A] px-4 pb-4 lg:hidden">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  className="block border-b border-white/10 py-2.5 text-sm text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block border-b border-white/5 py-2 text-xs text-white/70"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
