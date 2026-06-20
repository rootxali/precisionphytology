import { FileText, ExternalLink } from "lucide-react";

const notifications = [
  {
    title:
      "Declaration of Assets held and Acquired by Govt. Servants for the year ended 30th June 2020",
    date: "Jan 15, 2026",
    type: "Circular",
  },
  {
    title: "Reminder: Attrition / Voluntary Golden Handshake Proforma",
    date: "Jan 10, 2026",
    type: "Office Order",
  },
  {
    title:
      "Publishing of Press Release in Electronic & Print Media & usage of Social Media in the Name of PARC",
    date: "Dec 28, 2025",
    type: "Policy",
  },
  {
    title: "NOC for Acquiring Dual Nationality / Permanent Residence etc.",
    date: "Dec 20, 2025",
    type: "Circular",
  },
  {
    title:
      "Office Order: Mr. Muhammad Ishaq posted as Member In-Charge (Coordination & Monitoring), PARC",
    date: "Dec 15, 2025",
    type: "Office Order",
  },
  {
    title: "Revised Pay Scales 2025 — Implementation Instructions",
    date: "Dec 10, 2025",
    type: "Notification",
  },
  {
    title: "Transfer and Posting Orders — Section Officers (BS-17)",
    date: "Nov 30, 2025",
    type: "Office Order",
  },
  {
    title: "Annual Performance Evaluation Report (APER) — Last Date Extended",
    date: "Nov 25, 2025",
    type: "Circular",
  },
];

export function ParcNotifications() {
  return (
    <section className="bg-parc-bg-alt py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-parc-accent">
            Official
          </p>
          <h2 className="mt-2 text-2xl font-bold text-parc-primary-dark sm:text-3xl">
            Notifications & Circulars
          </h2>
        </div>

        <div className="overflow-hidden rounded-xl border border-parc-border bg-white shadow-sm">
          <div className="parc-scroll-box max-h-[350px] overflow-y-auto">
            {notifications.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 border-b border-parc-border/50 px-5 py-3.5 transition-colors hover:bg-parc-bg-alt ${
                  index % 2 === 0 ? "bg-white" : "bg-parc-bg-alt/50"
                }`}
              >
                <FileText className="h-4 w-4 shrink-0 text-parc-primary" />
                <div className="min-w-0 flex-1">
                  <a
                    href="#"
                    className="line-clamp-1 text-sm font-medium text-parc-primary-dark hover:text-parc-primary"
                  >
                    {item.title}
                  </a>
                  <div className="mt-0.5 flex items-center gap-2">
                    <span className="text-[10px] text-parc-text-muted">{item.date}</span>
                    <span className="rounded bg-parc-primary/10 px-1.5 py-0.5 text-[9px] font-semibold text-parc-primary">
                      {item.type}
                    </span>
                  </div>
                </div>
                <a
                  href="#"
                  className="shrink-0 rounded p-1.5 text-parc-text-muted transition-colors hover:bg-parc-primary/5 hover:text-parc-primary"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
