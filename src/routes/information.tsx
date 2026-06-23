import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, BookOpen, Scale, Users, HelpCircle, BarChart3 } from "lucide-react";

export const Route = createFileRoute("/information")({
  component: InformationPage,
});

const cards = [
  {
    icon: Scale,
    title: "Right to Information",
    desc: "Access public records and information under the RTI Act, 2013.",
    href: "/rti",
    color: "bg-[#104591]",
  },
  {
    icon: Users,
    title: "Citizen's Charter",
    desc: "Service standards and commitments of PPO to the public.",
    href: "#",
    color: "bg-[#0E8B1A]",
  },
  {
    icon: BarChart3,
    title: "Annual Reports",
    desc: "Comprehensive reports on PPO's research achievements and finances.",
    href: "/downloads",
    color: "bg-[#f0ad4e]",
  },
  {
    icon: BookOpen,
    title: "Research Publications",
    desc: "Scientific papers, journals, and technical bulletins by PPO researchers.",
    href: "/ppj",
    color: "bg-[#6B21A8]",
  },
  {
    icon: FileText,
    title: "Policies & Guidelines",
    desc: "Organizational policies, standard operating procedures, and guidelines.",
    href: "#",
    color: "bg-[#dc2626]",
  },
  {
    icon: HelpCircle,
    title: "FAQs",
    desc: "Frequently asked questions about PPO's services and research.",
    href: "#",
    color: "bg-[#0891b2]",
  },
];

function InformationPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">Information</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />
        <p className="mt-4 max-w-2xl text-sm text-[#65676b]">
          Access important organizational information, policies, publications, and resources
          from the Precision Phytology Organization.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((item) => {
            const Icon = item.icon;
            const content = (
              <div className="group rounded-lg border border-[#e9e9e9] bg-[#fbfbfb] p-6 transition-all hover:-translate-y-1 hover:border-[#104591]/30 hover:shadow-lg">
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${item.color}/10`}>
                  <Icon className={`h-5 w-5 ${item.color}`} />
                </div>
                <h3 className="mt-4 text-base font-bold text-[#212529] group-hover:text-[#104591]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#65676b]">{item.desc}</p>
              </div>
            );

            if (item.href === "#") {
              return <div key={item.title}>{content}</div>;
            }

            return (
              <Link key={item.title} to={item.href as "/" | "/rti" | "/downloads" | "/ppj"}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
