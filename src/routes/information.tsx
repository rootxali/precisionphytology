import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/information")({
  component: InformationPage,
});

function InformationPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">Information</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Right to Information",
              desc: "Information about RTI act and how to request information from PPO.",
              href: "#",
            },
            {
              title: "Citizen's Charter",
              desc: "Service delivery standards and commitments of PPO.",
              href: "#",
            },
            {
              title: "Annual Reports",
              desc: "Annual performance reports and financial statements.",
              href: "#",
            },
            {
              title: "Research Publications",
              desc: "Journals, technical bulletins, and research papers.",
              href: "#",
            },
            {
              title: "Policies & Guidelines",
              desc: "Organizational policies, SOPs, and guidelines.",
              href: "#",
            },
            {
              title: "FAQs",
              desc: "Frequently asked questions about PPO and its services.",
              href: "#",
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group rounded-lg border border-[#e9e9e9] bg-[#fbfbfb] p-5 transition-all hover:-translate-y-0.5 hover:border-[#104591]/30 hover:shadow-md"
            >
              <h3 className="text-base font-bold text-[#212529] group-hover:text-[#104591]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[#65676b]">{item.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
