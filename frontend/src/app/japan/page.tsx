import type { Metadata } from "next";
import Link from "next/link";
import SubPageShell from "@/components/SubPageShell";

export const metadata: Metadata = {
  title: "Japan Recruitment | Sanjana International - Bangladesh to Japan Workforce",
  description:
    "Connecting skilled Bangladeshi workers with Japanese employers. Specified Skilled Worker (SSW), Technical Intern Training (TITP), and IT & engineering specialists under Recruiting Licence (RL-711) and OTIT BGD000036.",
};

const strengths = [
  {
    title: "Technically Trained Young Talent",
    desc: "Bangladesh offers a demographic dividend with thousands of graduates from polytechnic institutes, vocational training centres, and engineering universities.",
    icon: "🎓",
  },
  {
    title: "Industrial & Manufacturing Experience",
    desc: "Candidates bring hands-on experience in precision assembly, machine maintenance, structural fabrication, and quality control.",
    icon: "🏭",
  },
  {
    title: "Growing IT & Digital Skills",
    desc: "A rapidly expanding community of software developers, AI/data engineers, CAD drafters, and BIM modelers eager to support Japan’s digital transformation.",
    icon: "💻",
  },
  {
    title: "High Motivation & Work Ethic",
    desc: "Candidates are deeply committed to long-term career growth, demonstrating exceptional punctuality, discipline, and respect for Japanese workplace culture.",
    icon: "⭐",
  },
  {
    title: "Intensive Language & Etiquette Prep",
    desc: "Candidates undergo rigorous Japanese language study (JLPT N4/N3, JFT A2) alongside 5S methodology and Hou-Ren-So communication training before departure.",
    icon: "🇯🇵",
  },
  {
    title: "Legitimate Bilateral Pathway",
    desc: "Operating strictly under Recruiting Licence (RL-711) and OTIT sending-organization registration BGD000036, ensuring full regulatory and consular compliance.",
    icon: "📜",
  },
];

const programs = [
  {
    title: "Specified Skilled Worker (SSW)",
    badge: "SSW (i) & SSW (ii)",
    summary:
      "Employment pathway for foreign nationals with occupational skills and Japanese language ability across 16+ designated industrial sectors.",
    href: "/japan/ssw",
    features: [
      "SSW (i): Up to 5 years stay with standard local Japanese wages",
      "SSW (ii): Advanced technical tier with family accompaniment",
      "Sectors: Nursing Care, Construction, Manufacturing, Food Service, Hospitality & more",
    ],
  },
  {
    title: "Technical Intern Training Program (TITP)",
    badge: "Skills Training & 2027 ESD",
    summary:
      "Structured technical internship framework in Japan under supervising organizations, transitioning to the new Employment for Skill Development (ESD) by 2027.",
    href: "/japan/titp",
    features: [
      "Acquire practical industrial skills under expert Japanese mentorship",
      "Comprehensive sending-side procedures under OTIT approval (BGD000036)",
      "Strict compliance with upcoming Japanese legal transition guidelines",
    ],
  },
  {
    title: "IT & Engineering Professionals",
    badge: "Engineer / Specialist Visa",
    summary:
      "Direct professional placement for computer science graduates, software developers, civil, mechanical, and electrical engineers.",
    href: "/japan/it-engineering",
    features: [
      "Bachelor's degree & professional engineering credentials",
      "Japanese language communication & technical onboarding",
      "Long-term career pathway under high-skilled visa categories",
    ],
  },
];

