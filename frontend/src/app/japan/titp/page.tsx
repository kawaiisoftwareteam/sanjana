import type { Metadata } from "next";
import Link from "next/link";
import SubPageShell from "@/components/SubPageShell";

export const metadata: Metadata = {
  title: "Technical Intern Training Program (TITP) Japan | Sanjana International",
  description:
    "Japan Technical Intern Training Program (TITP) recruitment and 2027 Employment for Skill Development (ESD) transition guidance. Approved sending organization BGD000036 under RL-711.",
};

const selectionSteps = [
  { n: "01", title: "Candidate Registration", desc: "Online or in-person registration of academic qualifications, vocational training, and trade interest." },
  { n: "02", title: "Document & Background Check", desc: "Verification of educational certificates, national ID, police clearance, and past work history." },
  { n: "03", title: "Technical Interviews", desc: "Rigorous interviews to assess vocational aptitude, communication willingness, and practical trade grasp." },
  { n: "04", title: "Practical Trade Testing", desc: "Hands-on assessment in technical workshops supervised by certified engineers to verify trade readiness." },
  { n: "05", title: "Medical Fitness Screening", desc: "Comprehensive physical examinations at authorized medical centres confirming health fitness for Japan." },
  { n: "06", title: "Japanese Language Prep", desc: "Full-time residential/day courses in spoken Japanese, workplace terminology, hiragana, katakana, and kanji." },
  { n: "07", title: "Workplace Etiquette & 5S", desc: "Intensive training in Japanese workplace manners, punctuality, safety procedures, and Hou-Ren-So." },
  { n: "08", title: "Departure Coordination", desc: "Certificate of Eligibility filing, BMET immigration clearance, flight arrangements, and pre-departure briefing." },
];

const preparationPriorities = [
  {
    title: "Basic Japanese Communication",
    desc: "Achieving functional conversational skills (N5/N4 equivalents) to comprehend daily instructions, workplace requests, and team communication.",
    icon: "🗣️",
  },
  {
    title: "Workplace Discipline & Punctuality",
    desc: "Strict adherence to time management, arriving ahead of schedule, zero absenteeism, and understanding the value of reliability in Japan.",
    icon: "⏰",
  },
  {
    title: "Safety Awareness & KYT",
    desc: "Kiken Yochi Training (hazard prediction), emergency disaster drills, proper protective equipment (PPE), and industrial safety regulations.",
    icon: "🦺",
  },
  {
    title: "Teamwork & Professional Conduct",
    desc: "Respectful collaboration with Japanese colleagues, following supervisor instructions, and harmonious living in trainee accommodations.",
    icon: "🤝",
  },
  {
    title: "Japanese Workplace Culture (5S)",
    desc: "Mastery of Seiri (Sort), Seiton (Set in order), Seiso (Shine), Seiketsu (Standardize), and Shitsuke (Sustain) in daily factory life.",
    icon: "✨",
  },
  {
    title: "Rights, Responsibilities & Conditions",
    desc: "Clear understanding of the technical intern training contract, standard working hours, overtime compensation, health insurance, and legal rights.",
    icon: "⚖️",
  },
];

