import type { Metadata } from "next";
import Link from "next/link";
import SubPageShell from "@/components/SubPageShell";

export const metadata: Metadata = {
  title: "IT & Engineering Recruitment Japan | Sanjana International",
  description:
    "Connecting Japanese businesses with Bangladesh's technical talent: software developers, cloud engineers, civil, mechanical, and electrical engineers with Japanese language preparation under RL-711.",
};

const itCategories = [
  "Software Engineers (Backend, Frontend, Full-Stack)",
  "Web & Mobile Application Developers (iOS / Android / Flutter)",
  "Database Administrators & Data Engineers",
  "DevOps, Cloud & Infrastructure Specialists (AWS, Azure, GCP)",
  "Quality Assurance & Test Automation Engineers",
  "Network & Cybersecurity Specialists",
  "IT Support & Technical Systems Administrators",
  "AI / Machine Learning & Data Science Practitioners",
];

const engineeringCategories = [
  "Civil & Structural Design Engineers",
  "CAD Drafters & BIM Modelers (AutoCAD, Revit, Tekla)",
  "Mechanical & Mechatronics Engineers",
  "Electrical & Electronics Engineers",
  "Industrial Production & Plant Engineers",
  "Quality Control (QC) & QA Specialists",
  "HVAC & Building Mechanical Systems Engineers",
  "Construction Technology & Project Coordinators",
];

const evaluationSteps = [
  {
    title: "Academic Verification",
    desc: "Rigorous verification of 4-year engineering and computer science degrees from accredited universities.",
    icon: "🎓",
  },
  {
    title: "Portfolio & Code Review",
    desc: "In-depth review of GitHub repositories, live projects, architecture diagrams, and CAD drawings.",
    icon: "📂",
  },
  {
    title: "Practical Technical Assessment",
    desc: "Coding challenges, live technical problem-solving, and domain-specific practical tests.",
    icon: "💻",
  },
  {
    title: "Bilingual Communication",
    desc: "Evaluation of spoken Japanese proficiency (JLPT N3/N2 targets) alongside fluent professional English.",
    icon: "🗣️",
  },
  {
    title: "Workplace Discipline & Culture",
    desc: "Assessing adaptability to Japanese business etiquette, punctuality, and collaborative teamwork.",
    icon: "🤝",
  },
  {
    title: "Visa Eligibility Clearance",
    desc: "Verification of documentation matching the 'Engineer / Specialist in Humanities / International Services' visa requirements.",
    icon: "📜",
  },
];

