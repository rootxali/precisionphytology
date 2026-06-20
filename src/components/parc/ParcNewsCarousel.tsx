"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

const news = [
  {
    title:
      "Chairman PARC chairing 13th meeting of Inter-Provincial Agricultural Research Coordination Committee",
    excerpt:
      "Dr. Syed Murtaza Hassan Andrabi presided over the 13th session of the IPARCC committee at NARC Islamabad.",
    date: "Feb 20, 2026",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop",
  },
  {
    title: "Chairman PARC in a meeting with FAO Representative",
    excerpt:
      "Dr. Andrabi met with Ms. Amina Bajwa, Head of Programme and Assistant FAO Representative, to discuss collaborative research initiatives.",
    date: "Feb 18, 2026",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=600&h=400&fit=crop",
  },
  {
    title: "35th meeting of Board of Directors of PATCO",
    excerpt:
      "Chairman PARC chaired the 35th BOD meeting of Pakistan Agricultural Tractors Company at NARC.",
    date: "Feb 15, 2026",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop",
  },
  {
    title: "Meeting on establishment of agricultural sciences institute at NARC",
    excerpt:
      "Federal Minister for NFS&R, Rana Tanveer Hussain, chaired a meeting on the establishment of a degree-awarding agricultural sciences institute.",
    date: "Feb 12, 2026",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&h=400&fit=crop",
  },
  {
    title: "International seminar on Genetic and Economic Impact of Norwegian Red Dairy Cattle",
    excerpt:
      "PARC organized a groundbreaking international seminar focusing on the genetic improvement of dairy cattle in Pakistan.",
    date: "Feb 10, 2026",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&h=400&fit=crop",
  },
  {
    title: "PARC and ADB Host Climate Smart Agriculture Research Workshop",
    excerpt:
      "A two-day workshop on Promoting Climate Smart Agriculture Research in Pakistan was jointly organized by PARC and ADB.",
    date: "Feb 8, 2026",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop",
  },
];

export function ParcNewsCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-parc-accent">
              Updates
            </p>
            <h2 className="mt-2 text-2xl font-bold text-parc-primary-dark sm:text-3xl">
              Latest News & Events
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hidden text-sm font-semibold text-parc-primary hover:text-parc-accent sm:block"
            >
              View All →
            </a>
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
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{ nextEl: null, prevEl: null }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {news.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group overflow-hidden rounded-xl border border-parc-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-parc-primary px-3 py-1 text-xs font-bold text-white">
                    <Calendar className="h-3 w-3" />
                    {item.date}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="line-clamp-2 text-sm font-bold text-parc-primary-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs text-parc-text-muted">{item.excerpt}</p>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-parc-primary transition-colors hover:text-parc-accent"
                  >
                    Read More <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <a
          href="#"
          className="mt-6 block text-center text-sm font-semibold text-parc-primary hover:text-parc-accent sm:hidden"
        >
          View All News →
        </a>
      </div>
    </section>
  );
}
