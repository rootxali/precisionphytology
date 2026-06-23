import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BookOpen, Download, Search, Eye, Calendar, User, Tag, X, FileText } from "lucide-react";

export const Route = createFileRoute("/ppj")({
  component: PPJPage,
});

const categories = ["All", "Plant Pathology", "Soil Science", "Entomology", "Crop Management", "Agricultural Biotechnology"];

const papers = [
  {
    id: 1,
    title: "Efficacy of Trichoderma harzianum against Fusarium wilt in Tomato under Field Conditions",
    authors: "Ahmed, R., Khan, M.A., & Siddiqui, S.",
    date: "March 2026",
    category: "Plant Pathology",
    abstract: "This study evaluates the biocontrol potential of Trichoderma harzianum isolates against Fusarium oxysporum f. sp. lycopersici in tomato cultivars. Results demonstrated a 68% reduction in disease severity with seed coating and soil application treatments compared to untreated controls.",
    pages: "1-12",
    doi: "10.3391/ppj.2026.03.01",
  },
  {
    id: 2,
    title: "Nutrient Use Efficiency of Wheat under Variable Irrigation Regimes in Semi-Arid Conditions",
    authors: "Butt, T.M., Rehman, A., & Iqbal, J.",
    date: "March 2026",
    category: "Crop Management",
    abstract: "A two-year field trial assessed the impact of deficit irrigation on nutrient use efficiency in wheat. The findings indicate that regulated deficit irrigation at the tillering stage can maintain yield while reducing water consumption by 30% without significant nutrient loss.",
    pages: "13-24",
    doi: "10.3391/ppj.2026.03.02",
  },
  {
    id: 3,
    title: "Molecular Identification and Distribution of Bemisia tabaci Biotypes in Sindh, Pakistan",
    authors: "Laghari, M.H., Memon, N.A., & Baloch, G.M.",
    date: "February 2026",
    category: "Entomology",
    abstract: "Using mitochondrial COI gene sequencing, this study identified the predominant Bemisia tabaci biotypes across four districts in Sindh. Biotypes B and Q were confirmed, with B showing wider host range and insecticide resistance patterns.",
    pages: "25-36",
    doi: "10.3391/ppj.2026.02.03",
  },
  {
    id: 4,
    title: "Impact of Biochar Application on Soil Microbial Activity and Phosphorus Availability",
    authors: "Shah, Z., Haq, T.U., & Ahmad, N.",
    date: "February 2026",
    category: "Soil Science",
    abstract: "Biochar derived from rice husk was applied at three rates (5, 10, 20 t/ha) to sandy loam soil. Soil microbial biomass carbon increased by 45% and available phosphorus by 38% at the highest application rate over a 120-day incubation period.",
    pages: "37-48",
    doi: "10.3391/ppj.2026.02.04",
  },
  {
    id: 5,
    title: "CRISPR-Cas9 Mediated Salt Tolerance Enhancement in Rice (Oryza sativa L.)",
    authors: "Raza, G., Ali, K., & Fatima, S.",
    date: "January 2026",
    category: "Agricultural Biotechnology",
    abstract: "Targeted knockout of the OsHKT1;5 gene using CRISPR-Cas9 improved salt tolerance in IR64 rice. Transgenic lines showed 25% higher survival under 150mM NaCl stress, with maintained shoot biomass and grain yield in saline field conditions.",
    pages: "49-62",
    doi: "10.3391/ppj.2026.01.05",
  },
  {
    id: 6,
    title: "Integrated Pest Management of Cotton Bollworm: A Review of Pakistani Studies",
    authors: "Memon, S.K., Jakhar, D.S., & Junejo, M.",
    date: "January 2026",
    category: "Entomology",
    abstract: "This review synthesizes 15 years of IPM research on Helicoverpa armigera in Pakistani cotton. Cultural, biological, and chemical control methods are compared, with emphasis on pheromone traps, Trichogramma release, and targeted insecticide application.",
    pages: "63-78",
    doi: "10.3391/ppj.2026.01.06",
  },
];

function PPJPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedPaper, setExpandedPaper] = useState<number | null>(null);

  const filteredPapers = papers.filter((paper) => {
    const matchCategory = activeCategory === "All" || paper.category === activeCategory;
    const matchSearch =
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.authors.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-[#104591] py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-white/20" />
          <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-white/10" />
        </div>
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <BookOpen className="h-10 w-10 text-white/80" />
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Precision Phytology Journal
            </h1>
          </div>
          <div className="mt-3 h-1 w-20 bg-white/60" />
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            Peer-reviewed research in plant pathology, crop science, soil health,
            and agricultural biotechnology. Read and download published papers.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 sm:py-14">
        {/* Search + Filters */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative max-w-sm flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search papers or authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded border border-gray-300 py-2.5 pl-9 pr-3 text-sm focus:border-[#104591] focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-[#104591] text-white"
                    : "bg-gray-100 text-[#65676b] hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Papers List */}
        <div className="mt-8 space-y-4">
          {filteredPapers.length === 0 && (
            <p className="py-10 text-center text-sm text-gray-400">
              No papers found matching your criteria.
            </p>
          )}

          {filteredPapers.map((paper) => (
            <div
              key={paper.id}
              className="rounded-lg border border-[#e9e9e9] bg-[#fbfbfb] p-5 transition-shadow hover:shadow-md"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-[#104591]/10 px-2 py-0.5 text-[10px] font-semibold uppercase text-[#104591]">
                      {paper.category}
                    </span>
                    <span className="text-[11px] text-gray-400">DOI: {paper.doi}</span>
                  </div>
                  <h3 className="mt-2 text-base font-bold text-[#212529]">
                    {paper.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-[#65676b]">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {paper.authors}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {paper.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText className="h-3 w-3" />
                      Pages {paper.pages}
                    </span>
                  </div>

                  {expandedPaper === paper.id && (
                    <div className="mt-4 rounded border border-gray-200 bg-white p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-[#212529]">Abstract</span>
                        <button
                          onClick={() => setExpandedPaper(null)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-[#65676b]">
                        {paper.abstract}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex shrink-0 gap-2">
                  <button
                    onClick={() => setExpandedPaper(expandedPaper === paper.id ? null : paper.id)}
                    className="inline-flex items-center gap-1.5 rounded border border-[#104591] px-3 py-1.5 text-xs font-semibold text-[#104591] transition-colors hover:bg-[#104591] hover:text-white"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    {expandedPaper === paper.id ? "Close" : "Read"}
                  </button>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 rounded bg-[#0E8B1A] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#0E8B1A]/90"
                  >
                    <Download className="h-3.5 w-3.5" />
                    PDF
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
