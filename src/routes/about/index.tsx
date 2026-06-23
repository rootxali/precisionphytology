import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Target,
  Eye,
  Award,
  Users,
  Leaf,
  Globe,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/about/")({
  component: AboutPage,
});

const stats = [
  { number: "50+", label: "Years of Research" },
  { number: "1200+", label: "Research Papers" },
  { number: "500+", label: "Scientists" },
  { number: "4", label: "Provinces Covered" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To coordinate and strengthen agricultural research across Pakistan for food security, sustainable development, and improved livelihoods of farming communities.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "A Pakistan where precision agriculture and scientific innovation ensure food security, environmental sustainability, and prosperity for all farmers.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "We uphold the highest standards in agricultural research, diagnostics, and advisory services through continuous innovation and professional development.",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "We believe in partnerships — working with universities, government bodies, international organizations, and farming communities to achieve shared goals.",
  },
];

const timeline = [
  { year: "1978", title: "Foundation", desc: "PARC established as the apex agricultural research organization in Pakistan." },
  { year: "1995", title: "Expansion", desc: "Research stations established in all four provinces covering diverse agro-ecological zones." },
  { year: "2010", title: "Modernization", desc: "Introduction of precision agriculture technologies and molecular research capabilities." },
  { year: "2024", title: "Transformation", desc: "Rebranded as Precision Phytology Organization (PPO) with a focus on modern agricultural science." },
  { year: "2026", title: "Innovation", desc: "Launch of AI-powered diagnostics, digital platforms, and international research collaborations." },
];

