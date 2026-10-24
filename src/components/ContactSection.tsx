"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building2,
  CheckCircle2,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

export default function ContactSection() {
  const [inquiryType, setInquiryType] = useState<"candidate" | "employer">("candidate");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "Japan SSW Program",
    companyName: "",
    workersNeeded: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Details & Office Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2FF] text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                <span>Head Office & Recruitment Hub</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1B33] tracking-tight">
                Get in Touch with Our Team
              </h2>
              <p className="text-base text-[#4A5878] leading-relaxed">
                Whether you are a job seeker seeking verified overseas migration or an international employer looking to recruit skilled talent from Bangladesh, our bilingual consultants are here to support you.
              </p>
            </div>

            {/* Address & Contact Cards */}
            <div className="space-y-4">
              {/* Address Card */}
              <div className="p-5 rounded-2xl bg-[#F4F8FF] border border-[#E3EAF6] flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white text-[#0B3D91] border border-[#E3EAF6] shadow-xs shrink-0">
                  <MapPin className="w-5 h-5 text-[#0B3D91]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#FF8A1F] uppercase tracking-wider mb-1">
                    Dhaka Headquarters
                  </div>
                  <div className="text-sm font-bold text-[#0F1B33]">
                    Shatabdi Center, 292, Inner Circular Road
                  </div>
                  <div className="text-xs text-[#4A5878] mt-0.5">
                    Suite 6-G (6th Floor), Fakirapool, Dhaka-1000, Bangladesh
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-[#F4F8FF] border border-[#E3EAF6] flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white text-[#2F6BFF] border border-[#E3EAF6] shadow-xs shrink-0">
                  <Phone className="w-5 h-5 text-[#2F6BFF]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0B3D91] uppercase tracking-wider mb-1">
                    Direct Telephone Lines
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-sm font-bold text-[#0F1B33]">
                    <a
                      href="tel:+88028410182"
                      className="hover:text-[#0B3D91] transition-colors"
                    >
                      +880 2 8410182
                    </a>
                    <span className="text-[#C4D5F0]">/</span>
                    <a
                      href="tel:+88028410183"
                      className="hover:text-[#0B3D91] transition-colors"
                    >
                      +880 2 8410183
                    </a>
                  </div>
                  <div className="text-xs text-[#75839C] mt-0.5">
                    Sunday – Thursday: 9:00 AM – 6:00 PM (BST)
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-[#F4F8FF] border border-[#E3EAF6] flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white text-[#12A36B] border border-[#E3EAF6] shadow-xs shrink-0">
                  <Mail className="w-5 h-5 text-[#12A36B]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#12A36B] uppercase tracking-wider mb-1">
                    Official Email
                  </div>
                  <a
                    href="mailto:info@sanjanahr.com"
                    className="text-sm font-bold text-[#0F1B33] hover:text-[#0B3D91] transition-colors block"
                  >
                    info@sanjanahr.com
                  </a>
                  <div className="text-xs text-[#75839C] mt-0.5">
                    Response time within 24 business hours
                  </div>
                </div>
              </div>
            </div>

            {/* Official Seal Note */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#12A36B] shrink-0" />
              <div className="text-xs text-[#0F1B33]">
                <strong className="text-[#12A36B]">Government License RL-711:</strong>{" "}
                Always verify agent credentials before making any migration decisions. Sanjana International has no sub-agencies.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-[#F4F8FF] rounded-3xl p-7 sm:p-10 border border-[#E3EAF6] shadow-lg shadow-[#0B3D91]/5">
            {/* Tabs for Candidate vs Employer */}
            <div className="flex items-center gap-2 mb-6 p-1 bg-white rounded-2xl border border-[#E3EAF6]">
              <button
                type="button"
                onClick={() => {
                  setInquiryType("candidate");
                  setSubmitted(false);
                }}
                className={`flex-1 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  inquiryType === "candidate"
                    ? "bg-[#0B3D91] text-white shadow-sm"
                    : "text-[#4A5878] hover:text-[#0B3D91]"
                }`}
              >
                For Job Seekers
              </button>
              <button
                type="button"
                onClick={() => {
                  setInquiryType("employer");
                  setSubmitted(false);
                }}
                className={`flex-1 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  inquiryType === "employer"
                    ? "bg-[#0B3D91] text-white shadow-sm"
                    : "text-[#4A5878] hover:text-[#0B3D91]"
                }`}
              >
                For Foreign Employers
              </button>
            </div>

            {submitted ? (
              <div className="p-8 bg-white rounded-2xl border border-emerald-200 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#12A36B] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-[#12A36B]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F1B33]">
                  Thank You for Your Inquiry
                </h3>
                <p className="text-sm text-[#4A5878] max-w-md mx-auto">
                  We have received your details. A senior consultant from our Dhaka recruitment office will review your request and get in touch within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-[#0B3D91] text-white text-xs font-bold hover:bg-[#1A54D6]"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0F1B33] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Md. Tanvir Hasan"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E3EAF6] focus:outline-none focus:ring-2 focus:ring-[#0B3D91] text-sm text-[#0F1B33]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F1B33] mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+880 17XX XXXXXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E3EAF6] focus:outline-none focus:ring-2 focus:ring-[#0B3D91] text-sm text-[#0F1B33]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0F1B33] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E3EAF6] focus:outline-none focus:ring-2 focus:ring-[#0B3D91] text-sm text-[#0F1B33]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F1B33] mb-1.5">
                      {inquiryType === "candidate"
                        ? "Target Program"
                        : "Target Recruitment Industry"}
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E3EAF6] focus:outline-none focus:ring-2 focus:ring-[#0B3D91] text-sm text-[#0F1B33]"
                    >
                      <option value="Japan SSW Program">Japan SSW Program</option>
                      <option value="IT Talent Placement">IT Talent Placement</option>
                      <option value="Caregiver & Healthcare">Caregiver & Healthcare</option>
                      <option value="Agriculture & Farming">Agriculture & Farming</option>
                      <option value="Construction & Engineering">Construction & Engineering</option>
                      <option value="Food Manufacturing">Food Manufacturing</option>
                      <option value="Japanese Language Training">Japanese Language Training</option>
                    </select>
                  </div>
                </div>

                {inquiryType === "employer" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0F1B33] mb-1.5">
                        Company Name & Country *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tokyo Logistics K.K. (Japan)"
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({ ...formData, companyName: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E3EAF6] focus:outline-none focus:ring-2 focus:ring-[#0B3D91] text-sm text-[#0F1B33]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0F1B33] mb-1.5">
                        Workers Required
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 10 - 20 candidates"
                        value={formData.workersNeeded}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            workersNeeded: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E3EAF6] focus:outline-none focus:ring-2 focus:ring-[#0B3D91] text-sm text-[#0F1B33]"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-[#0F1B33] mb-1.5">
                    Your Message / Specific Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide any additional details or educational/experience background..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E3EAF6] focus:outline-none focus:ring-2 focus:ring-[#0B3D91] text-sm text-[#0F1B33]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#0B3D91] hover:bg-[#1A54D6] text-white font-bold text-base shadow-md shadow-[#0B3D91]/20 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  id="btn-submit-contact"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to Sanjana International</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
