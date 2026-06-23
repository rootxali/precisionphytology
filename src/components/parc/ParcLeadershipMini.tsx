"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const team = [
  {
    name: "Dr. Syed Murtaza Hassan Andrabi",
    title: "Chairman, PPO",
    division: "Office of the Chairman",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Dr. Muhammad Mansoor",
    title: "CSO / Senior Director Incharge",
    division: "Plant Sciences Division",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Dr. Noman Latif Sadozai",
    title: "CSO / Senior Director Incharge",
    division: "Natural Resources Division",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Dr. Ghulam Sadiq Afridi",
    title: "CSO / Senior Director Incharge",
    division: "Social Sciences Division",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Dr. Khalid Mehmood",
    title: "CSO / Senior Director Incharge",
    division: "Coordination & Monitoring Division",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Dr. Imtiaz Hussain",
    title: "Member",
    division: "Plant Sciences Division",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop&crop=face",
  },
];

export function ParcLeadershipMini() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative mt-2 sm:mt-3">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".parc-leadership-next",
          prevEl: ".parc-leadership-prev",
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={8}
        slidesPerView={1.5}
        centeredSlides={false}
      >
        {team.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-2.5 text-center shadow-sm sm:p-3">
              <img
                src={member.image}
                alt={member.name}
                className="mb-1.5 h-12 w-12 rounded-full object-cover ring-2 ring-[#104591]/20 sm:mb-2 sm:h-16 sm:w-16"
              />
              <p className="text-[10px] font-bold text-[#1a1a1a] sm:text-xs">{member.name}</p>
              <p className="mt-0.5 text-[9px] font-medium leading-tight text-[#104591] sm:text-[10px]">
                {member.title}
              </p>
              <p className="mt-0.5 text-[8px] text-gray-500 sm:text-[9px]">{member.division}</p>
              <a
                href="#"
                className="mt-1.5 rounded border border-gray-300 px-2.5 py-0.5 text-[9px] font-medium text-[#1a1a1a] transition-colors hover:bg-gray-50 sm:mt-2 sm:px-3 sm:py-1 sm:text-[10px]"
              >
                Read More
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation arrows */}
      <button className="parc-leadership-prev absolute -left-2 top-1/2 z-10 grid h-6 w-6 -translate-y-1/2 place-items-center rounded-full bg-[#104591] text-white shadow-md transition-colors hover:bg-[#104591]/90 sm:-left-3 sm:h-8 sm:w-8">
        <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="parc-leadership-next absolute -right-2 top-1/2 z-10 grid h-6 w-6 -translate-y-1/2 place-items-center rounded-full bg-[#104591] text-white shadow-md transition-colors hover:bg-[#104591]/90 sm:-right-3 sm:h-8 sm:w-8">
        <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
