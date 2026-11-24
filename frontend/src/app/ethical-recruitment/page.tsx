import type { Metadata } from "next";
import Link from "next/link";
import SubPageShell from "@/components/SubPageShell";

export const metadata: Metadata = {
  title: "Ethical Recruitment Policy | Sanjana International - RL-711",
  description:
    "Responsible recruitment, transparent employment, and respect for every worker. Government licensed RL-711 and OTIT approved BGD000036 ethical charter.",
};

const principles = [
  {
    title: "Transparent Employment Conditions",
    desc: "Candidates receive clear, written information regarding their job responsibilities, basic wage, overtime rates, working hours, workplace location, and accommodation terms before accepting any offer.",
    icon: "📜",
  },
  {
    title: "Proper Documentation & Verification",
    desc: "We emphasize 100% genuine documentation and rigorous verification throughout every stage — academic records, trade certificates, police clearance, and medical fitness reports.",
    icon: "🔍",
  },
  {
    title: "No Misleading Employment Promises",
    desc: "We strictly prohibit false or exaggerated promises. We do not promise guaranteed employment, guaranteed visas, or unrealistically inflated earnings. Final visa decisions rest with immigration authorities.",
    icon: "🚫",
  },
  {
    title: "Candidate Awareness & Education",
    desc: "Candidates receive comprehensive pre-departure education so they thoroughly understand their employment contracts, training rights, allowable fees, and all procedural steps involved in deployment.",
    icon: "💡",
  },
  {
    title: "Respect for Worker Rights",
    desc: "We champion the dignity and legal rights of every candidate. We support lawful working conditions, fair treatment, non-discrimination, and clear awareness of formal grievance mechanisms.",
    icon: "🛡️",
  },
  {
    title: "Responsible Bilateral Coordination",
    desc: "We coordinate with employers, supervising organizations, and authorized government agencies in Bangladesh and Japan to ensure all procedures adhere strictly to legal requirements.",
    icon: "🤝",
  },
];

