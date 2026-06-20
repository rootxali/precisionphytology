import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/research/animal-sciences")({
  component: AnimalSciencesPage,
});

function AnimalSciencesPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">Animal Sciences Division</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-[#65676b]">
          <p>
            The Animal Sciences Division conducts research on livestock production, dairy science,
            animal nutrition, and animal health. Our work focuses on improving livestock
            productivity and sustainability across Pakistan.
          </p>
          <p>
            Key research areas include breed improvement, feed and nutrition optimization, disease
            surveillance, and development of improved management practices for cattle, buffalo,
            sheep, goat, and poultry production systems.
          </p>
        </div>
      </div>
    </div>
  );
}
