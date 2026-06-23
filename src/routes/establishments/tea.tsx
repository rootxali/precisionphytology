import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Users, FlaskConical, Wheat, TreePine } from "lucide-react";

export const Route = createFileRoute("/establishments/tea")({
  component: TeaPage,
});

function TeaPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0E8B1A]/10">
            <TreePine className="h-6 w-6 text-[#0E8B1A]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">
              National Tea & High Value Crops Research Institute
            </h1>
            <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />
            <p className="mt-2 flex items-center gap-2 text-sm text-[#707070]">
              <MapPin className="h-4 w-4" /> Shinkiari, Mansehra, Khyber Pakhtunkhwa
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4 text-sm leading-relaxed text-[#65676b]">
            <p>
              The National Tea & High Value Crops Research Institute (NTHRI) is located in
              Shinkiari, Mansehra district of Khyber Pakhtunkhwa. It is the premier institution
              dedicated to research on tea and other high-value crops in Pakistan.
            </p>
            <p>
              The institute conducts research on tea cultivation, processing, and quality
              improvement. It also focuses on high-value crops including fruits, vegetables,
              medicinal plants, and aromatic crops suitable for the mountainous regions of
              northern Pakistan.
            </p>
            <p>
              NTHRI plays a vital role in promoting tea cultivation in Pakistan, which has
              significant potential in the Khyber Pakhtunkhwa province. The institute has
              developed improved tea varieties adapted to local climatic conditions and provides
              technical guidance to tea growers in the region.
            </p>
            <h3 className="pt-4 text-lg font-bold text-[#212529]">Key Research Areas</h3>
            <ul className="list-inside list-disc space-y-1">
              <li>Tea germplasm improvement and variety development</li>
              <li>Tea processing technology and quality control</li>
              <li>High-value fruit and nut cultivation</li>
              <li>Medicinal and aromatic plant research</li>
              <li>Post-harvest management for perishable crops</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-[#e9e9e9] bg-[#f7f8fa] p-5">
              <h3 className="text-sm font-bold text-[#212529]">Contact Information</h3>
              <div className="mt-3 space-y-2 text-xs text-[#65676b]">
                <p className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-[#104591]" /> Shinkiari, Mansehra, KP</p>
                <p className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-[#104591]" /> +92-943-32201</p>
                <p className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-[#104591]" /> info@nthri.gov.pk</p>
              </div>
            </div>
            <div className="rounded-lg border border-[#e9e9e9] bg-[#f7f8fa] p-5">
              <h3 className="text-sm font-bold text-[#212529]">Quick Facts</h3>
              <div className="mt-3 space-y-2 text-xs text-[#65676b]">
                <p className="flex items-center gap-2"><Users className="h-3.5 w-3.5 text-[#0E8B1A]" /> 45+ Researchers</p>
                <p className="flex items-center gap-2"><FlaskConical className="h-3.5 w-3.5 text-[#0E8B1A]" /> 5 Laboratories</p>
                <p className="flex items-center gap-2"><Wheat className="h-3.5 w-3.5 text-[#0E8B1A]" /> 120 Hectares Experimental Area</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
