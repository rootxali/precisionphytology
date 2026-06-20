import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/public-notice/circulars")({
  component: CircularsPage,
});

const circulars = [
  {
    title:
      "Office Order: Mr. Muhammad Ishaq posted as Member In-Charge (Coordination & Monitoring)",
    date: "Dec 15, 2025",
  },
  { title: "Transfer and Posting Orders — Section Officers (BS-17)", date: "Nov 30, 2025" },
  {
    title: "Annual Performance Evaluation Report (APER) — Last Date Extended",
    date: "Nov 25, 2025",
  },
  { title: "Implementation of New Leave Rules 2025", date: "Nov 15, 2025" },
];

function CircularsPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">Circulars</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />

        <div className="mt-8 space-y-3">
          {circulars.map((c, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded border border-[#e9e9e9] bg-[#fbfbfb] px-5 py-3"
            >
              <a href="#" className="text-sm font-medium text-[#212529] hover:text-[#104591]">
                {c.title}
              </a>
              <span className="shrink-0 ml-4 text-xs text-[#707070]">{c.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
