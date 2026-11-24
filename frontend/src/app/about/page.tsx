import type { Metadata } from "next";
import Link from "next/link";
import SubPageShell from "@/components/SubPageShell";

export const metadata: Metadata = {
  title: "About Us | Sanjana International - RL-711 Recruitment Agency",
  description:
    "Building international employment opportunities through professional recruitment. Operating under RL-711, OTIT approved BGD000036, with over 16 years of management expertise.",
};

const values = [
  {
    title: "Integrity",
    desc: "Maintaining transparency, honesty, and strict ethical standards throughout the entire recruitment and selection process.",
    icon: "⚖️",
  },
  {
    title: "Quality",
    desc: "Rigorous trade testing, practical screening, and matching candidate capabilities accurately with employer requirements.",
    icon: "🎯",
  },
  {
    title: "Respect",
    desc: "Protecting the dignity, fundamental human rights, and long-term welfare of workers deployed overseas.",
    icon: "🤝",
  },
  {
    title: "Accountability",
    desc: "Maintaining dependable, responsible communication with both international employers and aspiring candidates.",
    icon: "🛡️",
  },
  {
    title: "Continuous Development",
    desc: "Actively supporting language mastery, technical skills upgrading, and lifelong professional growth for all trainees.",
    icon: "📈",
  },
];

const credentials = [
  {
    label: "Overseas Recruitment Licence",
    value: "RL-711",
    desc: "Authorized by Ministry of Expatriates' Welfare & Overseas Employment, Bangladesh",
  },
  {
    label: "OTIT Sending Organization",
    value: "BGD000036",
    desc: "Officially approved by Organization for Technical Intern Training, Japan",
  },
  {
    label: "Management Expertise",
    value: "16+ Years",
    desc: "Proven track record in cross-border staffing and workforce development",
  },
  {
    label: "Global Presence",
    value: "Dhaka & Tokyo",
    desc: "Head office in Dhaka and dedicated coordination office in Shibuya-ku, Tokyo",
  },
];

const team = [
  {
    name: "Mr. Junji Ueda",
    role: "Representative Director (Japan Operations)",
    location: "Tokyo, Japan",
    bio: "Decades of executive leadership in Japan's international workforce mobility and cross-border employer partnerships.",
  },
  {
    name: "Masahiro Kondo",
    role: "Manager, Sales & Client Relations",
    location: "Tokyo, Japan",
    bio: "Specializing in Japanese industrial employer coordination, SSW placements, and supervising organization relations.",
  },
  {
    name: "Md Mizanur Rahman",
    role: "Managing Director / Operations Head",
    location: "Dhaka, Bangladesh",
    bio: "Over 16 years directing technical trade testing, institutional compliance, and overseas deployment under RL-711.",
  },
];

