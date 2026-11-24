import type { Metadata } from "next";
import Link from "next/link";
import SubPageShell from "@/components/SubPageShell";

export const metadata: Metadata = {
  title: "Our Services | Sanjana International - Global Workforce Solutions",
  description:
    "Comprehensive manpower recruitment services from Bangladesh. Japan SSW, TITP, IT & engineering, skilled trades, language training, and deployment coordination under Recruiting Licence (RL-711).",
};

const services = [
  {
    id: "international-manpower",
    number: "01",
    title: "International Manpower Recruitment",
    summary:
      "Structured candidate sourcing and recruitment for skilled, semi-skilled, and technical occupational categories for international employers.",
    image: "/images/manufacturing.jpg",
    items: [
      "Workforce requirement & job description assessment",
      "Candidate sourcing, nationwide database access & shortlisting",
      "Technical skill assessments and trade test coordination",
      "Authorized medical examination and fitness screening",
      "Employment documentation, contract verification & visa filing",
      "Pre-departure preparation, orientation & deployment logistics",
    ],
    ctaText: "Inquire About Manpower",
    ctaHref: "/employers",
  },
  {
    id: "japan-recruitment",
    number: "02",
    title: "Japan Recruitment Services",
    summary:
      "Specialized recruitment coordination between Bangladesh and Japan under government-approved frameworks and bilateral sending-organization standards.",
    image: "/images/japan-bridge.jpg",
    items: [
      "Specified Skilled Worker (SSW Type-1 & Type-2) recruitment",
      "Technical Intern Training Program (TITP) sending-organization support",
      "Manufacturing & precision engineering talent",
      "Construction, civil infrastructure & technical workers",
      "Hospitality, accommodation & food-service personnel",
      "Bilingual support from our Shibuya, Tokyo contact office",
    ],
    ctaText: "Explore Japan Programs",
    ctaHref: "/japan",
  },
  {
    id: "it-engineering",
    number: "03",
    title: "IT & Engineering Recruitment",
    summary:
      "Connecting global technology companies and Japanese enterprises with qualified digital and engineering professionals from Bangladesh.",
    image: "/images/it-engineering.jpg",
    items: [
      "Software engineers (Full-Stack, Backend, Frontend, Mobile)",
      "Cloud, DevOps, Network & Infrastructure specialists",
      "Civil & Structural engineers with CAD / BIM proficiency",
      "Mechanical & Electrical engineers for industrial automation",
      "Technical portfolio reviews and rigorous coding evaluations",
      "Japanese workplace communication & Engineer Visa filing",
    ],
    ctaText: "Hire Tech Specialists",
    ctaHref: "/japan/it-engineering",
  },
  {
    id: "skilled-trades",
    number: "04",
    title: "Skilled & Semi-Skilled Workforce",
    summary:
      "Sourcing reliable, hard-working candidates across core productive industries, thoroughly vetted for occupational competence.",
    image: "/images/construction.jpg",
    items: [
      "Industrial manufacturing, machine operation & assembly lines",
      "Construction trades (scaffolding, formwork, rebar, finishing)",
      "Agriculture, horticulture, dairy & greenhouse farming",
      "Food and beverage processing & cold chain hygiene",
      "Automobile maintenance, repair & vehicle diagnostics",
      "Warehousing, material handling & logistics operations",
    ],
    ctaText: "View Industries",
    ctaHref: "/industries",
  },
  {
    id: "candidate-training",
    number: "05",
    title: "Candidate Training & Preparation",
    summary:
      "Emphasizing workforce readiness through intensive Japanese language acquisition, professional discipline, and technical trade upgrading.",
    image: "/images/training-classroom.jpg",
    items: [
      "Japanese language programs (JLPT N5, N4, N3 & JFT-Basic A2)",
      "Technical workshop trade skills & machine safety awareness",
      "Workplace discipline, punctuality & 5S methodology",
      "Japanese business culture, etiquette & Hou-Ren-So communication",
      "Pre-departure destination orientation & accommodation readiness",
      "Employment rights, contract awareness & financial education",
    ],
    ctaText: "Training Programs",
    ctaHref: "/training",
  },
  {
    id: "coordination-deployment",
    number: "06",
    title: "Recruitment Coordination & Deployment",
    summary:
      "End-to-end procedural support ensuring full compliance with destination-country immigration requirements and Bangladeshi regulatory authorities.",
    image: "/images/orientation.jpg",
    items: [
      "Employer demand letter verification & embassy attestation",
      "Certificate of Eligibility (COE) and visa application management",
      "Authorized medical checks at GAMCA / embassy-approved clinics",
      "Bureau of Manpower, Employment and Training (BMET) smart-card clearance",
      "Flight scheduling, airport departure assistance & transit coordination",
      "Post-arrival monitoring and periodic employer feedback reviews",
    ],
    ctaText: "Consult Our Team",
    ctaHref: "/contact",
  },
];

