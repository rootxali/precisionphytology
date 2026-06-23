import { createFileRoute } from "@tanstack/react-router";
import { Pricing } from "@/components/ui/pricing";
import { Shield, CheckCircle, Award, Building2 } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
});

const plans = [
  {
    name: "INDIVIDUAL",
    price: "50",
    yearlyPrice: "40",
    period: "per month",
    features: [
      "Access to PPJ research papers",
      "Monthly newsletter updates",
      "Basic diagnostic support",
      "Community forum access",
      "Event notifications",
    ],
    description: "For individual researchers and students",
    buttonText: "Join as Individual",
    href: "/contact?subject=Individual+Membership",
    isPopular: false,
  },
  {
    name: "PROFESSIONAL",
    price: "150",
    yearlyPrice: "120",
    period: "per month",
    features: [
      "Everything in Individual",
      "Full PPJ paper library access",
      "Priority diagnostic consultation",
      "Orchard management advisories",
      "Field trial data reports",
      "Quarterly expert webinars",
      "Networking events access",
    ],
    description: "For farming professionals and agronomists",
    buttonText: "Join as Professional",
    href: "/contact?subject=Professional+Membership",
    isPopular: true,
  },
  {
    name: "ENTERPRISE",
    price: "500",
    yearlyPrice: "400",
    period: "per month",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom research collaborations",
      "On-site diagnostic services",
      "Advanced analytics dashboard",
      "API access for integrations",
      "SLA agreement",
      "Branded co-publications",
    ],
    description: "For organizations, farms, and agribusinesses",
    buttonText: "Contact Sales",
    href: "/contact?subject=Enterprise+Membership",
    isPopular: false,
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Trusted Research",
    desc: "Peer-reviewed publications from leading agricultural scientists in Pakistan.",
  },
  {
    icon: CheckCircle,
    title: "Expert Support",
    desc: "Direct access to our team of plant pathologists and agronomy experts.",
  },
  {
    icon: Award,
    title: "Premium Content",
    desc: "Exclusive access to journals, reports, and diagnostic tools.",
  },
  {
    icon: Building2,
    title: "Networking",
    desc: "Connect with researchers, farmers, and industry professionals.",
  },
];

function PricingPage() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-[#104591] py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-white/20" />
          <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-white/10" />
        </div>
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Get Membership
          </h1>
          <div className="mt-3 h-1 w-20 bg-white/60" />
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            Join Precision Phytology Organization and get access to exclusive
            research, expert consultations, and premium agricultural services.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0E8B1A]/10">
                  <Icon className="h-7 w-7 text-[#0E8B1A]" />
                </div>
                <h3 className="mt-3 text-sm font-bold text-[#212529]">{b.title}</h3>
                <p className="mt-1 text-xs text-[#65676b]">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pricing Component */}
      <div className="bg-[#f7f8fa]">
        <Pricing
          plans={plans}
          title="Membership Plans"
          description="Choose the membership that fits your needs. All plans include access to our research platform and support."
        />
      </div>
    </div>
  );
}