function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-hero-title",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );
      gsap.fromTo(
        ".about-hero-subtitle",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
      );
      gsap.fromTo(
        ".about-hero-badge",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, delay: 0.6, ease: "back.out(1.7)" }
      );

      gsap.fromTo(
        ".stat-item",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".mission-card",
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".team-frame",
        { y: 80, opacity: 0, rotateY: -10 },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".timeline-item",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div ref={heroRef} className="relative overflow-hidden bg-[#0E8B1A] py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-white/5" />
          <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-white/5" />
          <div className="absolute right-1/4 top-1/3 h-[200px] w-[200px] rounded-full bg-white/3" />
        </div>
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="about-hero-badge mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <Leaf className="h-4 w-4 text-white/80" />
            <span className="text-xs font-medium text-white/90">Est. 1978</span>
          </div>
          <h1 className="about-hero-title text-center text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            About PPO
          </h1>
          <p className="about-hero-subtitle mx-auto mt-6 max-w-3xl text-center text-base text-white/70 sm:text-lg lg:text-xl">
            Precision Phytology Organization — Pakistan&apos;s apex national
            agricultural research body, driving innovation in plant sciences,
            diagnostics, and sustainable farming for over five decades.
          </p>
        </div>
      </div>

      {/* Stats Strip */}
      <div ref={statsRef} className="border-b border-[#e9e9e9] bg-white">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-4 py-12 sm:px-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item text-center">
              <p className="text-3xl font-bold text-[#104591] sm:text-4xl">{stat.number}</p>
              <p className="mt-1 text-sm text-[#65676b]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Values */}
      <div ref={missionRef} className="bg-[#f7f8fa] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#212529] sm:text-4xl">Mission & Values</h2>
            <div className="mx-auto mt-3 h-1 w-20 bg-[#0E8B1A]" />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="mission-card rounded-xl border border-[#e9e9e9] bg-white p-6 transition-shadow hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#104591]/10">
                    <Icon className="h-6 w-6 text-[#104591]" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#212529]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#65676b]">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Leadership — Founder & CEO */}
      <div ref={teamRef} className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#212529] sm:text-4xl">Leadership</h2>
            <div className="mx-auto mt-3 h-1 w-20 bg-[#0E8B1A]" />
            <p className="mx-auto mt-4 max-w-xl text-sm text-[#65676b]">
              Guided by visionary leaders committed to transforming Pakistan&apos;s
              agricultural landscape through science and innovation.
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center gap-10 md:flex-row md:justify-center">
            {/* Founder */}
            <div className="team-frame group w-full max-w-sm text-center">
              <div className="relative overflow-hidden rounded-2xl border border-[#e9e9e9] bg-white shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <div className="relative h-[380px] overflow-hidden bg-gradient-to-br from-[#0E8B1A]/10 to-[#0E8B1A]/5">
                  <img
                    src="/faisal-portrait.jpeg"
                    alt="Dr Faisal Fateh - Founder"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <span className="inline-block rounded-full bg-[#0E8B1A]/10 px-3 py-1 text-[10px] font-bold uppercase text-[#0E8B1A]">
                    Founder
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-[#212529]">Dr Faisal Fateh</h3>
                  <p className="mt-1 text-sm text-[#65676b]">
                    Visionary leader who established PPO with a mission to
                    revolutionize agricultural research in Pakistan.
                  </p>
                  <div className="mt-4 flex justify-center gap-3">
                    <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-[#65676b] transition-colors hover:border-[#0E8B1A] hover:text-[#0E8B1A]">
                      <Globe className="h-3.5 w-3.5" />
                    </a>
                    <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-[#65676b] transition-colors hover:border-[#0E8B1A] hover:text-[#0E8B1A]">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CEO */}
            <div className="team-frame group w-full max-w-sm text-center">
              <div className="relative overflow-hidden rounded-2xl border border-[#e9e9e9] bg-white shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <div className="relative h-[380px] overflow-hidden bg-gradient-to-br from-[#104591]/10 to-[#104591]/5">
                  <img
                    src="/b07e4592-ffc6-420f-b9b2-c1a76c114a3e_removalai_preview%20(Edited%202).png"
                    alt="Abdul Muqeet - CEO"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <span className="inline-block rounded-full bg-[#104591]/10 px-3 py-1 text-[10px] font-bold uppercase text-[#104591]">
                    CEO
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-[#212529]">Abdul Muqeet</h3>
                  <p className="mt-1 text-sm text-[#65676b]">
                    Leading PPO into its next chapter with a focus on
                    technology-driven agricultural solutions and global partnerships.
                  </p>
                  <div className="mt-4 flex justify-center gap-3">
                    <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-[#65676b] transition-colors hover:border-[#104591] hover:text-[#104591]">
                      <Globe className="h-3.5 w-3.5" />
                    </a>
                    <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-[#65676b] transition-colors hover:border-[#104591] hover:text-[#104591]">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div ref={timelineRef} className="bg-[#f7f8fa] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#212529] sm:text-4xl">Our Journey</h2>
            <div className="mx-auto mt-3 h-1 w-20 bg-[#0E8B1A]" />
          </div>

          <div className="relative mt-12">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-[#0E8B1A]/20 md:left-1/2 md:-translate-x-px" />

            <div className="space-y-10">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`timeline-item relative flex flex-col gap-4 md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute left-4 top-1 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[#0E8B1A] bg-white md:left-1/2" />

                  <div className={`ml-10 flex-1 md:ml-0 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                    <span className="inline-block rounded-full bg-[#0E8B1A]/10 px-3 py-1 text-xs font-bold text-[#0E8B1A]">
                      {item.year}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-[#212529]">{item.title}</h3>
                    <p className="mt-1 text-sm text-[#65676b]">{item.desc}</p>
                  </div>

                  <div className="hidden flex-1 md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-[#212529] sm:text-4xl">
            Join Our Mission
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-[#65676b]">
            Whether you&apos;re a researcher, farmer, or organization, we invite you
            to be part of Pakistan&apos;s agricultural transformation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0E8B1A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0E8B1A]/90"
            >
              Our Services <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-[#104591] px-6 py-3 text-sm font-semibold text-[#104591] transition-colors hover:bg-[#104591] hover:text-white"
            >
              Get in Touch <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
