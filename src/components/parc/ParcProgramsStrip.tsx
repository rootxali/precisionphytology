const programs = [
  { name: "ALP", label: "Agricultural Linkages Program", color: "bg-emerald-600" },
  { name: "PIASA", label: "PIASA", color: "bg-blue-600" },
  { name: "Kisan Corner", label: "Farmer Info Portal", color: "bg-amber-600" },
  { name: "PJAR", label: "Pakistan Journal of Agricultural Research", color: "bg-purple-600" },
  { name: "PATCO", label: "PATCO", color: "bg-rose-600" },
  { name: "Food System", label: "Food System Dashboard", color: "bg-teal-600" },
];

export function ParcProgramsStrip() {
  return (
    <section className="overflow-hidden border-y border-parc-border bg-parc-bg-alt py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-parc-accent">
            Flagship Programs
          </p>
          <h2 className="mt-1 text-xl font-bold text-parc-primary-dark">Our Initiatives</h2>
        </div>

        {/* Desktop: static row */}
        <div className="hidden gap-4 md:grid md:grid-cols-6">
          {programs.map((prog) => (
            <a
              key={prog.name}
              href="#"
              className="group flex flex-col items-center rounded-xl border border-parc-border bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-parc-primary/30 hover:shadow-md"
            >
              <div
                className={`mb-3 grid h-14 w-14 place-items-center rounded-full ${prog.color} text-white font-bold text-lg`}
              >
                {prog.name.charAt(0)}
              </div>
              <p className="text-center text-xs font-bold text-parc-primary-dark">{prog.name}</p>
              <p className="mt-1 text-center text-[10px] text-parc-text-muted leading-tight">
                {prog.label}
              </p>
            </a>
          ))}
        </div>

        {/* Mobile: auto-scroll marquee */}
        <div className="md:hidden">
          <div className="parc-marquee flex gap-4" style={{ width: "max-content" }}>
            {[...programs, ...programs].map((prog, i) => (
              <a
                key={`${prog.name}-${i}`}
                href="#"
                className="flex shrink-0 flex-col items-center rounded-xl border border-parc-border bg-white p-3 shadow-sm"
                style={{ width: 140 }}
              >
                <div
                  className={`mb-2 grid h-10 w-10 place-items-center rounded-full ${prog.color} text-white font-bold text-sm`}
                >
                  {prog.name.charAt(0)}
                </div>
                <p className="text-center text-xs font-bold text-parc-primary-dark">{prog.name}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