export default function ServicesPage() {
  return (
    <SubPageShell active="/services">
      {/* Hero Banner */}
      <section className="relative w-full bg-[#0c2230] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <img
          src="/images/manufacturing.jpg"
          alt="International Recruitment Services"
          className="absolute inset-0 size-full object-cover opacity-20 pointer-events-none"
        />
        <div className="relative max-w-[1520px] mx-auto flex flex-col items-center text-center">
          <span className="bg-[#c1262e] text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-4">
            Recruiting Licence (RL-711) Authorized Services
          </span>
          <h1 className="font-bold text-[32px] sm:text-[46px] lg:text-[56px] leading-tight max-w-[1000px]">
            International Recruitment &amp; Global Workforce Solutions
          </h1>
          <p className="mt-5 text-white/80 text-base sm:text-xl max-w-[820px] leading-relaxed">
            Sanjana International provides comprehensive manpower sourcing and recruitment solutions for global employers, combining candidate evaluation, technical assessments, and ethical deployment from Bangladesh.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-[1520px] mx-auto flex flex-col gap-16 sm:gap-20">
          {services.map((svc, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={svc.id}
                id={svc.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content Column */}
                <div className={`lg:col-span-7 flex flex-col gap-4 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="flex items-center gap-3">
                    <span className="bg-[#c1262e] text-white font-bold text-sm px-3 py-1 rounded-lg">
                      {svc.number}
                    </span>
                    <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider">
                      Service Category
                    </span>
                  </div>

                  <h2 className="font-bold text-[#171b1c] text-[26px] sm:text-[36px] leading-tight">
                    {svc.title}
                  </h2>

                  <p className="text-[#686868] text-base sm:text-lg leading-relaxed">
                    {svc.summary}
                  </p>

                  <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-black/5 mt-2">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-[#171b1c] mb-3">
                      Scope of Services &amp; Capabilities:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {svc.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#444]">
                          <span className="text-[#c1262e] font-bold">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={svc.ctaHref}
                      className="inline-flex items-center gap-2 bg-[#c1262e] hover:bg-[#a61e25] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors shadow-md"
                    >
                      <span>{svc.ctaText}</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>

                {/* Image Column */}
                <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="size-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                      <p className="text-white font-bold text-lg drop-shadow">
                        {svc.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Need a Reliable Partner CTA Section */}
      <section className="w-full bg-[#f8f9fa] py-16 sm:py-24 px-4 sm:px-6 lg:px-12 border-t border-black/5">
        <div className="max-w-[1100px] mx-auto bg-white border border-black/10 rounded-3xl p-8 sm:p-14 shadow-xl flex flex-col items-center text-center gap-6">
          <span className="bg-[#fff5f5] text-[#c1262e] border border-[#c1262e]/20 text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
            Start Your Recruitment Consultation
          </span>
          <h2 className="font-bold text-[#171b1c] text-[28px] sm:text-[42px] leading-tight max-w-[800px]">
            Need a Reliable Recruitment Partner?
          </h2>
          <p className="text-[#686868] text-base sm:text-lg max-w-[700px] leading-relaxed">
            Share your workforce requirements with Sanjana International. Our bilingual directors and technical assessment team will discuss your vacancies and propose an appropriate candidate sourcing and selection plan.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <Link
              href="/employers"
              className="bg-[#c1262e] hover:bg-[#a61e25] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-colors text-base"
            >
              Request Manpower Recruitment Services
            </Link>
            <Link
              href="/contact"
              className="bg-[#0c2230] hover:bg-[#151719] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-colors text-base"
            >
              Speak with Our Recruiters
            </Link>
          </div>
        </div>
      </section>
    </SubPageShell>
  );
}
