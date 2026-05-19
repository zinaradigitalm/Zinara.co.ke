/*
 * ZINARA DIGITAL — Home Page
 * Design: Afro-Modern Minimalism
 * CRO: Clear value prop → Social proof → Services overview → Trust signals → CTA
 * SEO: H1 with primary keyword, structured content, internal links
 */

import { Link } from "wouter";
import {
  ArrowRight, CheckCircle2, Star, TrendingUp, Users, Globe,
  MessageSquare, Search, Megaphone, Monitor, Mail, BarChart3, ChevronRight
} from "lucide-react";
import { AnimSection } from "@/components/AnimSection";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663676126722/WVeyyfJ6ez2bwdSUVsRBGX/zinara-hero-JLfvmZV4ZYAxdZefeRKPFv.webp";
const TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663676126722/WVeyyfJ6ez2bwdSUVsRBGX/zinara-team-9rVtwZaHo6mXPm7eVnvbnL.webp";
const SERVICES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663676126722/WVeyyfJ6ez2bwdSUVsRBGX/zinara-services-aypY4zyjAhDkkS9QpFjiYa.webp";

const services = [
  { icon: MessageSquare, title: "Social Media Management", desc: "Consistent, engaging posts on Facebook, Instagram, and TikTok that build your brand and bring in enquiries.", color: "bg-blue-50 text-blue-600" },
  { icon: Search, title: "Search Engine Optimisation", desc: "Get found on Google when customers in your area search for what you offer. Long-term organic growth.", color: "bg-green-50 text-green-600" },
  { icon: Megaphone, title: "Paid Advertising", desc: "Facebook, Instagram, and Google Ads campaigns designed to generate leads and sales, not just clicks.", color: "bg-orange-50 text-orange-600" },
  { icon: Monitor, title: "Website Design", desc: "Fast, mobile-first websites that look professional and are built to convert visitors into customers.", color: "bg-purple-50 text-purple-600" },
  { icon: Mail, title: "Email & WhatsApp Marketing", desc: "Stay top-of-mind with your existing customers through targeted email and WhatsApp broadcast campaigns.", color: "bg-pink-50 text-pink-600" },
  { icon: BarChart3, title: "Analytics & Reporting", desc: "Clear monthly reports showing exactly what's working, what's not, and what we're doing about it.", color: "bg-teal-50 text-teal-600" },
];

const stats = [
  { value: "50+", label: "Businesses Served" },
  { value: "3×", label: "Average Lead Increase" },
  { value: "98%", label: "Client Retention Rate" },
  { value: "5 yrs", label: "In the Kenyan Market" },
];

const industries = [
  "Real Estate & Property", "Healthcare & Clinics", "Schools & Training",
  "Retail & E-Commerce", "Hospitality & Tourism", "Professional Services",
];

const testimonials = [
  { quote: "Within 3 months of working with Zinara, our Facebook enquiries tripled. They understand the Kenyan market and speak our customers' language.", name: "James Mwangi", role: "Director", company: "Ruiru Properties", initials: "JM", color: "bg-orange-100 text-orange-700" },
  { quote: "Our clinic's Google presence went from zero to ranking on the first page for our area. New patient bookings are up significantly.", name: "Dr. Amina Hassan", role: "Owner", company: "Westlands Medical Centre", initials: "AH", color: "bg-blue-100 text-blue-700" },
  { quote: "Professional, responsive, and they actually deliver results. Our online store sales doubled in the first six months.", name: "Grace Njeri", role: "Founder", company: "Nairobi Boutique", initials: "GN", color: "bg-green-100 text-green-700" },
];

