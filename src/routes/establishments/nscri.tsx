import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Users, FlaskConical, Droplets } from "lucide-react";

export const Route = createFileRoute("/establishments/nscri")({
  component: NscriPage,
});

function NscriPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0E8B1A]/10">
            <Droplets className="h-6 w-6 text-[#0E8B1A]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">
              National Soil & Crop Research Institute
            </h1>
            <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />
            <p className="mt-2 flex items-center gap-2 text-sm text-[#707070]">
              <MapPin className="h-4 w-4" /> Thatta, Sindh
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4 text-sm leading-relaxed text-[#65676b]">
            <p>
              The National Soil & Crop Research Institute (NSCRI) Thatta is a specialized
              research facility focused on soil science, crop nutrition, and sustainable
              land management in the coastal and deltaic regions of Sindh.
            </p>
            <p>
              NSCRI conducts critical research on saline and waterlogged soils, which affect
              millions of hectares in Sindh and Punjab. The institute has developed effective
              reclamation strategies and salt-tolerant crop varieties that help farmers
              rehabilitate degraded agricultural land.
            </p>
            <p>
              The centre houses Pakistan's most comprehensive soil testing laboratory and
              maintains a national soil database. It provides soil analysis services to
              researchers, extension workers, and farmers across the country.
            </p>
            <h3 className="pt-4 text-lg font-bold text-[#212529]">Key Research Areas</h3>
            <ul className="list-inside list-disc space-y-1">
              <li>Saline soil reclamation and management</li>
              <li>Soil fertility and nutrient management</li>
              <li>Salt-tolerant crop varieties</li>
              <li>Waterlogging mitigation strategies</li>
              <li>National soil database management</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-[#e9e9e9] bg-[#f7f8fa] p-5">
              <h3 className="text-sm font-bold text-[#212529]">Contact Information</h3>
              <div className="mt-3 space-y-2 text-xs text-[#65676b]">
                <p className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-[#104591]" /> Thatta, Sindh</p>
                <p className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-[#104591]" /> +92-22-4510101</p>
                <p className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-[#104591]" /> info@nscri.gov.pk</p>
              </div>
            </div>
            <div className="rounded-lg border border-[#e9e9e9] bg-[#f7f8fa] p-5">
              <h3 className="text-sm font-bold text-[#212529]">Quick Facts</h3>
              <div className="mt-3 space-y-2 text-xs text-[#65676b]">
                <p className="flex items-center gap-2"><Users className="h-3.5 w-3.5 text-[#0E8B1A]" /> 40+ Researchers</p>
                <p className="flex items-center gap-2"><FlaskConical className="h-3.5 w-3.5 text-[#0E8B1A]" /> 5 Laboratories</p>
                <p className="flex items-center gap-2"><Droplets className="h-3.5 w-3.5 text-[#0E8B1A]" /> 180 Hectares Experimental Area</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
