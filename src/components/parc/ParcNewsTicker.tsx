"use client";

import { useState, useRef, useEffect } from "react";
import { Pause, Play, ChevronLeft, ChevronRight } from "lucide-react";

const headlines = [
  "Support of high quality genetic material of Buffaloes from Pakistan to China.",
  "Chairman PARC, Dr. Syed Murtaza Hassan Andrabi in a meeting with a high-level Canadian delegation.",
  "PARC organized a groundbreaking international seminar on Genetic and Economic Impact of Norwegian Red Dairy Cattle.",
  "Federal Minister for NFS&R, Rana Tanveer Hussain inaugurated the National Speed Breeding Facility at NARC.",
  "PARC and ADB Host 'Promoting Climate Smart Agriculture Research in Pakistan' workshop.",
];

export function ParcNewsTicker() {
  const [paused, setPaused] = useState(false);
  const tickerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!tickerRef.current) return;
    const amount = direction === "left" ? -200 : 200;
    tickerRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  useEffect(() => {
    const el = tickerRef.current;
    if (!el) return;
    if (paused) {
      el.style.animationPlayState = "paused";
    } else {
      el.style.animationPlayState = "running";
    }
  }, [paused]);

  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-[1200px] items-center gap-3 px-4 py-1.5 sm:px-6">
        {/* Latest News pill */}
        <span className="shrink-0 rounded bg-[#E6E6E6] px-3 py-1 text-xs font-semibold text-[#1a1a1a]">
          Latest News
        </span>

        {/* Scrolling headlines */}
        <div className="relative min-w-0 flex-1 overflow-hidden">
          <div
            ref={tickerRef}
            className={`parc-news-ticker ${paused ? "paused" : ""} flex gap-12 whitespace-nowrap`}
            style={{ width: "max-content" }}
          >
            {[...headlines, ...headlines].map((headline, i) => (
              <span key={i} className="text-sm text-[#393939]">
                {headline}
              </span>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex shrink-0 items-center gap-1">
          <button
            onClick={() => scroll("left")}
            className="p-1 text-gray-500 transition-colors hover:text-[#1a1a1a]"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => setPaused(!paused)}
            className="p-1 text-gray-500 transition-colors hover:text-[#1a1a1a]"
            aria-label={paused ? "Play" : "Pause"}
          >
            {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-1 text-gray-500 transition-colors hover:text-[#1a1a1a]"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
