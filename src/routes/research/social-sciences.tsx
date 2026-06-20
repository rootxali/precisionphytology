import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/research/social-sciences")({
  component: SocialSciencesPage,
});

function SocialSciencesPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">Social Sciences Division</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-[#65676b]">
          <p>
            The Social Sciences Division conducts research in agricultural economics, rural
            sociology, agricultural extension, and development studies. Our work supports
            evidence-based policy formulation and program design for agricultural development.
          </p>
          <p>
            Key focus areas include farm economics, market analysis, technology adoption studies,
            impact assessment of agricultural programs, and rural livelihood analysis.
          </p>
        </div>
      </div>
    </div>
  );
}
