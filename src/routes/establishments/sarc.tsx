import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Users, FlaskConical, Waves } from "lucide-react";

export const Route = createFileRoute("/establishments/sarc")({
  component: SarcPage,
});

function SarcPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0E8B1A]/10">
            <Waves className="h-6 w-6 text-[#0E8B1A]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">
              Sindh Agricultural Research Centre
            </h1>
            <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />
            <p className="mt-2 flex items-center gap-2 text-sm text-[#707070]">
              <MapPin className="h-4 w-4" /> Karachi, Sindh
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4 text-sm leading-relaxed text-[#65676b]">
            <p>
              Sindh Agricultural Research Centre (SARC) Karachi is the principal research
              facility for agricultural development in Sindh province. Located in the economic
              hub of Pakistan, SARC focuses on crops and farming systems relevant to the
              province's diverse agro-ecological zones.
            </p>
            <p>
              The centre conducts research on rice, wheat, cotton, sugarcane, and mango —
              the major crops of Sindh. It has developed improved varieties of rice and wheat
              that are widely adopted across the province, contributing to Pakistan's food
              security.
            </p>
            <p>
              SARC also houses specialized facilities for marine fisheries research, saline
              soil management, and waterlogging mitigation. The centre works closely with
              the Sindh Agriculture Department and local universities to promote agricultural
              innovation.
            </p>
            <h3 className="pt-4 text-lg font-bold text-[#212529]">Key Research Areas</h3>
            <ul className="list-inside list-disc space-y-1">
              <li>Rice and wheat crop improvement</li>
              <li>Mango and horticultural research</li>
              <li>Saline soil and water management</li>
              <li>Marine and inland fisheries</li>
              <li>Sugarcane and cotton research</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-[#e9e9e9] bg-[#f7f8fa] p-5">
              <h3 className="text-sm font-bold text-[#212529]">Contact Information</h3>
              <div className="mt-3 space-y-2 text-xs text-[#65676b]">
                <p className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-[#104591]" /> University Road, Karachi</p>
                <p className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-[#104591]" /> +92-21-4510101</p>
                <p className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-[#104591]" /> info@sarc.gov.pk</p>
              </div>
            </div>
            <div className="rounded-lg border border-[#e9e9e9] bg-[#f7f8fa] p-5">
              <h3 className="text-sm font-bold text-[#212529]">Quick Facts</h3>
              <div className="mt-3 space-y-2 text-xs text-[#65676b]">
                <p className="flex items-center gap-2"><Users className="h-3.5 w-3.5 text-[#0E8B1A]" /> 80+ Researchers</p>
                <p className="flex items-center gap-2"><FlaskConical className="h-3.5 w-3.5 text-[#0E8B1A]" /> 10 Laboratories</p>
                <p className="flex items-center gap-2"><Waves className="h-3.5 w-3.5 text-[#0E8B1A]" /> 250 Hectares Experimental Area</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
