import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Users, FlaskConical, Sun } from "lucide-react";

export const Route = createFileRoute("/establishments/bardc")({
  component: BardcPage,
});

function BardcPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0E8B1A]/10">
            <Sun className="h-6 w-6 text-[#0E8B1A]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">
              Balochistan Agricultural Research & Development Centre
            </h1>
            <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />
            <p className="mt-2 flex items-center gap-2 text-sm text-[#707070]">
              <MapPin className="h-4 w-4" /> Quetta, Balochistan
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4 text-sm leading-relaxed text-[#65676b]">
            <p>
              BARDC Quetta serves as the primary agricultural research facility for Balochistan
              province, focusing on dryland agriculture, horticulture, and livestock research suited
              to the province's arid and semi-arid conditions. The centre plays a vital role in
              addressing the unique agricultural challenges of Pakistan's largest province.
            </p>
            <p>
              The centre conducts research on date palm cultivation, olive production, orchard
              management, and dryland farming techniques. It has developed improved varieties
              of grapes, apples, and other fruits suited to Balochistan's climate, contributing
              significantly to the province's horticultural economy.
            </p>
            <p>
              BARDC also houses specialized laboratories for soil and water analysis, plant
              pathology, and entomology. The centre works closely with local farming communities
              to transfer research technologies and improve agricultural productivity in the
              province.
            </p>
            <h3 className="pt-4 text-lg font-bold text-[#212529]">Key Research Areas</h3>
            <ul className="list-inside list-disc space-y-1">
              <li>Dryland farming and water conservation</li>
              <li>Date palm and olive cultivation</li>
              <li>Orchard management for arid zones</li>
              <li>Livestock and rangeland management</li>
              <li>Horticultural crop improvement</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-[#e9e9e9] bg-[#f7f8fa] p-5">
              <h3 className="text-sm font-bold text-[#212529]">Contact Information</h3>
              <div className="mt-3 space-y-2 text-xs text-[#65676b]">
                <p className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-[#104591]" /> Samungli Road, Quetta</p>
                <p className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-[#104591]" /> +92-81-2820101</p>
                <p className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-[#104591]" /> info@bardc.gov.pk</p>
              </div>
            </div>
            <div className="rounded-lg border border-[#e9e9e9] bg-[#f7f8fa] p-5">
              <h3 className="text-sm font-bold text-[#212529]">Quick Facts</h3>
              <div className="mt-3 space-y-2 text-xs text-[#65676b]">
                <p className="flex items-center gap-2"><Users className="h-3.5 w-3.5 text-[#0E8B1A]" /> 60+ Researchers</p>
                <p className="flex items-center gap-2"><FlaskConical className="h-3.5 w-3.5 text-[#0E8B1A]" /> 8 Laboratories</p>
                <p className="flex items-center gap-2"><Sun className="h-3.5 w-3.5 text-[#0E8B1A]" /> 350 Hectares Experimental Area</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