export default function ITEngineeringPage() {
  return (
    <SubPageShell active="/japan">
      {/* Hero */}
      <section className="relative w-full bg-[#0c2230] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <img
          src="/images/it-engineering.jpg"
          alt="IT and Engineering Recruitment"
          className="absolute inset-0 size-full object-cover opacity-25 pointer-events-none"
        />
        <div className="relative max-w-[1520px] mx-auto flex flex-col items-center text-center">
          <span className="bg-[#c1262e] text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-4">
            Technical Talent Mobility · RL-711
          </span>
          <h1 className="font-bold text-[32px] sm:text-[46px] lg:text-[56px] leading-tight max-w-[1050px]">
            IT &amp; Engineering Recruitment from Bangladesh to Japan
          </h1>
          <p className="mt-5 text-white/80 text-base sm:text-xl max-w-[850px] leading-relaxed">
            Connecting Japanese enterprises with qualified software developers, cloud architects, civil, mechanical, and electrical engineers from Bangladesh&apos;s fast-growing talent pool.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link
              href="/employers"
              className="bg-[#c1262e] hover:bg-[#a61e25] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-colors text-base"
            >
              Hire IT &amp; Engineering Talent
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-colors text-base"
            >
              Request Technical Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Talent Pools: IT & Engineering */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-[1520px] mx-auto flex flex-col gap-12">
          <div className="text-center max-w-[850px] mx-auto">
            <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-[#fff5f5] px-3.5 py-1 rounded-full">
              Specialized Roles
            </span>
            <h2 className="font-bold text-[#171b1c] text-[30px] sm:text-[42px] leading-tight mt-2">
              High-Demand Technical Recruitment Categories
            </h2>
            <p className="text-[#686868] text-base sm:text-lg mt-2">
              Bangladesh produces over 20,000 engineering and computer science graduates annually with strong mathematical aptitude and international ambitions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* IT Talent */}
            <div className="bg-[#f8f9fa] border border-black/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-12 rounded-xl bg-[#c1262e] text-white flex items-center justify-center font-bold text-xl">
                    💻
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#c1262e]">
                      Software &amp; Digital
                    </span>
                    <h3 className="font-bold text-2xl text-[#171b1c]">IT Talent Recruitment</h3>
                  </div>
                </div>
                <p className="text-[#686868] text-[15px] leading-relaxed mb-6">
                  From cutting-edge web applications to mission-critical enterprise systems, our developers are proficient in modern stacks (TypeScript, Python, Java, Go, React, Next.js, Node, Flutter).
                </p>

                <div className="space-y-3 pt-2 border-t border-black/5">
                  {itCategories.map((cat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-[#333]">
                      <span className="text-[#c1262e] font-bold">✓</span>
                      <span>{cat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-black/5">
                <Link
                  href="/employers"
                  className="inline-flex items-center gap-2 text-[#c1262e] font-bold text-sm hover:underline"
                >
                  <span>Request IT Profiles</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Engineering Talent */}
            <div className="bg-[#f8f9fa] border border-black/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-12 rounded-xl bg-[#0c2230] text-white flex items-center justify-center font-bold text-xl">
                    ⚙️
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0c2230]">
                      Civil, Mechanical &amp; Electrical
                    </span>
                    <h3 className="font-bold text-2xl text-[#171b1c]">Engineering Recruitment</h3>
                  </div>
                </div>
                <p className="text-[#686868] text-[15px] leading-relaxed mb-6">
                  Qualified engineers with hands-on proficiency in international building codes, precision machining, electrical panel design, and 3D modeling for infrastructure.
                </p>

                <div className="space-y-3 pt-2 border-t border-black/5">
                  {engineeringCategories.map((cat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-[#333]">
                      <span className="text-[#0c2230] font-bold">✓</span>
                      <span>{cat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-black/5">
                <Link
                  href="/employers"
                  className="inline-flex items-center gap-2 text-[#0c2230] font-bold text-sm hover:underline"
                >
                  <span>Request Engineering Profiles</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Candidate Evaluation Methodology */}
      <section className="w-full bg-[#f8f9fa] py-16 sm:py-24 px-4 sm:px-6 lg:px-12 border-y border-black/5">
        <div className="max-w-[1520px] mx-auto flex flex-col gap-12">
          <div className="text-center max-w-[850px] mx-auto">
            <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-white px-3.5 py-1 rounded-full border border-[#c1262e]/20">
              Vetting Quality
            </span>
            <h2 className="font-bold text-[#171b1c] text-[30px] sm:text-[42px] leading-tight mt-2">
              Our Technical Candidate Evaluation
            </h2>
            <p className="text-[#686868] text-base sm:text-lg mt-2">
              Every applicant undergoes structured assessments by domain experts before presentation to Japanese employers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {evaluationSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white border border-black/5 rounded-2xl p-7 shadow-xs flex flex-col gap-3"
              >
                <div className="text-3xl mb-1">{step.icon}</div>
                <h3 className="font-bold text-[#171b1c] text-xl">{step.title}</h3>
                <p className="text-[#686868] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment for Japanese Companies */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto bg-[#0c2230] text-white rounded-3xl p-8 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">
          <div className="flex flex-col gap-4 max-w-[700px]">
            <span className="bg-[#c1262e] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full w-fit">
              High-Skilled Visa Corridor
            </span>
            <h2 className="font-bold text-[28px] sm:text-[38px] leading-tight">
              Recruitment for Japanese Companies
            </h2>
            <p className="text-white/80 text-base leading-relaxed">
              For Japanese employers, we emphasize technical competence, workplace communication, professional discipline, and cultural preparation. Visas are processed under the prestigious &ldquo;Engineer / Specialist in Humanities / International Services&rdquo; status of residence.
            </p>
            <div className="flex items-center gap-4 text-sm text-white/90 pt-2">
              <span>✓ Degree verified</span>
              <span>•</span>
              <span>✓ Direct employment contracts</span>
              <span>•</span>
              <span>✓ Tokyo coordination office</span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col gap-3 w-full sm:w-auto">
            <Link
              href="/employers"
              className="bg-[#c1262e] hover:bg-[#a61e25] text-white text-center font-bold px-8 py-3.5 rounded-xl transition-colors shadow-lg"
            >
              Hire IT &amp; Engineering Talent
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white text-center font-bold px-8 py-3.5 rounded-xl transition-colors"
            >
              Contact Tokyo Liaison
            </Link>
          </div>
        </div>
      </section>
    </SubPageShell>
  );
}
