import { Download, Calendar } from "lucide-react";

interface InfoCardItem {
  title: string;
  meta?: string;
  metaIcon?: "calendar" | "download";
}

interface InfoCardProps {
  title: string;
  badgeColor: string;
  badgeLabel?: string;
  viewAllHref: string;
  items: InfoCardItem[];
  emptyState?: {
    icon: React.ComponentType<{ className?: string }>;
    heading: string;
    message: string;
  };
}

function InfoCard({
  title,
  badgeColor,
  badgeLabel = "VIEW ALL",
  viewAllHref,
  items,
  emptyState,
}: InfoCardProps) {
  const hasItems = items.length > 0;
  const showScroll = items.length > 4;

  return (
    <div className="flex flex-col rounded bg-[#fbfbfb] shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#e9e9e9] px-5 py-4">
        <h3 className="text-base font-semibold text-[#212529]">{title}</h3>
        <a
          href={viewAllHref}
          className={`rounded px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white ${badgeColor}`}
        >
          {badgeLabel}
        </a>
      </div>

      {/* Content */}
      {hasItems ? (
        <div className={`${showScroll ? "parc-scroll-box max-h-[260px] overflow-y-auto" : ""}`}>
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-[#e9e9e9] px-5 py-3 last:border-b-0"
            >
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-[#212529]">{item.title}</p>
                {item.meta && (
                  <p className="mt-0.5 flex items-center gap-1.5 text-xs text-[#707070]">
                    {item.metaIcon === "calendar" && (
                      <Calendar className="h-3 w-3 text-[#f0ad4e]" />
                    )}
                    {item.metaIcon === "download" && (
                      <Download className="h-3 w-3 text-[#104591]" />
                    )}
                    {item.meta}
                  </p>
                )}
              </div>
              {item.metaIcon === "download" && (
                <span className="ml-3 shrink-0 rounded bg-[#104591] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                  Download
                </span>
              )}
            </div>
          ))}
        </div>
      ) : (
        emptyState && (
          <div className="flex flex-col items-center justify-center px-5 py-10">
            <emptyState.icon className="mb-3 h-10 w-10 text-[#707070]" />
            <p className="text-sm font-bold text-[#212529]">{emptyState.heading}</p>
            <p className="mt-1 max-w-[220px] text-center text-xs text-[#707070]">
              {emptyState.message}
            </p>
          </div>
        )
      )}
    </div>
  );
}

const downloads: InfoCardItem[] = [
  {
    title: "Template for Preparation of Project Concept Notes (PCNs) for PSDP 2026–2027",
    metaIcon: "download",
  },
  { title: "PPO LOGO", metaIcon: "download" },
  { title: "PPO EMPLOYEES PROFILE", metaIcon: "download" },
  { title: "Seed Request Form", metaIcon: "download" },
];

const tenders: InfoCardItem[] = [
  {
    title: "PPO INVITATION TO BID",
    meta: "Closing Date: June 19, 2026",
    metaIcon: "calendar",
  },
];

export function ParcInfoCards() {
  return (
    <section className="bg-white pb-10 sm:pb-14">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <InfoCard
            title="Downloads"
            badgeColor="bg-[#104591]"
            viewAllHref="/downloads"
            items={downloads}
          />
          <InfoCard
            title="Tenders"
            badgeColor="bg-[#f0ad4e]"
            viewAllHref="/tenders"
            items={tenders}
          />
        </div>
      </div>
    </section>
  );
}
