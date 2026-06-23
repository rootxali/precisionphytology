import { createFileRoute } from "@tanstack/react-router";
import { Users, FlaskConical, BookOpen, Award } from "lucide-react";

export const Route = createFileRoute("/research/coordination")({
  component: CoordinationPage,
});

const projects = [
  "Inter-Provincial Agricultural Research Coordination",
  "National Agricultural Research Information System",
  "Monitoring & Evaluation of Research Programs",
  "International Collaboration and Linkages",
];

const publications = [
  "Framework for coordinated agricultural research in Pakistan",
  "Impact assessment of multi-provincial research projects",
  "Agricultural research governance models for developing countries",
  "Best practices in research monitoring and evaluation",
];

function CoordinationPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">
          Coordination & Monitoring Division
        </h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4 text-sm leading-relaxed text-[#65676b]">
              <p>
                The Coordination & Monitoring Division serves as the backbone of PPO's research
                management system. It coordinates inter-provincial research activities, manages
                the national agricultural research information system, and monitors the progress
                of all research programs.
              </p>
              <p>
                The division plays a critical role in ensuring effective collaboration between
                federal and provincial research institutions. It also facilitates international
                research partnerships and manages the publication and dissemination of research
                findings across Pakistan.
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-lg font-bold text-[#212529]">
                <FlaskConical className="h-5 w-5 text-[#0E8B1A]" /> Active Projects
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
                <p className="flex items-center gap-2"><Users className="h-3.5 w-3.5 text-[#0E8B1A]" /> 20 Researchers</p>
                <p className="flex items-center gap-2"><FlaskConical className="h-3.5 w-3.5 text-[#0E8B1A]" /> 4 Active Projects</p>
                <p className="flex items-center gap-2"><BookOpen className="h-3.5 w-3.5 text-[#104591]" /> 50+ Publications</p>
                <p className="flex items-center gap-2"><Award className="h-3.5 w-3.5 text-[#f0ad4e]" /> 6 Awards</p>
              </div>
            </div>
            <div className="rounded-lg border border-[#e9e9e9] bg-[#f7f8fa] p-5">
              <h3 className="text-sm font-bold text-[#212529]">Head of Division</h3>
              <p className="mt-2 text-sm font-medium text-[#212529]">Dr. Nasir Mehmood</p>
              <p className="text-xs text-[#65676b]">PhD Project Management, NUST Islamabad</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
