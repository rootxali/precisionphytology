import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Users, FlaskConical, Sprout } from "lucide-react";

export const Route = createFileRoute("/establishments/azri-umrkot")({
  component: AzriUmerkotPage,
});

function AzriUmerkotPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0E8B1A]/10">
            <Sprout className="h-6 w-6 text-[#0E8B1A]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">
              Agricultural Zonal Research Institute
            </h1>
            <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />
            <p className="mt-2 flex items-center gap-2 text-sm text-[#707070]">
              <MapPin className="h-4 w-4" /> Umerkot, Sindh
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4 text-sm leading-relaxed text-[#65676b]">
            <p>
              The Agricultural Zonal Research Institute (AZRI) Umerkot is located in the
              Thar desert region of Sindh province. It serves as the primary research facility
              for agricultural development in the arid and semi-arid zones of southeastern Sindh.
            </p>
            <p>
              AZRI Umerkot focuses on developing farming systems suitable for the Thar desert
              environment, including drought-resistant crop varieties, rainwater harvesting
              techniques, and sustainable livestock management.
            </p>
            <p>
              The institute plays a crucial role in addressing food security challenges in the
              Thar region by developing improved varieties of millet, sorghum, and other
              drought-tolerant crops. It also conducts research on medicinal plants native
              to the desert ecosystem.
            </p>
            <h3 className="pt-4 text-lg font-bold text-[#212529]">Key Research Areas</h3>
            <ul className="list-inside list-disc space-y-1">
              <li>Drought-resistant crop varieties for Thar</li>
              <li>Rainwater harvesting and water management</li>
              <li>Desert-adapted livestock management</li>
              <li>Medicinal and aromatic plant research</li>
              <li>Food security in arid zones</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-[#e9e9e9] bg-[#f7f8fa] p-5">
              <h3 className="text-sm font-bold text-[#212529]">Contact Information</h3>
              <div className="mt-3 space-y-2 text-xs text-[#65676b]">
                <p className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-[#104591]" /> Umerkot, Sindh</p>
                <p className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-[#104591]" /> +92-238-45101</p>
                <p className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-[#104591]" /> info@azri-umrkot.gov.pk</p>
              </div>
            </div>
            <div className="rounded-lg border border-[#e9e9e9] bg-[#f7f8fa] p-5">
              <h3 className="text-sm font-bold text-[#212529]">Quick Facts</h3>
              <div className="mt-3 space-y-2 text-xs text-[#65676b]">
                <p className="flex items-center gap-2"><Users className="h-3.5 w-3.5 text-[#0E8B1A]" /> 25+ Researchers</p>
                <p className="flex items-center gap-2"><FlaskConical className="h-3.5 w-3.5 text-[#0E8B1A]" /> 3 Laboratories</p>
                <p className="flex items-center gap-2"><Sprout className="h-3.5 w-3.5 text-[#0E8B1A]" /> 100 Hectares Experimental Area</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
