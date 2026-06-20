import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">Contact Us</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded border border-[#e9e9e9] bg-[#fbfbfb] p-6">
            <h2 className="text-lg font-bold text-[#212529]">Send us a Message</h2>
            <form className="mt-4 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="rounded border border-gray-300 px-3 py-2.5 text-sm focus:border-[#104591] focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="rounded border border-gray-300 px-3 py-2.5 text-sm focus:border-[#104591] focus:outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded border border-gray-300 px-3 py-2.5 text-sm focus:border-[#104591] focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                required
                className="w-full resize-none rounded border border-gray-300 px-3 py-2.5 text-sm focus:border-[#104591] focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded bg-[#104591] py-2.5 text-sm font-semibold text-white hover:bg-[#0d3a7a]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded border border-[#e9e9e9] bg-[#fbfbfb] p-6">
              <h2 className="text-lg font-bold text-[#212529]">Head Office</h2>
              <div className="mt-4 space-y-3 text-sm text-[#65676b]">
                <p className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#104591]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  20 Attaturk Avenue, G-5/1, Islamabad, 44000, Pakistan
                </p>
                <p className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 shrink-0 text-[#104591]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  +92-51-9200071
                </p>
                <p className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 shrink-0 text-[#104591]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  webmaster@parc.gov.pk
                </p>
                <p className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 shrink-0 text-[#104591]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                  Mon-Fri 9:00am to 5:00pm
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded border border-[#e9e9e9]">
              <iframe
                title="PPO Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0!2d73.05!3d33.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQyJzAwLjAiTiA3M8KwMDMnMDAuMCJF!5e0!3m2!1sen!2spk!4v1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
