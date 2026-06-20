import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/establishments/bardc")({
  component: BardcPage,
});

function BardcPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">BARDC Quetta</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />
        <p className="mt-1 text-sm font-medium text-[#707070]">
          Balochistan Agricultural Research & Development Centre
        </p>
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-[#65676b]">
          <p>
            BARDC Quetta serves as the primary agricultural research facility for Balochistan
            province, focusing on dryland agriculture, horticulture, and livestock research suited
            to the province's arid and semi-arid conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
