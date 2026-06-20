"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

const team = [
  {
    name: "Dr. Syed Murtaza Hassan Andrabi",
    title: "Chairman, PPO",
    division: "Office of the Chairman",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Noman Latif Sadozai",
    title: "CSO / Senior Director Incharge",
    division: "Natural Resources Division",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Ghulam Sadiq Afridi",
    title: "CSO / Senior Director Incharge",
    division: "Social Sciences Division",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Muhammad Mansoor",
    title: "CSO / Senior Director Incharge",
    division: "Plant Sciences Division",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Khalid Mehmood",
    title: "CSO / Senior Director Incharge",
    division: "Coordination & Monitoring Division",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Mr. Muhammad Saeedullah Yousafzai",
    title: "Member / Technical",
    division: "Technical Services",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Imtiaz Hussain",
    title: "Member",
    division: "Plant Sciences Division",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Falak Naz",
    title: "Member Incharge",
    division: "Coordination & Monitoring Division",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face",
  },
];

export function ParcLeadershipCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-parc-accent">
              Our Team
            </p>
            <h2 className="mt-2 text-2xl font-bold text-parc-primary-dark sm:text-3xl">
              Leadership & Management
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="grid h-10 w-10 place-items-center rounded-full border border-parc-border bg-white text-parc-primary-dark transition-colors hover:bg-parc-primary hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="grid h-10 w-10 place-items-center rounded-full border border-parc-border bg-white text-parc-primary-dark transition-colors hover:bg-parc-primary hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{ nextEl: null, prevEl: null }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {team.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="group overflow-hidden rounded-xl border border-parc-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-48 overflow-hidden bg-parc-bg-alt">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-parc-primary-dark/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-parc-primary-dark">{member.name}</h3>
                  <p className="mt-1 text-xs font-medium text-parc-primary">{member.title}</p>
                  <p className="mt-0.5 text-xs text-parc-text-muted">{member.division}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
