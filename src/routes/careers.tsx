import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
});

function CareersPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">Careers</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />
        <p className="mt-4 max-w-2xl text-sm text-[#65676b]">
          Join Precision Phytology Organization and contribute to agricultural research and
          development in Pakistan. We offer opportunities for scientists, researchers, and support
          staff.
        </p>

        <div className="mt-8 rounded border border-[#e9e9e9] bg-[#fbfbfb] p-12 text-center">
          <svg
            className="mx-auto h-12 w-12 text-[#707070]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <h2 className="mt-4 text-lg font-bold text-[#212529]">No Current Openings</h2>
          <p className="mt-2 max-w-md mx-auto text-sm text-[#707070]">
            Currently there are no job openings in the organization. Please check back later or
            visit the Public Notice section for updates.
          </p>
        </div>

        <div className="mt-8 rounded border border-[#e9e9e9] bg-[#fbfbfb] p-6">
          <h3 className="text-base font-bold text-[#212529]">How to Apply</h3>
          <p className="mt-3 text-sm text-[#65676b]">
            When positions become available, interested candidates can apply through the PPO website
            or submit their applications to the concerned division. Applications should include a
            detailed CV, copies of educational certificates, and experience letters.
          </p>
          <p className="mt-3 text-sm text-[#65676b]">
            Only shortlisted candidates will be called for interviews. PPO is an equal opportunity
            employer and encourages applications from all qualified individuals.
          </p>
        </div>
      </div>
    </div>
  );
}