export default function AboutPage() {
  return (
    <SubPageShell active="/about">
      {/* Hero Banner */}
      <section className="relative w-full bg-[#0c2230] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <img
          src="/images/japan-bridge.jpg"
          alt="About Sanjana International"
          className="absolute inset-0 size-full object-cover opacity-20 pointer-events-none"
        />
        <div className="relative max-w-[1520px] mx-auto flex flex-col items-center text-center">
          <span className="bg-[#c1262e] text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-4">
            Licence RL-711 · OTIT BGD000036
          </span>
          <h1 className="font-bold text-[32px] sm:text-[46px] lg:text-[56px] leading-tight max-w-[1000px]">
            Building International Employment Opportunities Through Professional Recruitment
          </h1>
          <p className="mt-5 text-white/80 text-base sm:text-xl max-w-[800px] leading-relaxed">
            Sanjana International is an international recruitment and overseas employment agency based in Dhaka, Bangladesh, dedicated to connecting qualified Bangladeshi workers and professionals with legitimate global opportunities.
          </p>
        </div>
      </section>

      {/* Overview & Corridor Focus */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-5">
            <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-[#fff5f5] px-3.5 py-1 rounded-full w-fit">
              Our Heritage &amp; Specialty
            </span>
            <h2 className="font-bold text-[#171b1c] text-[28px] sm:text-[40px] leading-tight">
              16+ Years of Management Excellence in Global Mobility
            </h2>
            <p className="text-[#686868] text-base sm:text-[17.5px] leading-relaxed">
              Operating under overseas recruitment licence <strong>RL-711</strong>, Sanjana International is committed to supporting employers through organized recruitment, candidate evaluation, practical technical trade assessments, and intensive workforce preparation.
            </p>
            <p className="text-[#686868] text-base sm:text-[17.5px] leading-relaxed">
              Our recruitment activities place particular emphasis on the <strong>Bangladesh–Japan employment corridor</strong>, where technical capabilities, Japanese language preparation, workplace discipline (5S, Hou-Ren-So), and cultural understanding are essential elements of successful workforce integration.
            </p>
            <div className="bg-[#fff5f5] border-l-4 border-[#c1262e] p-5 rounded-r-xl">
              <p className="font-medium text-[#171b1c] text-base">
                “We believe successful recruitment is not measured only by the number of workers deployed. It is measured by candidate suitability, employer satisfaction, ethical employment practices, and the long-term career growth of workers.”
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="/images/orientation.jpg"
                alt="Sanjana International Orientation"
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-bold text-2xl">Dhaka Headquarters &amp; Tokyo Office</p>
                  <p className="text-white/80 text-sm mt-1">
                    Bilingual coordination teams providing seamless support on both sending and receiving sides.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full bg-[#f8f9fa] py-16 sm:py-24 px-4 sm:px-6 lg:px-12 border-y border-black/5">
        <div className="max-w-[1520px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-black/5 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="size-14 rounded-2xl bg-[#c1262e] text-white flex items-center justify-center text-2xl font-bold mb-6">
              🎯
            </div>
            <h3 className="font-bold text-[#171b1c] text-[26px] mb-3">Our Mission</h3>
            <p className="text-[#686868] text-[17px] leading-relaxed">
              To connect qualified Bangladeshi talent with legitimate international employment opportunities through ethical recruitment, professional preparation, and dependable employer partnerships.
            </p>
          </div>

          <div className="bg-white border border-black/5 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="size-14 rounded-2xl bg-[#0c2230] text-white flex items-center justify-center text-2xl font-bold mb-6">
              🔭
            </div>
            <h3 className="font-bold text-[#171b1c] text-[26px] mb-3">Our Vision</h3>
            <p className="text-[#686868] text-[17px] leading-relaxed">
              To become a respected international recruitment and workforce solutions partner, recognized for responsible talent mobility, recruitment quality, and long-term sustainable relationships between employers and workers.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-[1520px] mx-auto flex flex-col gap-12">
          <div className="text-center max-w-[800px] mx-auto">
            <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-[#fff5f5] px-3.5 py-1 rounded-full">
              Ethical Foundation
            </span>
            <h2 className="font-bold text-[#171b1c] text-[30px] sm:text-[42px] leading-tight mt-2">
              Our Core Values
            </h2>
            <p className="text-[#686868] text-base sm:text-lg mt-2">
              Every step of our recruitment process is guided by five foundational commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-[#fffdfd] border border-black/10 rounded-2xl p-7 hover:border-[#c1262e]/40 transition-all flex flex-col gap-3"
              >
                <div className="text-3xl mb-1">{val.icon}</div>
                <h3 className="font-bold text-[#171b1c] text-xl">{val.title}</h3>
                <p className="text-[#686868] text-[15px] leading-relaxed">{val.desc}</p>
              </div>
            ))}
            <div className="bg-[#0c2230] rounded-2xl p-7 text-white flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#c1262e] font-bold">
                  Zero Exploitation
                </span>
                <h3 className="font-bold text-xl text-white mt-1">Our Pledge</h3>
                <p className="text-white/80 text-sm leading-relaxed mt-2">
                  We guarantee full contract transparency, official documentation, no inflated service charges, and unwavering respect for worker dignity.
                </p>
              </div>
              <Link
                href="/ethical-recruitment"
                className="text-white text-sm font-semibold underline mt-4 hover:text-[#c1262e] transition-colors"
              >
                Read our Ethical Charter →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Official Credentials Grid */}
      <section className="w-full bg-[#0c2230] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1520px] mx-auto flex flex-col gap-12">
          <div className="text-center max-w-[800px] mx-auto">
            <span className="bg-[#c1262e] text-white text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full">
              Legal Authorizations
            </span>
            <h2 className="font-bold text-[30px] sm:text-[42px] mt-3">
              Our Official Credentials
            </h2>
            <p className="text-white/80 text-base sm:text-lg mt-2">
              Recognized and audited by the competent government authorities in Bangladesh and Japan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((c, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#c1262e] font-bold">
                    {c.label}
                  </span>
                  <p className="font-extrabold text-white text-[28px] sm:text-[34px] leading-tight mt-1">
                    {c.value}
                  </p>
                </div>
                <p className="text-white/70 text-sm mt-4 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-[1520px] mx-auto flex flex-col gap-12">
          <div className="text-center max-w-[800px] mx-auto">
            <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-[#fff5f5] px-3.5 py-1 rounded-full">
              Leadership
            </span>
            <h2 className="font-bold text-[#171b1c] text-[30px] sm:text-[42px] leading-tight mt-2">
              Our Management Team
            </h2>
            <p className="text-[#686868] text-base sm:text-lg mt-2">
              Bilingual leaders in Tokyo and Dhaka driving responsible workforce placement and cross-border trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-[#f8f9fa] border border-black/5 rounded-2xl p-7 flex flex-col justify-between gap-5"
              >
                <div>
                  <div className="size-16 rounded-full bg-[#0c2230] text-white flex items-center justify-center font-bold text-xl mb-4">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <h3 className="font-bold text-[#171b1c] text-xl">{member.name}</h3>
                  <p className="text-[#c1262e] font-semibold text-sm mt-0.5">{member.role}</p>
                  <p className="text-xs text-[#888] font-medium mt-1">📍 {member.location}</p>
                  <p className="text-[#686868] text-sm mt-3 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full bg-[#c1262e] text-white py-14 px-4 sm:px-6 lg:px-12 text-center">
        <div className="max-w-[900px] mx-auto flex flex-col items-center gap-5">
          <h2 className="font-bold text-[28px] sm:text-[38px] leading-tight">
            Partner with Sanjana International
          </h2>
          <p className="text-white/90 text-base sm:text-lg leading-relaxed">
            Whether you are looking to hire vetted Bangladeshi talent or seeking an ethical path to working abroad, we invite you to connect with our recruitment directors.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <Link
              href="/employers"
              className="bg-white text-[#c1262e] font-bold px-7 py-3 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              For Employers: Request Manpower
            </Link>
            <Link
              href="/candidates"
              className="bg-[#0c2230] text-white font-bold px-7 py-3 rounded-xl hover:bg-[#151719] transition-colors shadow-lg"
            >
              For Candidates: Register
            </Link>
          </div>
        </div>
      </section>
    </SubPageShell>
  );
}
