import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/chairman")({
  component: ChairmanPage,
});

function ChairmanPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">Chairman's Message</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />

        <div className="mt-8 flex flex-col gap-8 lg:flex-row">
          <div className="shrink-0 lg:w-[300px]">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face"
              alt="Chairman PPO"
              className="w-full rounded-lg object-cover shadow-sm"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#212529]">Dr. Syed Murtaza Hassan Andrabi</h2>
            <p className="mt-1 text-sm font-medium text-[#104591]">Chairman, PPO</p>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#65676b]">
              <p>
                It is my privilege to lead Precision Phytology Organization, an institution that has
                been at the forefront of agricultural research in Pakistan for decades. Our
                commitment to advancing plant pathology, crop science, and food security remains
                unwavering.
              </p>
              <p>
                Under my leadership, PPO will continue to strengthen its research capabilities,
                forge new partnerships with national and international organizations, and translate
                scientific discoveries into practical solutions for Pakistani farmers.
              </p>
              <p>
                We envision a Pakistan where agricultural research drives prosperity, where farmers
                have access to the latest technologies and knowledge, and where food security is
                assured for future generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
