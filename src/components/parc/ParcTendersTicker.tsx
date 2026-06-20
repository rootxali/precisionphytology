import { FileText } from "lucide-react";

const tenders = [
  "PARC INVITATION TO BID NO. F.188/202526/DOP — Supply of Laboratory Equipment",
  "PARC TENDER NO. F.201/202526 — Procurement of Seeds and Fertilizers for Research Stations",
  "PARC TENDER NO. F.195/202526/DOP — Construction of Storage Warehouse at NARC",
  "PARC INVITATION TO BID NO. F.190/202526 — Hiring of Vehicles for Field Surveys",
  "PARC TENDER NO. F.203/202526 — IT Infrastructure Upgrade at Regional Centers",
];

export function ParcTendersTicker() {
  return (
    <section className="overflow-hidden bg-parc-primary py-3">
      <div className="mx-auto flex items-center gap-6">
        <div className="flex shrink-0 items-center gap-2 bg-parc-accent px-4 py-2 text-sm font-bold text-parc-primary-dark">
          <FileText className="h-4 w-4" />
          Tenders
        </div>
        <div className="overflow-hidden">
          <div
            className="parc-ticker flex gap-12 whitespace-nowrap"
            style={{ width: "max-content" }}
          >
            {[...tenders, ...tenders].map((tender, i) => (
              <a
                key={i}
                href="#"
                className="text-sm text-white/90 transition-colors hover:text-parc-accent"
              >
                {tender}
              </a>
            ))}
          </div>
        </div>
        <a
          href="#"
          className="shrink-0 rounded-full border border-white/30 px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-parc-primary"
        >
          View All
        </a>
      </div>
    </section>
  );
}
