const newsItems = [
  {
    date: "June 16, 2026",
    title:
      "Mr. Wang Cun, Agricultural Cooperation Specialist/Minister Counsellor from Embassy of People's Republic of China i...",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=140&h=140&fit=crop",
  },
  {
    date: "June 11, 2026",
    title:
      "Chairman PARC, Dr. Syed Murtaza Hassan Andrabi chairing Project Planning and Steering Committee of Korea Partnersh...",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=140&h=140&fit=crop",
  },
  {
    date: "June 10, 2026",
    title:
      "Federal Minister for National Food Security and Research, Rana Tanveer Hussain witnessing the signing of Material ...",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=140&h=140&fit=crop",
  },
  {
    date: "June 8, 2026",
    title:
      "PARC organized a ground breaking international seminar focusing on the Genetic and Economic Impact of Norwegian Red...",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=140&h=140&fit=crop",
  },
  {
    date: "June 5, 2026",
    title:
      "USDA-CABI-PARC Organize Regulatory Harmonization Dialogue on Maximum Residual Limits and Bio-pesticides...",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=140&h=140&fit=crop",
  },
  {
    date: "June 3, 2026",
    title:
      "Chairman PARC Dr. Syed Murtaza Hassan Andrabi chairing 13th meeting of Inter-Provincial Agricultural Research Coor...",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=140&h=140&fit=crop",
  },
  {
    date: "May 30, 2026",
    title:
      "PARC and ADB Host 'Promoting Climate Smart Agriculture Research in Pakistan' workshop at NARC Islamabad...",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=140&h=140&fit=crop",
  },
  {
    date: "May 28, 2026",
    title:
      "Federal Minister for NFS&R, Rana Tanveer Hussain, inaugurated the National Speed Breeding Facility at NARC...",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=140&h=140&fit=crop",
  },
];

export function ParcLatestNewsPanel() {
  return (
    <div className="flex flex-col overflow-hidden rounded border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center">
        <div className="flex items-center gap-2 bg-[#C7474C] px-4 py-2.5">
          <span className="text-sm font-bold text-white">Latest News</span>
        </div>
        <div className="parc-dotted-bg flex-1 py-2.5" />
        <a
          href="#"
          className="bg-[#D9534F] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#D9534F]/90"
        >
          VIEW ALL
        </a>
      </div>

      {/* Scrollable news list */}
      <div className="parc-scroll-box max-h-[400px] overflow-y-auto">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="flex gap-3 border-b border-gray-100 px-4 py-3 transition-colors hover:bg-gray-50"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-[70px] w-[70px] shrink-0 rounded object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="mb-1 text-xs text-[#c0392b]">
                <span className="mr-1 inline-block h-3 w-3 align-middle">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
                  </svg>
                </span>
                {item.date}
              </p>
              <a
                href="#"
                className="line-clamp-2 text-sm font-semibold leading-snug text-[#1a1a1a] hover:text-[#C7474C]"
              >
                {item.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
