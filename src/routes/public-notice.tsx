import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/public-notice")({
  component: PublicNoticePage,
});

function PublicNoticePage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">Public Notice</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Notifications",
              desc: "Official notifications and orders.",
              href: "/public-notice/notifications",
              color: "bg-[#104591]",
            },
            {
              title: "Circulars",
              desc: "Office circulars and memorandums.",
              href: "/public-notice/circulars",
              color: "bg-[#0E8B1A]",
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group rounded-lg border border-[#e9e9e9] bg-[#fbfbfb] p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`inline-block rounded px-3 py-1 text-xs font-bold text-white ${item.color}`}
              >
                {item.title}
              </div>
              <p className="mt-3 text-sm text-[#65676b]">{item.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
