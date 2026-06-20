import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/employees")({
  component: EmployeesPage,
});

function EmployeesPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">Employees Corner</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Webmail",
              desc: "Access your PPO email account.",
              href: "/employees/webmail",
              icon: "📧",
            },
            {
              title: "Leave Portal",
              desc: "Apply for leave and check leave balance.",
              href: "/employees/leave",
              icon: "📅",
            },
            {
              title: "Payslips",
              desc: "Download your monthly payslips.",
              href: "/employees/payslips",
              icon: "💰",
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group rounded-lg border border-[#e9e9e9] bg-[#fbfbfb] p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-3xl">{item.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-[#212529] group-hover:text-[#104591]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[#65676b]">{item.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
