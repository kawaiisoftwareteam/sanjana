import type { Metadata } from "next";
import Link from "next/link";
import SubPageShell from "@/components/SubPageShell";
import HiringRequestForm from "./HiringRequestForm";

export const metadata: Metadata = {
  title: "Hire Skilled Bangladeshi Workers | Sanjana International - RL-711",
  description:
    "Your international recruitment partner in Bangladesh. Sourcing, technical trade testing, Japanese training, medical checks and deployment coordination for global employers under RL-711 and OTIT BGD000036.",
};

const solutions = [
  {
    title: "Workforce Requirement Assessment",
    text: "We discuss your vacancies, job descriptions, required qualifications, experience, salary structure, working conditions, and recruitment timelines in detail.",
    icon: "📋",
  },
  {
    title: "Candidate Sourcing",
    text: "We identify potential candidates based on your workforce specifications from our pre-screened talent database and technical training networks.",
    icon: "👥",
  },
  {
    title: "Technical Evaluation & Trade Testing",
    text: "We coordinate structured interviews, practical assessments, and video-recorded trade testing by qualified engineers to verify technical capability.",
    icon: "⚙️",
  },
  {
    title: "Medical & Documentation Coordination",
    text: "We assist with authorized medical examinations, background verification, police clearances, and official employment-related documentation.",
    icon: "🏥",
  },
  {
    title: "Pre-Departure Preparation",
    text: "We emphasize appropriate language preparation (JLPT/JFT), workplace cultural orientation, 5S discipline, and destination-country awareness.",
    icon: "🇯🇵",
  },
  {
    title: "Deployment Coordination",
    text: "We coordinate recruitment formalities with employers and candidates, including COE filing, BMET immigration approvals, and departure arrangements.",
    icon: "✈️",
  },
];

const employerReasons = [
  {
    title: "Bangladesh Recruitment Licence RL-711",
    desc: "Government-approved overseas recruitment agency fully committed to conducting recruitment activities in accordance with legal and ethical standards.",
  },
  {
    title: "Japan-Focused Recruitment Experience",
    desc: "Deep understanding of Japanese workplace standards, with dedicated coordination presence in Shibuya-ku, Tokyo (OTIT Sending Org: BGD000036).",
  },
  {
    title: "Structured Candidate Selection",
    desc: "Multi-stage screening comprising document scrutiny, technical interviews, practical trade evaluations, and background checks.",
  },
  {
    title: "Technical Trade Testing",
    desc: "Practical assessments supervised by experienced engineers in specialized workshops, with video recordings provided on request.",
  },
  {
    title: "Medical Examination Coordination",
    desc: "Complete medical fitness checks through authorized diagnostic facilities prior to visa submission.",
  },
  {
    title: "Candidate Orientation & Preparation",
    desc: "Rigorous Japanese language instruction, safety awareness, 5S shopfloor rules, and cultural readiness before deployment.",
  },
  {
    title: "Employer-Focused Communication",
    desc: "Dedicated account managers providing transparent updates, candidate dossiers, and rapid responsiveness in Japanese and English.",
  },
];

const employerSteps = [
  { n: "01", title: "Submit Requirements", text: "Submit your company's manpower needs, job descriptions, salary, and target deployment timeline." },
  { n: "02", title: "Job Spec Review", text: "Discuss job specifications, recruitment conditions, and destination legal requirements." },
  { n: "03", title: "Sourcing Plan", text: "Review our proposed sourcing, screening, and trade testing plan with confirmed timelines." },
  { n: "04", title: "Evaluate Shortlist", text: "Evaluate shortlisted candidates via online interviews, trade-test videos, or on-site selection in Dhaka." },
  { n: "05", title: "Confirm Candidates", text: "Confirm selected workers, execute employment agreements, and finalize contractual paperwork." },
  { n: "06", title: "Regulatory Procedures", text: "Complete required regulatory clearances, Certificate of Eligibility (COE) filing, and visa issuance." },
  { n: "07", title: "Deployment Coordination", text: "Coordinate pre-departure orientation, flight scheduling, and arrival support at the destination." },
];

const stats = [
  { value: "RL-711", label: "Govt. Recruitment Licence" },
  { value: "BGD000036", label: "OTIT Sending Org (Japan)" },
  { value: "16+ Years", label: "Management Expertise" },
  { value: "100%", label: "Trade-Tested Candidates" },
];

