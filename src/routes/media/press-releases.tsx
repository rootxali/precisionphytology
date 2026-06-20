import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/media/press-releases")({
  component: PressReleasesPage,
});

function PressReleasesPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">Press Releases</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />
        <p className="mt-4 text-sm text-[#65676b]">
          Official press releases and media statements from Precision Phytology Organization.
        </p>
        <div className="mt-8 rounded border border-[#e9e9e9] bg-[#fbfbfb] p-8 text-center">
          <p className="text-sm text-[#707070]">No press releases available at this time.</p>
        </div>
      </div>
    </div>
  );
}
