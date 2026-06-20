import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/research/plant-sciences")({
  component: PlantSciencesPage,
});

function PlantSciencesPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">Plant Sciences Division</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-[#65676b]">
          <p>
            The Plant Sciences Division is responsible for research in crop improvement, plant
            pathology, entomology, and weed science. We work on developing improved varieties and
            management strategies for major crops including wheat, rice, maize, cotton, sugarcane,
            and horticultural crops.
          </p>
          <p>
            Our plant pathology research covers disease etiology, host-pathogen interactions,
            biological control, and integrated disease management systems for sustainable crop
            production.
          </p>
        </div>
      </div>
    </div>
  );
}
