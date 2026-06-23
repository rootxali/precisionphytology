import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { postContact } from "@/lib/api";
import { Mail, Phone, MapPin, Globe, MessageCircle, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Us",
    desc: "Our team will respond to your inquiry within 24 business hours.",
    link: { name: "Send us an email", href: "mailto:info@precisionphytology.org" },
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "WhatsApp",
    desc: "Connect with us instantly via WhatsApp for quick assistance.",
    link: {
      name: "Send us a message",
      href: "https://api.whatsapp.com/send?phone=923335562477",
    },
  },
];

const contactInfo = [
  { icon: <Mail className="h-5 w-5" />, contact: "info@precisionphytology.org" },
  { icon: <Phone className="h-5 w-5" />, contact: "+92 333-556-2477" },
  { icon: <MapPin className="h-5 w-5" />, contact: "Al Muqeet House M142, Street 47, Shaheen Town, Islamabad" },
  { icon: <Globe className="h-5 w-5" />, contact: "precisionpythology.org" },
];

const services = ["Disease Diagnostic", "Orchard Manager", "Field Manager", "Plant Nutrition Manager", "Agriculture Material and Supplies"];

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", contactAs: "", service: "", customService: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const service = form.service === "Other" ? form.customService : form.service;
      const contactAsLine = form.contactAs ? `[${form.contactAs}] ` : "";
      const serviceLine = service ? `[Service: ${service}] ` : "";
      await postContact({
        name: form.name,
        email: form.email,
        msg: `${contactAsLine}${serviceLine}${form.message}`,
      });
      setStatus("success");
      setForm({ name: "", email: "", contactAs: "", service: "", customService: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <main className="py-14">
      <div className="mx-auto max-w-screen-xl px-4 text-gray-600 md:px-8">
        {/* Top Section — Connect + Info */}
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="max-w-md">
            <h3 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
              Let&apos;s connect
            </h3>
            <p className="mt-3">
              We&apos;re here to help and answer any question you might have. We look
              forward to hearing from you.
            </p>
          </div>
          <div>
            <ul className="mt-12 items-center gap-y-6 gap-x-12 md:flex lg:mt-0 lg:gap-x-0">
              {contactMethods.map((item, idx) => (
                <li
                  key={idx}
                  className="space-y-3 border-t py-6 md:border-t-0 md:py-0 md:max-w-sm lg:border-l lg:px-12 lg:max-w-none"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border text-gray-700">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-medium text-gray-800 xl:text-xl">
                    {item.title}
                  </h4>
                  <p>{item.desc}</p>
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-[#104591] duration-150 hover:text-[#0d3a7a]"
                  >
                    {item.link.name}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section — Info + Form */}
        <div className="mt-16 flex flex-col gap-12 justify-between lg:flex-row">
          <div className="max-w-lg space-y-3">
            <h3 className="font-semibold text-[#0E8B1A]">Contact</h3>
            <p className="text-3xl font-semibold text-gray-800 sm:text-4xl">
              Let us know how we can help
            </p>
            <p>
              Please fill out the form below or use the contact information
              provided. We look forward to hearing from you.
            </p>
            <div>
              <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                {contactInfo.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-x-3">
                    <div className="flex-none text-gray-400">{item.icon}</div>
                    <p>{item.contact}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map */}
            <div className="mt-6 overflow-hidden rounded-lg border">
              <iframe
                title="PPO Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.5!2d73.08!3d33.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM5JzAwLjAiTiA3M8KwMDQnNDguMCJF!5e0!3m2!1sen!2spk!4v1"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 sm:max-w-lg lg:max-w-md">
            {status === "success" && (
              <div className="mb-5 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                Your message has been sent successfully. We will get back to you soon.
              </div>
            )}

            {status === "error" && (
              <div className="mb-5 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-medium">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full rounded-lg border px-3 py-2 text-gray-500 bg-transparent outline-none shadow-sm focus:border-[#104591]"
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full rounded-lg border px-3 py-2 text-gray-500 bg-transparent outline-none shadow-sm focus:border-[#104591]"
                />
              </div>
              <div>
                <label className="font-medium">I am contacting as</label>
                <select
                  value={form.contactAs}
                  onChange={(e) => setForm({ ...form, contactAs: e.target.value })}
                  className="mt-2 w-full rounded-lg border px-3 py-2 text-gray-500 bg-transparent outline-none shadow-sm focus:border-[#104591]"
                >
                  <option value="">Select one</option>
                  <option value="Customer">Customer</option>
                  <option value="Service Provider / Skill Specialist">Service Provider / Skill Specialist</option>
                </select>
              </div>
              <div>
                <label className="font-medium">Service</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="mt-2 w-full rounded-lg border px-3 py-2 text-gray-500 bg-transparent outline-none shadow-sm focus:border-[#104591]"
                >
                  <option value="">Select a service (optional)</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                  <option value="Other">Other (specify below)</option>
                </select>
              </div>
              {form.service === "Other" && (
                <div>
                  <label className="font-medium">Describe your service</label>
                  <input
                    type="text"
                    required
                    value={form.customService}
                    onChange={(e) => setForm({ ...form, customService: e.target.value })}
                    className="mt-2 w-full rounded-lg border px-3 py-2 text-gray-500 bg-transparent outline-none shadow-sm focus:border-[#104591]"
                  />
                </div>
              )}
              <div>
                <label className="font-medium">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 h-36 w-full resize-none appearance-none rounded-lg border px-3 py-2 text-gray-500 bg-transparent outline-none shadow-sm focus:border-[#104591]"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-lg bg-[#104591] px-4 py-2.5 text-white font-medium hover:bg-[#0d3a7a] active:bg-[#104591] duration-150 disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
