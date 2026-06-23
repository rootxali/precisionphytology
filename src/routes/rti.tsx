import { createFileRoute } from "@tanstack/react-router";
import { FileText, Download, Clock, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/rti")({
  component: RTIPage,
});

const steps = [
  { step: 1, title: "Submit Request", desc: "Write a request letter addressed to the designated RTI officer at PPO." },
  { step: 2, title: "Specify Information", desc: "Clearly describe the information you are seeking with relevant details." },
  { step: 3, title: "Processing", desc: "PPO will process your request within 14 working days as per RTI rules." },
  { step: 4, title: "Receive Response", desc: "Collect the information or receive it via email/postal service." },
];

function RTIPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">Right to Information</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-[#65676b]">
          <p>
            The Right to Information (RTI) Act, 2013 empowers citizens of Pakistan to request
            access to public records held by government organizations. PPO is committed to
            transparency and accountability, and provides information to citizens as per the
            provisions of the RTI Act.
          </p>
          <p>
            Any citizen of Pakistan may submit a request for information to PPO's designated
            RTI officer. PPO will respond to the request within 14 working days. Certain
            categories of information may be exempt from disclosure as specified in the Act.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold text-[#212529]">How to Submit an RTI Request</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.step} className="rounded-lg border border-[#e9e9e9] bg-[#f7f8fa] p-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0E8B1A] text-sm font-bold text-white">
                  {s.step}
                </div>
                <h3 className="mt-3 text-sm font-bold text-[#212529]">{s.title}</h3>
                <p className="mt-1 text-xs text-[#65676b]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-[#e9e9e9] bg-[#f7f8fa] p-6">
          <h2 className="text-lg font-bold text-[#212529]">RTI Officer Contact</h2>
          <div className="mt-3 space-y-1 text-sm text-[#65676b]">
            <p><strong>Name:</strong> Director Administration, PPO</p>
            <p><strong>Email:</strong> rti@precisionphytology.org</p>
            <p><strong>Address:</strong> Al Muqeet House M142, Street 47, Shaheen Town, Islamabad</p>
            <p><strong>Timings:</strong> Monday to Friday, 9:00 AM to 5:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
