import type { Metadata } from "next";
import Link from "next/link";
import SubPageShell from "@/components/SubPageShell";

export const metadata: Metadata = {
  title: "Industries We Serve | Sanjana International - Skilled & Technical Manpower",
  description:
    "Supplying vetted Bangladeshi workers across key global industries: manufacturing, construction, nursing care, agriculture, hospitality, automotive, food processing and IT under RL-711.",
};

const industries = [
  {
    title: "Manufacturing & Industrial",
    icon: "⚙️",
    image: "/images/manufacturing.jpg",
    roles: [
      "Production operators & assembly line workers",
      "CNC machine operators & lathe turners",
      "MIG/TIG/Arc certified welders & metal fabricators",
      "Quality control (QC) & precision inspection technicians",
      "Industrial electrical maintenance personnel",
    ],
    desc: "Rigorous trade-tested personnel for Japanese and global factories, trained in 5S shopfloor discipline and preventative machine safety.",
  },
  {
    title: "Construction & Infrastructure",
    icon: "🏗️",
    image: "/images/construction.jpg",
    roles: [
      "Scaffolding erectors & height safety specialists",
      "Rebar placement & formwork carpenters",
      "Concrete finishing & plastering trades",
      "Heavy equipment & earthmoving operators",
      "Site safety supervisors & civil draftspersons",
    ],
    desc: "Robust workers physically and technically prepared for modern civil works, high-rise buildings, and seismic-resistant construction.",
  },
  {
    title: "Caregiving & Healthcare (Kaigo)",
    icon: "🏥",
    image: "/images/caregiving.jpg",
    roles: [
      "Elderly care assistants & certified caregivers",
      "Assisted mobility & daily living aides",
      "Rehabilitation & physical exercise support staff",
      "Sanitation, nutrition & personal hygiene attendants",
      "Nursing home recreation & communication aides",
    ],
    desc: "Trained in Japanese elder-care empathy (Omotenashi), nursing terminology, patient transfer techniques, and vital signs monitoring.",
  },
  {
    title: "Agriculture & Farming",
    icon: "🌾",
    image: "/images/agriculture.jpg",
    roles: [
      "Greenhouse vegetable & hydroponic growers",
      "Fruit orchard pruning, picking & grading workers",
      "Dairy farm & livestock husbandry technicians",
      "Automated irrigation & soil management staff",
      "Post-harvest sorting & packaging handlers",
    ],
    desc: "Hardworking agrarian candidates knowledgeable in modern temperature-controlled greenhouses and Japanese farm sanitation.",
  },
  {
    title: "Hospitality & Food Service",
    icon: "🏨",
    image: "/images/hospitality.jpg",
    roles: [
      "Kitchen culinary assistants & line cooks",
      "Hotel front desk & bilingual reception staff",
      "Food service dining room attendants",
      "Housekeeping & luxury guestroom specialists",
      "Restaurant hygiene & inventory handlers",
    ],
    desc: "Customer-first professionals trained in hospitality etiquette, conversational Japanese, and HACCP hygiene standards.",
  },
  {
    title: "IT & Digital Technology",
    icon: "💻",
    image: "/images/it-engineering.jpg",
    roles: [
      "Full-stack, backend & frontend software developers",
      "Mobile app developers (iOS, Android, React Native)",
      "Cloud & DevOps engineers (AWS, Azure, Docker)",
      "CAD & BIM specialists (AutoCAD, Revit, Tekla)",
      "QA testers & cybersecurity engineers",
    ],
    desc: "University-educated software engineers and CAD specialists equipped for remote or on-site enterprise engineering in Japan.",
  },
  {
    title: "Automobile Maintenance & Repair",
    icon: "🚗",
    image: "/images/auto-repair.jpg",
    roles: [
      "Certified automobile mechanics & engine technicians",
      "Vehicle electronic diagnostic technicians",
      "Auto body dent repair & spray painters",
      "Tire fitting, wheel balancing & alignment specialists",
      "Preventative maintenance inspection crew",
    ],
    desc: "Technicians trained on modern Japanese vehicle platforms, OBD-II scanner diagnostics, and meticulous workshop hygiene.",
  },
  {
    title: "Food & Beverage Processing",
    icon: "🍱",
    image: "/images/food-processing.jpg",
    roles: [
      "Cleanroom food packaging & sorting operators",
      "Bakery & confectionery production workers",
      "Meat, poultry & seafood processing handlers",
      "Sanitary bottling & beverage filling technicians",
      "HACCP compliance & quality assurance workers",
    ],
    desc: "Thoroughly briefed on rigorous Japanese food safety protocols, temperature logs, allergen management, and cleanroom apparel.",
  },
  {
    title: "Logistics, Warehousing & Distribution",
    icon: "📦",
    image: "/images/logistics.jpg",
    roles: [
      "Certified forklift operators (counterbalance & reach)",
      "Warehouse pick-and-pack inventory handlers",
      "Barcode scanning & shipping documentation staff",
      "Cold-storage material handlers",
      "Freight loading & dispatch coordinators",
    ],
    desc: "Dependable warehouse personnel focused on inventory accuracy, high-speed sorting, and zero-accident material handling.",
  },
];

