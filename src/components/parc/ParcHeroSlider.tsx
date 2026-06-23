"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1200&h=600&fit=crop",
    caption:
      "Islamabad, Federal Minister for National Food Security and Research, Rana Tanveer Hussain chairing a meeting to discuss transformation of the agricultural sector. Chairman PARC, Dr. Syed Murtaza Hassan Andrabi & senior officials from MNFS&R are also present in the meeting on 26-02-2026 (Dte. Of Communication & Information, PARC).",
    category: "Network",
  },
  {
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&h=600&fit=crop",
    caption:
      "Chairman PARC, Dr. Syed Murtaza Hassan Andrabi alongside a high-level delegation from the Republic of Uzbekistan led by Mr. Jamshidjon Abduzukhurov, Deputy Minister of Agriculture, during their visit to NARC Islamabad on 20-02-2026.",
    category: "Friends",
  },
  {
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1200&h=600&fit=crop",
    caption:
      "Chairman PARC in a meeting with a delegation from KOPIA (Korea Partnership for Innovation of Agriculture), Pakistan Centre. Both sides discussed collaborative research initiatives in agricultural science and technology.",
    category: "Network",
  },
  {
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1200&h=600&fit=crop",
    caption:
      "Civil Services Academy's Probationary Officers (53rd Common Training Program) visiting NARC Islamabad for agricultural research exposure and understanding of PARC's mandate.",
    category: "Trainings",
  },
  {
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1200&h=600&fit=crop",
    caption:
      "Honourable Prime Minister Muhammad Shehbaz Sharif inaugurating the Seed Potato Production and Processing Complex during his visit to NARC Islamabad.",
    category: "Friends",
  },
];

const allCategories = ["All", "Friends", "Network", "Trainings"];

export function ParcHeroSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredSlides =
    activeCategory === "All"
      ? slides
      : slides.filter((s) => s.category === activeCategory);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setActiveIndex(0);
    if (swiperRef.current) {
      swiperRef.current.slideTo(0, 0);
    }
  };

  const currentCaption = filteredSlides[activeIndex]?.caption ?? "";

  return (
    <div className="w-full">
      <div className="mx-auto max-w-[1200px] px-3 sm:px-4 lg:px-6">
        <div className="overflow-hidden rounded border border-gray-200 bg-white">
          <div className="relative">
            <Swiper
              modules={[Autoplay, Navigation]}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              navigation
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="parc-hero-swiper"
            >
              {filteredSlides.map((slide, index) => (
                <SwiperSlide key={`${activeCategory}-${index}`}>
                  <div className="relative aspect-[16/9] sm:aspect-[16/8]">
                    <img
                      src={slide.image}
                      alt={slide.caption}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Caption */}
          <div className="border-t border-gray-100 px-3 py-3 sm:px-5 sm:py-4">
            <p className="text-xs leading-relaxed text-[#393939] sm:text-sm">
              {currentCaption}
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 border-t border-gray-100 px-3 py-2.5 sm:gap-2 sm:px-5 sm:py-3">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold transition-colors sm:px-4 sm:py-1.5 sm:text-xs ${
                  activeCategory === cat
                    ? "bg-[#0E8B1A] text-white"
                    : "bg-gray-100 text-[#65676b] hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto text-[10px] text-gray-400">
              {activeIndex + 1} / {filteredSlides.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
