import type { Metadata } from "next";
import Link from "next/link";
import SubPageShell from "@/components/SubPageShell";
import CandidateRegisterForm from "./CandidateRegisterForm";

export const metadata: Metadata = {
  title: "For Candidates | Sanjana International - Build Your Global Career",
  description:
    "Explore legitimate overseas career opportunities in Japan and global markets. Candidate registration, 7-step employment journey, and ethical support under Recruiting Licence (RL-711).",
};

const candidateGroups = [
  {
    title: "Skilled & Technical Workers",
    desc: "Workers with practical hands-on experience in manufacturing, machining, welding, building construction, and heavy machinery.",
    icon: "🔧",
  },
  {
    title: "Vocational & Polytechnic Graduates",
    desc: "Graduates of technical training centres (TTC) and polytechnic institutes seeking international exposure and skill enhancement.",
    icon: "🎓",
  },
  {
    title: "Engineering & IT Specialists",
    desc: "B.Sc engineers and software professionals pursuing direct professional placement in Japanese technology firms.",
    icon: "💻",
  },
  {
    title: "Healthcare & Caregiving Aides",
    desc: "Compassionate individuals dedicated to elderly care (Kaigo) with nursing or caregiving background and language aptitude.",
    icon: "🏥",
  },
  {
    title: "Hospitality & Food Service Staff",
    desc: "Culinary staff, hotel service attendants, and restaurant personnel ready to represent Bangladeshi hospitality abroad.",
    icon: "🏨",
  },
  {
    title: "Agricultural & Food Processing Crew",
    desc: "Energetic workers experienced in greenhouse crop cultivation, livestock handling, or food hygiene packaging.",
    icon: "🌾",
  },
];

const candidateSteps = [
  {
    n: "01",
    title: "Candidate Registration",
    desc: "Submit your basic personal, educational, and trade experience details through our official candidate registration portal.",
  },
  {
    n: "02",
    title: "Initial Screening",
    desc: "Our recruitment advisors review your background, passport eligibility, and suitability for open client vacancies.",
  },
  {
    n: "03",
    title: "Interview & Trade Assessment",
    desc: "Shortlisted candidates undergo practical trade testing with qualified engineers and direct interviews with overseas employers.",
  },
  {
    n: "04",
    title: "Medical Examination",
    desc: "Selected candidates complete comprehensive medical fitness screenings at authorized clinics confirming fitness for duty.",
  },
  {
    n: "05",
    title: "Employment Documentation",
    desc: "Formal employment contracts and required immigration documentation are coordinated according to official procedures.",
  },
  {
    n: "06",
    title: "Training & Orientation",
    desc: "Candidates complete Japanese language instruction, workplace discipline culture (5S), and pre-departure briefings.",
  },
  {
    n: "07",
    title: "Deployment & Flight",
    desc: "After BMET smart-card clearance and visa endorsement, departure arrangements and arrival receptions are coordinated.",
  },
];

