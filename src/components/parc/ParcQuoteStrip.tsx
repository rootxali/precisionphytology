import { Quote } from "lucide-react";

const quotes = [
  {
    text: "Precision Phytology Organization will contribute its Role in making Pakistan 'A Food Secure State'.",
    author: "Dr. Syed Murtaza Hassan Andrabi",
    title: "Chairman, PPO",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
  },
  {
    text: "To address food security challenges, Development of Pakistan Sub-National Food System Dashboard is crucial to address Food Security Challenges.",
    author: "Capt. (R) Muhammad Mahmood",
    title: "Federal Secretary",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  },
];

export function ParcQuoteStrip() {
  return (
    <section className="bg-parc-bg-alt py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="relative rounded-xl border border-parc-border bg-white p-6 shadow-sm sm:p-8"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-parc-accent/20" />
              <div className="flex items-start gap-4">
                <img
                  src={q.image}
                  alt={q.author}
                  className="h-16 w-16 shrink-0 rounded-full object-cover ring-2 ring-parc-primary/20"
                />
                <div>
                  <p className="mb-4 text-sm leading-relaxed text-parc-text-muted italic sm:text-base">
                    &ldquo;{q.text}&rdquo;
                  </p>
                  <p className="text-sm font-bold text-parc-primary-dark">{q.author}</p>
                  <p className="text-xs text-parc-text-muted">{q.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
