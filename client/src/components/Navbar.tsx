/*
 * ZINARA DIGITAL — Navbar Component
 * Design: Sticky top nav, logo left, links center, CTA right
 * Mobile: Hamburger menu with slide-down drawer
 * Brand: Syne font for logo, DM Sans for links
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663676126722/WVeyyfJ6ez2bwdSUVsRBGX/zinara-logo-generated-GBNR7JvW2HyYQ9ZEitxD5g.webp";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E8E5DE]"
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <img
                src={LOGO_URL}
                alt="Zinara Digital"
                className="h-8 lg:h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link text-sm font-medium pb-0.5 ${
                    location === link.href ? "active text-[#E85D04]" : "text-[#1C1C1E]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-zinara text-sm py-2.5 px-5"
              >
                Get a Free Quote
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded-md text-[#1C1C1E] hover:bg-[#F0EDE6] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white border-t border-[#E8E5DE] overflow-hidden transition-all duration-300 ease-out ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-3 rounded-md text-base font-medium transition-colors ${
                  location === link.href
                    ? "bg-[#FFF3E8] text-[#E85D04]"
                    : "text-[#1C1C1E] hover:bg-[#F0EDE6]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-[#E8E5DE] mt-2">
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-zinara w-full justify-center text-sm"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-20" />
    </>
  );
}
