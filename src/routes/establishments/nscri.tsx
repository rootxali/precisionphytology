import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/establishments/nscri")({
  component: NscriPage,
});

function NscriPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">NSCRI Thatta</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />
        <p className="mt-1 text-sm font-medium text-[#707070]">
          National Soil & Crop Research Institute
        </p>
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-[#65676b]">
          <p>
            NSCRI Thatta specializes in soil and crop research, focusing on salinity management,
            soil fertility improvement, and crop production technologies for the saline and
            waterlogged areas of Sindh province.
          </p>
        </div>
      </div>
    </div>
  );
}
