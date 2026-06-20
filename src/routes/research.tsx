import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/research")({
  component: ResearchPage,
});

const divisions = [
  {
    name: "Animal Sciences",
    desc: "Livestock research, dairy science, and animal health.",
    color: "bg-blue-500",
    href: "/research/animal-sciences",
  },
  {
    name: "Plant Sciences",
    desc: "Crop improvement, plant pathology, and pest management.",
    color: "bg-[#0E8B1A]",
    href: "/research/plant-sciences",
  },
  {
    name: "Natural Resources",
    desc: "Soil science, water management, and environmental research.",
    color: "bg-amber-600",
    href: "/research/natural-resources",
  },
  {
    name: "Social Sciences",
    desc: "Agricultural economics, extension, and rural development.",
    color: "bg-purple-600",
    href: "/research/social-sciences",
  },
  {
    name: "Coordination & Monitoring",
    desc: "Inter-provincial research coordination and M&E.",
    color: "bg-rose-600",
    href: "/research/coordination",
  },
  {
    name: "Agricultural Engineering",
    desc: "Farm mechanization, irrigation engineering, and post-harvest tech.",
    color: "bg-teal-600",
    href: "/research/engineering",
  },
];

function ResearchPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">Research Divisions</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />
        <p className="mt-4 max-w-2xl text-sm text-[#65676b]">
          PPO conducts research through six specialized divisions, each addressing critical areas of
          agricultural science and development in Pakistan.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((div) => (
            <Link
              key={div.name}
              to={div.href}
              className="group rounded-lg border border-[#e9e9e9] bg-[#fbfbfb] p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`grid h-12 w-12 place-items-center rounded-lg ${div.color} text-white`}
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-bold text-[#212529] group-hover:text-[#104591]">
                {div.name}
              </h3>
              <p className="mt-2 text-sm text-[#65676b]">{div.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