export default function TITPPage() {
  return (
    <SubPageShell active="/japan">
      {/* Hero */}
      <section className="relative w-full bg-[#0c2230] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <img
          src="/images/titp-hero.jpg"
          alt="Technical Intern Training Program"
          className="absolute inset-0 size-full object-cover opacity-25 pointer-events-none"
        />
        <div className="relative max-w-[1520px] mx-auto flex flex-col items-center text-center">
          <span className="bg-[#c1262e] text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-4">
            OTIT Sending Organization: BGD000036 · RL-711
          </span>
          <h1 className="font-bold text-[32px] sm:text-[46px] lg:text-[56px] leading-tight max-w-[1050px]">
            Japan Technical Intern Training Program (TITP) Recruitment from Bangladesh
          </h1>
          <p className="mt-5 text-white/80 text-base sm:text-xl max-w-[850px] leading-relaxed">
            Connecting Bangladeshi candidates with supervised technical training and occupational development in Japan. Listed in Japan&apos;s OTIT records under BGD000036.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link
              href="/contact"
              className="bg-[#c1262e] hover:bg-[#a61e25] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-colors text-base"
            >
              Enquire About Japan Recruitment
            </Link>
            <Link
              href="#esd-transition"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-colors text-base"
            >
              2027 ESD Transition Details
            </Link>
          </div>
        </div>
      </section>

      {/* Understanding the TITP Framework */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-[#fff5f5] px-3.5 py-1 rounded-full w-fit">
              Framework Structure
            </span>
            <h2 className="font-bold text-[#171b1c] text-[28px] sm:text-[40px] leading-tight">
              Understanding the TITP Framework
            </h2>
            <p className="text-[#686868] text-base sm:text-lg leading-relaxed">
              The Technical Intern Training Program has historically provided a structured bilateral framework for eligible foreign nationals to acquire occupational skills through supervised training and practical work experience in Japan.
            </p>
            <p className="text-[#686868] text-base sm:text-lg leading-relaxed">
              TITP operates with stringent regulatory requirements governing training plans, approved supervising organizations (監理団体 / Kanri Dantai), implementing enterprises (実習実施者 / Jisshi Jisshisha), and accredited sending organizations (送り出し機関 / Okuridashi Kikan).
            </p>
            <div className="bg-[#f8f9fa] border-l-4 border-[#c1262e] p-5 rounded-r-xl">
              <p className="font-semibold text-[#171b1c] text-base">
                Sanjana International is officially listed in Japan&apos;s OTIT approved sending-organization records under code <strong>BGD000036</strong> and operates under Bangladesh Recruiting Licence <strong>RL-711</strong>.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#f8f9fa] border border-black/10 rounded-3xl p-8 flex flex-col gap-5 shadow-sm">
              <h3 className="font-bold text-xl text-[#171b1c]">Bilateral Stakeholder Architecture</h3>
              <div className="space-y-4 text-sm">
                <div className="border-b border-black/5 pb-3">
                  <p className="font-bold text-[#c1262e]">Sending Organization (Bangladesh):</p>
                  <p className="text-[#555]">Sanjana International (BGD000036) — Candidate sourcing, screening, language training &amp; COE filing.</p>
                </div>
                <div className="border-b border-black/5 pb-3">
                  <p className="font-bold text-[#0c2230]">Supervising Organization (Japan):</p>
                  <p className="text-[#555]">Kanri Dantai — Training plan submission, regular audits, and intern welfare supervision.</p>
                </div>
                <div className="border-b border-black/5 pb-3">
                  <p className="font-bold text-[#0c2230]">Implementing Organization (Japan):</p>
                  <p className="text-[#555]">Host Company — Practical technical training, wage payments, and skill development.</p>
                </div>
                <div>
                  <p className="font-bold text-[#0c2230]">Government Regulators:</p>
                  <p className="text-[#555]">OTIT &amp; Immigration Services Agency of Japan / BMET Ministry of Expatriates&apos; Welfare, Bangladesh.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Section: 2027 ESD Program Transition */}
      <section
        id="esd-transition"
        className="w-full bg-[#fff5f5] py-16 sm:py-24 px-4 sm:px-6 lg:px-12 border-y border-[#c1262e]/30"
      >
        <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <span className="bg-[#c1262e] text-white text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full w-fit">
              Regulatory Update
            </span>
            <h2 className="font-bold text-[#171b1c] text-[28px] sm:text-[42px] leading-tight">
              An Important Program Transition: Employment for Skill Development (ESD)
            </h2>
            <p className="text-[#555] text-base sm:text-lg leading-relaxed">
              Japan has officially legislated a new <strong>Employment for Skill Development (育成就労制度 / ESD)</strong> system intended to replace the TITP framework, with implementation scheduled for <strong>2027</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm">
              <span className="text-2xl mb-2 block">🔄</span>
              <h3 className="font-bold text-[#171b1c] text-lg mb-1">Smooth SSW Transition</h3>
              <p className="text-[#686868] text-sm leading-relaxed">
                The new ESD system is explicitly structured to groom workers over 3 years to seamlessly transition into Specified Skilled Worker (SSW No. 1) status.
              </p>
            </div>

            <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm">
              <span className="text-2xl mb-2 block">⚖️</span>
              <h3 className="font-bold text-[#171b1c] text-lg mb-1">Enhanced Worker Protections</h3>
              <p className="text-[#686868] text-sm leading-relaxed">
                ESD introduces greater flexibility, transparent transfer rights after satisfying conditions, and strengthened oversight against unethical fees.
              </p>
            </div>

            <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm">
              <span className="text-2xl mb-2 block">📋</span>
              <h3 className="font-bold text-[#171b1c] text-lg mb-1">Case-by-Case Assessment</h3>
              <p className="text-[#686868] text-sm leading-relaxed">
                Applicable transition provisions must be checked for every new recruitment case. TITP is not presented as an unrestricted or permanent future pathway.
              </p>
            </div>
          </div>

          <div className="bg-white border-l-4 border-[#0c2230] p-6 rounded-r-xl text-sm text-[#444] leading-relaxed">
            <strong>Transparency Notice:</strong> Sanjana International maintains continuous dialogue with Japanese supervising bodies and regulatory authorities to ensure all candidates and employers navigate the 2027 transition provisions safely, lawfully, and effectively.
          </div>
        </div>
      </section>

      {/* Candidate Selection Process */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-[1520px] mx-auto flex flex-col gap-12">
          <div className="text-center max-w-[850px] mx-auto">
            <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-[#fff5f5] px-3.5 py-1 rounded-full">
              Screening Rigor
            </span>
            <h2 className="font-bold text-[#171b1c] text-[30px] sm:text-[42px] leading-tight mt-2">
              Our Candidate Selection Process
            </h2>
            <p className="text-[#686868] text-base sm:text-lg mt-2">
              We uphold strict, verified recruitment procedures that guarantee only genuine, capable trainees are presented to Japanese companies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {selectionSteps.map((step) => (
              <div
                key={step.n}
                className="bg-[#f8f9fa] border border-black/5 rounded-2xl p-6 flex flex-col justify-between hover:border-[#c1262e]/30 transition-all"
              >
                <div>
                  <span className="font-extrabold text-2xl text-[#c1262e]">{step.n}</span>
                  <h3 className="font-bold text-[#171b1c] text-lg mt-2 mb-2">{step.title}</h3>
                  <p className="text-[#686868] text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preparing Candidates for Japan */}
      <section className="w-full bg-[#f8f9fa] py-16 sm:py-24 px-4 sm:px-6 lg:px-12 border-t border-black/5">
        <div className="max-w-[1520px] mx-auto flex flex-col gap-12">
          <div className="text-center max-w-[850px] mx-auto">
            <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-white px-3.5 py-1 rounded-full border border-[#c1262e]/20">
              Training Standards
            </span>
            <h2 className="font-bold text-[#171b1c] text-[30px] sm:text-[42px] leading-tight mt-2">
              Preparing Candidates for Japan
            </h2>
            <p className="text-[#686868] text-base sm:text-lg mt-2">
              Successful international training requires preparation beyond technical skills alone. We nurture character, communication, and discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {preparationPriorities.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-black/5 rounded-2xl p-7 shadow-xs flex flex-col gap-3"
              >
                <div className="text-3xl mb-1">{item.icon}</div>
                <h3 className="font-bold text-[#171b1c] text-xl">{item.title}</h3>
                <p className="text-[#686868] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full bg-[#c1262e] text-white py-14 px-4 sm:px-6 lg:px-12 text-center">
        <div className="max-w-[850px] mx-auto flex flex-col items-center gap-5">
          <h2 className="font-bold text-[28px] sm:text-[38px] leading-tight">
            Explore Japan Technical Recruitment
          </h2>
          <p className="text-white/90 text-base leading-relaxed">
            Contact Sanjana International to understand the applicable programs, eligibility conditions, and recruitment procedures for your company or career.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <Link
              href="/contact"
              className="bg-white text-[#c1262e] font-bold px-7 py-3 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              Enquire About Japan Recruitment
            </Link>
            <Link
              href="/japan/ssw"
              className="bg-[#0c2230] text-white font-bold px-7 py-3 rounded-xl hover:bg-[#151719] transition-colors shadow-lg"
            >
              Explore SSW Program
            </Link>
          </div>
        </div>
      </section>
    </SubPageShell>
  );
}
