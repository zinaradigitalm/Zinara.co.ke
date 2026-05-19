/*
 * ZINARA DIGITAL — About Page
 * Design: Afro-Modern Minimalism
 * CRO: Build trust through story, values, and team humanisation
 * SEO: Brand story, local market expertise, E-E-A-T signals
 */

import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Target, Heart, Lightbulb, Shield } from "lucide-react";
import { AnimSection } from "@/components/AnimSection";

const TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663676126722/WVeyyfJ6ez2bwdSUVsRBGX/zinara-team-9rVtwZaHo6mXPm7eVnvbnL.webp";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663676126722/WVeyyfJ6ez2bwdSUVsRBGX/zinara-hero-JLfvmZV4ZYAxdZefeRKPFv.webp";

const values = [
  { icon: Target, title: "Results First", desc: "We measure everything by outcomes — leads, sales, and growth. Vanity metrics don't pay your bills.", color: "bg-orange-50 text-orange-600" },
  { icon: Heart, title: "Honest Communication", desc: "We tell you what's working and what isn't. No spin, no hiding behind jargon.", color: "bg-red-50 text-red-600" },
  { icon: Lightbulb, title: "Local Expertise", desc: "We understand the Kenyan market, Kenyan buyers, and what actually works here.", color: "bg-yellow-50 text-yellow-600" },
  { icon: Shield, title: "Long-Term Thinking", desc: "We build sustainable digital presence, not quick-fix campaigns that collapse when you stop spending.", color: "bg-blue-50 text-blue-600" },
];

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#1a2744] pt-8 pb-16 lg:pt-12 lg:pb-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimSection>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-[#E85D04]" />
                <span className="text-xs font-['Syne'] font-bold uppercase tracking-widest text-[#E85D04]">About Zinara Digital</span>
              </div>
              <h1 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl text-white mb-5 leading-tight">
                A Digital Marketing Agency Built for Kenya
              </h1>
              <p className="text-white/75 text-lg leading-relaxed mb-8">
                We're not a generic agency applying the same playbook everywhere. We understand the Kenyan market, the Kenyan buyer, and what it takes to grow a business here.
              </p>
              <a href="https://wa.me/254700000000?text=Hi%20Zinara%20Digital%2C%20I%27d%20like%20to%20learn%20more%20about%20working%20with%20you." target="_blank" rel="noopener noreferrer" className="btn-zinara">
                Work With Us <ArrowRight size={18} />
              </a>
            </AnimSection>
            <AnimSection delay={150}>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={TEAM_IMG} alt="Zinara Digital team in Nairobi" className="w-full h-auto object-cover" />
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#E85D04] py-12">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Businesses Helped" },
              { value: "5 yrs", label: "In the Market" },
              { value: "3×", label: "Avg Lead Increase" },
              { value: "100%", label: "Transparency" },
            ].map((stat, i) => (
              <AnimSection key={stat.label} delay={i * 60}>
                <div className={i < 3 ? "lg:border-r lg:border-white/30" : ""}>
                  <p className="font-['Syne'] font-extrabold text-3xl text-white mb-1">{stat.value}</p>
                  <p className="text-white/75 text-sm uppercase tracking-wide">{stat.label}</p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-[#FAFAF7] py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimSection>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={HERO_IMG} alt="Zinara Digital founder" className="w-full h-auto object-cover" />
              </div>
            </AnimSection>
            <AnimSection delay={150}>
              <div className="orange-rule">
                <span className="orange-rule-text">Our Story</span>
              </div>
              <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-4xl text-[#1C1C1E] mb-6 leading-tight">
                We Started Because We Saw a Gap
              </h2>
              <p className="text-[#52525B] leading-relaxed mb-5">
                Too many Kenyan businesses were spending money on digital marketing and getting nothing back. Not because digital marketing doesn't work — but because the agencies they hired didn't understand the local market, didn't communicate clearly, and didn't focus on what actually matters: results.
              </p>
              <p className="text-[#52525B] leading-relaxed mb-5">
                Zinara Digital was built to be different. We focus on a small number of clients so we can give each one the attention they deserve. We speak plainly. We report honestly. And we measure everything by the thing that matters most: your business growth.
              </p>
              <p className="text-[#52525B] leading-relaxed mb-8">
                Whether you're a real estate agency in Ruiru, a clinic in Westlands, or a shop in the CBD — we understand your customers and we know how to reach them.
              </p>
              <div className="space-y-3">
                {["Based in Nairobi, serving businesses across Kenya", "Specialists in the Kenyan digital landscape", "Focused on SMBs and growing businesses"].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#E85D04] flex-shrink-0" />
                    <span className="text-[#1C1C1E] text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F0EDE6] py-20 lg:py-28">
        <div className="container">
          <AnimSection>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#E85D04]" />
                <span className="text-xs font-['Syne'] font-bold uppercase tracking-widest text-[#E85D04]">How We Work</span>
                <div className="w-8 h-0.5 bg-[#E85D04]" />
              </div>
              <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-4xl text-[#1C1C1E]">Our Values</h2>
            </div>
          </AnimSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <AnimSection key={value.title} delay={i * 70}>
                  <div className="bg-white rounded-xl p-6 border border-[#E8E5DE] card-lift h-full">
                    <div className={`w-12 h-12 rounded-lg ${value.color} flex items-center justify-center mb-4`}>
                      <Icon size={22} />
                    </div>
                    <h3 className="font-['Syne'] font-bold text-lg text-[#1C1C1E] mb-2">{value.title}</h3>
                    <p className="text-[#52525B] text-sm leading-relaxed">{value.desc}</p>
                  </div>
                </AnimSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <AnimSection>
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-8 h-0.5 bg-[#E85D04]" />
                  <span className="text-xs font-['Syne'] font-bold uppercase tracking-widest text-[#E85D04]">Working With Us</span>
                  <div className="w-8 h-0.5 bg-[#E85D04]" />
                </div>
                <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-4xl text-[#1C1C1E]">What to Expect When You Work With Zinara</h2>
              </div>
            </AnimSection>
            <div className="space-y-6">
              {[
                { step: "01", title: "Free Consultation", desc: "We start with a free 30-minute call to understand your business, your goals, and your current situation. No commitment required." },
                { step: "02", title: "Custom Strategy", desc: "Based on the consultation, we put together a clear plan showing exactly what we'll do, what results to expect, and what it costs." },
                { step: "03", title: "We Get to Work", desc: "Once you're happy with the plan, we start immediately. You'll have a dedicated point of contact and clear timelines." },
                { step: "04", title: "Regular Reporting", desc: "Every month, you receive a clear report showing what we've done, what results it's generated, and what we're doing next." },
                { step: "05", title: "Continuous Improvement", desc: "We review performance every month and adjust the strategy based on what's working. Your growth is an ongoing process, not a one-time project." },
              ].map((item, i) => (
                <AnimSection key={item.step} delay={i * 60}>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-[#FFF3E8] flex items-center justify-center flex-shrink-0">
                      <span className="font-['Syne'] font-extrabold text-sm text-[#E85D04]">{item.step}</span>
                    </div>
                    <div className="pt-2">
                      <h3 className="font-['Syne'] font-bold text-lg text-[#1C1C1E] mb-1">{item.title}</h3>
                      <p className="text-[#52525B] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </AnimSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E85D04] py-20 lg:py-24">
        <div className="container">
          <AnimSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-4xl text-white mb-4">Let's Grow Your Business Together</h2>
              <p className="text-white/85 text-lg mb-8">Start with a free consultation. No commitment, no hard sell — just an honest conversation about your business.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://wa.me/254700000000?text=Hi%20Zinara%20Digital%2C%20I%27d%20like%20to%20discuss%20working%20together." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-[#E85D04] font-['Syne'] font-bold px-7 py-3.5 rounded-md hover:bg-[#FFF3E8] transition-all duration-200">
                  WhatsApp Us Now <ArrowRight size={18} />
                </a>
                <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-white text-white font-['Syne'] font-bold px-7 py-3.5 rounded-md hover:bg-white hover:text-[#E85D04] transition-all duration-200">
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
