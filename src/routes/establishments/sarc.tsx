import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/establishments/sarc")({
  component: SarcPage,
});

function SarcPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">SARC Karachi</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />
        <p className="mt-1 text-sm font-medium text-[#707070]">
          Sindh Agricultural Research Centre
        </p>
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-[#65676b]">
          <p>
            SARC Karachi conducts research on crops, horticulture, and livestock relevant to Sindh
            province's agricultural needs, with emphasis on rice, cotton, sugarcane, and tropical
            fruit production systems.
          </p>
        </div>
      </div>
    </div>
  );
}
