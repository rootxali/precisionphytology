import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import SocialCards from "@/components/ui/card-fan-carousel";

export const Route = createFileRoute("/media/gallery")({
  component: GalleryPage,
});

const carouselCards = [
  { imgUrl: "/1774963697649.jpg", alt: "Organization photo" },
  { imgUrl: "/19c58f8d75ed1d9dd1c5c01534c372fd.jpg", alt: "Research facility" },
  { imgUrl: "/89f23d3941171098abbd897b3171e179.png", alt: "Agricultural project" },
  { imgUrl: "/8e8b19f7b28e17441624cdada88c0ecf.png", alt: "Field work" },
  { imgUrl: "/b-182.jpg", alt: "Research activity" },
  { imgUrl: "/faisal-portrait.jpeg", alt: "Team member" },
  { imgUrl: "/valuetech1.png", alt: "Technology" },
  { imgUrl: "/valuetech.jpeg", alt: "Innovation" },
  { imgUrl: "/webdevelopment.png", alt: "Digital platform" },
  { imgUrl: "/Aichatbot.png", alt: "AI Research" },
];

const categories = [
  "All",
  "Research Labs",
  "Field Trials",
  "Events & Conferences",
  "Team & Portraits",
  "Technology",
];

interface Photo {
  src: string;
  alt: string;
  category: string;
}

const photos: Photo[] = [
  // Research Labs
  { src: "/19c58f8d75ed1d9dd1c5c01534c372fd.jpg", alt: "Research facility", category: "Research Labs" },
  { src: "/89f23d3941171098abbd897b3171e179.png", alt: "Laboratory work", category: "Research Labs" },
  { src: "/8e8b19f7b28e17441624cdada88c0ecf.png", alt: "Research activity", category: "Research Labs" },
  { src: "/Aichatbot.png", alt: "AI research system", category: "Research Labs" },
  { src: "/Aichat.png", alt: "AI platform", category: "Research Labs" },

  // Field Trials
  { src: "/b-182.jpg", alt: "Field research", category: "Field Trials" },
  { src: "/image_1774742138354.jpg", alt: "Field observation", category: "Field Trials" },
  { src: "/1774963697649.jpg", alt: "Agricultural field work", category: "Field Trials" },

  // Events & Conferences
  { src: "/Untitled%20design_dup1.png", alt: "Event banner", category: "Events & Conferences" },
  { src: "/Black%20and%20Gold%20Minimalist%20Corporate%20Business%20LinkedIn%20Banner.png", alt: "Corporate banner", category: "Events & Conferences" },
  { src: "/Blue%20and%20White%20Minimalist%20Business%20Consultant%20Profile%20LinkedIn%20Banner.png", alt: "Professional profile", category: "Events & Conferences" },

  // Team & Portraits
  { src: "/faisal-portrait.jpeg", alt: "Team member portrait", category: "Team & Portraits" },
  { src: "/b07e4592-ffc6-420f-b9b2-c1a76c114a3e_removalai_preview.png", alt: "Profile photo", category: "Team & Portraits" },
  { src: "/b07e4592-ffc6-420f-b9b2-c1a76c114a3e_removalai_preview%20(Edited).png", alt: "Profile photo edited", category: "Team & Portraits" },
  { src: "/b07e4592-ffc6-420f-b9b2-c1a76c114a3e_removalai_preview%20(Edited%202).png", alt: "Profile photo final", category: "Team & Portraits" },

  // Technology
  { src: "/valuetech1.png", alt: "Value tech platform", category: "Technology" },
  { src: "/valuetech.jpeg", alt: "Technology solution", category: "Technology" },
  { src: "/webdevelopment.png", alt: "Web development", category: "Technology" },
  { src: "/Career%20MindMap.png", alt: "Career mindmap", category: "Technology" },
];

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = activeCategory === "All" ? photos : photos.filter((p) => p.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const navigateLightbox = (direction: "prev" | "next") => {
    if (lightboxIndex === null) return;
    if (direction === "next") {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    } else {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-[#0E8B1A] py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-white/20" />
          <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-white/10" />
        </div>
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <Camera className="h-10 w-10 text-white/80" />
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Photo Gallery
            </h1>
          </div>
          <div className="mt-3 h-1 w-20 bg-white/60" />
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            Explore our research facilities, field trials, events, and agricultural
            operations through curated photographs.
          </p>
        </div>
      </div>

      {/* Fan Carousel */}
      <div className="border-b border-[#e9e9e9] bg-[#f7f8fa]">
        <div className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6">
          <h2 className="text-center text-lg font-bold text-[#212529]">Featured Photos</h2>
          <p className="mt-1 text-center text-sm text-[#65676b]">Browse through our collection of research and field work</p>
        </div>
        <SocialCards cards={carouselCards} />
      </div>

      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 sm:py-14">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-[#0E8B1A] text-white"
                  : "bg-gray-100 text-[#65676b] hover:bg-gray-200"
              }`}
            >
              {cat}
              {cat !== "All" && (
                <span className="ml-1.5 text-[10px] opacity-70">
                  ({photos.filter((p) => p.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {filteredPhotos.map((photo, i) => (
            <div
              key={`${photo.category}-${i}`}
              className="group cursor-pointer overflow-hidden rounded-lg border border-[#e9e9e9]"
              onClick={() => openLightbox(i)}
            >
              <div className="relative">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-52"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                  <span className="scale-0 rounded-full bg-white p-2 transition-transform group-hover:scale-100">
                    <Camera className="h-4 w-4 text-[#212529]" />
                  </span>
                </div>
              </div>
              <div className="p-2.5">
                <span className="text-[10px] font-semibold uppercase text-[#0E8B1A]">
                  {photo.category}
                </span>
                <p className="mt-0.5 text-xs text-[#65676b] line-clamp-1">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <p className="py-10 text-center text-sm text-gray-400">
            No photos in this category.
          </p>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={() => navigateLightbox("prev")}
            className="absolute left-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="mx-16 max-h-[85vh] max-w-[90vw]">
            <img
              src={filteredPhotos[lightboxIndex].src}
              alt={filteredPhotos[lightboxIndex].alt}
              className="max-h-[80vh] rounded-lg object-contain"
            />
            <div className="mt-3 text-center">
              <span className="rounded bg-[#0E8B1A]/80 px-2 py-0.5 text-[10px] font-semibold text-white">
                {filteredPhotos[lightboxIndex].category}
              </span>
              <p className="mt-1.5 text-sm text-white/80">
                {filteredPhotos[lightboxIndex].alt}
              </p>
              <p className="mt-0.5 text-xs text-white/50">
                {lightboxIndex + 1} / {filteredPhotos.length}
              </p>
            </div>
          </div>

          <button
            onClick={() => navigateLightbox("next")}
            className="absolute right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
}
