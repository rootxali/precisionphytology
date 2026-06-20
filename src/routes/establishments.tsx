import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/establishments")({
  component: EstablishmentsPage,
});

const centers = [
  {
    name: "NARC Islamabad",
    full: "National Agricultural Research Centre",
    location: "Islamabad",
    href: "/establishments/narc",
  },
  {
    name: "BARDC Quetta",
    full: "Balochistan Agricultural Research & Development Centre",
    location: "Quetta",
    href: "/establishments/bardc",
  },
  {
    name: "SARC Karachi",
    full: "Sindh Agricultural Research Centre",
    location: "Karachi",
    href: "/establishments/sarc",
  },
  {
    name: "AZRI Bahawalpur",
    full: "Ayub Agricultural Research Institute",
    location: "Bahawalpur",
    href: "/establishments/azri-bwp",
  },
  {
    name: "NSCRI Thatta",
    full: "National Soil & Crop Research Institute",
    location: "Thatta",
    href: "/establishments/nscri",
  },
  {
    name: "National Tea & High Value Crops",
    full: "National Tea & High Value Crops Research Institute",
    location: "Shinkiari",
    href: "/establishments/tea",
  },
  {
    name: "MARC Gilgit",
    full: "Mountain Agricultural Research Centre",
    location: "Gilgit",
    href: "/establishments/marc",
  },
  {
    name: "AZRC D.I. Khan",
    full: "Agricultural Zonal Research Centre",
    location: "D.I. Khan",
    href: "/establishments/azrc",
  },
  {
    name: "AZRI Umerkot",
    full: "Agricultural Zonal Research Institute",
    location: "Umerkot",
    href: "/establishments/azri-umrkot",
  },
];

function EstablishmentsPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">Research Establishments</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />
        <p className="mt-4 max-w-2xl text-sm text-[#65676b]">
          PPO operates a network of research establishments across Pakistan, each serving as a hub
          for agricultural research and development in their respective regions.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {centers.map((center) => (
            <Link
              key={center.name}
              to={center.href}
              className="group rounded-lg border border-[#e9e9e9] bg-[#fbfbfb] p-5 transition-all hover:-translate-y-0.5 hover:border-[#104591]/30 hover:shadow-md"
            >
              <h3 className="text-base font-bold text-[#212529] group-hover:text-[#104591]">
                {center.name}
              </h3>
              <p className="mt-1 text-xs text-[#707070]">{center.full}</p>
              <p className="mt-2 flex items-center gap-1 text-xs text-[#104591]">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                {center.location}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
