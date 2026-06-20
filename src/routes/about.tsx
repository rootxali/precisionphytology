import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">About Us</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-[#212529]">Introduction</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#65676b]">
              Precision Phytology Organization (PPO) is the apex national agricultural research
              organization in Pakistan. Established to coordinate and facilitate agricultural
              research across the country, PPO plays a pivotal role in advancing plant pathology,
              crop science, and food security initiatives.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#65676b]">
              With a network of research establishments spread across Pakistan, PPO conducts
              cutting-edge research in plant sciences, animal sciences, natural resources, and
              social sciences. Our mandate includes coordinating inter-provincial agricultural
              research, developing national agricultural policies, and building capacity through
              training programs for farmers, scientists, and agricultural professionals.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#65676b]">
              Over the decades, PPO has contributed significantly to Pakistan's agricultural
              development through breakthrough research in crop improvement, disease management,
              soil health, and sustainable farming practices. Our researchers have published
              extensively in national and international journals, and our training programs have
              benefited thousands of agricultural professionals.
            </p>
          </div>

          <div className="rounded border border-[#e9e9e9] bg-[#fbfbfb] p-6">
            <h3 className="text-base font-bold text-[#212529]">Quick Facts</h3>
            <div className="mt-4 space-y-3">
              {[
                { label: "Established", value: "1973" },
                { label: "Headquarters", value: "Islamabad, Pakistan" },
                { label: "Research Divisions", value: "6" },
                { label: "Research Centers", value: "9+" },
                { label: "Active Researchers", value: "500+" },
                { label: "Annual Budget", value: "PKR 2.5B+" },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="flex justify-between border-b border-[#e9e9e9] py-2 last:border-b-0"
                >
                  <span className="text-sm text-[#707070]">{fact.label}</span>
                  <span className="text-sm font-semibold text-[#212529]">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
