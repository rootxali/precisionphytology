import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Users, FlaskConical, Mountain } from "lucide-react";

export const Route = createFileRoute("/establishments/marc")({
  component: MarcPage,
});

function MarcPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0E8B1A]/10">
            <Mountain className="h-6 w-6 text-[#0E8B1A]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">
              Mountain Agricultural Research Centre
            </h1>
            <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />
            <p className="mt-2 flex items-center gap-2 text-sm text-[#707070]">
              <MapPin className="h-4 w-4" /> Gilgit, Gilgit-Baltistan
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4 text-sm leading-relaxed text-[#65676b]">
            <p>
              The Mountain Agricultural Research Centre (MARC) is located in Gilgit and serves
              as the primary research facility for agricultural development in the mountainous
              regions of Gilgit-Baltistan and surrounding areas.
            </p>
            <p>
              MARC focuses on developing agricultural practices suitable for high-altitude
              environments, including terrace farming, cold-tolerant crop varieties, and
              sustainable livestock management in mountainous terrain.
            </p>
            <p>
              The centre conducts critical research on apricot, cherry, apple, and other
              temperate fruits grown in the region. It also works on improving seed potato
              production, which is a major economic activity in Gilgit-Baltistan.
            </p>
            <h3 className="pt-4 text-lg font-bold text-[#212529]">Key Research Areas</h3>
            <ul className="list-inside list-disc space-y-1">
              <li>Temperate fruit improvement and orchard management</li>
              <li>Cold-tolerant crop varieties for high-altitude farming</li>
              <li>Seed potato production and disease management</li>
              <li>Mountain livestock and pasture management</li>
              <li>Sustainable agriculture in fragile ecosystems</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-[#e9e9e9] bg-[#f7f8fa] p-5">
              <h3 className="text-sm font-bold text-[#212529]">Contact Information</h3>
              <div className="mt-3 space-y-2 text-xs text-[#65676b]">
                <p className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-[#104591]" /> Gilgit, Gilgit-Baltistan</p>
                <p className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-[#104591]" /> +92-5811-45201</p>
                <p className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-[#104591]" /> info@marc.gov.pk</p>
              </div>
            </div>
            <div className="rounded-lg border border-[#e9e9e9] bg-[#f7f8fa] p-5">
              <h3 className="text-sm font-bold text-[#212529]">Quick Facts</h3>
              <div className="mt-3 space-y-2 text-xs text-[#65676b]">
                <p className="flex items-center gap-2"><Users className="h-3.5 w-3.5 text-[#0E8B1A]" /> 30+ Researchers</p>
                <p className="flex items-center gap-2"><FlaskConical className="h-3.5 w-3.5 text-[#0E8B1A]" /> 3 Laboratories</p>
                <p className="flex items-center gap-2"><Mountain className="h-3.5 w-3.5 text-[#0E8B1A]" /> 80 Hectares Experimental Area</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