export default function CandidatesPage() {
  return (
    <SubPageShell active="/candidates">
      {/* Hero */}
      <section className="relative w-full bg-[#0c2230] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <img
          src="/images/japan-bridge.jpg"
          alt="Candidate Opportunities"
          className="absolute inset-0 size-full object-cover opacity-20 pointer-events-none"
        />
        <div className="relative max-w-[1520px] mx-auto flex flex-col items-center text-center">
          <span className="bg-[#c1262e] text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-4">
            Candidate Career Portal · Recruiting Licence (RL-711)
          </span>
          <h1 className="font-bold text-[32px] sm:text-[46px] lg:text-[56px] leading-tight max-w-[1050px]">
            Build Your International Career with Sanjana International
          </h1>
          <p className="mt-5 text-white/80 text-base sm:text-xl max-w-[850px] leading-relaxed">
            Explore legitimate overseas employment opportunities from Bangladesh. We believe every candidate deserves clear information, professional guidance, and transparent communication throughout their journey.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <a
              href="#register"
              className="bg-[#c1262e] hover:bg-[#a61e25] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-colors text-base"
            >
              Register as a Candidate
            </a>
            <Link
              href="/jobs"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-colors text-base"
            >
              Browse Active Openings
            </Link>
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-[1520px] mx-auto flex flex-col gap-12">
          <div className="text-center max-w-[850px] mx-auto">
            <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-[#fff5f5] px-3.5 py-1 rounded-full">
              Eligibility &amp; Profiles
            </span>
            <h2 className="font-bold text-[#171b1c] text-[30px] sm:text-[42px] leading-tight mt-2">
              Who Can Apply?
            </h2>
            <p className="text-[#686868] text-base sm:text-lg mt-2">
              Opportunities exist across multiple skill levels. Whether you have vocational trade experience or an engineering degree, we have structured pathways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {candidateGroups.map((grp, idx) => (
              <div
                key={idx}
                className="bg-[#f8f9fa] border border-black/5 rounded-2xl p-7 flex flex-col gap-3 hover:border-[#c1262e]/30 transition-colors"
              >
                <div className="text-3xl mb-1">{grp.icon}</div>
                <h3 className="font-bold text-[#171b1c] text-xl">{grp.title}</h3>
                <p className="text-[#686868] text-sm leading-relaxed">{grp.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#888] text-center max-w-[800px] mx-auto italic">
            * Specific eligibility criteria vary according to destination country regulations, occupational field, and individual employer specifications.
          </p>
        </div>
      </section>

      {/* 7-Step Employment Journey */}
      <section className="w-full bg-[#f8f9fa] py-16 sm:py-24 px-4 sm:px-6 lg:px-12 border-y border-black/5">
        <div className="max-w-[1520px] mx-auto flex flex-col gap-12">
          <div className="text-center max-w-[850px] mx-auto">
            <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-white px-3.5 py-1 rounded-full border border-[#c1262e]/20">
              Clear Pathway
            </span>
            <h2 className="font-bold text-[#171b1c] text-[30px] sm:text-[42px] leading-tight mt-2">
              Your 7-Step Overseas Employment Journey
            </h2>
            <p className="text-[#686868] text-base sm:text-lg mt-2">
              A transparent, supportive recruitment procedure where you are never left in the dark.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {candidateSteps.map((step) => (
              <div
                key={step.n}
                className="bg-white border border-black/10 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:border-[#c1262e]/40 transition-colors"
              >
                <div>
                  <span className="font-extrabold text-2xl text-[#c1262e]">Step {step.n}</span>
                  <h3 className="font-bold text-[#171b1c] text-lg mt-2 mb-2">{step.title}</h3>
                  <p className="text-[#686868] text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
            <div className="bg-[#0c2230] text-white rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-[#c1262e]">Arrival &amp; Support</span>
                <h3 className="font-bold text-lg text-white mt-2 mb-2">Post-Arrival Guidance</h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  Our Tokyo office remains accessible throughout your stay in Japan, offering consultation and welfare check-ins.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-xs text-white/70">
                Tokyo Office: Shibuya-ku, Tokyo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment to Candidates */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto bg-[#fff5f5] border border-[#c1262e]/20 rounded-3xl p-8 sm:p-12">
          <div className="text-center max-w-[800px] mx-auto mb-8">
            <span className="text-[#c1262e] font-bold text-xs uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-[#c1262e]/30">
              Candidate Rights
            </span>
            <h2 className="font-bold text-[#171b1c] text-[26px] sm:text-[36px] mt-2">
              Our Commitment to You
            </h2>
            <p className="text-[#686868] text-sm sm:text-base mt-2">
              Sanjana International is bound by government overseas employment ethics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { t: "Transparent Information", d: "Truthful facts about jobs, wages, working conditions, and weather before signing." },
              { t: "Clear Employment Terms", d: "Fully explained salary breakdown, overtime calculations, and legal deductions." },
              { t: "Document Guidance", d: "Step-by-step assistance with passport, police clearance, and medical records." },
              { t: "Respectful Assessment", d: "Fair, unbiased evaluation based purely on your skill, attitude, and merit." },
              { t: "Legitimate Payments", d: "Clear explanation of allowable fees with official money receipts provided." },
              { t: "Rights Awareness", d: "Full education on your destination country labor laws and complaint mechanisms." },
            ].map((c, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-black/5">
                <p className="font-bold text-[#171b1c] text-base mb-1.5 flex items-center gap-2">
                  <span className="text-[#c1262e]">✓</span>
                  <span>{c.t}</span>
                </p>
                <p className="text-[#686868] text-xs sm:text-sm leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Registration Form Section */}
      <section id="register" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-[#f8f9fa]">
        <div className="max-w-[960px] mx-auto">
          <CandidateRegisterForm />
        </div>
      </section>
    </SubPageShell>
  );
}
