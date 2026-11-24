import type { Metadata } from "next";
import Link from "next/link";
import SubPageShell from "@/components/SubPageShell";

export const metadata: Metadata = {
  title: "Specified Skilled Worker (SSW) Japan | Sanjana International",
  description:
    "Japan Specified Skilled Worker (SSW) recruitment from Bangladesh. SSW (i) and SSW (ii) across 16+ designated industrial sectors with Japanese language and skills test preparation under Recruiting Licence (RL-711).",
};

const sswSectors = [
  { name: "Nursing Care (Kaigo)", icon: "🏥", desc: "Assisting elderly residents with physical care, mobility, and communication in Japanese elder-care institutions." },
  { name: "Building Cleaning Management", icon: "🧹", desc: "Commercial office, hospital, and public facility sanitation and maintenance." },
  { name: "Construction", icon: "🏗️", desc: "Formwork, rebar assembly, scaffolding, civil earthworks, plastering, and heavy machinery operations." },
  { name: "Industrial Product Manufacturing", icon: "⚙️", desc: "Machining, metal pressing, casting, welding, electrical equipment assembly, and quality testing." },
  { name: "Shipbuilding & Ship Machinery", icon: "🚢", desc: "Welding, painting, ironworking, machining, and marine equipment assembly at major shipyards." },
  { name: "Automobile Repair & Maintenance", icon: "🚗", desc: "Vehicle inspection, mechanical disassembly, maintenance, and electronic diagnostics." },
  { name: "Aviation", icon: "✈️", desc: "Airport ground handling, baggage sorting, aircraft cabin cleaning, and apron operations." },
  { name: "Accommodation", icon: "🏨", desc: "Front desk customer service, planning, concierge, and hotel management." },
  { name: "Agriculture", icon: "🌾", desc: "Crop cultivation, greenhouse vegetable and fruit production, livestock management, and sorting." },
  { name: "Food & Beverage Manufacturing", icon: "🍱", desc: "Processing food and beverage products, packaging, and hygiene control in certified factories." },
  { name: "Food Service", icon: "🍜", desc: "Kitchen food preparation, customer hospitality, dining room service, and restaurant sanitation." },
  { name: "Automobile Transportation", icon: "🚚", desc: "Commercial truck driving, taxi and bus driving under designated licensing requirements." },
  { name: "Railway", icon: "🚆", desc: "Track maintenance, electrical facility maintenance, vehicle maintenance, and station operations." },
  { name: "Fisheries & Aquaculture", icon: "🐟", desc: "Coastal and offshore fishing operations, aquaculture farming, processing, and gear maintenance." },
  { name: "Forestry", icon: "🌲", desc: "Silviculture, tree planting, thinning, felling, and timber harvesting operations." },
  { name: "Wood Industry", icon: "🪵", desc: "Lumber processing, plywood manufacturing, wood material grading, and engineered timber production." },
];

const supportSteps = [
  { title: "Initial Registration", desc: "Register your educational qualifications, passport status, and intended industrial field." },
  { title: "Eligibility Screening", desc: "Evaluating your practical background, document veracity, and aptitude for Japan employment." },
  { title: "Skills Test Preparation", desc: "Guidance and curriculum resources for the Prometric / industry trade skills examination." },
  { title: "Language Training", desc: "Classroom instruction preparing candidates for JLPT N4 or JFT-Basic A2 certification." },
  { title: "Employer Interview", desc: "Interview scheduling and coaching with prospective Japanese hiring companies." },
  { title: "Employment Contract", desc: "Clear review and execution of standard Japanese employment contracts matching local wages." },
  { title: "Immigration & COE", desc: "Preparation and submission of documentation for the Certificate of Eligibility (COE)." },
  { title: "Pre-Departure Briefing", desc: "Comprehensive orientation on workplace culture, living conditions, and destination rules." },
];