export default function EthicalRecruitmentPage() {
  return (
    <SubPageShell active="/ethical-recruitment">
      {/* Hero */}
      <section className="relative w-full bg-[#0c2230] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <img
          src="/images/ethical-recruitment.jpg"
          alt="Ethical International Recruitment"
          className="absolute inset-0 size-full object-cover opacity-25 pointer-events-none"
        />
        <div className="relative max-w-[1520px] mx-auto flex flex-col items-center text-center">
          <span className="bg-[#c1262e] text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-4">
            Zero Exploitation Policy · RL-711
          </span>
          <h1 className="font-bold text-[32px] sm:text-[46px] lg:text-[56px] leading-tight max-w-[1050px]">
            Our Commitment to Ethical International Recruitment
          </h1>
          <p className="mt-5 text-white/80 text-base sm:text-xl max-w-[850px] leading-relaxed">
            Responsible Recruitment. Transparent Employment. Respect for Every Worker. At Sanjana International, we believe international recruitment must be based on fairness, accountability, and respect for human dignity.
          </p>
        </div>
      </section>

      {/* Philosophy Statement */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-[1100px] mx-auto text-center flex flex-col items-center gap-6">
          <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-[#fff5f5] px-3.5 py-1 rounded-full">
            Our Charter
          </span>
          <h2 className="font-bold text-[#171b1c] text-[28px] sm:text-[40px] leading-tight">
            Fairness &amp; Transparency in Every Deployment
          </h2>
          <p className="text-[#686868] text-base sm:text-lg leading-relaxed">
            Our commitment is to support recruitment processes that protect the interests of employers and workers alike while complying with applicable Bangladeshi laws (Ministry of Expatriates&apos; Welfare) and destination-country immigration standards (including Japan&apos;s OTIT and Ministry of Justice).
          </p>
          <div className="bg-[#fff5f5] border-l-4 border-[#c1262e] p-6 rounded-r-2xl text-left w-full mt-2">
            <p className="text-[#171b1c] font-semibold text-base sm:text-lg leading-snug">
              &ldquo;Ethical Recruitment Is the Foundation of Sustainable International Employment.&rdquo;
            </p>
            <p className="text-[#737783] text-sm mt-1">
              Recruitment success is measured not merely by numbers, but by the dignity, suitability, and long-term security of the workforce.
            </p>
          </div>
        </div>
      </section>

      {/* 6 Ethical Principles */}
      <section className="w-full bg-[#f8f9fa] py-16 sm:py-24 px-4 sm:px-6 lg:px-12 border-y border-black/5">
        <div className="max-w-[1520px] mx-auto flex flex-col gap-12">
          <div className="text-center max-w-[850px] mx-auto">
            <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-white px-3.5 py-1 rounded-full border border-[#c1262e]/20">
              Core Principles
            </span>
            <h2 className="font-bold text-[#171b1c] text-[30px] sm:text-[42px] leading-tight mt-2">
              Our 6 Ethical Recruitment Principles
            </h2>
            <p className="text-[#686868] text-base sm:text-lg mt-2">
              The operational rules strictly enforced across our Dhaka head office and Tokyo coordination bureau.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((p, idx) => (
              <div
                key={idx}
                className="bg-white border border-black/10 rounded-2xl p-7 shadow-xs hover:border-[#c1262e]/40 transition-all flex flex-col gap-3"
              >
                <div className="text-3xl mb-1">{p.icon}</div>
                <h3 className="font-bold text-[#171b1c] text-xl">{p.title}</h3>
                <p className="text-[#686868] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Commitments: To Employers & Candidates */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Commitment to Employers */}
          <div className="bg-[#f8f9fa] border-2 border-[#0c2230]/20 rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="bg-[#0c2230] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                For Employers
              </span>
              <h3 className="font-bold text-[#171b1c] text-2xl sm:text-3xl mt-4 mb-3">
                Our Commitment to Employers
              </h3>
              <p className="text-[#686868] text-base leading-relaxed mb-6">
                We work to provide authentic candidate profiles, relevant skill assessments, and transparent recruitment coordination.
              </p>

              <ul className="space-y-3 text-sm text-[#444]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0c2230] font-bold">✓</span>
                  <span><strong>Verified Talent:</strong> Genuine trade skills tested by certified engineers in our workshops.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0c2230] font-bold">✓</span>
                  <span><strong>Accurate Documentation:</strong> Verified educational credentials and authorized medical reports.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0c2230] font-bold">✓</span>
                  <span><strong>Accountable Coordination:</strong> Dedicated account managers giving frequent status updates until deployment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0c2230] font-bold">✓</span>
                  <span><strong>Zero Compliance Risk:</strong> Fully recognized under Bangladesh RL-711 and Japan OTIT BGD000036.</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-black/5">
              <Link
                href="/employers"
                className="inline-flex items-center gap-2 bg-[#0c2230] hover:bg-[#1a384c] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
              >
                <span>Employer Services</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Commitment to Candidates */}
          <div className="bg-[#fffdfd] border-2 border-[#c1262e]/30 rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="bg-[#c1262e] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                For Job Candidates
              </span>
              <h3 className="font-bold text-[#171b1c] text-2xl sm:text-3xl mt-4 mb-3">
                Our Commitment to Candidates
              </h3>
              <p className="text-[#686868] text-base leading-relaxed mb-6">
                We protect candidates from deceit, unapproved fees, and exploitation by providing transparent contracts and clear orientation.
              </p>

              <ul className="space-y-3 text-sm text-[#444]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#c1262e] font-bold">✓</span>
                  <span><strong>Verify All Offers:</strong> We urge candidates to read every contract clause carefully before signing.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#c1262e] font-bold">✓</span>
                  <span><strong>Official Receipts:</strong> Retain money receipts for all approved government/medical fees.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#c1262e] font-bold">✓</span>
                  <span><strong>Zero False Promises:</strong> No middleman fees or deceptive guarantees of visas or citizenship.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#c1262e] font-bold">✓</span>
                  <span><strong>Support Channels:</strong> Accessible assistance hotline if any workplace dispute arises in Japan.</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-black/5">
              <Link
                href="/candidates"
                className="inline-flex items-center gap-2 bg-[#c1262e] hover:bg-[#a61e25] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
              >
                <span>Candidate Portal</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Notice */}
      <section className="w-full bg-[#0c2230] text-white py-14 px-4 sm:px-6 lg:px-12 text-center">
        <div className="max-w-[850px] mx-auto flex flex-col items-center gap-4">
          <span className="bg-[#c1262e] text-white text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full">
            Anti-Fraud Advisory
          </span>
          <h2 className="font-bold text-2xl sm:text-3xl">
            Report Suspicious Activity or Fraudulent Agents
          </h2>
          <p className="text-white/80 text-sm leading-relaxed">
            Sanjana International does not authorize any informal sub-agents, brokers, or third parties to collect money on our behalf. All transactions and interviews must take place through our official Dhaka head office or Tokyo liaison.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <Link
              href="/contact"
              className="bg-[#c1262e] hover:bg-[#a61e25] text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Contact Ethics Officer
            </Link>
            <a
              href="mailto:info@sanjanahr.com"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Email: info@sanjanahr.com
            </a>
          </div>
        </div>
      </section>
    </SubPageShell>
  );
}
