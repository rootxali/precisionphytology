import { Lock, FileText, DollarSign, Mail } from "lucide-react";

const quickLinks = [
  { label: "Employee Webmail", icon: Mail, href: "/employees/webmail" },
  { label: "Leave Portal", icon: FileText, href: "/employees/leave" },
  { label: "Payslip Access", icon: DollarSign, href: "/employees/payslips" },
  { label: "HR Policies", icon: Lock, href: "/employees/policies" },
];

export function ParcEmployeeCorner() {
  return (
    <div className="flex flex-col overflow-hidden rounded border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center">
        <div className="flex items-center gap-2 bg-[#E8A91C] px-4 py-2.5">
          <span className="text-sm font-bold text-white">Employee Corner</span>
        </div>
        <div className="parc-dotted-bg flex-1 py-2.5" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-4">
        <p className="text-xs text-gray-500">Access employee resources and portals.</p>
        {quickLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-3 rounded-lg border border-gray-200 px-3 py-2.5 text-sm font-medium text-[#1a1a1a] transition-colors hover:border-[#E8A91C]/40 hover:bg-[#E8A91C]/5"
            >
              <Icon className="h-4 w-4 text-[#E8A91C]" />
              {link.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
