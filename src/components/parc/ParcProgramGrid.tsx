import { Link } from "@tanstack/react-router";
import { Briefcase, Megaphone, Shield, List, ImageIcon, BookOpen } from "lucide-react";

const programs = [
  {
    label: "ALP",
    fullLabel: "Agricultural Linkages Program",
    icon: Briefcase,
    to: "/programs/alp",
  },
  {
    label: "GALLERY",
    fullLabel: "Photo Gallery",
    icon: ImageIcon,
    to: "/media/gallery",
  },
  {
    label: "SERVICES",
    fullLabel: "Our Services",
    icon: Megaphone,
    to: "/services",
  },
  {
    label: "PPJ",
    fullLabel: "Precision Phytology Journal",
    icon: BookOpen,
    to: "/ppj",
  },
  {
    label: "PATCO",
    fullLabel: "PATCO",
    icon: Shield,
    to: "/programs/patco",
  },
  {
    label: "FOOD SYSTEM DASHBOARD",
    fullLabel: "Pakistan Food System Dashboard",
    icon: List,
    to: "/programs/food-system",
  },
];

export function ParcProgramGrid() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
      {programs.map((prog) => {
        const Icon = prog.icon;
        return (
          <Link
            key={prog.label}
            to={prog.to as "/" | "/media/gallery" | "/services" | "/ppj"}
            className="group flex flex-col items-center justify-center rounded-lg bg-[#1C6C1F] p-2.5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1C6C1F]/90 hover:shadow-md sm:rounded-xl sm:p-4"
          >
            <Icon className="mb-1 h-5 w-5 text-white/90 sm:mb-2 sm:h-7 sm:w-7" />
            <span className="text-[9px] font-bold uppercase leading-tight text-white sm:text-[10px] lg:text-xs">
              {prog.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