export default function IndustriesPage() {
  return (
    <SubPageShell active="/industries">
      {/* Hero */}
      <section className="relative w-full bg-[#0c2230] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <img
          src="/images/manufacturing.jpg"
          alt="Industries We Serve"
          className="absolute inset-0 size-full object-cover opacity-20 pointer-events-none"
        />
        <div className="relative max-w-[1520px] mx-auto flex flex-col items-center text-center">
          <span className="bg-[#c1262e] text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-4">
            RL-711 Industry Portfolios
          </span>
          <h1 className="font-bold text-[32px] sm:text-[46px] lg:text-[56px] leading-tight max-w-[1050px]">
            Industries We Serve Across Japan &amp; Global Markets
          </h1>
          <p className="mt-5 text-white/80 text-base sm:text-xl max-w-[850px] leading-relaxed">
            From heavy manufacturing and civil construction to nursing care, IT engineering, and food processing — supplying rigorously vetted, trade-tested Bangladeshi manpower.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-[1520px] mx-auto flex flex-col gap-12">
          <div className="text-center max-w-[850px] mx-auto">
            <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-[#fff5f5] px-3.5 py-1 rounded-full">
              Core Competencies
            </span>
            <h2 className="font-bold text-[#171b1c] text-[30px] sm:text-[42px] leading-tight mt-2">
              Tailored Sourcing for Diverse Industrial Demands
            </h2>
            <p className="text-[#686868] text-base sm:text-lg mt-2">
              Each industry track includes tailored practical trade assessments, destination-specific safety guidelines, and relevant Japanese technical vocabulary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="bg-[#f8f9fa] border border-black/5 rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={ind.image}
                      alt={ind.title}
                      className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur size-10 rounded-xl flex items-center justify-center text-xl shadow">
                      {ind.icon}
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="font-bold text-[#171b1c] text-2xl mb-2 group-hover:text-[#c1262e] transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-[#686868] text-sm leading-relaxed mb-5">
                      {ind.desc}
                    </p>

                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#171b1c] mb-2.5">
                      Key Personnel Supplied:
                    </h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-[#444]">
                      {ind.roles.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#c1262e] font-bold">✓</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/employers"
                    className="block text-center bg-white border border-black/10 hover:border-[#c1262e] hover:text-[#c1262e] font-semibold py-2.5 px-4 rounded-xl text-xs sm:text-sm transition-colors"
                  >
                    Request {ind.title} Workers →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Testing & Certification Guarantee */}
      <section className="w-full bg-[#0c2230] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col gap-4 max-w-[700px]">
            <span className="bg-[#c1262e] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-fit">
              Quality Assurance
            </span>
            <h2 className="font-bold text-[28px] sm:text-[38px] leading-tight">
              100% Trade-Tested &amp; Medically Cleared
            </h2>
            <p className="text-white/80 text-base leading-relaxed">
              We never supply unverified candidates. Every worker completes practical trade tests supervised by experienced technical engineers, authorized medical examinations, and pre-departure workplace orientation before boarding their flight.
            </p>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row gap-4">
            <Link
              href="/employers"
              className="bg-[#c1262e] hover:bg-[#a61e25] text-white font-bold px-7 py-3.5 rounded-xl transition-colors shadow-lg text-center"
            >
              Hire for Your Industry
            </Link>
            <Link
              href="/training"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl transition-colors text-center"
            >
              View Training Centre
            </Link>
          </div>
        </div>
      </section>
    </SubPageShell>
  );
}
