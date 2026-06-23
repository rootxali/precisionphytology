import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Users, FlaskConical, Mountain } from "lucide-react";

export const Route = createFileRoute("/establishments/narc")({
  component: NarcPage,
});

function NarcPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0E8B1A]/10">
            <Mountain className="h-6 w-6 text-[#0E8B1A]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">
              National Agricultural Research Centre
            </h1>
            <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />
            <p className="mt-2 flex items-center gap-2 text-sm text-[#707070]">
              <MapPin className="h-4 w-4" /> Islamabad, Pakistan
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4 text-sm leading-relaxed text-[#65676b]">
            <p>
              National Agricultural Research Centre (NARC) is the premier research facility of PPO,
              located in Islamabad. Spanning over 800 hectares, it houses multiple research divisions
              and serves as the headquarters for coordinated agricultural research activities across
              Pakistan.
            </p>
            <p>
              NARC campus includes state-of-the-art laboratories, greenhouses, experimental fields,
              and specialized research facilities for plant pathology, entomology, soil science,
              biotechnology, and food science. The centre also hosts the National Agricultural
              Research Information System (NARIS) and the Pakistan Agricultural Research Council
              (PARC) headquarters.
            </p>
            <p>
              The centre has contributed significantly to Pakistan's agricultural development,
              including the development of high-yielding wheat, rice, and cotton varieties, as
              well as integrated pest management strategies that have reduced crop losses by
              billions of rupees annually.
            </p>
            <h3 className="pt-4 text-lg font-bold text-[#212529]">Research Divisions</h3>
            <ul className="list-inside list-disc space-y-1">
              <li>Plant Sciences — Crop improvement and plant pathology</li>
              <li>Animal Sciences — Livestock and dairy research</li>
              <li>Natural Resources — Soil, water, and environmental sciences</li>
              <li>Social Sciences — Agricultural economics and policy</li>
              <li>Agricultural Engineering — Mechanization and post-harvest technology</li>
              <li>Biotechnology — Molecular biology and genetic engineering</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-[#e9e9e9] bg-[#f7f8fa] p-5">
              <h3 className="text-sm font-bold text-[#212529]">Contact Information</h3>
              <div className="mt-3 space-y-2 text-xs text-[#65676b]">
                <p className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-[#104591]" /> NARC, Park Road, Islamabad</p>
                <p className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-[#104591]" /> +92-51-9255141</p>
                <p className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-[#104591]" /> info@narc.gov.pk</p>
              </div>
            </div>
            <div className="rounded-lg border border-[#e9e9e9] bg-[#f7f8fa] p-5">
              <h3 className="text-sm font-bold text-[#212529]">Quick Facts</h3>
              <div className="mt-3 space-y-2 text-xs text-[#65676b]">
                <p className="flex items-center gap-2"><Users className="h-3.5 w-3.5 text-[#0E8B1A]" /> 200+ Researchers</p>
                <p className="flex items-center gap-2"><FlaskConical className="h-3.5 w-3.5 text-[#0E8B1A]" /> 15 Laboratories</p>
                <p className="flex items-center gap-2"><Mountain className="h-3.5 w-3.5 text-[#0E8B1A]" /> 800 Hectares Campus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
