"use client";

import { useRef } from "react";
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
  },
  {
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&h=600&fit=crop",
    caption:
      "Chairman PARC, Dr. Syed Murtaza Hassan Andrabi alongside a high-level delegation from the Republic of Uzbekistan led by Mr. Jamshidjon Abduzukhurov, Deputy Minister of Agriculture, during their visit to NARC Islamabad on 20-02-2026.",
  },
  {
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1200&h=600&fit=crop",
    caption:
      "Chairman PARC in a meeting with a delegation from KOPIA (Korea Partnership for Innovation of Agriculture), Pakistan Centre. Both sides discussed collaborative research initiatives in agricultural science and technology.",
  },
  {
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1200&h=600&fit=crop",
    caption:
      "Civil Services Academy's Probationary Officers (53rd Common Training Program) visiting NARC Islamabad for agricultural research exposure and understanding of PARC's mandate.",
  },
  {
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1200&h=600&fit=crop",
    caption:
      "Honourable Prime Minister Muhammad Shehbaz Sharif inaugurating the Seed Potato Production and Processing Complex during his visit to NARC Islamabad.",
  },
];

export function ParcHeroSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="w-full">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* Framed slider container */}
        <div className="overflow-hidden rounded border border-gray-200 bg-white">
          <div className="relative">
            <Swiper
              modules={[Autoplay, Navigation]}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              navigation
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="parc-hero-swiper"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div>
                    <img
                      src={slide.image}
                      alt={slide.caption}
                      className="h-[250px] w-full object-cover sm:h-[350px] md:h-[420px]"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Italic caption below the photo */}
          <div className="border-t border-gray-100 px-5 py-4">
            <p className="text-sm italic leading-relaxed text-[#393939]">{slides[0].caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
