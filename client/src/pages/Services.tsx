/*
 * ZINARA DIGITAL — Services Page
 * Design: Afro-Modern Minimalism
 * CRO: Detailed service descriptions, clear benefits, pricing anchoring, strong CTAs
 * SEO: Keyword-rich headings, structured content, internal links
 */

import { Link } from "wouter";
import { ArrowRight, CheckCircle2, MessageSquare, Search, Megaphone, Monitor, Mail, BarChart3, ChevronRight } from "lucide-react";
import { AnimSection } from "@/components/AnimSection";

const SERVICES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663676126722/WVeyyfJ6ez2bwdSUVsRBGX/zinara-services-aypY4zyjAhDkkS9QpFjiYa.webp";

const services = [
  {
    id: "social-media", icon: MessageSquare, number: "01",
    title: "Social Media Management",
    tagline: "Build your brand. Grow your audience. Generate enquiries.",
    desc: "We manage your Facebook, Instagram, and TikTok presence end-to-end — from strategy and content creation to scheduling, community management, and reporting. Every post is crafted to speak directly to your target customers in Kenya.",
    benefits: ["Content calendar planned 4 weeks ahead", "Professionally designed posts and graphics", "Community management and comment responses", "Monthly performance reports", "Hashtag strategy for organic reach"],
    ideal: "Real estate agencies, clinics, schools, retail shops, restaurants",
    color: "bg-blue-50", iconColor: "bg-blue-100 text-blue-600", accent: "#3B82F6",
  },
  {
    id: "seo", icon: Search, number: "02",
    title: "Search Engine Optimisation (SEO)",
    tagline: "Get found on Google when customers search for you.",
    desc: "We optimise your website so it ranks on Google for the keywords your customers are actually searching. From technical SEO and on-page optimisation to local SEO and content strategy — we build sustainable organic traffic that doesn't disappear when you stop paying for ads.",
    benefits: ["Keyword research focused on Kenyan search intent", "On-page SEO optimisation", "Google Business Profile setup and management", "Local SEO for Nairobi and your area", "Monthly ranking and traffic reports"],
    ideal: "Any business that wants to be found on Google — especially local service businesses",
    color: "bg-green-50", iconColor: "bg-green-100 text-green-600", accent: "#22C55E",
  },
  {
    id: "paid-ads", icon: Megaphone, number: "03",
    title: "Paid Advertising (Meta & Google Ads)",
    tagline: "Targeted ads that bring in leads and sales, not just clicks.",
    desc: "We create and manage Facebook, Instagram, and Google Ads campaigns designed to generate real business results. Every campaign is built around your specific goal — whether that's property enquiries, clinic bookings, or online sales.",
    benefits: ["Campaign strategy and audience targeting", "Ad creative design and copywriting", "A/B testing to improve performance", "Weekly optimisation and budget management", "Clear ROI reporting"],
    ideal: "Businesses with a marketing budget ready to scale lead generation quickly",
    color: "bg-orange-50", iconColor: "bg-orange-100 text-orange-600", accent: "#E85D04",
  },
  {
    id: "website", icon: Monitor, number: "04",
    title: "Website Design & Development",
    tagline: "A professional website that works hard for your business.",
    desc: "We design and build fast, mobile-first websites that look credible and are built to convert visitors into customers. Every site includes SEO foundations, contact forms, WhatsApp integration, and Google Analytics — ready to launch and start working from day one.",
    benefits: ["Mobile-first, responsive design", "Fast loading speed (Core Web Vitals optimised)", "Built-in SEO foundations", "WhatsApp and contact form integration", "Google Analytics setup", "Hosting and domain guidance"],
    ideal: "Businesses without a website, or with an outdated site that doesn't generate enquiries",
    color: "bg-purple-50", iconColor: "bg-purple-100 text-purple-600", accent: "#A855F7",
  },
  {
    id: "email-whatsapp", icon: Mail, number: "05",
    title: "Email & WhatsApp Marketing",
    tagline: "Stay top-of-mind with your existing customers.",
    desc: "Your existing customers are your most valuable asset. We help you stay connected through targeted email newsletters and WhatsApp broadcast campaigns — keeping your brand front-of-mind and driving repeat business.",
    benefits: ["Email newsletter design and copywriting", "WhatsApp broadcast campaign management", "List segmentation and targeting", "Automated follow-up sequences", "Open rate and click tracking"],
    ideal: "Businesses with an existing customer base looking to increase repeat sales",
    color: "bg-pink-50", iconColor: "bg-pink-100 text-pink-600", accent: "#EC4899",
  },
  {
    id: "analytics", icon: BarChart3, number: "06",
    title: "Analytics & Reporting",
    tagline: "Know exactly what's working and what to do next.",
    desc: "We set up proper tracking across all your digital channels and deliver clear monthly reports that show you the numbers that actually matter — leads, conversions, and revenue — not just vanity metrics like likes and impressions.",
    benefits: ["Google Analytics 4 setup and configuration", "Conversion tracking (calls, forms, WhatsApp)", "Monthly performance dashboard", "Competitor benchmarking", "Actionable recommendations each month"],
    ideal: "Businesses already running digital marketing who want to understand their ROI",
    color: "bg-teal-50", iconColor: "bg-teal-100 text-teal-600", accent: "#14B8A6",
  },
];

