import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/public-notice/tenders")({
  component: TendersPage,
});

const tenders = [
  {
    title: "PARC INVITATION TO BID NO. F.188/202526/DOP",
    desc: "Supply of Laboratory Equipment",
    closing: "June 19, 2026",
  },
  {
    title: "PARC TENDER NO. F.201/202526",
    desc: "Procurement of Seeds and Fertilizers for Research Stations",
    closing: "June 25, 2026",
  },
  {
    title: "PARC TENDER NO. F.195/202526/DOP",
    desc: "Construction of Storage Warehouse at NARC",
    closing: "June 30, 2026",
  },
];

function TendersPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">Tenders</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />

        <div className="mt-8 space-y-4">
          {tenders.map((t, i) => (
            <div key={i} className="rounded border border-[#e9e9e9] bg-[#fbfbfb] p-5">
              <h3 className="text-sm font-bold text-[#212529]">{t.title}</h3>
              <p className="mt-1 text-sm text-[#65676b]">{t.desc}</p>
              <p className="mt-2 text-xs text-[#f0ad4e]">Closing Date: {t.closing}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