export default function SSWPage() {
  return (
    <SubPageShell active="/japan">
      {/* Hero */}
      <section className="relative w-full bg-[#0c2230] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <img
          src="/images/ssw-hero.jpg"
          alt="Japan SSW Recruitment"
          className="absolute inset-0 size-full object-cover opacity-25 pointer-events-none"
        />
        <div className="relative max-w-[1520px] mx-auto flex flex-col items-center text-center">
          <span className="bg-[#c1262e] text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-4">
            Specified Skilled Worker (特定技能) · Recruiting Licence (RL-711)
          </span>
          <h1 className="font-bold text-[32px] sm:text-[46px] lg:text-[56px] leading-tight max-w-[1050px]">
            Japan Specified Skilled Worker (SSW) Recruitment from Bangladesh
          </h1>
          <p className="mt-5 text-white/80 text-base sm:text-xl max-w-[850px] leading-relaxed">
            Your legitimate pathway to skilled employment opportunities across 16+ designated industrial sectors in Japan. Combining trade skill evaluations with accepted Japanese language certifications.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link
              href="/candidates"
              className="bg-[#c1262e] hover:bg-[#a61e25] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-colors text-base"
            >
              Register for SSW Recruitment
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-colors text-base"
            >
              Speak with Our Recruitment Team
            </Link>
          </div>
        </div>
      </section>

      {/* Program Categories (SSW 1 & SSW 2) */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-[1520px] mx-auto flex flex-col gap-12">
          <div className="text-center max-w-[850px] mx-auto">
            <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-[#fff5f5] px-3.5 py-1 rounded-full">
              Framework Structure
            </span>
            <h2 className="font-bold text-[#171b1c] text-[30px] sm:text-[42px] leading-tight mt-2">
              Understanding the Two SSW Categories
            </h2>
            <p className="text-[#686868] text-base sm:text-lg mt-2">
              The Specified Skilled Worker status of residence was established by the Japanese government to accept foreign personnel with practical occupational capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* SSW No. 1 */}
            <div className="bg-[#f8f9fa] border-2 border-black/5 rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#c1262e] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Entry &amp; Intermediate Skilled
                  </span>
                  <span className="font-bold text-lg text-[#c1262e]">Up to 5 Years Stay</span>
                </div>
                <h3 className="font-bold text-[#171b1c] text-2xl sm:text-3xl mb-3">
                  SSW (i) – Specified Skilled Worker No. 1
                </h3>
                <p className="text-[#686868] text-[15.5px] leading-relaxed mb-6">
                  Designed for foreign workers who possess the required occupational skills and everyday Japanese language ability.
                </p>

                <h4 className="font-bold text-sm uppercase text-[#171b1c] tracking-wider mb-3">
                  Key Requirements:
                </h4>
                <ul className="space-y-3 text-sm text-[#444]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#c1262e] font-bold text-base">✓</span>
                    <span><strong>Skills Exam:</strong> Pass the designated industrial skills evaluation examination (Prometric).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#c1262e] font-bold text-base">✓</span>
                    <span><strong>Japanese Language:</strong> Pass JFT-Basic A2 or JLPT N4 or higher (or Nursing Care Japanese test for Kaigo).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#c1262e] font-bold text-base">✓</span>
                    <span><strong>Employment Contract:</strong> Full-time contract directly with a Japanese enterprise matching standard Japanese wages.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#c1262e] font-bold text-base">✓</span>
                    <span><strong>Stay Period:</strong> Valid for up to 5 years total period of stay in Japan.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* SSW No. 2 */}
            <div className="bg-[#f8f9fa] border-2 border-[#0c2230]/20 rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#0c2230] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Advanced Skilled Tier
                  </span>
                  <span className="font-bold text-lg text-[#0c2230]">Renewable / Family Allowed</span>
                </div>
                <h3 className="font-bold text-[#171b1c] text-2xl sm:text-3xl mb-3">
                  SSW (ii) – Specified Skilled Worker No. 2
                </h3>
                <p className="text-[#686868] text-[15.5px] leading-relaxed mb-6">
                  Designed for workers who have acquired advanced occupational skills, supervisory abilities, and substantial field experience.
                </p>

                <h4 className="font-bold text-sm uppercase text-[#171b1c] tracking-wider mb-3">
                  Key Benefits &amp; Criteria:
                </h4>
                <ul className="space-y-3 text-sm text-[#444]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#0c2230] font-bold text-base">✓</span>
                    <span><strong>Advanced Exam:</strong> Pass the SSW (ii) examination verifying higher technical and supervisory proficiency.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#0c2230] font-bold text-base">✓</span>
                    <span><strong>Renewable Stay:</strong> No 5-year cap; permits indefinite renewal as long as employment criteria are met.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#0c2230] font-bold text-base">✓</span>
                    <span><strong>Family Accompaniment:</strong> Spouses and children are eligible for dependent visas to live together in Japan.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#0c2230] font-bold text-base">✓</span>
                    <span><strong>Permanent Residency Pathway:</strong> Eligible to apply for Japanese permanent residency after continuous stay.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 16 Designated Industrial Fields */}
      <section className="w-full bg-[#f8f9fa] py-16 sm:py-24 px-4 sm:px-6 lg:px-12 border-y border-black/5">
        <div className="max-w-[1520px] mx-auto flex flex-col gap-12">
          <div className="text-center max-w-[850px] mx-auto">
            <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-white px-3.5 py-1 rounded-full border border-[#c1262e]/20">
              Designated Sectors
            </span>
            <h2 className="font-bold text-[#171b1c] text-[30px] sm:text-[42px] leading-tight mt-2">
              SSW Employment Fields
            </h2>
            <p className="text-[#686868] text-base sm:text-lg mt-2">
              Japan has expanded the SSW framework across 16 designated industrial fields to resolve workforce shortages with qualified global talent.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sswSectors.map((sector, idx) => (
              <div
                key={idx}
                className="bg-white border border-black/5 rounded-2xl p-6 shadow-xs hover:border-[#c1262e]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl mb-3">{sector.icon}</div>
                  <h3 className="font-bold text-[#171b1c] text-lg mb-2">{sector.name}</h3>
                  <p className="text-[#686868] text-xs leading-relaxed">{sector.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#888] text-center max-w-[800px] mx-auto italic">
            * Actual eligibility, testing schedules, and recruitment openings depend on the latest Japanese government immigration notices and specific employer requests.
          </p>
        </div>
      </section>

      {/* How Sanjana International Supports SSW Recruitment */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-[1520px] mx-auto flex flex-col gap-12">
          <div className="text-center max-w-[850px] mx-auto">
            <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-[#fff5f5] px-3.5 py-1 rounded-full">
              Full Support
            </span>
            <h2 className="font-bold text-[#171b1c] text-[30px] sm:text-[42px] leading-tight mt-2">
              How Sanjana International Supports SSW Recruitment
            </h2>
            <p className="text-[#686868] text-base sm:text-lg mt-2">
              From the initial registration through to departure and arrival in Japan, we provide structured, dependable guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#fffdfd] border border-black/10 rounded-2xl p-6 flex flex-col gap-2 hover:border-[#c1262e]/40 transition-colors"
              >
                <span className="font-extrabold text-xl text-[#c1262e]">Step {idx + 1}</span>
                <h3 className="font-bold text-[#171b1c] text-lg">{step.title}</h3>
                <p className="text-[#686868] text-xs sm:text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Legal Information & Disclaimers */}
      <section className="w-full bg-[#fff5f5] py-14 px-4 sm:px-6 lg:px-12 border-y border-[#c1262e]/20">
        <div className="max-w-[1000px] mx-auto flex flex-col gap-4 text-center items-center">
          <span className="text-[#c1262e] font-bold text-xs uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-[#c1262e]/30">
            Important Information for Applicants
          </span>
          <h3 className="font-bold text-[#171b1c] text-2xl sm:text-3xl">
            Ethical Transparency &amp; Immigration Disclaimers
          </h3>
          <p className="text-[#555] text-base leading-relaxed">
            Passing a language examination or industry skills examination does not automatically guarantee employment or a Japanese visa. Applicants must satisfy all legal criteria, secure an authorized employment contract, and undergo strict background checks. Final visa issuance decisions are made exclusively by the competent Japanese immigration authorities.
          </p>
          <p className="text-xs text-[#777] italic">
            Sanjana International operates strictly under Bangladesh Government Recruiting Licence (RL-711). We do not charge unauthorized recruitment fees or make false visa guarantees.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-[#c1262e] text-white py-14 px-4 sm:px-6 lg:px-12 text-center">
        <div className="max-w-[850px] mx-auto flex flex-col items-center gap-5">
          <h2 className="font-bold text-[28px] sm:text-[38px] leading-tight">
            Start Your Japan SSW Career Journey
          </h2>
          <p className="text-white/90 text-base leading-relaxed">
            Contact Sanjana International to learn about suitable employment openings, eligibility requirements, Prometric exam schedules, and language training courses.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <Link
              href="/candidates"
              className="bg-white text-[#c1262e] font-bold px-7 py-3 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              Register for SSW Recruitment
            </Link>
            <Link
              href="/contact"
              className="bg-[#0c2230] text-white font-bold px-7 py-3 rounded-xl hover:bg-[#151719] transition-colors shadow-lg"
            >
              Speak with Our Recruiters
            </Link>
          </div>
        </div>
      </section>
    </SubPageShell>
  );
}
