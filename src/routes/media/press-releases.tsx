import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Download, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/media/press-releases")({
  component: PressReleasesPage,
});

const pressReleases = [
  {
    id: 1,
    title: "PPO Signs MoU with Chinese Academy of Agricultural Sciences",
    date: "2026-06-10",
    summary:
      "Precision Phytology Organization has signed a Memorandum of Understanding with the Chinese Academy of Agricultural Sciences (CAAS) for collaborative research in crop improvement, pest management, and agricultural biotechnology. The agreement covers joint research projects, scientist exchange programs, and shared laboratory facilities.",
  },
  {
    id: 2,
    title: "New Wheat Variety 'PPO-Wheat 2026' Released for General Cultivation",
    date: "2026-05-28",
    summary:
      "PPO has announced the release of a new high-yielding wheat variety 'PPO-Wheat 2026' with exceptional resistance to yellow rust and heat tolerance. The variety has shown 15% higher yield compared to existing varieties in multi-location trials across Punjab and Sindh.",
  },
  {
    id: 3,
    title: "ADB-Funded Climate Smart Agriculture Project Enters Phase II",
    date: "2026-05-15",
    summary:
      "The Asian Development Bank-funded 'Promoting Climate Smart Agriculture Research in Pakistan' project has successfully completed Phase I and is now entering Phase II. The project will focus on developing climate-resilient crop varieties and water-efficient farming systems.",
  },
  {
    id: 4,
    title: "PPO Hosts International Symposium on Precision Agriculture",
    date: "2026-04-20",
    summary:
      "PPO hosted a three-day international symposium on Precision Agriculture at NARC Islamabad, attracting over 200 researchers from 15 countries. The symposium featured keynote addresses from leading agricultural scientists and showcased Pakistan's progress in precision farming technologies.",
  },
  {
    id: 5,
    title: "National Soil Health Mapping Initiative Launched",
    date: "2026-04-05",
    summary:
      "PPO has launched a comprehensive National Soil Health Mapping Initiative to create a digital database of soil conditions across Pakistan. The project aims to cover all agricultural districts and provide farmers with site-specific fertilizer recommendations.",
  },
  {
    id: 6,
    title: "PPO Researchers Publish Breakthrough Paper on Rice Salt Tolerance",
    date: "2026-03-18",
    summary:
      "A team of PPO researchers has published a groundbreaking paper in Nature Plants identifying key genes responsible for salt tolerance in rice. The discovery has significant implications for developing salt-tolerant rice varieties for Pakistan's saline-affected agricultural lands.",
  },
];

function PressReleasesPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">Press Releases</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />
        <p className="mt-4 max-w-2xl text-sm text-[#65676b]">
          Official press releases and media statements from the Precision Phytology Organization.
        </p>

        <div className="mt-8 space-y-4">
          {pressReleases.map((pr) => (
            <div
              key={pr.id}
              className="rounded-lg border border-[#e9e9e9] bg-[#fbfbfb] p-6 transition-all hover:border-[#104591]/30 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs text-[#65676b]">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(pr.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <h2 className="mt-2 text-lg font-bold text-[#212529]">{pr.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#65676b]">{pr.summary}</p>
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <button className="inline-flex items-center gap-1.5 rounded-lg border border-[#104591]/20 px-4 py-2 text-xs font-medium text-[#104591] transition-colors hover:bg-[#104591]/5">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Read Full Release
                </button>
                <button className="inline-flex items-center gap-1.5 rounded-lg border border-[#0E8B1A]/20 px-4 py-2 text-xs font-medium text-[#0E8B1A] transition-colors hover:bg-[#0E8B1A]/5">
                  <Download className="h-3.5 w-3.5" />
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
