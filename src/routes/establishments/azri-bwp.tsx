import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Users, FlaskConical, Wheat } from "lucide-react";

export const Route = createFileRoute("/establishments/azri-bwp")({
  component: AzriBwpPage,
});

function AzriBwpPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0E8B1A]/10">
            <Wheat className="h-6 w-6 text-[#0E8B1A]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">
              Ayub Agricultural Research Institute
            </h1>
            <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />
            <p className="mt-2 flex items-center gap-2 text-sm text-[#707070]">
              <MapPin className="h-4 w-4" /> Bahawalpur, Punjab
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4 text-sm leading-relaxed text-[#65676b]">
            <p>
              Ayub Agricultural Research Institute (AZRI) Bahawalpur is a leading research
              centre serving the agricultural needs of southern Punjab. Named after President
              Ayub Khan, the institute has been at the forefront of agricultural research
              in the Cholistan desert and surrounding areas since its establishment.
            </p>
            <p>
              The centre specializes in research on drought-resistant crop varieties, cotton
              improvement, and desert agriculture. It has developed several improved wheat and
              cotton varieties that are widely cultivated across the BWP division and beyond.
            </p>
            <p>
              AZRI Bahawalpur operates a network of research stations across the division,
              covering diverse agro-ecological zones from the Cholistan desert to the irrigated
              areas of southern Punjab. The institute plays a key role in promoting sustainable
              agriculture in water-scarce regions.
            </p>
            <h3 className="pt-4 text-lg font-bold text-[#212529]">Key Research Areas</h3>
            <ul className="list-inside list-disc space-y-1">
              <li>Cotton improvement and pest management</li>
              <li>Drought-resistant wheat varieties</li>
              <li>Cholistan desert agriculture</li>
              <li>Water-efficient irrigation systems</li>
              <li>Oilseed and pulse crop research</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-[#e9e9e9] bg-[#f7f8fa] p-5">
              <h3 className="text-sm font-bold text-[#212529]">Contact Information</h3>
              <div className="mt-3 space-y-2 text-xs text-[#65676b]">
                <p className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-[#104591]" /> Abbasia Road, Bahawalpur</p>
                <p className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-[#104591]" /> +92-62-2880101</p>
                <p className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-[#104591]" /> info@azri-bwp.gov.pk</p>
              </div>
            </div>
            <div className="rounded-lg border border-[#e9e9e9] bg-[#f7f8fa] p-5">
              <h3 className="text-sm font-bold text-[#212529]">Quick Facts</h3>
              <div className="mt-3 space-y-2 text-xs text-[#65676b]">
                <p className="flex items-center gap-2"><Users className="h-3.5 w-3.5 text-[#0E8B1A]" /> 55+ Researchers</p>
                <p className="flex items-center gap-2"><FlaskConical className="h-3.5 w-3.5 text-[#0E8B1A]" /> 6 Laboratories</p>
                <p className="flex items-center gap-2"><Wheat className="h-3.5 w-3.5 text-[#0E8B1A]" /> 300 Hectares Experimental Area</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
