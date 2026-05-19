/*
 * ZINARA DIGITAL — Contact Page
 * Design: Afro-Modern Minimalism
 * CRO: Multiple contact channels (form + WhatsApp + phone + email), low friction
 * SEO: Local business signals, contact schema
 * NOTE: Replace FORMSPREE_ENDPOINT with actual Formspree form ID at formspree.io
 */

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { AnimSection } from "@/components/AnimSection";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", business: "", service: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormState("success");
        setFormData({ name: "", email: "", phone: "", business: "", service: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#FAFAF7] pt-8 pb-16 lg:pt-12 lg:pb-20">
        <div className="container">
          <AnimSection>
            <div className="max-w-2xl">
              <div className="orange-rule">
                <span className="orange-rule-text">Contact Us</span>
              </div>
              <h1 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl text-[#1C1C1E] mb-5 leading-tight">
                Let's Talk About Growing Your Business
              </h1>
              <p className="text-lg text-[#52525B] leading-relaxed">
                Fill in the form below, send us a WhatsApp, or give us a call. We respond to all enquiries within 24 hours.
              </p>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

            {/* Left: Contact Info */}
            <AnimSection className="lg:col-span-1">
              <div className="space-y-8">
                {/* WhatsApp CTA */}
                <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-['Syne'] font-bold text-[#1C1C1E]">Fastest Response</p>
                      <p className="text-xs text-[#52525B]">Usually reply within 1 hour</p>
                    </div>
                  </div>
                  <a href="https://wa.me/254700000000?text=Hi%20Zinara%20Digital%2C%20I%27d%20like%20to%20discuss%20digital%20marketing%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-[#25D366] hover:bg-[#1da851] text-white font-['Syne'] font-bold py-3 rounded-md transition-colors duration-200">
                    WhatsApp: +254 700 000 000
                  </a>
                </div>

                {/* Contact Details */}
                <div className="space-y-5">
                  <h3 className="font-['Syne'] font-bold text-lg text-[#1C1C1E]">Other Ways to Reach Us</h3>
                  <a href="tel:+254700000000" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-[#FFF3E8] flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-[#E85D04]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#52525B] uppercase tracking-wide mb-0.5">Phone</p>
                      <p className="font-semibold text-[#1C1C1E] group-hover:text-[#E85D04] transition-colors">+254 700 000 000</p>
                    </div>
                  </a>
                  <a href="mailto:hello@zinara.co.ke" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-[#FFF3E8] flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-[#E85D04]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#52525B] uppercase tracking-wide mb-0.5">Email</p>
                      <p className="font-semibold text-[#1C1C1E] group-hover:text-[#E85D04] transition-colors">hello@zinara.co.ke</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#FFF3E8] flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-[#E85D04]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#52525B] uppercase tracking-wide mb-0.5">Location</p>
                      <p className="font-semibold text-[#1C1C1E]">Nairobi, Kenya</p>
                      <p className="text-sm text-[#52525B]">Serving businesses across Kenya</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#FFF3E8] flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-[#E85D04]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#52525B] uppercase tracking-wide mb-0.5">Business Hours</p>
                      <p className="font-semibold text-[#1C1C1E]">Mon – Fri: 8am – 6pm</p>
                      <p className="text-sm text-[#52525B]">Sat: 9am – 1pm</p>
                    </div>
                  </div>
                </div>

                {/* Trust signals */}
                <div className="bg-[#FAFAF7] rounded-xl p-5 border border-[#E8E5DE]">
                  <h4 className="font-['Syne'] font-bold text-sm text-[#1C1C1E] mb-3">What Happens Next?</h4>
                  <div className="space-y-2.5">
                    {["We respond within 24 hours", "Free 30-minute consultation", "No commitment required", "Clear proposal within 48 hours"].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-[#52525B]">
                        <CheckCircle2 size={14} className="text-[#E85D04] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimSection>

            {/* Right: Contact Form */}
            <AnimSection className="lg:col-span-2" delay={150}>
              <div className="bg-[#FAFAF7] rounded-2xl p-8 lg:p-10 border border-[#E8E5DE]">
                <h2 className="font-['Syne'] font-extrabold text-2xl text-[#1C1C1E] mb-2">Send Us a Message</h2>
                <p className="text-[#52525B] text-sm mb-8">
                  Tell us about your business and what you're looking to achieve. We'll get back to you within 24 hours.
                </p>

                {formState === "success" ? (
                  <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-8 text-center">
                    <CheckCircle2 size={48} className="text-[#22C55E] mx-auto mb-4" />
                    <h3 className="font-['Syne'] font-bold text-xl text-[#1C1C1E] mb-2">Message Sent!</h3>
                    <p className="text-[#52525B]">Thank you for reaching out. We'll get back to you within 24 hours. For a faster response, WhatsApp us directly.</p>
                    <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 bg-[#25D366] text-white font-semibold px-5 py-2.5 rounded-md hover:bg-[#1da851] transition-colors">
                      WhatsApp Us
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-[#1C1C1E] mb-1.5">Your Name *</label>
                        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="John Kamau" className="zinara-input" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-[#1C1C1E] mb-1.5">Phone / WhatsApp *</label>
                        <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+254 700 000 000" className="zinara-input" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-[#1C1C1E] mb-1.5">Email Address *</label>
                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@yourbusiness.co.ke" className="zinara-input" />
                      </div>
                      <div>
                        <label htmlFor="business" className="block text-sm font-semibold text-[#1C1C1E] mb-1.5">Business Name</label>
                        <input type="text" id="business" name="business" value={formData.business} onChange={handleChange} placeholder="Your Business Name" className="zinara-input" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-[#1C1C1E] mb-1.5">What Service Are You Interested In?</label>
                      <select id="service" name="service" value={formData.service} onChange={handleChange} className="zinara-input">
                        <option value="">Select a service...</option>
                        <option value="social-media">Social Media Management</option>
                        <option value="seo">Search Engine Optimisation (SEO)</option>
                        <option value="paid-ads">Paid Advertising (Meta / Google Ads)</option>
                        <option value="website">Website Design & Development</option>
                        <option value="email-whatsapp">Email & WhatsApp Marketing</option>
                        <option value="full-package">Full Digital Marketing Package</option>
                        <option value="not-sure">Not Sure — Need Advice</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-[#1C1C1E] mb-1.5">Tell Us About Your Business *</label>
                      <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} placeholder="What does your business do? What are you trying to achieve with digital marketing? Any current challenges?" className="zinara-input resize-none" />
                    </div>
                    {formState === "error" && (
                      <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
                        <AlertCircle size={16} className="flex-shrink-0" />
                        <span>Something went wrong. Please try again or WhatsApp us directly.</span>
                      </div>
                    )}
                    <button type="submit" disabled={formState === "submitting"} className="btn-zinara w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed">
                      {formState === "submitting" ? (
                        <><svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Sending...</>
                      ) : "Send Message"}
                    </button>
                    <p className="text-xs text-[#52525B] text-center">
                      Or for a faster response,{" "}
                      <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-semibold hover:underline">WhatsApp us directly</a>
                    </p>
                  </form>
                )}
              </div>
            </AnimSection>
          </div>
        </div>
      </section>
    </main>
  );
}
