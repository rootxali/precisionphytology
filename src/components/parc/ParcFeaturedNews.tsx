import { ArrowRight } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=200&fit=crop",
    caption: "Chairman PPO presiding over the 13th IPARCC meeting at NARC Islamabad.",
  },
  {
    src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=300&h=200&fit=crop",
    caption: "Delegation from KOPIA Pakistan Centre visiting NARC for collaborative research.",
  },
  {
    src: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=620&h=260&fit=crop",
    caption: "Federal Minister for NFS&R inaugurating the National Speed Breeding Facility.",
  },
];

export function ParcFeaturedNews() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Featured News Card (~66%) */}
          <div className="flex-1 lg:w-[66%]">
            <div className="flex flex-col gap-5 rounded bg-[#fbfbfb] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.06)] sm:flex-row">
              {/* Image cluster */}
              <div className="shrink-0 sm:w-[240px]">
                <div className="grid grid-cols-2 gap-2">
                  {images.slice(0, 2).map((img, i) => (
                    <div key={i}>
                      <img
                        src={img.src}
                        alt={img.caption}
                        className="h-[100px] w-full rounded object-cover"
                      />
                      <p className="mt-1 line-clamp-2 text-[10px] italic text-[#707070]">
                        {img.caption}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-2">
                  <img
                    src={images[2].src}
                    alt={images[2].caption}
                    className="h-[120px] w-full rounded object-cover"
                  />
                  <p className="mt-1 line-clamp-2 text-[10px] italic text-[#707070]">
                    {images[2].caption}
                  </p>
                </div>
              </div>

              {/* Text block */}
              <div className="flex flex-1 flex-col">
                <a
                  href="#"
                  className="text-lg font-bold leading-snug text-[#104591] hover:underline sm:text-xl"
                >
                  Chairman PPO chairs 13th meeting of Inter-Provincial Agricultural Research
                  Coordination Committee
                </a>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#65676b]">
                  Dr. Syed Murtaza Hassan Andrabi presided over the 13th session of the
                  Inter-Provincial Agricultural Research Coordination Committee (IPARCC) at NARC
                  Islamabad. The committee reviewed ongoing collaborative research projects across
                  provinces and discussed future strategies for strengthening agricultural research
                  coordination in Pakistan.
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded bg-[#104591] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0d3a7a]"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Panel (~25%, right-aligned) */}
          <div className="w-full lg:w-[25%]">
            <div className="rounded bg-[#fbfbfb] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
              <StatRow label="Active Users" value="47" color="text-[#009999]" />
              <StatRow label="Today's Visitors" value="463" color="text-[#3ce194]" />
              <StatRow label="Total Visitors" value="2,131,766" color="text-[#3cd6d6]" />
              <StatRow label="Updated On" value="17/06/2026" color="text-[#707070]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatRow({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="flex items-center justify-between border-b border-[#e9e9e9] py-3 last:border-b-0">
      <span className="text-sm text-[#5f5f5f]">{label}</span>
      <span className={`text-base font-bold ${color}`}>{value}</span>
    </div>
  );
}
