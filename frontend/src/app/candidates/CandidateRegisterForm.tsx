"use client";

import React, { useState } from "react";

export default function CandidateRegisterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    district: "",
    education: "Vocational / Diploma",
    targetProgram: "Specified Skilled Worker (SSW)",
    tradeSkill: "Manufacturing & Machining",
    japaneseLevel: "Beginner / Starting now",
    passportStatus: "Valid Passport Ready",
    experienceYears: "1-3 Years",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#fffdfd] border-2 border-[#c1262e]/30 rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center gap-4 shadow-xl">
        <div className="size-16 rounded-full bg-[#fff5f5] text-[#c1262e] flex items-center justify-center text-3xl font-bold">
          ✓
        </div>
        <h3 className="font-bold text-2xl text-[#171b1c]">
          Registration Received!
        </h3>
        <p className="text-[#686868] text-base max-w-[600px] leading-relaxed">
          Thank you, <strong>{formData.fullName}</strong>. Your profile has been entered into the Sanjana International talent registry. Our career advisors in Dhaka will contact you via Phone/WhatsApp ({formData.phone}) regarding upcoming skills assessments and training batches.
        </p>
        <div className="bg-[#f8f9fa] border border-black/5 rounded-2xl p-4 text-xs text-[#666] max-w-[500px] text-left mt-2">
          <p className="font-bold text-[#171b1c] mb-1">Important Reminder:</p>
          <p>Sanjana International conducts all recruitment under Government Recruiting Licence (RL-711). We do not use third-party brokers. Please keep your personal documents safe and never pay unauthorized fees to middlemen.</p>
        </div>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 bg-[#c1262e] hover:bg-[#a61e25] text-white font-semibold text-sm px-6 py-2.5 rounded-xl transition-colors"
        >
          Register Another Candidate
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-black/10 rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col gap-6"
    >
      <div className="border-b border-black/5 pb-4">
        <h3 className="font-bold text-[#171b1c] text-2xl">Candidate Career Registration</h3>
        <p className="text-sm text-[#737783] mt-1">
          Submit your personal and professional qualifications to match with upcoming Japanese and global vacancies.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#171b1c] mb-1.5">
            Full Name (As in Passport) *
          </label>
          <input
            required
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Md. Tanvir Ahmed"
            className="w-full h-12 px-4 rounded-xl border border-black/15 focus:border-[#c1262e] focus:outline-none text-sm transition-colors"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#171b1c] mb-1.5">
            Phone / WhatsApp Number *
          </label>
          <input
            required
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +880 1700-000000"
            className="w-full h-12 px-4 rounded-xl border border-black/15 focus:border-[#c1262e] focus:outline-none text-sm transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#171b1c] mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. candidate@example.com"
            className="w-full h-12 px-4 rounded-xl border border-black/15 focus:border-[#c1262e] focus:outline-none text-sm transition-colors"
          />
        </div>

        {/* District / Division */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#171b1c] mb-1.5">
            District / Division *
          </label>
          <input
            required
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            placeholder="e.g. Dhaka, Cumilla, Chattogram"
            className="w-full h-12 px-4 rounded-xl border border-black/15 focus:border-[#c1262e] focus:outline-none text-sm transition-colors"
          />
        </div>

        {/* Education Level */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#171b1c] mb-1.5">
            Highest Educational Qualification *
          </label>
          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="w-full h-12 px-4 rounded-xl border border-black/15 focus:border-[#c1262e] focus:outline-none text-sm transition-colors bg-white"
          >
            <option>SSC / Dakhil</option>
            <option>HSC / Alim</option>
            <option>Vocational / Diploma in Engineering</option>
            <option>Bachelor’s Degree (B.Sc / BA / BBA)</option>
            <option>B.Sc in Computer Science / Engineering</option>
            <option>Master’s Degree</option>
          </select>
        </div>

        {/* Preferred Japan Program */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#171b1c] mb-1.5">
            Preferred Program *
          </label>
          <select
            name="targetProgram"
            value={formData.targetProgram}
            onChange={handleChange}
            className="w-full h-12 px-4 rounded-xl border border-black/15 focus:border-[#c1262e] focus:outline-none text-sm transition-colors bg-white"
          >
            <option>Specified Skilled Worker (SSW No. 1)</option>
            <option>Technical Intern Training (TITP / ESD)</option>
            <option>IT &amp; Engineering High-Skilled Visa</option>
            <option>General International Manpower</option>
          </select>
        </div>

        {/* Primary Trade / Skill */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#171b1c] mb-1.5">
            Primary Trade / Skill Field *
          </label>
          <select
            name="tradeSkill"
            value={formData.tradeSkill}
            onChange={handleChange}
            className="w-full h-12 px-4 rounded-xl border border-black/15 focus:border-[#c1262e] focus:outline-none text-sm transition-colors bg-white"
          >
            <option>Manufacturing &amp; Machining (Lathe/CNC/Assembly)</option>
            <option>Welding &amp; Metal Fabrication</option>
            <option>Construction (Formwork, Scaffolding, Rebar)</option>
            <option>Nursing Care (Kaigo)</option>
            <option>Agriculture &amp; Greenhouse Farming</option>
            <option>Hospitality &amp; Food Service</option>
            <option>Food &amp; Beverage Processing</option>
            <option>Automobile Repair &amp; Maintenance</option>
            <option>Software Engineering / IT</option>
            <option>Civil / Mechanical / Electrical Engineering</option>
          </select>
        </div>

        {/* Japanese Language Level */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#171b1c] mb-1.5">
            Japanese Language Level *
          </label>
          <select
            name="japaneseLevel"
            value={formData.japaneseLevel}
            onChange={handleChange}
            className="w-full h-12 px-4 rounded-xl border border-black/15 focus:border-[#c1262e] focus:outline-none text-sm transition-colors bg-white"
          >
            <option>Beginner / Willing to learn</option>
            <option>Currently studying N5</option>
            <option>Passed JLPT N5 / JFT A1</option>
            <option>Passed JLPT N4 / JFT-Basic A2</option>
            <option>Passed JLPT N3</option>
            <option>Passed JLPT N2 or higher</option>
          </select>
        </div>

        {/* Passport Status */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#171b1c] mb-1.5">
            Passport Status *
          </label>
          <select
            name="passportStatus"
            value={formData.passportStatus}
            onChange={handleChange}
            className="w-full h-12 px-4 rounded-xl border border-black/15 focus:border-[#c1262e] focus:outline-none text-sm transition-colors bg-white"
          >
            <option>Valid Passport Ready</option>
            <option>Passport Applied / In Process</option>
            <option>No Passport Yet</option>
          </select>
        </div>

        {/* Experience Years */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#171b1c] mb-1.5">
            Years of Relevant Work Experience
          </label>
          <select
            name="experienceYears"
            value={formData.experienceYears}
            onChange={handleChange}
            className="w-full h-12 px-4 rounded-xl border border-black/15 focus:border-[#c1262e] focus:outline-none text-sm transition-colors bg-white"
          >
            <option>Fresh Graduate / Entry Level</option>
            <option>1-3 Years</option>
            <option>3-5 Years</option>
            <option>5+ Years</option>
          </select>
        </div>
      </div>

      {/* Experience Details */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#171b1c] mb-1.5">
          Work Experience &amp; Technical Skills Summary
        </label>
        <textarea
          rows={3}
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Describe your technical skills, equipment you can operate, or any trade testing certificates..."
          className="w-full p-4 rounded-xl border border-black/15 focus:border-[#c1262e] focus:outline-none text-sm transition-colors"
        />
      </div>

      <div className="bg-[#f8f9fa] border border-black/5 p-4 rounded-xl text-xs text-[#737783] leading-relaxed">
        <strong>Privacy &amp; Regulatory Statement:</strong> Sanjana International operates under Bangladesh Recruiting Licence (RL-711). Candidate registration expresses interest in suitable vacancies; registration does not guarantee immediate selection or visa issuance. Your information is protected and used solely for recruitment matching.
      </div>

      <button
        type="submit"
        className="w-full h-14 bg-[#c1262e] hover:bg-[#a61e25] text-white font-bold text-base rounded-xl transition-colors shadow-lg cursor-pointer"
      >
        Submit Candidate Registration
      </button>
    </form>
  );
}
