import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/media/news")({
  component: NewsPage,
});

const news = [
  {
    date: "June 16, 2026",
    title: "Mr. Wang Cun, Agricultural Cooperation Specialist from Embassy of China visits PPO.",
  },
  {
    date: "June 11, 2026",
    title: "Chairman PPO chairing Project Planning and Steering Committee of Korea Partnership.",
  },
  {
    date: "June 10, 2026",
    title: "Federal Minister witnessing the signing of Material Transfer Agreement at NARC.",
  },
  {
    date: "June 8, 2026",
    title:
      "PPO organized international seminar on Genetic and Economic Impact of Norwegian Red Cattle.",
  },
  {
    date: "June 5, 2026",
    title: "USDA-CABI-PPO Organize Regulatory Harmonization Dialogue on MRLs and Bio-pesticides.",
  },
  {
    date: "June 3, 2026",
    title:
      "Chairman PPO chairing 13th meeting of Inter-Provincial Agricultural Research Committee.",
  },
  {
    date: "May 30, 2026",
    title: "PPO and ADB Host Climate Smart Agriculture Research workshop at NARC.",
  },
  {
    date: "May 28, 2026",
    title: "National Speed Breeding Facility inaugurated at NARC by Federal Minister.",
  },
];

function NewsPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">Latest News</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />

        <div className="mt-8 space-y-4">
          {news.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 rounded border border-[#e9e9e9] bg-[#fbfbfb] p-4 transition-colors hover:bg-gray-50"
            >
              <div className="shrink-0 text-center">
                <p className="text-xs text-[#c0392b]">{item.date}</p>
              </div>
              <a href="#" className="text-sm font-medium text-[#212529] hover:text-[#104591]">
                {item.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
