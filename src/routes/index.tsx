import { createFileRoute } from "@tanstack/react-router";
import {
  ParcHeroSlider,
  ParcProgramGrid,
  ParcLeadershipMini,
  ParcLatestNewsPanel,
  ParcFeaturedNews,
  ParcInfoCards,
} from "@/components/parc";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Precision Phytology Organization (PPO) — Homepage" },
      {
        name: "description",
        content:
          "Precision Phytology Organization — Apex national agricultural research organization. Research in plant sciences, animal sciences, natural resources and social sciences.",
      },
      { property: "og:title", content: "PPO — Precision Phytology Organization" },
      {
        property: "og:description",
        content:
          "Coordinating agricultural research across Pakistan for food security and sustainable development.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* Hero Content Row — 3 columns */}
      <section className="bg-white py-4">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="flex flex-col gap-4 lg:flex-row">
            {/* LEFT — Main Image Slider (~65%) */}
            <div className="flex-1 lg:w-[65%]">
              <ParcHeroSlider />
            </div>

            {/* RIGHT COLUMN (~35%) */}
            <div className="flex w-full flex-col gap-3 lg:w-[35%]">
              {/* Quick Program Links Grid */}
              <ParcProgramGrid />

              {/* Leadership Mini-Carousel */}
              <ParcLeadershipMini />
            </div>
          </div>
        </div>
      </section>

      {/* Below Hero — Latest News + Employee Corner */}
      <section className="bg-white pb-6">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="flex flex-col gap-4 lg:flex-row">
            {/* Latest News Panel (full width) */}
            <div className="w-full">
              <ParcLatestNewsPanel />
            </div>
          </div>
        </div>
      </section>

      {/* Featured News + Stats Panel */}
      <ParcFeaturedNews />

      {/* Three-Column Info Cards */}
      <ParcInfoCards />
    </div>
  );
}
