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
    <div className="relative mt-3">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".parc-leadership-next",
          prevEl: ".parc-leadership-prev",
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={12}
        slidesPerView={1.3}
        centeredSlides={false}
      >
        {team.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-3 text-center shadow-sm">
              <img
                src={member.image}
                alt={member.name}
                className="mb-2 h-16 w-16 rounded-full object-cover ring-2 ring-[#104591]/20"
              />
              <p className="text-xs font-bold text-[#1a1a1a]">{member.name}</p>
              <p className="mt-0.5 text-[10px] font-medium leading-tight text-[#104591]">
                {member.title}
              </p>
              <p className="mt-0.5 text-[9px] text-gray-500">{member.division}</p>
              <a
                href="#"
                className="mt-2 rounded border border-gray-300 px-3 py-1 text-[10px] font-medium text-[#1a1a1a] transition-colors hover:bg-gray-50"
              >
                Read More
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation arrows */}
      <button className="parc-leadership-prev absolute -left-3 top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-[#104591] text-white shadow-md transition-colors hover:bg-[#104591]/90">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="parc-leadership-next absolute -right-3 top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-[#104591] text-white shadow-md transition-colors hover:bg-[#104591]/90">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
