import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/public-notice/notifications")({
  component: NotificationsPage,
});

const notifications = [
  {
    title:
      "Declaration of Assets held and Acquired by Govt. Servants for the year ended 30th June 2020",
    date: "Jan 15, 2026",
  },
  { title: "Reminder: Attrition / Voluntary Golden Handshake Proforma", date: "Jan 10, 2026" },
  {
    title: "Publishing of Press Release in Electronic & Print Media & usage of Social Media",
    date: "Dec 28, 2025",
  },
  { title: "NOC for Acquiring Dual Nationality / Permanent Residence etc.", date: "Dec 20, 2025" },
  { title: "Revised Pay Scales 2025 — Implementation Instructions", date: "Dec 10, 2025" },
];

function NotificationsPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">Notifications</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />

        <div className="mt-8 space-y-3">
          {notifications.map((n, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded border border-[#e9e9e9] bg-[#fbfbfb] px-5 py-3"
            >
              <a href="#" className="text-sm font-medium text-[#212529] hover:text-[#104591]">
                {n.title}
              </a>
              <span className="shrink-0 ml-4 text-xs text-[#707070]">{n.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
