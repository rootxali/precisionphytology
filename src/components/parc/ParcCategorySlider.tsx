"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CategorySlide {
  title: string;
  images: { src: string; alt: string }[];
}

const categories: CategorySlide[] = [
  {
    title: "Lectures",
    images: [
      { src: "/19c58f8d75ed1d9dd1c5c01534c372fd.jpg", alt: "Lecture session" },
      { src: "/89f23d3941171098abbd897b3171e179.png", alt: "Academic lecture" },
      { src: "/Career%20MindMap.png", alt: "Career lecture" },
      { src: "/valuetech1.png", alt: "Tech lecture" },
    ],
  },
  {
    title: "Friends",
    images: [
      { src: "/faisal-portrait.jpeg", alt: "Team member" },
      { src: "/b07e4592-ffc6-420f-b9b2-c1a76c114a3e_removalai_preview.png", alt: "Colleague" },
      { src: "/b07e4592-ffc6-420f-b9b2-c1a76c114a3e_removalai_preview%20(Edited).png", alt: "Friend" },
      { src: "/b07e4592-ffc6-420f-b9b2-c1a76c114a3e_removalai_preview%20(Edited%202).png", alt: "Partner" },
    ],
  },
  {
    title: "Trainings",
    images: [
      { src: "/Aichatbot.png", alt: "AI training" },
      { src: "/Aichat.png", alt: "Chatbot training" },
      { src: "/webdevelopment.png", alt: "Web dev training" },
      { src: "/valuetech.jpeg", alt: "Tech training" },
    ],
  },
  {
    title: "Network",
    images: [
      { src: "/8e8b19f7b28e17441624cdada88c0ecf.png", alt: "Network event" },
      { src: "/b-182.jpg", alt: "Networking" },
      { src: "/1774963697649.jpg", alt: "Community" },
      { src: "/Untitled%20design_dup1.png", alt: "Event network" },
    ],
  },
];

export function ParcCategorySlider() {
  const [activeCategory, setActiveCategory] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 280;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const currentImages = categories[activeCategory].images;

  return (
    <section className="bg-white py-6">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3">
          {categories.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(idx)}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                activeCategory === idx
                  ? "bg-[#0E8B1A] text-white"
                  : "bg-gray-100 text-[#65676b] hover:bg-gray-200"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Image Slider */}
        <div className="relative mt-3">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md transition-colors hover:bg-white"
          >
            <ChevronLeft className="h-5 w-5 text-[#212529]" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto scroll-smooth pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {currentImages.map((img, i) => (
              <div
                key={`${activeCategory}-${i}`}
                className="group relative w-[260px] shrink-0 overflow-hidden rounded-lg"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-[180px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute bottom-2 left-2 rounded bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-[#212529] opacity-0 transition-opacity group-hover:opacity-100">
                  {img.alt}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md transition-colors hover:bg-white"
          >
            <ChevronRight className="h-5 w-5 text-[#212529]" />
          </button>
        </div>
      </div>
    </section>
  );
}
