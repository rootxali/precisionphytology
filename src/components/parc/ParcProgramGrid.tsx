import { Briefcase, Megaphone, Network, Shield, List, FolderOpen } from "lucide-react";

const programs = [
  {
    label: "ALP",
    fullLabel: "Agricultural Linkages Program",
    icon: Briefcase,
    href: "/programs/alp",
  },
  {
    label: "PIASA",
    fullLabel: "PIASA",
    icon: FolderOpen,
    href: "/programs/piasa",
  },
  {
    label: "KISAN CORNER",
    fullLabel: "Farmer Info Portal",
    icon: Megaphone,
    href: "/programs/kisan-corner",
  },
  {
    label: "PJAR",
    fullLabel: "Pakistan Journal of Agricultural Research",
    icon: Network,
    href: "/programs/pjar",
  },
  {
    label: "PATCO",
    fullLabel: "PATCO",
    icon: Shield,
    href: "/programs/patco",
  },
  {
    label: "FOOD SYSTEM DASHBOARD",
    fullLabel: "Pakistan Food System Dashboard",
    icon: List,
    href: "/programs/food-system",
  },
];

export function ParcProgramGrid() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {programs.map((prog) => {
        const Icon = prog.icon;
        return (
          <a
            key={prog.label}
            href={prog.href}
            className="group flex flex-col items-center justify-center rounded-xl bg-[#1C6C1F] p-4 text-center transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1C6C1F]/90 hover:shadow-md"
          >
            <Icon className="mb-2 h-7 w-7 text-white/90" />
            <span className="text-[10px] font-bold uppercase leading-tight text-white sm:text-xs">
              {prog.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}