export default function Home() {
  return (
    <main>
      {/* ═══ HERO ═══ */}
      <section className="bg-[#FAFAF7] pt-8 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimSection>
              <div className="orange-rule mb-6">
                <span className="orange-rule-text">Digital Marketing Agency · Nairobi, Kenya</span>
              </div>
              <h1 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl xl:text-6xl leading-[1.1] text-[#1C1C1E] mb-6">
                More Customers.<br />
                <span className="text-[#E85D04]">Real Results.</span><br />
                No Hype.
              </h1>
              <p className="text-lg text-[#52525B] leading-relaxed mb-8 max-w-lg">
                We help Kenyan businesses grow online — from social media and SEO to paid ads and websites.
                Straightforward work that brings in real enquiries and sales.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {["Free initial consultation", "No long-term lock-in", "Results in 90 days"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm text-[#1C1C1E]">
                    <CheckCircle2 size={16} className="text-[#E85D04] flex-shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/254700000000?text=Hi%20Zinara%20Digital%2C%20I%27d%20like%20a%20free%20consultation." target="_blank" rel="noopener noreferrer" className="btn-zinara">
                  Get a Free Consultation <ArrowRight size={18} />
                </a>
                <Link href="/services" className="btn-zinara-outline">See Our Services</Link>
              </div>
            </AnimSection>

            <AnimSection delay={150}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={HERO_IMG} alt="Professional digital marketing expert in Nairobi" className="w-full h-auto object-cover" loading="eager" />
                <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFF3E8] flex items-center justify-center">
                    <TrendingUp size={20} className="text-[#E85D04]" />
                  </div>
                  <div>
                    <p className="font-['Syne'] font-bold text-[#1C1C1E] text-sm">3× More Leads</p>
                    <p className="text-xs text-[#52525B]">Average client result</p>
                  </div>
                </div>
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* ═══ STATS BAND ═══ */}
      <section className="stats-band py-12 lg:py-16">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat, i) => (
              <AnimSection key={stat.label} delay={i * 70}>
                <div className={`text-center ${i < stats.length - 1 ? "lg:border-r lg:border-white/20" : ""}`}>
                  <p className="font-['Syne'] font-extrabold text-3xl lg:text-4xl text-[#E85D04] mb-1">{stat.value}</p>
                  <p className="text-white/70 text-sm uppercase tracking-wide">{stat.label}</p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES OVERVIEW ═══ */}
      <section className="bg-[#FAFAF7] py-20 lg:py-28">
        <div className="container">
          <AnimSection>
            <div className="orange-rule">
              <span className="orange-rule-text">What We Do</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14">
              <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-4xl text-[#1C1C1E] max-w-lg leading-tight">
                Everything Your Business Needs to Grow Online
              </h2>
              <Link href="/services" className="flex items-center gap-2 text-[#E85D04] font-semibold text-sm hover:gap-3 transition-all duration-200 flex-shrink-0">
                View all services <ChevronRight size={16} />
              </Link>
            </div>
          </AnimSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimSection key={service.title} delay={i * 60}>
                  <div className="bg-white rounded-xl p-6 border border-[#E8E5DE] card-lift h-full">
                    <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                      <Icon size={22} />
                    </div>
                    <h3 className="font-['Syne'] font-bold text-lg text-[#1C1C1E] mb-2">{service.title}</h3>
                    <p className="text-[#52525B] text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </AnimSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ WHY ZINARA ═══ */}
      <section className="bg-[#F0EDE6] py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimSection>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src={SERVICES_IMG} alt="Zinara Digital marketing team reviewing analytics" className="w-full h-auto object-cover" loading="lazy" />
              </div>
            </AnimSection>
            <AnimSection delay={150}>
              <div className="orange-rule">
                <span className="orange-rule-text">Why Choose Zinara</span>
              </div>
              <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-4xl text-[#1C1C1E] mb-6 leading-tight">
                We Know the Kenyan Market. We Speak Your Customers' Language.
              </h2>
              <p className="text-[#52525B] leading-relaxed mb-8">
                Most digital agencies use the same playbook regardless of where you are. We don't. We understand how Kenyan buyers think, what platforms they use, and what messaging makes them pick up the phone or send a WhatsApp.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { title: "Local market expertise", desc: "Strategies built for Kenyan buyers, not copy-pasted from abroad." },
                  { title: "Transparent reporting", desc: "Monthly reports in plain language — no jargon, no hiding behind vanity metrics." },
                  { title: "One point of contact", desc: "You deal with one person who knows your business, not a rotating team." },
                  { title: "Results-first mindset", desc: "We measure success by leads, sales, and growth — not likes and impressions." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#E85D04] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#1C1C1E]">{item.title}:</span>{" "}
                      <span className="text-[#52525B] text-sm">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-zinara-outline">Learn More About Us <ArrowRight size={18} /></Link>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="bg-[#FAFAF7] py-16 lg:py-20">
        <div className="container">
          <AnimSection>
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#E85D04]" />
                <span className="text-xs font-['Syne'] font-bold uppercase tracking-widest text-[#E85D04]">Industries</span>
                <div className="w-8 h-0.5 bg-[#E85D04]" />
              </div>
              <h2 className="font-['Syne'] font-extrabold text-2xl lg:text-3xl text-[#1C1C1E]">We Work With Businesses Like Yours</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry) => (
                <div key={industry} className="bg-white border border-[#E8E5DE] rounded-full px-5 py-2.5 text-sm font-medium text-[#1C1C1E] hover:border-[#E85D04] hover:text-[#E85D04] transition-colors duration-200 cursor-default">
                  {industry}
                </div>
              ))}
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="bg-[#1a2744] py-20 lg:py-28">
        <div className="container">
          <AnimSection>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#E85D04]" />
                <span className="text-xs font-['Syne'] font-bold uppercase tracking-widest text-[#E85D04]">Client Results</span>
                <div className="w-8 h-0.5 bg-[#E85D04]" />
              </div>
              <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-4xl text-white">What Our Clients Say</h2>
            </div>
          </AnimSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimSection key={t.name} delay={i * 80}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 card-lift h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-[#E85D04] fill-[#E85D04]" />)}
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center font-['Syne'] font-bold text-sm flex-shrink-0`}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{t.name}</p>
                      <p className="text-white/50 text-xs">{t.role}, {t.company}</p>
                    </div>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TEAM ═══ */}
      <section className="bg-[#FAFAF7] py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimSection>
              <div className="orange-rule">
                <span className="orange-rule-text">The Team</span>
              </div>
              <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-4xl text-[#1C1C1E] mb-6 leading-tight">
                A Small Team With a Big Focus on Your Growth
              </h2>
              <p className="text-[#52525B] leading-relaxed mb-6">
                We're a lean, focused team of digital marketers based in Nairobi. We don't take on hundreds of clients — we take on the right clients and give them the attention they deserve.
              </p>
              <p className="text-[#52525B] leading-relaxed mb-8">
                When you work with Zinara Digital, you're not handed off to a junior account manager. You work directly with the people doing the work.
              </p>
              <div className="flex flex-wrap gap-6">
                {[{ Icon: Users, label: "Dedicated account manager" }, { Icon: Globe, label: "Serving all of Kenya" }].map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-sm text-[#1C1C1E]">
                    <Icon size={18} className="text-[#E85D04]" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </AnimSection>
            <AnimSection delay={150}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src={TEAM_IMG} alt="Zinara Digital team collaborating in Nairobi" className="w-full h-auto object-cover" loading="lazy" />
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="bg-[#E85D04] py-20 lg:py-24">
        <div className="container">
          <AnimSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-4xl text-white mb-4 leading-tight">
                Ready to Get More Customers Online?
              </h2>
              <p className="text-white/85 text-lg mb-8 leading-relaxed">
                Start with a free 30-minute consultation. No commitment, no sales pitch — just an honest conversation about what's possible for your business.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://wa.me/254700000000?text=Hi%20Zinara%20Digital%2C%20I%27d%20like%20a%20free%20consultation%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-[#E85D04] font-['Syne'] font-bold px-7 py-3.5 rounded-md hover:bg-[#FFF3E8] transition-all duration-200 hover:shadow-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us Now
                </a>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-['Syne'] font-bold px-7 py-3.5 rounded-md hover:bg-white hover:text-[#E85D04] transition-all duration-200">
                  Send Us a Message <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </AnimSection>
        </div>
      </section>
    </main>
  );
}
