import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/research/engineering")({
  component: EngineeringPage,
});

function EngineeringPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">
          Agricultural Engineering Division
        </h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-[#65676b]">
          <p>
            The Agricultural Engineering Division conducts research in farm mechanization,
            irrigation engineering, post-harvest technology, and renewable energy applications in
            agriculture.
          </p>
          <p>
            Key research areas include development of appropriate farm machinery, precision
            agriculture technologies, solar-powered irrigation systems, and post-harvest processing
            and storage solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