const faqs = [
  {
    q: "How does Sanjana International verify candidate technical trade skills?",
    a: "We conduct practical trade testing in accredited technical workshops supervised by qualified engineers. Employers can attend tests virtually or review recorded assessment videos before selection.",
  },
  {
    q: "Can our team interview candidates directly?",
    a: "Yes. We arrange online video interviews, or host your technical delegation at our Dhaka recruitment centre for hands-on practical interviews.",
  },
  {
    q: "Which Japan visa frameworks do you support?",
    a: "Specified Skilled Worker (SSW Type-1 & Type-2), Technical Intern Training Program (TITP), the 2027 Employment for Skill Development (ESD) pathway, and Engineer/High-Skilled visas.",
  },
  {
    q: "What is your Tokyo contact office address?",
    a: "Our Japan office is located at 433 Soft Town Aoyama, 3-1-24 Jingumae, Shibuya-ku, Tokyo 150-0001. Direct telephone: 03-6910-5465.",
  },
];

export default function EmployersPage() {
  return (
    <SubPageShell active="/employers">
      {/* Hero */}
      <section className="relative w-full text-white px-4 sm:px-6 lg:px-12 py-16 sm:py-24 overflow-hidden font-['Inter',sans-serif] bg-[#0c2230]">
        <img
          src="/images/manufacturing.jpg"
          alt="Hire Skilled Bangladeshi Workers"
          className="absolute inset-0 size-full object-cover opacity-25 pointer-events-none"
        />
        <div className="relative max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="bg-[#c1262e] text-white font-bold tracking-widest text-xs uppercase px-3.5 py-1 rounded-full drop-shadow">
              RL-711 · OTIT BGD000036
            </span>
            <h1 className="font-bold text-[32px] sm:text-[46px] lg:text-[56px] leading-[1.1] tracking-tight mt-3 drop-shadow-md">
              Hire Skilled Bangladeshi Workers with Sanjana International
            </h1>
            <p className="text-[17px] sm:text-[20px] text-white/90 mt-5 drop-shadow max-w-[660px] leading-[1.55]">
              Your international recruitment partner in Bangladesh. From initial workforce planning to candidate selection, technical trade testing, and deployment coordination, we work to make recruitment organized and employer-focused.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#hiring-request"
                className="inline-flex items-center h-[52px] px-8 rounded-[12px] bg-[#c1262e] text-white font-bold text-[16px] shadow-lg hover:bg-[#a61e25] transition-colors"
              >
                Submit Manpower Requirements
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center h-[52px] px-8 rounded-[12px] border border-white/40 bg-white/10 backdrop-blur-sm text-white font-semibold text-[16px] hover:bg-white/20 transition-colors"
              >
                Schedule an Employer Consultation
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="relative overflow-hidden bg-black/40 backdrop-blur-md border border-white/20 rounded-[16px] px-5 py-5 shadow-xl"
              >
                <p className="text-[22px] sm:text-[28px] font-extrabold text-[#c1262e] leading-none tracking-tight">
                  {s.value}
                </p>
                <p className="text-white/85 text-[12px] font-medium uppercase tracking-[0.08em] mt-2.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Solutions for Employers */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 sm:py-24 bg-white">
        <div className="max-w-[1520px] mx-auto">
          <div className="text-center max-w-[850px] mx-auto mb-12">
            <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-[#fff5f5] px-3.5 py-1 rounded-full">
              Full Spectrum Services
            </span>
            <h2 className="font-bold text-[#151719] text-[30px] sm:text-[42px] tracking-tight mt-2">
              Our Recruitment Solutions for Employers
            </h2>
            <p className="text-[#686868] text-base sm:text-lg mt-2">
              Designed around your technical specifications, timeline, and compliance standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <div
                key={i}
                className="bg-[#f8f9fa] rounded-2xl border border-black/5 shadow-xs p-7 flex flex-col justify-between hover:border-[#c1262e]/30 transition-all"
              >
                <div>
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="font-bold text-[#151719] text-[20px] mb-2">{s.title}</h3>
                  <p className="text-[#737783] text-[15px] leading-[1.55]">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why International Employers Work with Sanjana International */}
      <section className="bg-[#f8f9fa] py-16 sm:py-24 px-4 sm:px-6 lg:px-12 border-y border-black/5">
        <div className="max-w-[1520px] mx-auto flex flex-col gap-12">
          <div className="text-center max-w-[850px] mx-auto">
            <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-white px-3.5 py-1 rounded-full border border-[#c1262e]/20">
              Employer Trust
            </span>
            <h2 className="font-bold text-[#171b1c] text-[30px] sm:text-[42px] leading-tight mt-2">
              Why International Employers Partner With Us
            </h2>
            <p className="text-[#686868] text-base sm:text-lg mt-2">
              We ensure transparent communication, zero unexpected fees, and verifiable trade competence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {employerReasons.map((r, idx) => (
              <div key={idx} className="bg-white border border-black/5 rounded-2xl p-6 shadow-xs flex flex-col gap-2">
                <span className="text-[#c1262e] font-bold text-lg">0{idx + 1}</span>
                <h3 className="font-bold text-[#171b1c] text-lg">{r.title}</h3>
                <p className="text-[#686868] text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
            <div className="bg-[#0c2230] text-white rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[#c1262e] font-bold text-xs uppercase tracking-widest">
                  Direct Tokyo Contact
                </span>
                <h3 className="font-bold text-xl text-white mt-1">Japan Coordination Presence</h3>
                <p className="text-white/80 text-sm mt-2 leading-relaxed">
                  Our Shibuya office is available to meet Japanese employers, review job order attestations, and coordinate pre-arrival dossiers.
                </p>
              </div>
              <p className="text-xs text-white/60 mt-4">Tel: 03-6910-5465</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Step Employer Recruitment Process */}
      <section className="bg-[#0c2230] text-white px-4 sm:px-6 lg:px-12 py-16 sm:py-24">
        <div className="max-w-[1520px] mx-auto flex flex-col gap-12">
          <div className="text-center max-w-[850px] mx-auto">
            <span className="bg-[#c1262e] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
              Recruitment Workflow
            </span>
            <h2 className="font-bold text-[30px] sm:text-[42px] tracking-tight mt-2">
              Our 7-Step Employer Recruitment Process
            </h2>
            <p className="text-white/80 text-base sm:text-lg mt-2">
              A transparent, dependable path from initial requirement submission to worker arrival.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {employerSteps.map((s) => (
              <div key={s.n} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[#c1262e] font-extrabold text-2xl">STEP {s.n}</span>
                  <h3 className="font-bold text-[18px] text-white mt-2 mb-2">{s.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Request Form Section */}
      <section id="hiring-request" className="px-4 sm:px-6 lg:px-12 py-16 sm:py-24 scroll-mt-24 bg-white">
        <div className="max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div>
              <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-[#fff5f5] px-3.5 py-1 rounded-full">
                Employer Consultation
              </span>
              <h2 className="font-bold text-[#151719] text-[30px] sm:text-[40px] tracking-tight leading-[1.15] mt-2">
                Request Manpower from Bangladesh
              </h2>
              <p className="text-[#737783] text-[16px] leading-[1.6] mt-3">
                Tell us about your company&apos;s vacancies and workforce specifications. Our recruitment team will review your requirements and propose an appropriate sourcing and selection timeline.
              </p>
            </div>

            <div className="bg-[#f8f9fa] border border-black/5 rounded-2xl p-5 text-sm">
              <p className="font-bold text-[#171b1c] mb-2">Direct Employer Inquiries:</p>
              <p className="text-[#555]">Email: <a href="mailto:info@sanjanahr.com" className="text-[#c1262e] underline">info@sanjanahr.com</a></p>
              <p className="text-[#555] mt-1">Dhaka HQ: +880 1901-850573 / +880 2-55123797</p>
              <p className="text-[#555] mt-1">Tokyo Office: 03-6910-5465</p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-[#151719] text-[18px]">Frequently Asked Questions</h3>
              {faqs.map((f) => (
                <details key={f.q} className="group bg-[#f8f9fa] rounded-xl border border-black/5 p-4">
                  <summary className="cursor-pointer font-semibold text-[#151719] text-[14px] list-none flex justify-between gap-3">
                    {f.q}
                    <span className="text-[#cc0a2f] group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-[#737783] text-[13.5px] leading-relaxed mt-2">{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 bg-[#f8f9fa] rounded-3xl border border-black/5 shadow-sm p-6 sm:p-10">
            <HiringRequestForm />
          </div>
        </div>
      </section>
    </SubPageShell>
  );
}
