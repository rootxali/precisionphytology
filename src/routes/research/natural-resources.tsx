import { createFileRoute } from "@tanstack/react-router";
import { Users, FlaskConical, BookOpen, Award } from "lucide-react";

export const Route = createFileRoute("/research/natural-resources")({
  component: NaturalResourcesPage,
});

const projects = [
  "National Soil Health Mapping Initiative",
  "Water Use Efficiency in Irrigated Agriculture",
  "Climate Change Impact Assessment on Agriculture",
  "Watershed Management and Soil Conservation",
];

const publications = [
  "Spatial variability of soil organic carbon in Punjab",
  "Remote sensing based crop water stress monitoring",
  "Carbon sequestration potential of agroforestry systems",
  "Groundwater depletion trends in Indus Basin",
];

function NaturalResourcesPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">Natural Resources Division</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4 text-sm leading-relaxed text-[#65676b]">
              <p>
                The Natural Resources Division focuses on soil science, water management,
                environmental sciences, and natural resource conservation. Our research supports
                sustainable agricultural intensification while preserving ecosystem health.
              </p>
              <p>
                The division maintains Pakistan's national soil database and provides soil testing
                services to researchers and farmers. It also conducts critical research on water
                use efficiency, watershed management, and climate change adaptation strategies
                for Pakistani agriculture.
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-lg font-bold text-[#212529]">
                <FlaskConical className="h-5 w-5 text-[#0E8B1A]" /> Active Research Projects
              </h3>
              <div className="mt-3 space-y-2">
                {projects.map((p) => (
                  <div key={p} className="rounded-lg border border-[#e9e9e9] bg-[#f7f8fa] px-4 py-3 text-sm text-[#65676b]">
                    {p}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-lg font-bold text-[#212529]">
                <BookOpen className="h-5 w-5 text-[#104591]" /> Recent Publications
              </h3>
              <div className="mt-3 space-y-2">
                {publications.map((p) => (
                  <div key={p} className="rounded-lg border border-[#e9e9e9] bg-white px-4 py-3 text-sm text-[#65676b] italic">
                    "{p}"
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-[#e9e9e9] bg-[#f7f8fa] p-5">
              <h3 className="text-sm font-bold text-[#212529]">Division Highlights</h3>
              <div className="mt-3 space-y-3 text-xs text-[#65676b]">
                <p className="flex items-center gap-2"><Users className="h-3.5 w-3.5 text-[#0E8B1A]" /> 35 Researchers</p>
                <p className="flex items-center gap-2"><FlaskConical className="h-3.5 w-3.5 text-[#0E8B1A]" /> 6 Active Projects</p>
                <p className="flex items-center gap-2"><BookOpen className="h-3.5 w-3.5 text-[#104591]" /> 90+ Publications</p>
                <p className="flex items-center gap-2"><Award className="h-3.5 w-3.5 text-[#f0ad4e]" /> 10 Awards</p>
              </div>
            </div>
            <div className="rounded-lg border border-[#e9e9e9] bg-[#f7f8fa] p-5">
              <h3 className="text-sm font-bold text-[#212529]">Head of Division</h3>
              <p className="mt-2 text-sm font-medium text-[#212529]">Dr. Khalid Mahmood</p>
              <p className="text-xs text-[#65676b]">PhD Soil Science, University of Agriculture Faisalabad</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
