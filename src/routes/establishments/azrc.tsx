import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Users, FlaskConical, Wheat } from "lucide-react";

export const Route = createFileRoute("/establishments/azrc")({
  component: AzrcPage,
});

function AzrcPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0E8B1A]/10">
            <Wheat className="h-6 w-6 text-[#0E8B1A]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">
              Agricultural Zonal Research Centre
            </h1>
            <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />
            <p className="mt-2 flex items-center gap-2 text-sm text-[#707070]">
              <MapPin className="h-4 w-4" /> D.I. Khan, Khyber Pakhtunkhwa
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4 text-sm leading-relaxed text-[#65676b]">
            <p>
              The Agricultural Zonal Research Centre (AZRC) D.I. Khan serves the agricultural
              research needs of the southern Khyber Pakhtunkhwa region. The centre focuses on
              crops and farming systems relevant to the semi-arid and arid zones of the area.
            </p>
            <p>
              AZRC conducts research on wheat, cotton, sugarcane, and oilseeds, which are the
              major crops of the D.I. Khan division. The centre also works on water management
              and conservation techniques for rainfed agriculture.
            </p>
            <p>
              The institute plays a key role in developing drought-resistant crop varieties
              and promoting conservation agriculture practices among farmers in the region.
            </p>
            <h3 className="pt-4 text-lg font-bold text-[#212529]">Key Research Areas</h3>
            <ul className="list-inside list-disc space-y-1">
              <li>Drought-tolerant wheat and cotton varieties</li>
              <li>Water conservation and irrigation efficiency</li>
              <li>Conservation agriculture and zero-tillage</li>
              <li>Oilseed crop improvement</li>
              <li>Integrated pest management for cotton</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-[#e9e9e9] bg-[#f7f8fa] p-5">
              <h3 className="text-sm font-bold text-[#212529]">Contact Information</h3>
              <div className="mt-3 space-y-2 text-xs text-[#65676b]">
                <p className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-[#104591]" /> D.I. Khan, KP</p>
                <p className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-[#104591]" /> +92-642-45101</p>
                <p className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-[#104591]" /> info@azrc.gov.pk</p>
              </div>
            </div>
            <div className="rounded-lg border border-[#e9e9e9] bg-[#f7f8fa] p-5">
              <h3 className="text-sm font-bold text-[#212529]">Quick Facts</h3>
              <div className="mt-3 space-y-2 text-xs text-[#65676b]">
                <p className="flex items-center gap-2"><Users className="h-3.5 w-3.5 text-[#0E8B1A]" /> 35+ Researchers</p>
                <p className="flex items-center gap-2"><FlaskConical className="h-3.5 w-3.5 text-[#0E8B1A]" /> 4 Laboratories</p>
                <p className="flex items-center gap-2"><Wheat className="h-3.5 w-3.5 text-[#0E8B1A]" /> 150 Hectares Experimental Area</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
