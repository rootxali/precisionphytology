import { createFileRoute } from "@tanstack/react-router";
import { Users, FlaskConical, BookOpen, Award } from "lucide-react";

export const Route = createFileRoute("/research/plant-sciences")({
  component: PlantSciencesPage,
});

const projects = [
  "Wheat High Yielding Variety Development Program",
  "Rice Quality Improvement Through Marker-Assisted Selection",
  "Cotton Leaf Curl Virus Resistance Breeding",
  "Integrated Disease Management for Major Crops",
];

const publications = [
  "Genomic selection for wheat yield under drought stress",
  "Identification of QTLs for salt tolerance in rice",
  "Molecular characterization of cotton germplasm",
  "Biocontrol agents for Fusarium wilt management",
];

function PlantSciencesPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">Plant Sciences Division</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4 text-sm leading-relaxed text-[#65676b]">
              <p>
                The Plant Sciences Division is the largest research division at PPO, conducting
                cutting-edge research on crop improvement, plant pathology, entomology, and
                weed science. Our scientists work on developing high-yielding, disease-resistant,
                and climate-adapted crop varieties.
              </p>
              <p>
                The division has contributed to the development of over 200 improved crop varieties
                that have been released for commercial cultivation across Pakistan. These varieties
                have significantly contributed to national food security and agricultural exports.
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
                <p className="flex items-center gap-2"><Users className="h-3.5 w-3.5 text-[#0E8B1A]" /> 65 Researchers</p>
                <p className="flex items-center gap-2"><FlaskConical className="h-3.5 w-3.5 text-[#0E8B1A]" /> 12 Active Projects</p>
                <p className="flex items-center gap-2"><BookOpen className="h-3.5 w-3.5 text-[#104591]" /> 250+ Publications</p>
                <p className="flex items-center gap-2"><Award className="h-3.5 w-3.5 text-[#f0ad4e]" /> 25 Awards</p>
              </div>
            </div>
            <div className="rounded-lg border border-[#e9e9e9] bg-[#f7f8fa] p-5">
              <h3 className="text-sm font-bold text-[#212529]">Head of Division</h3>
              <p className="mt-2 text-sm font-medium text-[#212529]">Dr. Syed Murtaza Hassan Andrabi</p>
              <p className="text-xs text-[#65676b]">PhD Plant Pathology, University of Agriculture Faisalabad</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
