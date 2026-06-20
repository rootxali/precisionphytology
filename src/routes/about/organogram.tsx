import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/organogram")({
  component: OrganogramPage,
});

function OrganogramPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">Organogram</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />

        <div className="mt-8 rounded-lg border border-[#e9e9e9] bg-[#fbfbfb] p-8">
          <p className="mb-6 text-sm text-[#65676b]">
            Organizational structure of Precision Phytology Organization showing the hierarchy from
            the Board of Governors down to research staff.
          </p>

          {/* Organogram chart */}
          <div className="flex flex-col items-center gap-4">
            {/* Chairman */}
            <div className="rounded-lg border-2 border-[#104591] bg-[#104591] px-6 py-3 text-center text-sm font-bold text-white">
              Chairman, PPO
            </div>
            <div className="h-4 w-px bg-[#212529]" />

            {/* Board of Governors */}
            <div className="rounded-lg border border-[#212529] bg-white px-6 py-3 text-center text-sm font-semibold text-[#212529]">
              Board of Governors
            </div>
            <div className="h-4 w-px bg-[#212529]" />

            {/* Director General */}
            <div className="rounded-lg border border-[#104591] bg-[#104591]/10 px-6 py-3 text-center text-sm font-bold text-[#104591]">
              Director General
            </div>
            <div className="h-4 w-px bg-[#212529]" />

            {/* Divisions */}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-6">
              {[
                "Animal Sciences",
                "Plant Sciences",
                "Natural Resources",
                "Social Sciences",
                "Coordination & Monitoring",
                "Agricultural Engineering",
              ].map((div) => (
                <div
                  key={div}
                  className="rounded border border-[#0E8B1A] bg-[#0E8B1A]/5 px-3 py-2 text-center text-xs font-semibold text-[#0E8B1A]"
                >
                  {div}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
