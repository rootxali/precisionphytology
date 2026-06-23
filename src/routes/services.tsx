import { createFileRoute } from "@tanstack/react-router";
import { Bug, TreePine, MapPin, Leaf, Package, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

const serviceDetails = [
  {
    title: "Disease Diagnostic",
    color: "#C7474C",
    desc: "Comprehensive plant disease identification and management using advanced diagnostic tools and expert analysis.",
    details: [
      "Pathogen identification via molecular and morphological techniques",
      "Pest and insect damage assessment",
      "Nutritional disorder diagnosis",
      "Soil-borne disease evaluation",
      "Post-harvest disease analysis",
      "Resistance screening and profiling",
    ],
  },
  {
    title: "Orchard Manager",
    color: "#1C6C1F",
    desc: "End-to-end orchard planning, establishment, and maintenance services for maximum productivity and sustainability.",
    details: [
      "Site selection and land preparation",
      "Variety selection and rootstock recommendations",
      "Planting layout and design",
      "Pruning and canopy management",
      "Pollination and fruit set optimization",
      "Harvest scheduling and quality grading",
    ],
  },
  {
    title: "Field Manager",
    color: "#104591",
    desc: "Professional field management solutions including soil preparation, crop scheduling, and precision agriculture techniques.",
    details: [
      "Soil testing and land capability assessment",
      "Crop planning and rotation scheduling",
      "Irrigation design and water management",
      "Precision agriculture and GPS-guided operations",
      "Pest and weed integrated management",
      "Yield monitoring and performance tracking",
    ],
  },
  {
    title: "Plant Nutrition Manager",
    color: "#0E8B1A",
    desc: "Scientific soil testing, customized fertilization programs, and nutrient management strategies for sustainable agriculture.",
    details: [
      "Comprehensive soil and tissue analysis",
      "Customized fertilizer recommendations",
      "Micronutrient deficiency correction",
      "Organic nutrient management programs",
      "Fertigation planning and optimization",
      "Nutrient use efficiency audits",
    ],
  },
  {
    title: "Agriculture Material and Supplies",
    color: "#6B21A8",
    desc: "Sourcing and supplying high-quality agricultural inputs including seeds, fertilizers, pesticides, and farming equipment.",
    details: [
      "Certified seeds for major crops and vegetables",
      "Organic and conventional fertilizers",
      "Bio-pesticides and crop protection chemicals",
      "Irigation equipment and drip systems",
      "Farm tools and machinery",
      "Soil testing kits and lab supplies",
    ],
  },
];

function ServiceIcon({ title, className, style }: { title: string; className?: string; style?: React.CSSProperties }) {
  switch (title) {
    case "Disease Diagnostic":
      return <Bug className={className} style={style} />;
    case "Orchard Manager":
      return <TreePine className={className} style={style} />;
    case "Field Manager":
      return <MapPin className={className} style={style} />;
    case "Plant Nutrition Manager":
      return <Leaf className={className} style={style} />;
    case "Agriculture Material and Supplies":
      return <Package className={className} style={style} />;
    default:
      return null;
  }
}

function ServicesPage() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-[#0E8B1A] py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-white/20" />
          <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-white/10" />
        </div>
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Our Services
          </h1>
          <div className="mt-3 h-1 w-20 bg-white/60" />
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            Precision Phytology Organization delivers expert agricultural services
            to improve crop health, optimize yields, and promote sustainable
            farming practices across Pakistan.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 sm:py-16">
        <div className="space-y-12">
          {serviceDetails.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.title}
                className={`flex flex-col gap-8 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-start`}
              >
                <div className="w-full shrink-0 lg:w-[340px]">
                  <div className="rounded-lg border border-[#e9e9e9] bg-[#fbfbfb] p-6 text-center shadow-sm">
                    <div
                      className="mx-auto flex h-20 w-20 items-center justify-center rounded-full"
                      style={{ backgroundColor: `${service.color}12` }}
                    >
                      <ServiceIcon title={service.title} className="h-10 w-10" style={{ color: service.color }} />
                    </div>
                    <h2 className="mt-4 text-xl font-bold text-[#212529]">
                      {service.title}
                    </h2>
                    <div
                      className="mx-auto mt-2 h-[2px] w-[40px]"
                      style={{ backgroundColor: service.color }}
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-sm leading-relaxed text-[#65676b] sm:text-base">
                    {service.desc}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {service.details.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-[#444]"
                      >
                        <ChevronRight
                          className="mt-0.5 h-4 w-4 shrink-0"
                          style={{ color: service.color }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`/contact?subject=${encodeURIComponent(service.title)}`}
                    className="mt-6 inline-flex items-center gap-1.5 rounded px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:opacity-90"
                    style={{ backgroundColor: service.color }}
                  >
                    Request Consultation
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-t border-[#e9e9e9] bg-[#f7f8fa] py-10 sm:py-12">
        <div className="mx-auto max-w-[1200px] px-4 text-center sm:px-6">
          <h3 className="text-xl font-bold text-[#212529] sm:text-2xl">
            Need a Custom Agricultural Solution?
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-[#65676b]">
            Our team of experts can develop tailored programs to address your
            specific agricultural challenges. Reach out to discuss your
            requirements.
          </p>
          <a
            href="/contact"
            className="mt-5 inline-block rounded bg-[#104591] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0d3a7a]"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </div>
  );
}
