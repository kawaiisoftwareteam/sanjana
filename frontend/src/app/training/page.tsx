import type { Metadata } from "next";
import Link from "next/link";
import SubPageShell from "@/components/SubPageShell";

export const metadata: Metadata = {
  title: "Training & Development | Sanjana International - Workforce Readiness",
  description:
    "Preparing Bangladeshi talent for global employment through Japanese language instruction (JLPT/JFT), technical trade assessments, 5S culture, and pre-departure orientation under Recruiting Licence (RL-711).",
};

const trainingModules = [
  {
    title: "Japanese Language Preparation",
    subtitle: "Linguistic Fluency for the Japanese Workplace",
    icon: "🇯🇵",
    image: "/images/training-classroom.jpg",
    desc: "Language preparation is critical for smooth integration into Japanese factories, construction sites, and healthcare facilities.",
    curriculum: [
      "JLPT N5 to N3 grammar, vocabulary & kanji courses",
      "JFT-Basic A2 test-taking strategies & computer mocks",
      "Job-specific technical & safety vocabulary (safety signs, tools)",
      "Daily workplace conversation & comprehension of supervisor orders",
      "Japanese employer interview simulation & self-introduction (Jikoshoukai)",
      "Interactive listening drills and pronunciation corrections",
    ],
  },
  {
    title: "Japanese Workplace Culture & Etiquette",
    subtitle: "Instilling Discipline, Punctuality & Respect",
    icon: "🤝",
    image: "/images/orientation.jpg",
    desc: "Japanese enterprises place extraordinary value on harmony, punctuality, and clear protocol. We train candidates to excel from day one.",
    curriculum: [
      "Punctuality & zero tardiness culture (arrive 15 mins prior)",
      "Hou-Ren-So methodology: Hokoku (Report), Renraku (Contact), Sodan (Consult)",
      "5S Shopfloor Discipline: Seiri, Seiton, Seiso, Seiketsu, Shitsuke",
      "Aisatsu (workplace greetings), bowing etiquette & respectful honorifics",
      "Kiken Yochi Training (KYT) hazard prediction and proactive safety drills",
      "Harmonious dormitory living, waste sorting & neighborhood etiquette",
    ],
  },
  {
    title: "Technical & Occupational Preparation",
    subtitle: "Hands-on Trade Competence & Practical Testing",
    icon: "⚙️",
    image: "/images/trade-test.jpg",
    desc: "Ensuring candidates possess genuine, proven practical capabilities before being deployed abroad.",
    curriculum: [
      "Hands-on trade testing in simulated engineering workshops",
      "Industrial machinery operation & basic preventive maintenance",
      "Construction safety, harness inspection & scaffolding safety",
      "Quality control inspection, precision caliper & micrometer use",
      "Manufacturing assembly workflows & error prevention",
      "Prometric SSW industry test practice and mock evaluations",
    ],
  },
  {
    title: "Pre-Departure Orientation (PDO)",
    subtitle: "Legal Awareness, Rights & Destination Readiness",
    icon: "✈️",
    image: "/images/japan-bridge.jpg",
    desc: "Empowering every worker with complete knowledge of their employment terms, legal rights, and support infrastructure.",
    curriculum: [
      "Detailed review of employment contract, working hours, and wage slips",
      "Understanding deductions (tax, social insurance, pension, housing)",
      "Japanese laws, immigration regulations & visa compliance",
      "Emergency procedures, healthcare access, and hospital visits",
      "Sending & receiving organization contact points in Tokyo and Dhaka",
      "Financial literacy, safe remittance through banking channels & savings",
    ],
  },
];

export default function TrainingPage() {
  return (
    <SubPageShell active="/training">
      {/* Hero */}
      <section className="relative w-full bg-[#0c2230] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <img
          src="/images/training-classroom.jpg"
          alt="Workforce Training and Development"
          className="absolute inset-0 size-full object-cover opacity-20 pointer-events-none"
        />
        <div className="relative max-w-[1520px] mx-auto flex flex-col items-center text-center">
          <span className="bg-[#c1262e] text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-4">
            Candidate Preparation Center · Recruiting Licence (RL-711)
          </span>
          <h1 className="font-bold text-[32px] sm:text-[46px] lg:text-[56px] leading-tight max-w-[1050px]">
            Training &amp; Development for International Workforce Readiness
          </h1>
          <p className="mt-5 text-white/80 text-base sm:text-xl max-w-[850px] leading-relaxed">
            International recruitment requires more than identifying available workers. Workers must understand the communication, technical standards, safety practices, and cultural expectations of Japan.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link
              href="/contact"
              className="bg-[#c1262e] hover:bg-[#a61e25] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-colors text-base"
            >
              Enquire About Candidate Training
            </Link>
            <Link
              href="/candidates"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-colors text-base"
            >
              Register for Training Courses
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Training */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-[1520px] mx-auto flex flex-col gap-16">
          <div className="text-center max-w-[850px] mx-auto">
            <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-[#fff5f5] px-3.5 py-1 rounded-full">
              Readiness Framework
            </span>
            <h2 className="font-bold text-[#171b1c] text-[30px] sm:text-[42px] leading-tight mt-2">
              Four Comprehensive Training Pillars
            </h2>
            <p className="text-[#686868] text-base sm:text-lg mt-2">
              We cultivate well-rounded, disciplined professionals ready to integrate seamlessly into Japanese and international companies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {trainingModules.map((mod, idx) => (
              <div
                key={idx}
                className="bg-[#f8f9fa] border border-black/5 rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={mod.image}
                      alt={mod.title}
                      className="size-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-xl flex items-center gap-2 shadow">
                      <span className="text-xl">{mod.icon}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#171b1c]">
                        Pillar {idx + 1}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="font-bold text-[#171b1c] text-2xl mb-1">{mod.title}</h3>
                    <p className="text-[#c1262e] font-semibold text-sm mb-3">{mod.subtitle}</p>
                    <p className="text-[#686868] text-sm leading-relaxed mb-6">{mod.desc}</p>

                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#171b1c] mb-3">
                      Curriculum Highlights:
                    </h4>
                    <ul className="space-y-2 text-sm text-[#444]">
                      {mod.curriculum.map((c, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-[#c1262e] font-bold">✓</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <div className="bg-[#fff5f5] border border-[#c1262e]/20 rounded-xl p-3.5 text-xs text-[#c1262e] font-medium text-center">
                    Taught by native &amp; JLPT certified bilingual instructors
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prepare Better. Work Confidently. */}
      <section className="w-full bg-[#0c2230] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-6">
          <span className="bg-[#c1262e] text-white text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full">
            Our Motto
          </span>
          <h2 className="font-bold text-[32px] sm:text-[46px] leading-tight">
            Prepare Better. Work Confidently. Build a Global Career.
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-[800px] leading-relaxed">
            By taking preparation seriously, we protect both the candidate and employer. Candidates arrive with confidence in their language, pride in their trade, and a clear understanding of workplace expectations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <Link
              href="/contact"
              className="bg-[#c1262e] hover:bg-[#a61e25] text-white font-bold px-8 py-3.5 rounded-xl transition-colors shadow-lg"
            >
              Enquire About Candidate Training
            </Link>
            <Link
              href="/employers"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3.5 rounded-xl transition-colors"
            >
              Request Custom Employer Batch
            </Link>
          </div>
        </div>
      </section>
    </SubPageShell>
  );
}
