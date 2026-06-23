"use client";

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { NotificationBell } from "./NotificationBell";

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
  { label: "Services", href: "/services", hasDropdown: false },
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
    label: "Establishments",
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
    label: "Blog",
    href: "/blog",
    hasDropdown: false,
  },
  {
    label: "Public Notice",
    href: "/public-notice",
    hasDropdown: true,
    children: [
      { label: "Notifications", href: "/public-notice/notifications" },
      { label: "Circulars", href: "/public-notice/circulars" },
    ],
  },
  { label: "Info", href: "/information", hasDropdown: false },
  {
    label: "Contact",
    href: "/contact",
    hasDropdown: false,
  },
];

export function ParcHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50">
      {/* Logo Bar — white background */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-3 py-2.5 sm:px-4 lg:px-6">
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0E8B1A] text-white sm:h-12 sm:w-12 lg:h-14 lg:w-14">
              <svg className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <div className="hidden min-w-0 sm:block">
              <p className="text-sm font-bold leading-tight text-[#1a1a1a] lg:text-base">
                Precision Phytology Organization
              </p>
              <p className="text-[9px] text-gray-500 lg:text-[10px]">PPO</p>
            </div>
            <div className="sm:hidden">
              <p className="text-sm font-bold leading-tight text-[#1a1a1a]">
                PPO
              </p>
            </div>
          </Link>

          {/* Right side — notification bell */}
          <div className="flex items-center">
            <NotificationBell />
          </div>
        </div>
      </div>

      {/* Navigation Bar — solid green */}
      <nav className="bg-[#0E8B1A]">
        <div className="mx-auto max-w-[1400px] px-3 sm:px-4 lg:px-6">
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
                  className="flex items-center gap-1 px-3 py-2.5 text-[12px] font-medium text-white transition-colors hover:bg-white/15 xl:text-[13px]"
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
            <Link
              to="/pricing"
              className="ml-auto rounded bg-white px-4 py-2 text-[12px] font-bold text-[#0E8B1A] transition-colors hover:bg-white/90 xl:text-[13px]"
            >
              Get Membership
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center justify-between py-2 lg:hidden">
            <span className="text-xs font-medium text-white sm:text-sm">Menu</span>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white">
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="border-t border-white/20 bg-[#0E8B1A] px-3 pb-4 lg:hidden">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileAccordion(mobileAccordion === item.label ? null : item.label)
                      }
                      className="flex w-full items-center justify-between border-b border-white/10 py-2.5 text-sm text-white"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          mobileAccordion === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileAccordion === item.label && (
                      <div className="pl-4">
                        <Link
                          to={item.href}
                          className="block border-b border-white/5 py-2 text-xs font-medium text-white/90"
                          onClick={() => setMobileOpen(false)}
                        >
                          Overview
                        </Link>
                        {item.children?.map((child) => (
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
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="block border-b border-white/10 py-2.5 text-sm text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/pricing"
              className="mt-3 block rounded bg-white px-4 py-2.5 text-center text-sm font-bold text-[#0E8B1A]"
              onClick={() => setMobileOpen(false)}
            >
              Get Membership
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
