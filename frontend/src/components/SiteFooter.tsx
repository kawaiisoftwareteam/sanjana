import React from "react";
import Link from "next/link";

const imgSubtract1 = "/figma/5196c.svg";
const imgGemini = "/figma/f710d.png";

export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#0d0d0c] pt-14 sm:pt-20 pb-10 px-4 sm:px-6 lg:px-12 text-[#a7a9ac] border-t border-white/5 font-['Inter',sans-serif]">
      <div className="max-w-[1760px] mx-auto flex flex-col gap-12">
        {/* Top Section with Agency Credentials Banner */}
        <div className="bg-[#151719] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="bg-[#c1262e] text-white font-bold text-xs uppercase px-2.5 py-1 rounded">
                RL-711 Licensed
              </span>
              <span className="text-white font-semibold text-[15px] sm:text-[17px]">
                Sanjana International · Dhaka &amp; Tokyo
              </span>
              <span className="text-xs bg-white/10 text-white/90 px-2 py-0.5 rounded">
                OTIT Sending Org: BGD000036
              </span>
            </div>
            <p className="text-sm text-[#bec1c7] mt-1 max-w-[800px]">
              With over 16 years of management expertise, government-recognized recruitment credentials (RL-711), and a specialized focus on Bangladesh–Japan workforce mobility, we provide ethical, high-quality recruitment solutions.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/employers"
              className="bg-[#c1262e] hover:bg-[#a61e25] text-white text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-lg transition-colors"
            >
              Hire Talent
            </Link>
            <Link
              href="/candidates"
              className="bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-lg transition-colors"
            >
              Candidate Portal
            </Link>
          </div>
        </div>

        {/* 4 Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Agency & Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="font-['Arimo',sans-serif] font-bold text-[#e4e4e5] text-[15px] uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5 text-[15px]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us &amp; Mission
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link href="/training" className="hover:text-white transition-colors">
                  Training &amp; Preparation
                </Link>
              </li>
              <li>
                <Link href="/ethical-recruitment" className="hover:text-white transition-colors">
                  Ethical Recruitment Principles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Offices
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Japan Programs */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="font-['Arimo',sans-serif] font-bold text-[#e4e4e5] text-[15px] uppercase tracking-wider">
              Japan Programs
            </h3>
            <ul className="flex flex-col gap-2.5 text-[15px]">
              <li>
                <Link href="/japan" className="hover:text-white transition-colors">
                  Bangladesh to Japan Gateway
                </Link>
              </li>
              <li>
                <Link href="/japan/ssw" className="hover:text-white transition-colors">
                  Specified Skilled Worker (SSW)
                </Link>
              </li>
              <li>
                <Link href="/japan/titp" className="hover:text-white transition-colors">
                  Technical Intern Training (TITP)
                </Link>
              </li>
              <li>
                <Link href="/japan/it-engineering" className="hover:text-white transition-colors">
                  IT &amp; Engineering Recruitment
                </Link>
              </li>
              <li>
                <Link href="/japan/titp#esd-transition" className="hover:text-white transition-colors">
                  2027 ESD Program Transition
                </Link>
              </li>
              <li>
                <Link href="/training" className="hover:text-white transition-colors">
                  Japanese Language &amp; Culture Prep
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: For Employers & Candidates */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="font-['Arimo',sans-serif] font-bold text-[#e4e4e5] text-[15px] uppercase tracking-wider">
              Opportunities
            </h3>
            <ul className="flex flex-col gap-2.5 text-[15px]">
              <li>
                <Link href="/employers" className="hover:text-white transition-colors">
                  For Employers
                </Link>
              </li>
              <li>
                <Link href="/employers#hiring-request" className="hover:text-white transition-colors">
                  Submit Manpower Needs
                </Link>
              </li>
              <li>
                <Link href="/candidates" className="hover:text-white transition-colors">
                  For Job Candidates
                </Link>
              </li>
              <li>
                <Link href="/candidates#register" className="hover:text-white transition-colors">
                  Candidate Registration
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:text-white transition-colors">
                  Current Job Board
                </Link>
              </li>
              <li>
                <Link href="/ethical-recruitment" className="hover:text-white transition-colors">
                  Worker Rights &amp; Standards
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Offices & Contact */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col gap-4">
            <h3 className="font-['Arimo',sans-serif] font-bold text-[#e4e4e5] text-[15px] uppercase tracking-wider">
              Global Offices
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <div className="border-l-2 border-[#c1262e] pl-3 py-0.5">
                <p className="font-semibold text-white">Dhaka Head Office (Bangladesh)</p>
                <p className="text-[#a7a9ac] leading-relaxed">
                  Shatabdi Center, 292 Inner Circular Road, 6-G (6th Floor), Fakirapool, Dhaka-1000
                </p>
                <p className="text-white/80 mt-1">
                  Tel: +880 1901-850573 · +880 2-55123797
                </p>
              </div>

              <div className="border-l-2 border-white/30 pl-3 py-0.5 mt-1">
                <p className="font-semibold text-white">Japan Coordination Office (Tokyo)</p>
                <p className="text-[#a7a9ac] leading-relaxed">
                  433 Soft Town Aoyama, 3-1-24 Jingumae, Shibuya-ku, Tokyo 150-0001
                </p>
                <p className="text-xs text-[#8e9094] mt-0.5">
                  〒150-0001 東京都渋谷区神宮前 3-1-24 ソフトタウン青山 433
                </p>
                <p className="text-white/80 mt-1">
                  Tel: 03-6910-5465 · Cell: +81 90-5343-5325
                </p>
              </div>

              <div className="mt-2 text-xs text-[#8e9094]">
                Email:{" "}
                <a href="mailto:info@sanjanahr.com" className="text-white hover:underline">
                  info@sanjanahr.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Large Brand & Graphic */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pt-4 border-t border-white/10">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="grid grid-cols-[max-content] grid-rows-[max-content] leading-none place-items-start relative shrink-0">
              <div className="col-start-1 row-start-1 h-[60px] sm:h-[80px] lg:h-[100px] w-[62px] sm:w-[84px] lg:w-[104px] relative">
                <img alt="" className="size-full object-contain" src={imgSubtract1} />
              </div>
              <div className="col-start-1 row-start-1 flex h-[60px] sm:h-[80px] lg:h-[100px] items-center justify-center ml-[64px] sm:ml-[88px] lg:ml-[110px] w-[14px]">
                <div className="-rotate-90 flex-none">
                  <span className="font-['Poppins',sans-serif] text-white text-[5px] sm:text-[7px] lg:text-[9px] tracking-[1px] whitespace-nowrap block">
                    SANJANA INTERNATIONAL
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-['Poppins',sans-serif] font-semibold leading-none text-[28px] sm:text-[40px] lg:text-[52px]">
              <span className="text-white -mb-1">Sanjana</span>
              <span className="text-[#c1262e]">International</span>
            </div>
          </div>

          <div className="w-full max-w-[280px] sm:max-w-[320px] aspect-[493/328] relative rounded-xl overflow-hidden hidden sm:block">
            <img
              alt="Sanjana International Global Reach"
              className="size-full object-cover opacity-80"
              src={imgGemini}
            />
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/10 text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} Sanjana International · All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Govt. Recruitment Licence: RL-711</span>
            <span>•</span>
            <span>OTIT Sending Org: BGD000036</span>
          </div>
          <p className="text-white/60">Connecting Talent · Creating Opportunities · Building Global Careers</p>
        </div>
      </div>
    </footer>
  );
}
