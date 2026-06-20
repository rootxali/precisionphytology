"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";

const quickLinks = [
  { label: "PPO Agrotech Company (PATCO)", href: "/programs/patco" },
  { label: "PMAS-Arid Agriculture University Rawalpindi", href: "#" },
  { label: "University of Agriculture Faisalabad", href: "#" },
  { label: "Ministry of National Food Security & Research", href: "#" },
  { label: "Pakistan Flora (Medicinal & Aromatic Plants)", href: "#" },
];

const departments = [
  { label: "PPO-NARC Islamabad", href: "/establishments/narc" },
  { label: "PPO-AZRC D.I.Khan", href: "/establishments/azrc" },
  { label: "PPO-BARDC Quetta", href: "/establishments/bardc" },
  { label: "PPO-AZRI Bhawalpur", href: "/establishments/azri-bwp" },
  { label: "PPO-NSCRI Thatta", href: "/establishments/nscri" },
];

export function ParcFooterNew() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to backend endpoint
  };

  return (
    <footer className="relative bg-black text-[#b3b3b3]">
      {/* Decorative background — subtle flag/emblem silhouette */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.03]"
        aria-hidden="true"
      >
        <svg
          className="absolute bottom-0 left-0 h-[300px] w-[300px] text-white"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M100 0C44.8 0 0 44.8 0 100s44.8 100 100 100 100-44.8 100-100S155.2 0 100 0zm0 180c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" />
        </svg>
        <svg
          className="absolute bottom-0 right-0 h-[300px] w-[300px] text-white"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M100 0C44.8 0 0 44.8 0 100s44.8 100 100 100 100-44.8 100-100S155.2 0 100 0zm0 180c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — Find Us */}
          <div>
            <FooterHeading text="Find Us" />
            <div className="mt-4 overflow-hidden rounded">
              <div className="relative">
                <iframe
                  title="PPO Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0!2d73.05!3d33.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQyJzAwLjAiTiA3M8KwMDMnMDAuMCJF!5e0!3m2!1sen!2spk!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=33.7,73.05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute left-2 top-2 inline-flex items-center gap-1 rounded bg-white px-2.5 py-1 text-xs font-medium text-[#212529] shadow-sm transition-colors hover:bg-gray-100"
                >
                  Open in Maps <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <FooterHeading text="Quick Links" />
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-start gap-1.5 text-sm text-[#b3b3b3] transition-colors hover:text-white"
                  >
                    <span className="mt-0.5 text-xs">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Departments */}
          <div>
            <FooterHeading text="Departments" />
            <ul className="mt-4 space-y-2.5">
              {departments.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-start gap-1.5 text-sm text-[#b3b3b3] transition-colors hover:text-white"
                  >
                    <span className="mt-0.5 text-xs">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Get in Touch */}
          <div>
            <FooterHeading text="Get in Touch" />
            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-sm border border-gray-700 bg-white px-3 py-2 text-sm text-[#212529] placeholder:text-gray-400 focus:border-[#104591] focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-sm border border-gray-700 bg-white px-3 py-2 text-sm text-[#212529] placeholder:text-gray-400 focus:border-[#104591] focus:outline-none"
              />
              <input
                type="text"
                name="subject"
                placeholder="Enter Subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full rounded-sm border border-gray-700 bg-white px-3 py-2 text-sm text-[#212529] placeholder:text-gray-400 focus:border-[#104591] focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={3}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-sm border border-gray-700 bg-white px-3 py-2 text-sm text-[#212529] placeholder:text-gray-400 focus:border-[#104591] focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded bg-[#104591] py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0d3a7a]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright strip */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 sm:px-6">
          <p className="text-xs text-[#707070]">
            Copyright &copy;{new Date().getFullYear()} Precision Phytology Organization (PPO). All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ text }: { text: string }) {
  return (
    <div>
      <h4 className="text-base font-bold text-white">{text}</h4>
      <div className="mt-1.5 h-[2px] w-[30px] bg-white" />
    </div>
  );
}
