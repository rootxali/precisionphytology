import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/careers/apply")({
  component: CareersApplyPage,
});

function CareersApplyPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">How to Apply</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />

        <div className="mt-8 max-w-2xl space-y-6 text-sm leading-relaxed text-[#65676b]">
          <div className="rounded border border-[#e9e9e9] bg-[#fbfbfb] p-6">
            <h3 className="text-base font-bold text-[#212529]">Application Process</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5">
              <li>Check the Careers page for current job openings.</li>
              <li>
                Download and fill out the application form (if specified in the advertisement).
              </li>
              <li>
                Prepare your detailed CV/Resume along with copies of educational certificates and
                experience letters.
              </li>
              <li>
                Submit your application before the closing date through the specified channel.
              </li>
              <li>Only shortlisted candidates will be contacted for interviews.</li>
            </ol>
          </div>

          <div className="rounded border border-[#e9e9e9] bg-[#fbfbfb] p-6">
            <h3 className="text-base font-bold text-[#212529]">Required Documents</h3>
            <ul className="mt-3 space-y-2">
              {[
                "Detailed CV/Resume",
                "Copies of Educational Certificates",
                "Experience Letters",
                "CNIC Copy",
                "Passport-size Photographs",
              ].map((doc) => (
                <li key={doc} className="flex items-center gap-2 text-[#65676b]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0E8B1A]" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