const processSteps = [
  { n: "01", title: "Employer Requirement Assessment", desc: "Understanding company vacancies, job specifications, salary, and target arrival dates." },
  { n: "02", title: "Job Order Review", desc: "Reviewing legal employment conditions and receiving authorized demand documentation." },
  { n: "03", title: "Candidate Sourcing & Screening", desc: "Identifying candidates matching qualifications, trade background, and eligibility." },
  { n: "04", title: "Interviews & Technical Assessments", desc: "Coordinating online or in-person interviews and practical trade testing." },
  { n: "05", title: "Language & Occupational Prep", desc: "Intensive Japanese language courses, safety training, and cultural discipline." },
  { n: "06", title: "Medical & Documentation", desc: "Authorized medical check-ups, police clearance, and official document verification." },
  { n: "07", title: "Immigration & COE Processing", desc: "Assisting with Certificate of Eligibility (COE) filing and embassy visa formalities." },
  { n: "08", title: "Orientation & Deployment", desc: "Comprehensive pre-departure briefing, flight coordination, and arrival support." },
];

export default function JapanPage() {
  return (
    <SubPageShell active="/japan">
      {/* Hero Banner */}
      <section className="relative w-full bg-[#0c2230] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <img
          src="/images/japan-bridge.jpg"
          alt="Bangladesh to Japan Recruitment"
          className="absolute inset-0 size-full object-cover opacity-20 pointer-events-none"
        />
        <div className="relative max-w-[1520px] mx-auto flex flex-col items-center text-center">
          <span className="bg-[#c1262e] text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-4">
            Bilateral Workforce Mobility · OTIT BGD000036
          </span>
          <h1 className="font-bold text-[32px] sm:text-[46px] lg:text-[56px] leading-tight max-w-[1050px]">
            Bangladesh to Japan Recruitment – Connecting Skilled Bangladeshi Workers with Japanese Employers
          </h1>
          <p className="mt-5 text-white/80 text-base sm:text-xl max-w-[850px] leading-relaxed">
            Your trusted recruitment partner for Japanese workforce requirements. Operating under Recruiting Licence (RL-711) with a dedicated coordination office in Shibuya, Tokyo.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link
              href="/employers"
              className="bg-[#c1262e] hover:bg-[#a61e25] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-colors text-base"
            >
              Submit Japanese Manpower Requirements
            </Link>
            <Link
              href="/candidates"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-colors text-base"
            >
              Register for Japan Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* Why Recruit Bangladeshi Workers for Japan */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-[1520px] mx-auto flex flex-col gap-12">
          <div className="text-center max-w-[850px] mx-auto">
            <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-[#fff5f5] px-3.5 py-1 rounded-full">
              Workforce Advantages
            </span>
            <h2 className="font-bold text-[#171b1c] text-[30px] sm:text-[42px] leading-tight mt-2">
              Why Recruit Bangladeshi Workers for Japan?
            </h2>
            <p className="text-[#686868] text-base sm:text-lg mt-2">
              Bangladesh has a rapidly advancing workforce with experience across technical, industrial, construction, and healthcare occupations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strengths.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f8f9fa] border border-black/5 rounded-2xl p-7 hover:border-[#c1262e]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-[#171b1c] text-xl mb-2">{item.title}</h3>
                  <p className="text-[#686868] text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#888] text-center max-w-[900px] mx-auto italic">
            * Note: The suitability of each candidate depends on actual qualifications, practical trade experience, Japanese language proficiency, and the specific requirements of the employer.
          </p>
        </div>
      </section>

      {/* Japan Recruitment Programs Grid */}
      <section className="w-full bg-[#f8f9fa] py-16 sm:py-24 px-4 sm:px-6 lg:px-12 border-y border-black/5">
        <div className="max-w-[1520px] mx-auto flex flex-col gap-12">
          <div className="text-center max-w-[850px] mx-auto">
            <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-white px-3.5 py-1 rounded-full border border-[#c1262e]/20">
              Employment Pathways
            </span>
            <h2 className="font-bold text-[#171b1c] text-[30px] sm:text-[42px] leading-tight mt-2">
              Japan Recruitment Programs
            </h2>
            <p className="text-[#686868] text-base sm:text-lg mt-2">
              Structured sending pathways tailored to Japanese immigration laws and employer job specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((prog, idx) => (
              <div
                key={idx}
                className="bg-white border border-black/10 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="bg-[#fff5f5] text-[#c1262e] border border-[#c1262e]/20 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {prog.badge}
                  </span>
                  <h3 className="font-bold text-[#171b1c] text-[22px] mt-4 mb-2">
                    {prog.title}
                  </h3>
                  <p className="text-[#686868] text-[15px] leading-relaxed mb-6">
                    {prog.summary}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-black/5">
                    {prog.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-[#444]">
                        <span className="text-[#c1262e] font-bold">✓</span>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-black/5">
                  <Link
                    href={prog.href}
                    className="block text-center bg-[#c1262e] hover:bg-[#a61e25] text-white font-semibold py-3 px-4 rounded-xl text-sm transition-colors shadow-sm"
                  >
                    View Program Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8-Step Bangladesh–Japan Recruitment Process */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-[1520px] mx-auto flex flex-col gap-12">
          <div className="text-center max-w-[850px] mx-auto">
            <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-[#fff5f5] px-3.5 py-1 rounded-full">
              Standard Operating Procedure
            </span>
            <h2 className="font-bold text-[#171b1c] text-[30px] sm:text-[42px] leading-tight mt-2">
              Our Bangladesh–Japan Recruitment Process
            </h2>
            <p className="text-[#686868] text-base sm:text-lg mt-2">
              A transparent, 8-step workflow ensuring full compliance from initial job order to worker arrival in Japan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.n}
                className="bg-[#f8f9fa] border border-black/5 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-extrabold text-2xl text-[#c1262e]">{step.n}</span>
                  <h3 className="font-bold text-[#171b1c] text-[18px] mt-2 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#686868] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner with Sanjana International */}
      <section className="w-full bg-[#0c2230] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-5">
            <span className="bg-[#c1262e] text-white text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full w-fit">
              Partner with Confidence
            </span>
            <h2 className="font-bold text-[30px] sm:text-[42px] leading-tight">
              Why Japanese Employers Choose Sanjana International
            </h2>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              We eliminate the friction in cross-border staffing. With full legal licensing under Recruiting Licence (RL-711), official OTIT sending approval (BGD000036), and a bilingual team in Shibuya, Tokyo, we handle all recruitment, language training, trade testing, and immigration formalities.
            </p>
            <div className="space-y-3 pt-2">
              {[
                "Licensed Bangladesh recruitment agency (Recruiting Licence RL-711)",
                "Japan-related sending-organization registration (OTIT BGD000036)",
                "Japan contact office: 433 Soft Town Aoyama, Jingumae, Shibuya-ku, Tokyo",
                "Structured candidate trade testing & practical skill verification",
                "Dedicated Japanese language teachers & cultural orientation curriculum",
                "Complete COE and consular visa documentation assistance",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm sm:text-base text-white/90">
                  <span className="text-[#c1262e] font-bold text-lg">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 flex flex-col gap-6">
              <h3 className="font-bold text-2xl text-white">Hire Bangladeshi Talent for Japan</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Whether your company needs manufacturing technicians, construction personnel, care workers, hospitality staff, or SSW candidates, Sanjana International welcomes discussions with Japanese companies and supervising organizations.
              </p>
              <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
                <p className="text-xs text-white/60">Tokyo Direct Line:</p>
                <a href="tel:+81369105465" className="text-xl font-bold text-white hover:text-[#c1262e] transition-colors">
                  03-6910-5465 / +81 90-5343-5325
                </a>
                <p className="text-xs text-white/60 mt-1">Email for Japanese inquiries:</p>
                <a href="mailto:info@sanjanahr.com" className="text-base text-white underline">
                  info@sanjanahr.com
                </a>
              </div>
              <Link
                href="/employers"
                className="bg-[#c1262e] hover:bg-[#a61e25] text-white text-center font-bold py-3.5 rounded-xl transition-colors"
              >
                Submit Your Japanese Manpower Requirements
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SubPageShell>
  );
}