const packages = [
  {
    name: "Starter", price: "KSh 15,000", period: "/month",
    desc: "Perfect for small businesses just getting started online.",
    features: ["Social media management (2 platforms)", "12 posts per month", "Basic graphic design", "Monthly report", "WhatsApp support"],
    cta: "Get Started", highlight: false,
  },
  {
    name: "Growth", price: "KSh 35,000", period: "/month",
    desc: "For businesses ready to scale their online presence and leads.",
    features: ["Social media management (3 platforms)", "20 posts per month", "Professional graphic design", "Google Business Profile management", "Basic SEO optimisation", "Monthly performance report", "Dedicated account manager"],
    cta: "Most Popular", highlight: true,
  },
  {
    name: "Pro", price: "KSh 65,000", period: "/month",
    desc: "Full-service digital marketing for ambitious businesses.",
    features: ["Everything in Growth", "Paid ads management (Meta or Google)", "Advanced SEO strategy", "Email/WhatsApp marketing", "Weekly reporting", "Strategy call every month", "Priority support"],
    cta: "Let's Talk", highlight: false,
  },
];

export default function Services() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#FAFAF7] pt-8 pb-16 lg:pt-12 lg:pb-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimSection>
              <div className="orange-rule">
                <span className="orange-rule-text">Our Services</span>
              </div>
              <h1 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl text-[#1C1C1E] mb-5 leading-tight">
                Digital Marketing Services for Kenyan Businesses
              </h1>
              <p className="text-lg text-[#52525B] leading-relaxed mb-8">
                From social media and SEO to paid ads and website design — we offer everything a growing Kenyan business needs to get more customers online.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/254700000000?text=Hi%20Zinara%20Digital%2C%20I%27d%20like%20to%20discuss%20your%20services." target="_blank" rel="noopener noreferrer" className="btn-zinara">
                  Get a Free Quote <ArrowRight size={18} />
                </a>
                <a href="#packages" className="btn-zinara-outline">View Packages</a>
              </div>
            </AnimSection>
            <AnimSection delay={150}>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={SERVICES_IMG} alt="Digital marketing analytics dashboard" className="w-full h-auto object-cover" />
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <AnimSection>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#E85D04]" />
                <span className="text-xs font-['Syne'] font-bold uppercase tracking-widest text-[#E85D04]">What We Offer</span>
                <div className="w-8 h-0.5 bg-[#E85D04]" />
              </div>
              <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-4xl text-[#1C1C1E]">Every Service, Explained</h2>
            </div>
          </AnimSection>

          <div className="space-y-12">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isEven = i % 2 === 0;
              return (
                <AnimSection key={service.id} delay={60}>
                  <div id={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start bg-[#FAFAF7] rounded-2xl p-8 lg:p-10 border border-[#E8E5DE]">
                    <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-lg ${service.iconColor} flex items-center justify-center`}>
                          <Icon size={20} />
                        </div>
                        <span className="font-['Syne'] font-bold text-xs uppercase tracking-widest" style={{ color: service.accent }}>{service.number}</span>
                      </div>
                      <h3 className="font-['Syne'] font-extrabold text-2xl text-[#1C1C1E] mb-2">{service.title}</h3>
                      <p className="text-[#E85D04] font-semibold text-sm mb-4">{service.tagline}</p>
                      <p className="text-[#52525B] leading-relaxed mb-6">{service.desc}</p>
                      <a href={`https://wa.me/254700000000?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20${encodeURIComponent(service.title)}%20service.`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#E85D04] font-semibold text-sm hover:gap-3 transition-all duration-200">
                        Enquire about this service <ChevronRight size={16} />
                      </a>
                    </div>
                    <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                      <div className="bg-white rounded-xl p-6 border border-[#E8E5DE]">
                        <h4 className="font-['Syne'] font-bold text-sm uppercase tracking-widest text-[#52525B] mb-4">What's Included</h4>
                        <ul className="space-y-3 mb-6">
                          {service.benefits.map((b) => (
                            <li key={b} className="flex items-start gap-3 text-sm text-[#1C1C1E]">
                              <CheckCircle2 size={16} className="text-[#E85D04] flex-shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="pt-4 border-t border-[#E8E5DE]">
                          <p className="text-xs text-[#52525B]"><span className="font-semibold text-[#1C1C1E]">Best for:</span> {service.ideal}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="packages" className="bg-[#F0EDE6] py-20 lg:py-28">
        <div className="container">
          <AnimSection>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#E85D04]" />
                <span className="text-xs font-['Syne'] font-bold uppercase tracking-widest text-[#E85D04]">Pricing</span>
                <div className="w-8 h-0.5 bg-[#E85D04]" />
              </div>
              <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-4xl text-[#1C1C1E] mb-4">Simple, Transparent Pricing</h2>
              <p className="text-[#52525B] max-w-xl mx-auto">No hidden fees, no surprise invoices. Choose a package that fits your budget, or contact us for a custom quote.</p>
            </div>
          </AnimSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <AnimSection key={pkg.name} delay={i * 80}>
                <div className={`rounded-2xl p-7 card-lift h-full flex flex-col ${pkg.highlight ? "bg-[#1a2744] text-white border-2 border-[#E85D04] relative" : "bg-white border border-[#E8E5DE]"}`}>
                  {pkg.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E85D04] text-white text-xs font-['Syne'] font-bold px-4 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
                  )}
                  <h3 className={`font-['Syne'] font-bold text-xl mb-1 ${pkg.highlight ? "text-white" : "text-[#1C1C1E]"}`}>{pkg.name}</h3>
                  <p className={`text-sm mb-4 ${pkg.highlight ? "text-white/70" : "text-[#52525B]"}`}>{pkg.desc}</p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className={`font-['Syne'] font-extrabold text-3xl ${pkg.highlight ? "text-[#E85D04]" : "text-[#1C1C1E]"}`}>{pkg.price}</span>
                    <span className={`text-sm ${pkg.highlight ? "text-white/60" : "text-[#52525B]"}`}>{pkg.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-[#E85D04]" />
                        <span className={pkg.highlight ? "text-white/85" : "text-[#1C1C1E]"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={`https://wa.me/254700000000?text=Hi%20Zinara%20Digital%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20package.`} target="_blank" rel="noopener noreferrer" className={`w-full text-center block py-3 rounded-md font-['Syne'] font-bold text-sm transition-all duration-200 ${pkg.highlight ? "bg-[#E85D04] text-white hover:bg-[#c94e00]" : "border-2 border-[#E85D04] text-[#E85D04] hover:bg-[#E85D04] hover:text-white"}`}>
                    {pkg.highlight ? "Get Started" : pkg.cta}
                  </a>
                </div>
              </AnimSection>
            ))}
          </div>
          <AnimSection>
            <p className="text-center text-sm text-[#52525B] mt-8">
              Need something custom?{" "}
              <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" className="text-[#E85D04] font-semibold hover:underline">Let's talk about your specific needs.</a>
            </p>
          </AnimSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a2744] py-20 lg:py-24">
        <div className="container">
          <AnimSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-4xl text-white mb-4">Not Sure Where to Start?</h2>
              <p className="text-white/75 text-lg mb-8">Book a free 30-minute consultation. We'll look at your business, understand your goals, and tell you honestly what will work best for you.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://wa.me/254700000000?text=Hi%20Zinara%20Digital%2C%20I%27d%20like%20a%20free%20consultation." target="_blank" rel="noopener noreferrer" className="btn-zinara">
                  Book Free Consultation <ArrowRight size={18} />
                </a>
                <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-white text-white font-['Syne'] font-bold px-7 py-3.5 rounded-md hover:bg-white hover:text-[#1a2744] transition-all duration-200">
                  Send a Message
                </Link>
              </div>
            </div>
          </AnimSection>
        </div>
      </section>
    </main>
  );
}
