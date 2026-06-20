"use client";

import { useEffect, useState } from "react";
import { Users, Eye, Globe, Clock } from "lucide-react";

function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration]);

  return count;
}

const stats = [
  {
    icon: Users,
    value: 8850,
    label: "Active Users",
    format: (n: number) => n.toLocaleString(),
  },
  {
    icon: Eye,
    value: 684,
    label: "Today's Visitors",
    format: (n: number) => n.toLocaleString(),
  },
  {
    icon: Globe,
    value: 2046951,
    label: "Total Visitors",
    format: (n: number) => n.toLocaleString(),
  },
  {
    icon: Clock,
    value: 0,
    label: "Updated On",
    format: () => new Date().toLocaleDateString("en-GB"),
  },
];

export function ParcVisitorCounter() {
  return (
    <section className="border-y border-parc-border bg-white py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({
  icon: Icon,
  value,
  label,
  format,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  label: string;
  format: (n: number) => string;
}) {
  const count = useCountUp(value);

  return (
    <div className="flex items-center gap-3">
      <div className="grid h-12 w-12 place-items-center rounded-full bg-parc-primary/10 text-parc-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-lg font-bold text-parc-primary-dark sm:text-xl">{format(count)}</p>
        <p className="text-xs text-parc-text-muted">{label}</p>
      </div>
    </div>
  );
}
