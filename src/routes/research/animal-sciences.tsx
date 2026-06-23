import { createFileRoute } from "@tanstack/react-router";
import { Users, FlaskConical, BookOpen, Award } from "lucide-react";

export const Route = createFileRoute("/research/animal-sciences")({
  component: AnimalSciencesPage,
});

const projects = [
  "Improvement of Indigenous Cattle Breeds Through Crossbreeding",
  "Buffalo Reproductive Efficiency Enhancement Program",
  "Small Ruminant Production Systems in Arid Zones",
  "Poultry Health and Disease Surveillance Network",
];

const publications = [
  "Genetic diversity of Pakistani buffalo populations using microsatellite markers",
  "Feedlot performance of crossbred cattle under tropical conditions",
  "Prevalence of brucellosis in dairy herds of Punjab",
  "Nutritional evaluation of indigenous feed resources for goats",
];

function AnimalSciencesPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">Animal Sciences Division</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4 text-sm leading-relaxed text-[#65676b]">
              <p>
                The Animal Sciences Division conducts research on livestock production, dairy science,
                animal nutrition, and animal health. Our work focuses on improving livestock
                productivity and sustainability across Pakistan's diverse agro-ecological zones.
              </p>
              <p>
                Key research areas include breed improvement, feed and nutrition optimization, disease
                surveillance, and development of improved management practices for cattle, buffalo,
                sheep, goat, and poultry production systems. The division works closely with
                provincial livestock departments and international research organizations.
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
                <p className="flex items-center gap-2"><Users className="h-3.5 w-3.5 text-[#0E8B1A]" /> 45 Researchers</p>
                <p className="flex items-center gap-2"><FlaskConical className="h-3.5 w-3.5 text-[#0E8B1A]" /> 8 Active Projects</p>
                <p className="flex items-center gap-2"><BookOpen className="h-3.5 w-3.5 text-[#104591]" /> 120+ Publications</p>
                <p className="flex items-center gap-2"><Award className="h-3.5 w-3.5 text-[#f0ad4e]" /> 15 Awards</p>
              </div>
            </div>
            <div className="rounded-lg border border-[#e9e9e9] bg-[#f7f8fa] p-5">
              <h3 className="text-sm font-bold text-[#212529]">Head of Division</h3>
              <p className="mt-2 text-sm font-medium text-[#212529]">Dr. Muhammad Akhtar</p>
              <p className="text-xs text-[#65676b]">PhD Animal Nutrition, University of Agriculture Faisalabad</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
