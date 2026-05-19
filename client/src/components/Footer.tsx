/*
 * ZINARA DIGITAL — Footer Component
 * Design: Dark navy background, 4-column layout, orange accents
 * Includes: Logo, tagline, nav links, services, contact info, social links
 */

import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663676126722/WVeyyfJ6ez2bwdSUVsRBGX/zinara-logo-generated-GBNR7JvW2HyYQ9ZEitxD5g.webp";

export default function Footer() {
  return (
    <footer className="bg-[#1a2744] text-white">
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img
              src={LOGO_URL}
              alt="Zinara Digital"
              className="h-10 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              We help Kenyan businesses get more customers online. Real results, honest work, no hype.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, href: "https://facebook.com/zinaradigital", label: "Facebook" },
                { Icon: Instagram, href: "https://instagram.com/zinaradigital", label: "Instagram" },
                { Icon: Twitter, href: "https://twitter.com/zinaradigital", label: "Twitter" },
                { Icon: Linkedin, href: "https://linkedin.com/company/zinaradigital", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E85D04] flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-['Syne'] font-700 text-sm uppercase tracking-widest text-[#E85D04] mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Social Media Management",
                "Search Engine Optimisation",
                "Paid Advertising (Meta & Google)",
                "Website Design & Development",
                "Content Creation",
                "Email Marketing",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-white/70 hover:text-white text-sm transition-colors duration-150"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-['Syne'] font-700 text-sm uppercase tracking-widest text-[#E85D04] mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Contact Us", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/70 hover:text-white text-sm transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-['Syne'] font-700 text-sm uppercase tracking-widest text-[#E85D04] mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+254700000000"
                  className="flex items-start gap-3 text-white/70 hover:text-white text-sm transition-colors duration-150"
                >
                  <Phone size={16} className="mt-0.5 flex-shrink-0 text-[#E85D04]" />
                  <span>+254 700 000 000</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@zinara.co.ke"
                  className="flex items-start gap-3 text-white/70 hover:text-white text-sm transition-colors duration-150"
                >
                  <Mail size={16} className="mt-0.5 flex-shrink-0 text-[#E85D04]" />
                  <span>hello@zinara.co.ke</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70 text-sm">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[#E85D04]" />
                  <span>Nairobi, Kenya</span>
                </div>
              </li>
              <li className="pt-2">
                <a
                  href="https://wa.me/254700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white text-sm font-semibold px-4 py-2.5 rounded-md transition-colors duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Zinara Digital. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Nairobi, Kenya · Serving businesses across East Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
