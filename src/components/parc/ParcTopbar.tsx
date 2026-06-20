import { Phone, Mail, Clock, ChevronDown } from "lucide-react";

export function ParcTopbar() {
  return (
    <div className="bg-parc-primary-dark text-white text-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">
        {/* Left side */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="mailto:webmaster@parc.gov.pk"
            className="flex items-center gap-1.5 hover:text-parc-accent transition-colors"
          >
            <Mail className="h-3 w-3" />
            <span>webmaster@parc.gov.pk</span>
          </a>
          <span className="text-white/30">|</span>
          <a
            href="tel:+92-51-9200071"
            className="flex items-center gap-1.5 hover:text-parc-accent transition-colors"
          >
            <Phone className="h-3 w-3" />
            <span>+92-51-9200071</span>
          </a>
          <span className="text-white/30">|</span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3 w-3" />
            <span>Mon-Fri 9:00am to 5:00pm</span>
          </span>
        </div>

        {/* Right side */}
        <div className="flex w-full items-center justify-between md:w-auto md:justify-end md:gap-4">
          <div className="hidden items-center gap-4 md:flex">
            <a href="#" className="hover:text-parc-accent transition-colors">
              Career
            </a>
            <span className="text-white/30">|</span>
            <a href="#" className="hover:text-parc-accent transition-colors">
              Help Desk / FAQ
            </a>
            <span className="text-white/30">|</span>
            <a href="#" className="hover:text-parc-accent transition-colors">
              Contact Us
            </a>
            <span className="text-white/30">|</span>
            <button className="flex items-center gap-1 hover:text-parc-accent transition-colors">
              English <ChevronDown className="h-3 w-3" />
            </button>
          </div>
          <a
            href="tel:0800-84420"
            className="flex items-center gap-1.5 rounded-full bg-parc-accent px-3 py-1 text-xs font-bold text-parc-primary-dark"
          >
            <Phone className="h-3 w-3" />
            0800-84420
          </a>
        </div>
      </div>
    </div>
  );
}
