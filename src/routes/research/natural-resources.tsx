import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/research/natural-resources")({
  component: NaturalResourcesPage,
});

function NaturalResourcesPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">
          Natural Resources Division
        </h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-[#65676b]">
          <p>
            The Natural Resources Division focuses on soil science, water management, and
            environmental research. Our work addresses critical challenges related to soil
            fertility, water use efficiency, and sustainable land management.
          </p>
          <p>
            Key research areas include soil health assessment, irrigation management, watershed
            development, climate change adaptation, and conservation agriculture practices for
            sustainable agricultural production.
          </p>
        </div>
      </div>
    </div>
  );
}
