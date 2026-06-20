import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/establishments/azri-bwp")({
  component: AzriBwpPage,
});

function AzriBwpPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">AZRI Bahawalpur</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />
        <p className="mt-1 text-sm font-medium text-[#707070]">
          Ayub Agricultural Research Institute
        </p>
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-[#65676b]">
          <p>
            AZRI Bahawalpur focuses on agricultural research for the Punjab desert and barani
            (rainfed) areas, with special emphasis on drought-tolerant crops, orchard management,
            and rangeland rehabilitation.
          </p>
        </div>
      </div>
    </div>
  );
}
