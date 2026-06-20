import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/establishments/narc")({
  component: NarcPage,
});

function NarcPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">NARC Islamabad</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />
        <p className="mt-1 text-sm font-medium text-[#707070]">
          National Agricultural Research Centre
        </p>
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-[#65676b]">
          <p>
            National Agricultural Research Centre (NARC) is the premier research facility of PPO,
            located in Islamabad. It houses multiple research divisions and serves as the
            headquarters for coordinated agricultural research activities across Pakistan.
          </p>
          <p>
            NARC campus includes state-of-the-art laboratories, greenhouses, experimental fields,
            and specialized research facilities for plant pathology, entomology, soil science,
            biotechnology, and food science.
          </p>
        </div>
      </div>
    </div>
  );
}
