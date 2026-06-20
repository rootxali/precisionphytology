import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/research/coordination")({
  component: CoordinationPage,
});

function CoordinationPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">
          Coordination & Monitoring Division
        </h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-[#65676b]">
          <p>
            The Coordination & Monitoring Division is responsible for inter-provincial agricultural
            research coordination, monitoring and evaluation of research programs, and ensuring
            alignment of research activities with national priorities.
          </p>
          <p>
            This division facilitates the Inter-Provincial Agricultural Research Coordination
            Committee (IPARCC) and manages the Pakistan Agricultural Research Information System.
          </p>
        </div>
      </div>
    </div>
  );
}
