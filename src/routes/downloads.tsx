import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  Download,
  Search,
  FileText,
  Filter,
  ArrowDownToLine,
  Calendar,
  Tag,
  Eye,
  X,
} from "lucide-react";
import gsap from "gsap";

gsap.registerPlugin();

export const Route = createFileRoute("/downloads")({
  component: DownloadsPage,
});

const categories = [
  "All",
  "Research Papers",
  "Annual Reports",
  "Policy Briefs",
  "Training Manuals",
  "Tender Documents",
  "Public Notices",
];

const documents = [
  {
    id: 1,
    title: "Precision Agriculture Research Framework 2026",
    category: "Research Papers",
    format: "PDF",
    size: "2.4 MB",
    date: "2026-03-15",
    downloads: 1240,
    desc: "Comprehensive framework for precision agriculture research across Pakistan's agro-ecological zones.",
  },
  {
    id: 2,
    title: "Annual Report 2025-26",
    category: "Annual Reports",
    format: "PDF",
    size: "8.1 MB",
    date: "2026-03-01",
    downloads: 3560,
    desc: "Complete annual report covering research outputs, financial statements, and future roadmap.",
  },
  {
    id: 3,
    title: "Climate Smart Agriculture Policy Brief",
    category: "Policy Briefs",
    format: "PDF",
    size: "1.2 MB",
    date: "2026-02-20",
    downloads: 890,
    desc: "Policy recommendations for integrating climate-smart practices into Pakistani agriculture.",
  },
  {
    id: 4,
    title: "Soil Health Management Manual",
    category: "Training Manuals",
    format: "PDF",
    size: "5.6 MB",
    date: "2026-01-10",
    downloads: 2100,
    desc: "Step-by-step guide for soil testing, interpretation, and management strategies.",
  },
  {
    id: 5,
    title: "Q2 2026 Procurement Tender — Lab Equipment",
    category: "Tender Documents",
    format: "PDF",
    size: "0.8 MB",
    date: "2026-03-20",
    downloads: 456,
    desc: "Tender notice for procurement of advanced laboratory equipment for NARC.",
  },
  {
    id: 6,
    title: "Integrated Pest Management Guidelines",
    category: "Training Manuals",
    format: "PDF",
    size: "3.9 MB",
    date: "2025-12-05",
    downloads: 1780,
    desc: "Comprehensive IPM guidelines for major field crops including wheat, rice, and cotton.",
  },
  {
    id: 7,
    title: "Public Notice — Recruitment Drive 2026",
    category: "Public Notices",
    format: "PDF",
    size: "0.5 MB",
    date: "2026-03-18",
    downloads: 5200,
    desc: "Official notification for upcoming recruitment across research and technical positions.",
  },
  {
    id: 8,
    title: "Seed Variety Catalogue — Kharif 2026",
    category: "Research Papers",
    format: "PDF",
    size: "4.2 MB",
    date: "2026-02-28",
    downloads: 2890,
    desc: "Catalogue of approved seed varieties for Kharif season with performance data.",
  },
  {
    id: 9,
    title: "Water Resource Management Policy Brief",
    category: "Policy Briefs",
    format: "PDF",
    size: "1.5 MB",
    date: "2026-01-22",
    downloads: 670,
    desc: "Policy framework for sustainable water use in irrigated agriculture.",
  },
  {
    id: 10,
    title: "Annual Report 2024-25",
    category: "Annual Reports",
    format: "PDF",
    size: "7.8 MB",
    date: "2025-03-01",
    downloads: 4120,
    desc: "Previous year's comprehensive report on research achievements and organizational milestones.",
  },
  {
    id: 11,
    title: "Digital Agriculture Extension Toolkit",
    category: "Training Manuals",
    format: "PDF",
    size: "2.8 MB",
    date: "2026-03-10",
    downloads: 980,
    desc: "Training toolkit for extension workers on using digital platforms for farmer advisory.",
  },
  {
    id: 12,
    title: "Tender — Solar Panel Installation NARC",
    category: "Tender Documents",
    format: "PDF",
    size: "0.6 MB",
    date: "2026-03-22",
    downloads: 320,
    desc: "Tender for installation of 500KW solar panel system at NARC campus.",
  },
];

function DownloadsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [previewDoc, setPreviewDoc] = useState<(typeof documents)[0] | null>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".dl-hero-title",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
      gsap.fromTo(
        ".dl-hero-sub",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power3.out" }
      );
      gsap.fromTo(
        ".dl-filter",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.4, ease: "power3.out" }
      );
      gsap.fromTo(
        ".dl-card",
        { y: 40, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".dl-grid",
            start: "top 90%",
          },
        }
      );
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const filtered = documents.filter((doc) => {
    const matchesCategory =
      activeCategory === "All" || doc.category === activeCategory;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div ref={pageRef} className="bg-white">
      {/* Hero */}
      <div className="relative overflow-hidden bg-[#104591] py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full bg-white/5" />
          <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-white/5" />
        </div>
        <div className="relative mx-auto max-w-[1200px] px-4 text-center sm:px-6">
          <div className="dl-hero-title mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
            <Download className="h-7 w-7 text-white" />
          </div>
          <h1 className="dl-hero-title text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Downloads
          </h1>
          <p className="dl-hero-sub mx-auto mt-4 max-w-xl text-sm text-white/70 sm:text-base">
            Access research papers, annual reports, training manuals, policy
            briefs, tender documents, and public notices.
          </p>

          {/* Search */}
          <div className="dl-filter mx-auto mt-8 max-w-lg">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-white/20 bg-white/10 py-3 pl-10 pr-4 text-sm text-white placeholder-white/50 backdrop-blur-sm focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/30"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Filters + Grid */}
      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6">
        {/* Category Pills */}
        <div className="dl-filter mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                activeCategory === cat
                  ? "bg-[#104591] text-white shadow-md"
                  : "bg-gray-100 text-[#65676b] hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="mb-6 text-sm text-[#65676b]">
          Showing {filtered.length} document{filtered.length !== 1 && "s"}
        </p>

        {/* Document Grid */}
        <div className="dl-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((doc) => (
            <div
              key={doc.id}
              className="dl-card group rounded-xl border border-[#e9e9e9] bg-white p-5 transition-all hover:border-[#104591]/30 hover:shadow-lg"
            >
              {/* Header */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#104591]/10">
                  <FileText className="h-5 w-5 text-[#104591]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-[#212529] line-clamp-2">
                    {doc.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="inline-flex items-center rounded bg-[#0E8B1A]/10 px-1.5 py-0.5 text-[10px] font-medium text-[#0E8B1A]">
                      {doc.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="mt-3 text-xs leading-relaxed text-[#65676b] line-clamp-2">
                {doc.desc}
              </p>

              {/* Meta */}
              <div className="mt-4 flex items-center gap-3 text-[11px] text-[#65676b]">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(doc.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Tag className="h-3 w-3" />
                  {doc.format} · {doc.size}
                </span>
              </div>

              {/* Actions */}
              <div className="mt-4 flex items-center gap-2">
                <button
                  onClick={() => setPreviewDoc(doc)}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[#104591]/20 py-2 text-xs font-medium text-[#104591] transition-colors hover:bg-[#104591]/5"
                >
                  <Eye className="h-3.5 w-3.5" />
                  Preview
                </button>
                <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#104591] py-2 text-xs font-medium text-white transition-colors hover:bg-[#104591]/90">
                  <ArrowDownToLine className="h-3.5 w-3.5" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center">
            <FileText className="mx-auto h-12 w-12 text-gray-300" />
            <p className="mt-4 text-sm text-[#65676b]">
              No documents found matching your criteria.
            </p>
          </div>
        )}
      </div>

      {/* Preview Modal */}
      {previewDoc && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setPreviewDoc(null)}
        >
          <div
            className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#104591]/10">
                  <FileText className="h-5 w-5 text-[#104591]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#212529]">
                    {previewDoc.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-2 text-xs text-[#65676b]">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(previewDoc.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span>·</span>
                    <span>
                      {previewDoc.format} · {previewDoc.size}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setPreviewDoc(null)}
                className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 rounded-lg border border-[#e9e9e9] bg-[#f7f8fa] p-4">
              <p className="text-sm leading-relaxed text-[#65676b]">
                {previewDoc.desc}
              </p>
              <div className="mt-3 flex items-center gap-4 text-xs text-[#65676b]">
                <span className="flex items-center gap-1">
                  <Tag className="h-3 w-3" /> {previewDoc.category}
                </span>
                <span className="flex items-center gap-1">
                  <Download className="h-3 w-3" />{" "}
                  {previewDoc.downloads.toLocaleString()} downloads
                </span>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setPreviewDoc(null)}
                className="flex-1 rounded-lg border border-gray-200 py-2.5 text-sm font-medium text-[#65676b] transition-colors hover:bg-gray-50"
              >
                Close
              </button>
              <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#104591] py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#104591]/90">
                <ArrowDownToLine className="h-4 w-4" />
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
