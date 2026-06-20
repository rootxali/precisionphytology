import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/vision")({
  component: VisionPage,
});

function VisionPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">Vision & Mission</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-[#e9e9e9] bg-[#fbfbfb] p-8">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-[#104591] text-white">
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h2 className="mt-5 text-xl font-bold text-[#212529]">Our Vision</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#65676b]">
              To be the leading national institution driving agricultural innovation and ensuring
              food security through cutting-edge research, technology transfer, and capacity
              building across Pakistan.
            </p>
          </div>

          <div className="rounded-lg border border-[#e9e9e9] bg-[#fbfbfb] p-8">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-[#0E8B1A] text-white">
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="mt-5 text-xl font-bold text-[#212529]">Our Mission</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#65676b]">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0E8B1A]" />
                Coordinate and facilitate agricultural research across Pakistan
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0E8B1A]" />
                Develop and promote innovative crop management technologies
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0E8B1A]" />
                Build capacity of farmers, scientists, and agricultural professionals
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0E8B1A]" />
                Strengthen national and international research collaborations
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0E8B1A]" />
                Translate research findings into practical agricultural solutions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
