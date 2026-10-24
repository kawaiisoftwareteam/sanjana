"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Sparkles,
  Briefcase,
  GraduationCap,
  FileCheck2,
  Phone,
  Mail,
  Send,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

interface ModalsProps {
  sswModalOpen: boolean;
  onCloseSSWModal: () => void;
  selectedCategory?: string;

  companyModalOpen: boolean;
  onCloseCompanyModal: () => void;

  itModalOpen: boolean;
  onCloseITModal: () => void;
}

export default function Modals({
  sswModalOpen,
  onCloseSSWModal,
  selectedCategory = "SSW Caregiver",
  companyModalOpen,
  onCloseCompanyModal,
  itModalOpen,
  onCloseITModal,
}: ModalsProps) {
  // SSW Form State
  const [category, setCategory] = useState(selectedCategory);
  const [sswSubmitted, setSswSubmitted] = useState(false);
  const [sswData, setSswData] = useState({
    fullName: "",
    phone: "",
    email: "",
    age: "",
    japaneseLevel: "None (Interested in Training)",
    passportStatus: "Valid Passport Ready",
    education: "HSC / Equivalent",
    experience: "",
  });

  // IT Form State
  const [itSubmitted, setItSubmitted] = useState(false);
  const [itData, setItData] = useState({
    fullName: "",
    email: "",
    phone: "",
    techStack: "Full Stack (React / Node / Python)",
    japaneseLevel: "Beginner / None",
    githubOrPortfolio: "",
  });

  useEffect(() => {
    if (selectedCategory) {
      setCategory(selectedCategory);
    }
  }, [selectedCategory]);

  // Lock background scroll when any modal is open
  useEffect(() => {
    if (sswModalOpen || companyModalOpen || itModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [sswModalOpen, companyModalOpen, itModalOpen]);

  const handleSSWSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSswSubmitted(true);
  };

  const handleITSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setItSubmitted(true);
  };

  return (
    <>
      {/* 1. SSW REGISTRATION MODAL */}
      {sswModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#0B3D91]/35 backdrop-blur-sm transition-opacity"
            onClick={onCloseSSWModal}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E3EAF6] overflow-hidden z-10 my-8 animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-6 bg-gradient-to-r from-[#F4F8FF] to-white border-b border-[#E3EAF6] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF8A1F] text-white flex items-center justify-center font-bold shadow-md shadow-[#FF8A1F]/20">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F1B33]">
                    Japan SSW Program Registration
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-[#75839C]">
                    <span className="text-[#0B3D91] font-semibold">
                      Sanjana International • License RL-711
                    </span>
                    <span>• Ministry Approved</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={onCloseSSWModal}
                className="p-2 rounded-xl text-[#75839C] hover:bg-slate-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
              {sswSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#12A36B] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#0F1B33]">
                    Registration Submitted Successfully!
                  </h4>
                  <p className="text-sm text-[#4A5878] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#0F1B33]">{sswData.fullName || "Candidate"}</strong>. Your application for <strong className="text-[#0B3D91]">{category}</strong> has been logged into the Sanjana International overseas deployment registry.
                  </p>

                  <div className="p-4 bg-[#F4F8FF] rounded-2xl border border-[#E3EAF6] text-xs text-left text-[#4A5878] space-y-1.5 max-w-md mx-auto">
                    <div className="font-bold text-[#0B3D91]">Next Steps:</div>
                    <div>1. Our recruitment counselor will call you within 24-48 hours.</div>
                    <div>2. Bring original educational certificates and passport to our Fakirapool office.</div>
                    <div>3. Schedule your free Japanese language assessment and trade test briefing.</div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSswSubmitted(false);
                        onCloseSSWModal();
                      }}
                      className="px-8 py-3 rounded-full bg-[#0B3D91] text-white font-bold text-sm hover:bg-[#1A54D6] transition-colors"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSSWSubmit} className="space-y-4">
                  <div className="p-3 bg-[#EBF2FF] rounded-xl text-xs text-[#0B3D91] flex items-center gap-2 border border-blue-200">
                    <ShieldCheck className="w-4 h-4 text-[#0B3D91] shrink-0" />
                    <span>
                      Zero Middlemen: This official registration connects you directly with our licensed Dhaka team under RL-711.
                    </span>
                  </div>

                  {/* Target Category */}
                  <div>
                    <label className="block text-xs font-bold text-[#0F1B33] mb-1">
                      Target Overseas Category *
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E3EAF6] text-sm text-[#0F1B33] bg-white focus:ring-2 focus:ring-[#0B3D91]"
                    >
                      <option value="SSW Caregiver">Japan SSW - Caregiver / Nursing Care</option>
                      <option value="SSW Agriculture">Japan SSW - Agriculture & Greenhouse</option>
                      <option value="SSW Food Manufacturing">Japan SSW - Food & Beverage Processing</option>
                      <option value="SSW Construction">Japan SSW - Construction & Civil Engineering</option>
                      <option value="IT Talent Placement">Japan IT Talent Placement (Bilingual SE)</option>
                      <option value="Japanese Language Training">Japanese Language Course (JLPT N5-N3)</option>
                      <option value="General SSW">Other Specified Skilled Worker Trade</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0F1B33] mb-1">
                        Full Name (as per Passport) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Md. Ashraful Islam"
                        value={sswData.fullName}
                        onChange={(e) =>
                          setSswData({ ...sswData, fullName: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E3EAF6] text-sm text-[#0F1B33] focus:ring-2 focus:ring-[#0B3D91]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0F1B33] mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+880 17XX XXXXXX"
                        value={sswData.phone}
                        onChange={(e) =>
                          setSswData({ ...sswData, phone: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E3EAF6] text-sm text-[#0F1B33] focus:ring-2 focus:ring-[#0B3D91]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0F1B33] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@gmail.com"
                        value={sswData.email}
                        onChange={(e) =>
                          setSswData({ ...sswData, email: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E3EAF6] text-sm text-[#0F1B33] focus:ring-2 focus:ring-[#0B3D91]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0F1B33] mb-1">
                        Age (Years) *
                      </label>
                      <input
                        type="number"
                        required
                        placeholder="e.g. 24"
                        min={18}
                        max={45}
                        value={sswData.age}
                        onChange={(e) =>
                          setSswData({ ...sswData, age: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E3EAF6] text-sm text-[#0F1B33] focus:ring-2 focus:ring-[#0B3D91]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0F1B33] mb-1">
                        Passport Status
                      </label>
                      <select
                        value={sswData.passportStatus}
                        onChange={(e) =>
                          setSswData({ ...sswData, passportStatus: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E3EAF6] text-sm text-[#0F1B33] bg-white focus:ring-2 focus:ring-[#0B3D91]"
                      >
                        <option value="Valid Passport Ready">Valid Passport Ready</option>
                        <option value="Application in Process">Application in Process</option>
                        <option value="No Passport Yet">No Passport Yet</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0F1B33] mb-1">
                        Japanese Language Skill Level
                      </label>
                      <select
                        value={sswData.japaneseLevel}
                        onChange={(e) =>
                          setSswData({ ...sswData, japaneseLevel: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E3EAF6] text-sm text-[#0F1B33] bg-white focus:ring-2 focus:ring-[#0B3D91]"
                      >
                        <option value="None (Interested in Training)">None (Want to Learn)</option>
                        <option value="JLPT N5 Passed / JFT-Basic">JLPT N5 Passed / JFT-Basic</option>
                        <option value="JLPT N4 Passed">JLPT N4 Passed</option>
                        <option value="JLPT N3 or Higher">JLPT N3 or Higher</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0F1B33] mb-1">
                        Highest Educational Qualification
                      </label>
                      <select
                        value={sswData.education}
                        onChange={(e) =>
                          setSswData({ ...sswData, education: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E3EAF6] text-sm text-[#0F1B33] bg-white focus:ring-2 focus:ring-[#0B3D91]"
                      >
                        <option value="SSC / Dakhil">SSC / 10th Standard</option>
                        <option value="HSC / Equivalent">HSC / 12th Standard</option>
                        <option value="Diploma in Engineering">Diploma in Engineering</option>
                        <option value="Bachelor's Degree">Bachelor&apos;s Degree / Honours</option>
                        <option value="Master's Degree">Master&apos;s Degree</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F1B33] mb-1">
                      Relevant Experience or Skill Details
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Mention any nursing, farming, construction or relevant vocational experience..."
                      value={sswData.experience}
                      onChange={(e) =>
                        setSswData({ ...sswData, experience: e.target.value })
                      }
                      className="w-full px-4 py-2 rounded-xl border border-[#E3EAF6] text-sm text-[#0F1B33] focus:ring-2 focus:ring-[#0B3D91]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#FF8A1F] hover:bg-[#E67610] text-white font-bold text-base shadow-lg shadow-[#FF8A1F]/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                      id="modal-submit-ssw"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Official SSW Application</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 2. COMPANY OVERVIEW MODAL */}
      {companyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-[#0B3D91]/35 backdrop-blur-sm transition-opacity"
            onClick={onCloseCompanyModal}
          />

          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#E3EAF6] overflow-hidden z-10 my-8 animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-[#F4F8FF] to-white border-b border-[#E3EAF6] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0B3D91] text-white flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F1B33]">
                    Sanjana International — Company Profile
                  </h3>
                  <div className="text-xs text-[#12A36B] font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Recruiting License: RL-711 • Govt. Authorized</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={onCloseCompanyModal}
                className="p-2 rounded-xl text-[#75839C] hover:bg-slate-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6 text-sm text-[#4A5878] leading-relaxed">
              <div>
                <h4 className="text-base font-bold text-[#0F1B33] mb-2">
                  Official Licensing & Regulatory Authority
                </h4>
                <p>
                  Sanjana International is an approved overseas recruitment and human resources consultancy operating under Recruiting License No. <strong className="text-[#0B3D91]">RL-711</strong>, duly sanctioned by the Ministry of Labor and Employment and the Bureau of Manpower, Employment and Training (BMET), Government of Bangladesh.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#F4F8FF] rounded-2xl border border-[#E3EAF6]">
                <div>
                  <div className="text-xs font-bold text-[#75839C] uppercase">
                    Agency Name
                  </div>
                  <div className="font-bold text-[#0F1B33]">
                    Sanjana International
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-[#75839C] uppercase">
                    Government License
                  </div>
                  <div className="font-bold text-[#12A36B]">
                    RL-711 (Active & In Good Standing)
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-[#75839C] uppercase">
                    Primary Office
                  </div>
                  <div className="font-semibold text-[#0F1B33]">
                    Shatabdi Center, 6-G, Fakirapool, Dhaka
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-[#75839C] uppercase">
                    Key Sending Corridors
                  </div>
                  <div className="font-semibold text-[#0F1B33]">
                    Japan (SSW & IT), Middle East & Beyond
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-base font-bold text-[#0F1B33] mb-2">
                  Our Mission & Ethical Code
                </h4>
                <p>
                  For over 15 years, Sanjana International has stood as a bastion of ethical, transparent recruitment. We strictly prohibit unauthorized intermediaries and unofficial fees. Every candidate undergoes formal trade testing, certified medical evaluation, and complete Japanese linguistic preparation before departure.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-[#0F1B33] mb-2">
                  Full Repatriation Commitment
                </h4>
                <p>
                  We shoulder full legal, administrative, and repatriation responsibility for all candidates placed abroad in conformity with the Emigration Ordinance of Bangladesh and the Labor Standards Act of receiving nations.
                </p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={onCloseCompanyModal}
                  className="px-6 py-2.5 rounded-full bg-[#0B3D91] text-white text-xs font-bold hover:bg-[#1A54D6]"
                >
                  Close Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. IT TALENT PLACEMENT MODAL */}
      {itModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-[#0B3D91]/35 backdrop-blur-sm transition-opacity"
            onClick={onCloseITModal}
          />

          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E3EAF6] overflow-hidden z-10 my-8 animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-[#F4F8FF] to-white border-b border-[#E3EAF6] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2F6BFF] text-white flex items-center justify-center font-bold">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F1B33]">
                    Job Placement of IT Talents
                  </h3>
                  <div className="text-xs text-[#0B3D91] font-semibold">
                    Tokyo Tech Corridors • Engineering Visa Sponsorship
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={onCloseITModal}
                className="p-2 rounded-xl text-[#75839C] hover:bg-slate-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
              {itSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#12A36B] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#0F1B33]">
                    IT Profile Submitted!
                  </h4>
                  <p className="text-sm text-[#4A5878] max-w-md mx-auto">
                    Our technical recruitment lead will review your profile and contact you for a technical assessment and Japanese language orientation.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setItSubmitted(false);
                      onCloseITModal();
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#0B3D91] text-white font-bold text-xs"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleITSubmit} className="space-y-4">
                  <div className="p-3 bg-[#F4F8FF] rounded-xl text-xs text-[#0F1B33] space-y-1 border border-[#E3EAF6]">
                    <div className="font-bold text-[#0B3D91]">
                      Direct Japanese Enterprise Tech Hiring:
                    </div>
                    <div>
                      • Visa: Engineer / Specialist in Humanities / International Services
                    </div>
                    <div>
                      • Salary: Competitive Japanese market packages with health & pension coverage
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F1B33] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. S. M. Farhan"
                      value={itData.fullName}
                      onChange={(e) =>
                        setItData({ ...itData, fullName: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E3EAF6] text-sm text-[#0F1B33] focus:ring-2 focus:ring-[#0B3D91]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0F1B33] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="farhan@example.com"
                        value={itData.email}
                        onChange={(e) =>
                          setItData({ ...itData, email: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E3EAF6] text-sm text-[#0F1B33] focus:ring-2 focus:ring-[#0B3D91]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0F1B33] mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+880 1XXXXXXXXX"
                        value={itData.phone}
                        onChange={(e) =>
                          setItData({ ...itData, phone: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E3EAF6] text-sm text-[#0F1B33] focus:ring-2 focus:ring-[#0B3D91]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0F1B33] mb-1">
                        Primary Tech Domain
                      </label>
                      <select
                        value={itData.techStack}
                        onChange={(e) =>
                          setItData({ ...itData, techStack: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E3EAF6] text-sm text-[#0F1B33] bg-white focus:ring-2 focus:ring-[#0B3D91]"
                      >
                        <option value="Full Stack (React / Node / Python)">Full Stack (React / Node / Python)</option>
                        <option value="Backend (Java / Go / Microservices)">Backend (Java / Go / Microservices)</option>
                        <option value="Mobile (Flutter / iOS / Android)">Mobile (Flutter / iOS / Android)</option>
                        <option value="Cloud & DevOps (AWS / Docker / K8s)">Cloud & DevOps (AWS / Docker / K8s)</option>
                        <option value="Bilingual Bridge SE (BrSE)">Bilingual Bridge SE (BrSE)</option>
                        <option value="QA & Test Automation">QA & Test Automation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0F1B33] mb-1">
                        Japanese Proficiency
                      </label>
                      <select
                        value={itData.japaneseLevel}
                        onChange={(e) =>
                          setItData({ ...itData, japaneseLevel: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E3EAF6] text-sm text-[#0F1B33] bg-white focus:ring-2 focus:ring-[#0B3D91]"
                      >
                        <option value="Beginner / None">None / Beginner (Willing to Learn)</option>
                        <option value="JLPT N5 / Basic Conversational">JLPT N5 / Basic Conversational</option>
                        <option value="JLPT N4">JLPT N4</option>
                        <option value="JLPT N3 / Business Basic">JLPT N3 / Business Basic</option>
                        <option value="JLPT N2 or N1 (Fluent)">JLPT N2 or N1 (Fluent)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F1B33] mb-1">
                      GitHub / LinkedIn / Portfolio URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/... or github.com/..."
                      value={itData.githubOrPortfolio}
                      onChange={(e) =>
                        setItData({
                          ...itData,
                          githubOrPortfolio: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E3EAF6] text-sm text-[#0F1B33] focus:ring-2 focus:ring-[#0B3D91]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#0B3D91] hover:bg-[#1A54D6] text-white font-bold text-base shadow-md shadow-[#0B3D91]/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                      id="modal-submit-it"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Profile for Japan IT Hiring</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
