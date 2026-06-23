import { Phone, Mail, Clock } from "lucide-react";

export function ParcTopbar() {
  return (
    <div className="bg-parc-primary-dark text-white text-xs">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6">
        {/* Left side */}
        <div className="hidden items-center gap-3 md:flex lg:gap-4">
          <a
            href="mailto:info@precisionphytology.org"
            className="flex items-center gap-1.5 hover:text-parc-accent transition-colors"
          >
            <Mail className="h-3 w-3" />
            <span className="hidden xl:inline">info@precisionphytology.org</span>
            <span className="xl:hidden">Email</span>
          </a>
          <span className="text-white/30">|</span>
          <a
            href="tel:+923335562477"
            className="flex items-center gap-1.5 hover:text-parc-accent transition-colors"
          >
            <Phone className="h-3 w-3" />
            <span>+92 333-556-2477</span>
          </a>
          <span className="text-white/30">|</span>
          <span className="hidden lg:flex items-center gap-1.5">
            <Clock className="h-3 w-3" />
            <span>Mon-Fri 9:00am to 5:00pm</span>
          </span>
        </div>

        {/* Right side */}
        <div className="flex w-full items-center justify-between md:w-auto md:justify-end md:gap-4">
          <div className="hidden items-center gap-3 md:flex lg:gap-4">
            <a href="#" className="hover:text-parc-accent transition-colors">
              Help Desk
            </a>
            <span className="text-white/30">|</span>
            <a href="/contact" className="hover:text-parc-accent transition-colors">
              Contact Us
            </a>
          </div>
          <a
            href="tel:0800-84420"
            className="flex items-center gap-1.5 rounded-full bg-parc-accent px-2.5 py-1 text-[10px] font-bold text-parc-primary-dark sm:text-xs"
          >
            <Phone className="h-3 w-3" />
            0800-84420
          </a>
        </div>
      </div>
    </div>
  );
}
