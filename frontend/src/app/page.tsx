"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const assetPathPrefix = "/figma";
const imgRectangle58 = `${assetPathPrefix}/1afeb.png`;
const imgEllipse1534 = `${assetPathPrefix}/9c025.png`;
const imgEllipse1535 = `${assetPathPrefix}/13a89.png`;
const imgCalendarIcon = `${assetPathPrefix}/4cd7d.png`;
const imgFrame4675 = `${assetPathPrefix}/21a21.png`;
const imgSvg = `${assetPathPrefix}/16862.svg`;
const imgSvg1 = `${assetPathPrefix}/23dcd.svg`;
const imgCircleCheck = `${assetPathPrefix}/70b9c.svg`;
const imgCircleCheck1 = `${assetPathPrefix}/662dc.svg`;
const imgFi9421732 = `${assetPathPrefix}/72bff.svg`;
const imgGroup = `${assetPathPrefix}/d9241.svg`;
const imgFi18301594 = `${assetPathPrefix}/808df.svg`;
const imgPhone = `${assetPathPrefix}/bcaf0.svg`;
const imgMinus = `${assetPathPrefix}/0dc59.svg`;
const imgPlus = `${assetPathPrefix}/bedd3.svg`;
const imgBriefcaseBusiness = `${assetPathPrefix}/3d256.svg`;
const imgArrowRight1 = `${assetPathPrefix}/56e29.svg`;
const imgPlane = `${assetPathPrefix}/0d4d1.svg`;
const imgArrowRight2 = `${assetPathPrefix}/cf42c.svg`;
const imgFrame = `${assetPathPrefix}/54cd2.svg`;
const imgFrame1 = `${assetPathPrefix}/baabe.svg`;
const imgFrame2 = `${assetPathPrefix}/dd972.svg`;
const imgFrame3 = `${assetPathPrefix}/dd2b3.svg`;
const imgFrame4 = `${assetPathPrefix}/57f2c.svg`;
const imgFrame5 = `${assetPathPrefix}/09298.svg`;
const imgCheck1 = `${assetPathPrefix}/e9e2f.svg`;
const imgCheck2 = `${assetPathPrefix}/d8c87.svg`;

const heroSlides = [
  {
    image: "/hero/civil-engineer-construction-worker-architects-wearing-hardhats-safety-vests-are-working-together-construction-site-building-home-cooperation-teamwork-concept.jpg",
    title: "Career in Japan.",
    fontClass: "font-['Playfair',Georgia,serif] font-medium tracking-tight",
    fontSize: "text-[clamp(2.5rem,7.5vw,8.5rem)]",
    subtitle:
      "Your trusted recruitment partner for skilled professionals, technical specialists, and workforce solutions across international markets.",
    accent: "text-white",
  },
  {
    image: "/hero/female-is-picking-strawberries-greenhouse.jpg",
    title: "Build Your Future in Tokyo",
    fontClass: "font-['Poppins',sans-serif] font-bold tracking-tight",
    fontSize: "text-[clamp(2rem,6vw,6.75rem)]",
    subtitle:
      "Government-approved language & technical training programs tailored for high-demand careers in Japan.",
    accent: "text-white",
  },
  {
    image: "/hero/nurse-old-woman-looking-window.jpg",
    title: "YOUR GATEWAY TO EXCELLENCE",
    fontClass: "font-['Cinzel',serif] font-bold tracking-wider",
    fontSize: "text-[clamp(1.75rem,4.75vw,5.5rem)]",
    subtitle:
      "Connecting ambitious professionals with premier Japanese employers and rewarding lifelong opportunities.",
    accent: "text-white",
  },
];

const selectionSteps = [
  {
    step: "01",
    title: "Employer Assessment",
    description:
      "Step 1: We understand the employer's workforce needs, job descriptions, qualifications, salary, and requirements.",
    icon: imgFrame5,
  },
  {
    step: "02",
    title: "Sourcing & Screening",
    description:
      "Step 2: We identify suitable candidates and evaluate their qualifications, experience, and professional suitability.",
    icon: imgFrame,
  },
  {
    step: "03",
    title: "Trade Testing",
    description:
      "Step 3: Candidates undergo relevant practical trade assessments and technical interviews with qualified engineers.",
    icon: imgFrame4,
  },
  {
    step: "04",
    title: "Medical & Docs",
    description:
      "Step 4: Selected candidates proceed through authorized medical checks, document verification, and formalities.",
    icon: imgFrame3,
  },
  {
    step: "05",
    title: "Training & Orientation",
    description:
      "Step 5: Candidates receive language training, workplace culture orientation, and destination country guidance.",
    icon: imgFrame2,
  },
  {
    step: "06",
    title: "Deployment",
    description:
      "Step 6: We coordinate departure formalities, flight schedules, and visa procedures with employers and candidates.",
    icon: imgFrame1,
  },
];

const whyChooseItems = [
  {
    title: "1. Licensed Recruitment Agency",
    description:
      "Sanjana International operates under Bangladesh Recruiting Licence (RL-711). We are committed to conducting recruitment activities in strict accordance with applicable government requirements and ethical international standards.",
  },
  {
    title: "2. More Than 16 Years of Management Expertise",
    description:
      "Our management experience supports a professional approach to international recruitment, employer coordination, and workforce development across diverse industrial fields.",
  },
  {
    title: "3. Structured Candidate Screening",
    description:
      "Our thorough evaluation process includes document verification, in-depth interviews, technical assessments, practical trade testing by qualified engineers, and authorized medical fitness checks.",
  },
  {
    title: "4. Japan-Focused Recruitment Expertise",
    description:
      "We understand the importance of Japanese workplace expectations, professional discipline, communication etiquette (Hou-Ren-So, 5S), and thorough cultural preparation.",
  },
  {
    title: "5. Training & Pre-Departure Preparation",
    description:
      "We emphasize appropriate Japanese language preparation (JLPT N4, JFT-Basic A2), workplace orientation, and candidate awareness before international deployment.",
  },
  {
    title: "6. Employer-Oriented Recruitment",
    description:
      "We organize candidate selection strictly around the employer's job specifications, required technical competencies, work environment, and organizational goals.",
  },
];

const faqs = [
  {
    q: "What is Sanjana International's recruitment licence number?",
    a: "Sanjana International is officially licensed by the Ministry of Expatriates' Welfare and Overseas Employment, Government of Bangladesh under Recruiting Licence (RL-711). We are also listed in Japan's OTIT approved sending-organization records under BGD000036.",
  },
  {
    q: "How do I apply for the Specified Skilled Worker (SSW) program in Japan?",
    a: "Candidates must pass an accepted Japanese language examination (such as JLPT N4 or JFT-Basic A2) and the relevant industry skills evaluation examination. Sanjana International provides screening, training guidance, employer interviews, and visa coordination.",
  },
  {
    q: "What services do you offer for international employers?",
    a: "We provide end-to-end recruitment solutions: requirement analysis, candidate sourcing, practical trade testing, authorized medical examinations, COE and visa paperwork, pre-departure training, and deployment coordination.",
  },
  {
    q: "What job sectors do you specialize in for Japan and international placement?",
    a: "Our primary sectors include Nursing Care, Building Cleaning, Construction, Industrial Product Manufacturing, Food & Beverage Processing, Hospitality, Agriculture, Automobile Maintenance, and IT & Engineering specialists.",
  },
  {
    q: "What is the status of the TITP transition to the new ESD system in Japan?",
    a: "Japan has legislated a new Employment for Skill Development (ESD / 育成就労) system scheduled to replace the Technical Intern Training Program (TITP) by 2027. Sanjana International actively tracks these regulatory updates to ensure smooth, compliant pathways for employers and workers.",
  },
  {
    q: "What is your commitment to ethical recruitment?",
    a: "We practice zero misleading promises, transparent contracts, worker rights protection, lawful working conditions, and complete disclosure of terms. We never make false guarantees about visas or employment.",
  },
];

const testimonials = [
  {
    company: "Eco Zone Engineering",
    logo: imgFi9421732,
    isDarkLogoBg: false,
    quote:
      "“Working with Sanjana International was a seamless experience from start to finish. Their team understood our technical requirements, delivered reliable candidates, and handled every compliance step. The quality, communication, and attention to detail truly stood out.”",
    author: "Hiroshi Tanaka",
    role: "Technical Operations Director",
    avatar: imgEllipse1534,
  },
  {
    company: "Tokyo Precision Machining",
    logo: imgFi18301594,
    isDarkLogoBg: true,
    quote:
      "“Sanjana International brought both technical trade-testing expertise and Japanese cultural discipline to our workforce hiring. The candidates arrived well-trained, polite, and job-ready. We are extremely happy with our partnership.”",
    author: "Kenji Sato",
    role: "Managing Director",
    avatar: imgEllipse1535,
  },
];

const DIAGRAM_W = 1240;
const DIAGRAM_H = 600;
const DIAGRAM_CX = DIAGRAM_W / 2;
const DIAGRAM_CY = 520;
const DISC_R = 190;
const RING_R = 225;
const ICON_R = 315;
const ICON_SIZE = 72;
const LABEL_W = 235;
const LABEL_GAP = 16;
const STEP_DELAY = 500;

const polar = (radius: number, deg: number) => ({
  x: DIAGRAM_CX + radius * Math.cos((deg * Math.PI) / 180),
  y: DIAGRAM_CY - radius * Math.sin((deg * Math.PI) / 180),
});

function SelectionDiagram() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(Math.min(1, el.clientWidth / DIAGRAM_W));
    update();
    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(el);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const nodes = selectionSteps.map((item, i) => {
    const angle = 180 - i * 36;
    return {
      item,
      angle,
      dot: polar(RING_R, angle),
      icon: polar(ICON_R, angle),
      isLeft: i < 3,
      delay: 400 + i * STEP_DELAY,
    };
  });

  const reveal = (delay: number) => ({ transitionDelay: inView ? `${delay}ms` : "0ms" });

  return (
    <div ref={ref} className="w-full mx-auto" style={{ maxWidth: DIAGRAM_W, height: DIAGRAM_H * scale }}>
      <div
        className="relative origin-top-left"
        style={{ width: DIAGRAM_W, height: DIAGRAM_H, transform: `scale(${scale})` }}
      >
        {/* Semicircle */}
        <div
          className={`absolute origin-bottom rounded-t-full bg-[#c1262e] transition-transform duration-700 ease-out motion-reduce:transition-none ${
            inView ? "scale-100" : "scale-0"
          }`}
          style={{
            width: DISC_R * 2,
            height: DISC_R,
            left: DIAGRAM_CX - DISC_R,
            top: DIAGRAM_CY - DISC_R,
          }}
        />
        <p
          className={`absolute left-0 right-0 text-center font-['Arimo',sans-serif] font-bold leading-none text-white text-[150px] transition-all duration-700 ease-out motion-reduce:transition-none ${
            inView ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
          style={{ top: DIAGRAM_CY - 135, ...reveal(500) }}
        >
          6
        </p>

        {/* Arcs and connectors */}
        <svg className="absolute inset-0 pointer-events-none" width={DIAGRAM_W} height={DIAGRAM_H}>
          <defs>
            <marker id="selection-arrowhead" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto">
              <path
                d="M1 1 L7 4.5 L1 8"
                fill="none"
                stroke="#6b6b6b"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </marker>
          </defs>
          {nodes.slice(0, -1).map((node, i) => {
            const from = polar(RING_R, node.angle - 8);
            const to = polar(RING_R, nodes[i + 1].angle + 10);
            return (
              <path
                key={`arc-${i}`}
                d={`M ${from.x} ${from.y} A ${RING_R} ${RING_R} 0 0 1 ${to.x} ${to.y}`}
                fill="none"
                stroke="#6b6b6b"
                strokeWidth="2"
                strokeLinecap="round"
                markerEnd="url(#selection-arrowhead)"
                pathLength={1}
                strokeDasharray={1}
                strokeDashoffset={inView ? 0 : 1}
                style={{
                  opacity: inView ? 1 : 0,
                  transition: "stroke-dashoffset 600ms ease-out, opacity 50ms linear",
                  transitionDelay: inView ? `${node.delay + 250}ms` : "0ms",
                }}
              />
            );
          })}
          {nodes.map((node, i) => {
            const dx = node.icon.x - node.dot.x;
            const dy = node.icon.y - node.dot.y;
            const len = Math.hypot(dx, dy);
            const end = {
              x: node.icon.x - (dx / len) * (ICON_SIZE / 2 + 4),
              y: node.icon.y - (dy / len) * (ICON_SIZE / 2 + 4),
            };
            return (
              <line
                key={`line-${i}`}
                x1={node.dot.x}
                y1={node.dot.y}
                x2={end.x}
                y2={end.y}
                stroke="#6b6b6b"
                strokeWidth="2"
                strokeDasharray="6 6"
                style={{
                  opacity: inView ? 1 : 0,
                  transition: "opacity 500ms ease-out",
                  transitionDelay: inView ? `${node.delay + 150}ms` : "0ms",
                }}
              />
            );
          })}
        </svg>

        {/* Ring dots */}
        {nodes.map((node, i) => (
          <div
            key={`dot-${i}`}
            className={`absolute size-[16px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-out motion-reduce:transition-none ${
              inView ? "scale-100" : "scale-0"
            }`}
            style={{ left: node.dot.x, top: node.dot.y, ...reveal(node.delay) }}
          >
            {inView && (
              <span
                className="absolute inset-0 rounded-full bg-[#c1262e]/60 animate-ping motion-reduce:hidden"
                style={{ animationDelay: `${node.delay + 800}ms`, animationFillMode: "backwards" }}
              />
            )}
            <span className="absolute inset-0 rounded-full bg-[#c1262e] border-2 border-white shadow" />
          </div>
        ))}

        {/* Icons + labels */}
        {nodes.map((node, i) => (
          <React.Fragment key={node.item.step}>
            <div
              className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none ${
                inView ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
              style={{ left: node.icon.x, top: node.icon.y, ...reveal(node.delay + 300) }}
            >
              <div
                className="bg-[#c1262e] rounded-[16px] flex items-center justify-center shadow-lg shadow-red-900/20 hover:scale-110 transition-transform"
                style={{ width: ICON_SIZE, height: ICON_SIZE }}
              >
                <img alt="" className="size-[48px] object-contain" src={node.item.icon} />
              </div>
            </div>
            <div
              className={`absolute ${i === 2 || i === 3 ? "" : "-translate-y-1/2"}`}
              style={{
                ...(i === 2 || i === 3
                  ? { bottom: DIAGRAM_H - (node.icon.y + 24) }
                  : { top: node.icon.y }),
                width: LABEL_W,
                ...(node.isLeft
                  ? { right: DIAGRAM_W - (node.icon.x - ICON_SIZE / 2 - LABEL_GAP), textAlign: "right" }
                  : { left: node.icon.x + ICON_SIZE / 2 + LABEL_GAP, textAlign: "left" }),
              }}
            >
              <div
                className={`flex flex-col gap-[6px] transition-all duration-600 ease-out motion-reduce:transition-none ${
                  inView
                    ? "opacity-100 translate-x-0"
                    : `opacity-0 ${node.isLeft ? "translate-x-4" : "-translate-x-4"}`
                }`}
                style={reveal(node.delay + 450)}
              >
                <p className="font-['Barlow_Condensed',sans-serif] font-semibold text-[#404040] text-[26px] leading-tight">
                  {node.item.title}
                </p>
                <p className="font-['Arimo',sans-serif] leading-[1.5] text-[#73736e] text-[14.5px]">
                  {node.item.description}
                </p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [openWhyIndex, setOpenWhyIndex] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#f8f9fa] flex flex-col font-['Inter',sans-serif]">
      {/* Universal Shared Site Header with all extra navbar items */}
      <SiteHeader activeHref="/" />

      <main className="flex-1 w-full bg-white">
        {/* Hero Section */}
        <section
          id="home"
          className="relative w-full min-h-[540px] sm:min-h-[640px] lg:min-h-[760px] xl:min-h-[860px] overflow-hidden flex flex-col justify-between"
        >
          {/* Background Carousel */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="flex h-full transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {heroSlides.map((slide, idx) => (
                <div key={idx} className="relative w-full h-full shrink-0">
                  <img
                    alt={slide.title}
                    className="size-full object-cover"
                    src={slide.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/65" />
                </div>
              ))}
            </div>
          </div>

          {/* Dynamic Slide Titles */}
          <div className="relative z-10 max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-16 pt-14 sm:pt-20 lg:pt-24 flex-1 flex flex-col items-center">
            <div className="relative w-full min-h-[120px] sm:min-h-[160px] lg:min-h-[200px] flex items-center justify-center">
              {heroSlides.map((slide, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <h1
                    key={idx}
                    className={`absolute inset-x-0 text-center leading-[1.05] px-2 ${slide.fontClass} ${slide.fontSize} ${slide.accent} drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)] transition-all duration-700 ease-out ${
                      isActive
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 -translate-y-6 scale-95 pointer-events-none"
                    }`}
                  >
                    {slide.title}
                  </h1>
                );
              })}
            </div>
          </div>

          {/* Bottom Hero Content: Subtitle + Glass Card + Slide Dots */}
          <div className="relative z-10 max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-16 pb-16 sm:pb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            {/* Dynamic Slide Subtitles */}
            <div className="relative max-w-[620px] min-h-[76px] sm:min-h-[84px]">
              {heroSlides.map((slide, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <p
                    key={idx}
                    className={`font-['Inter',sans-serif] font-medium leading-[1.45] text-white text-base sm:text-xl lg:text-[22px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] transition-all duration-700 ease-out ${
                      isActive
                        ? "relative opacity-100 translate-y-0"
                        : "absolute inset-0 opacity-0 translate-y-4 pointer-events-none"
                    }`}
                  >
                    {slide.subtitle}
                  </p>
                );
              })}
            </div>

            {/* Glass Card */}
            <div className="backdrop-blur-[12px] bg-white/25 border border-white/60 rounded-[16px] shadow-2xl flex flex-col gap-3.5 items-start p-5 sm:p-6 max-w-full sm:w-[330px] shrink-0">
              <div className="flex flex-col gap-2 w-full">
                <p className="font-['Magistic_Sans',sans-serif] leading-[1.15] text-[24px] sm:text-[28px] text-white">
                  Your Skills. Your Future.
                </p>
                <p
                  className="font-['Inter',sans-serif] text-[14px] sm:text-[15px] text-white/95"
                  style={{ fontFeatureSettings: '"dlig" 1' }}
                >
                  RECRUITING LICENCE (RL-711)
                </p>
                <div className="bg-white/80 h-px w-full mt-1" />
              </div>
              <a
                href="#ssw-registration"
                className="inline-flex gap-2 items-center font-['Inter',sans-serif] font-medium text-[#ffdfe0] hover:text-white bg-[#d71920]/90 hover:bg-[#c1262e] px-3.5 py-2 rounded-lg text-[15px] sm:text-[16px] transition-colors"
              >
                <span className="text-white">Explore Job Opportunities</span>
                <svg
                  className="size-4 text-white shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>

          {/* Interactive Slide Dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`h-[10px] rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentSlide
                    ? "w-[36px] bg-[#c1262e] shadow-lg shadow-red-500/50"
                    : "w-[12px] bg-white/60 hover:bg-white"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Core Principles: Trust, Skills & Professional Standards */}
        <section className="relative z-20 max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-12 -mt-6 sm:-mt-10 pb-12 lg:pb-16">
          <div className="grid grid-cols-3 gap-2 sm:gap-6">
            <div className="bg-white border border-black/10 rounded-2xl min-h-20 sm:min-h-0 p-2 sm:p-7 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-center sm:justify-between">
              <div>
                <div className="hidden sm:flex size-12 rounded-xl bg-[#fff5f5] text-[#c1262e] items-center justify-center font-bold text-xl mb-4">
                  01
                </div>
                <h3 className="font-bold text-[#171b1c] text-xs sm:text-[22px] mb-0 sm:mb-2 text-center sm:text-left">Quality</h3>
                <p className="hidden sm:block text-[#686868] text-[15.5px] leading-relaxed">
                  Identifying candidates who meet the specific requirements of employers through practical skills testing, document verification, and trade competence.
                </p>
              </div>
              <div className="hidden sm:block mt-5 pt-4 border-t border-black/5 text-[#c1262e] font-semibold text-sm">
                Specific Candidate Matching →
              </div>
            </div>

            <div className="bg-white border border-black/10 rounded-2xl min-h-20 sm:min-h-0 p-2 sm:p-7 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-center sm:justify-between">
              <div>
                <div className="hidden sm:flex size-12 rounded-xl bg-[#fff5f5] text-[#c1262e] items-center justify-center font-bold text-xl mb-4">
                  02
                </div>
                <h3 className="font-bold text-[#171b1c] text-xs sm:text-[22px] mb-0 sm:mb-2 text-center sm:text-left">Preparation</h3>
                <p className="hidden sm:block text-[#686868] text-[15.5px] leading-relaxed">
                  Developing technical, linguistic, and workplace readiness — including Japanese language training, discipline (5S &amp; Hou-Ren-So), and safety awareness.
                </p>
              </div>
              <div className="hidden sm:block mt-5 pt-4 border-t border-black/5 text-[#c1262e] font-semibold text-sm">
                Linguistic &amp; Cultural Readiness →
              </div>
            </div>

            <div className="bg-white border border-black/10 rounded-2xl min-h-20 sm:min-h-0 p-2 sm:p-7 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-center sm:justify-between">
              <div>
                <div className="hidden sm:flex size-12 rounded-xl bg-[#fff5f5] text-[#c1262e] items-center justify-center font-bold text-xl mb-4">
                  03
                </div>
                <h3 className="font-bold text-[#171b1c] text-xs sm:text-[22px] mb-0 sm:mb-2 text-center sm:text-left">Reliability</h3>
                <p className="hidden sm:block text-[#686868] text-[15.5px] leading-relaxed">
                  Supporting a transparent and professionally managed recruitment process with full regulatory adherence under government Recruiting Licence (RL-711).
                </p>
              </div>
              <div className="hidden sm:block mt-5 pt-4 border-t border-black/5 text-[#c1262e] font-semibold text-sm">
                Transparent &amp; Compliant Deployment →
              </div>
            </div>
          </div>
        </section>

        {/* Agency Introduction / About Preview */}
        <section id="about-us" className="w-full bg-[#fff5f5] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
          <div className="max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image + 16+ Years Badge */}
            <div className="relative pt-8 sm:pt-12 pl-4 sm:pl-10">
              <div className="relative rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-[0px_0px_12px_rgba(0,0,0,0.25)] aspect-[817/696] w-full">
                <img
                  alt="Sanjana International Team & Operations"
                  className="size-full object-cover object-bottom"
                  src={imgRectangle58}
                />
              </div>
              <div className="absolute top-0 left-0 bg-[#c1262e] text-white rounded-[16px] sm:rounded-[20px] px-6 py-5 sm:px-8 sm:py-7 shadow-xl flex flex-col items-center justify-center">
                <span className="font-['Inter',sans-serif] font-bold text-[36px] sm:text-[52px] leading-none">
                  16+
                </span>
                <span className="font-['Inter',sans-serif] font-semibold text-[16px] sm:text-[22px] text-center leading-tight mt-1">
                  Years
                  <br />
                  Expertise
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-5 sm:gap-6 items-start">
              <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-[#c1262e]/20">
                About Sanjana International
              </span>
              <h2 className="font-['Inter',sans-serif] font-semibold text-[#171b1c] text-[28px] sm:text-[38px] lg:text-[44px] leading-[1.18] tracking-tight">
                Connecting Global Employers with Skilled Bangladeshi Talent
              </h2>
              <p className="text-[#737777] text-[16px] sm:text-[18.5px] leading-[1.6]">
                Sanjana International is a Bangladesh-based international recruitment agency dedicated to connecting qualified Bangladeshi professionals and skilled workers with employment opportunities across global markets.
              </p>
              <p className="text-[#737777] text-[15.5px] sm:text-[17px] leading-[1.6]">
                With over 16 years of management expertise, government-recognized recruitment credentials (Recruiting Licence RL-711), and a specialized focus on Bangladesh–Japan workforce mobility, we provide comprehensive recruitment solutions designed around employer requirements, candidate capabilities, and ethical employment practices.
              </p>

              <ul className="flex flex-col gap-3.5 py-2 w-full">
                {[
                  "Government Recruiting Licence (RL-711)",
                  "Over 16 years of management & workforce placement experience",
                  "OTIT approved sending-organization in Japan (BGD000036)",
                  "Dedicated Japan contact office in Shibuya, Tokyo",
                  "Structured candidate trade testing, language prep & medical verification",
                  "Ethical, zero-exploitation recruitment principles",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[#171b1c] font-medium text-[16px]">
                    <img alt="" className="size-5 shrink-0" src={imgCircleCheck} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/about"
                  className="inline-flex h-[52px] items-center justify-center px-8 bg-[#c1262e] hover:bg-[#a61e25] transition-colors rounded-[12px] text-white font-semibold text-[17px]"
                >
                  Learn More About Us
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-[52px] items-center justify-center px-8 bg-white border border-black/15 hover:border-[#c1262e] transition-colors rounded-[12px] text-[#171b1c] font-semibold text-[17px]"
                >
                  Contact Head Office
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our International Recruitment Services */}
        <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white">
          <div className="max-w-[1520px] mx-auto flex flex-col gap-12">
            <div className="flex flex-col gap-3 text-center items-center max-w-[900px] mx-auto">
              <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-[#fff5f5] px-3.5 py-1 rounded-full">
                Our Services
              </span>
              <h2 className="font-bold text-[#171b1c] text-[30px] sm:text-[44px] leading-tight">
                Our International Recruitment Services
              </h2>
              <p className="text-[#737777] text-base sm:text-lg">
                Structured recruitment, trade testing, language preparation, and visa coordination tailored to employer demands and candidate capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-[#f8f9fa] border border-black/5 rounded-2xl p-7 hover:border-[#c1262e]/40 transition-all group flex flex-col justify-between">
                <div>
                  <div className="size-14 rounded-2xl bg-[#c1262e] text-white flex items-center justify-center mb-5 text-2xl font-bold shadow-md shadow-red-900/20">
                    🇯🇵
                  </div>
                  <h3 className="font-bold text-xl text-[#171b1c] group-hover:text-[#c1262e] transition-colors mb-2.5">
                    Bangladesh to Japan Recruitment
                  </h3>
                  <p className="text-[#686868] text-[15px] leading-relaxed">
                    We support Japanese employers seeking qualified Bangladeshi workers through structured recruitment, sending-side formalities (OTIT approved), and workforce preparation pathways.
                  </p>
                </div>
                <Link href="/japan" className="mt-6 text-[#c1262e] font-semibold text-sm inline-flex items-center gap-1">
                  <span>Explore Japan Services</span>
                  <span>→</span>
                </Link>
              </div>

              {/* Service 2 */}
              <div className="bg-[#f8f9fa] border border-black/5 rounded-2xl p-7 hover:border-[#c1262e]/40 transition-all group flex flex-col justify-between">
                <div>
                  <div className="size-14 rounded-2xl bg-[#0c2230] text-white flex items-center justify-center mb-5 text-2xl font-bold shadow-md">
                    ⚙️
                  </div>
                  <h3 className="font-bold text-xl text-[#171b1c] group-hover:text-[#c1262e] transition-colors mb-2.5">
                    Specified Skilled Worker (SSW)
                  </h3>
                  <p className="text-[#686868] text-[15px] leading-relaxed">
                    Recruitment support for eligible candidates and Japanese employers under Japan&apos;s Specified Skilled Worker (SSW Type-1 &amp; Type-2) across 16+ designated industrial sectors.
                  </p>
                </div>
                <Link href="/japan/ssw" className="mt-6 text-[#c1262e] font-semibold text-sm inline-flex items-center gap-1">
                  <span>SSW Programs &amp; Sectors</span>
                  <span>→</span>
                </Link>
              </div>

              {/* Service 3 */}
              <div className="bg-[#f8f9fa] border border-black/5 rounded-2xl p-7 hover:border-[#c1262e]/40 transition-all group flex flex-col justify-between">
                <div>
                  <div className="size-14 rounded-2xl bg-[#c1262e] text-white flex items-center justify-center mb-5 text-2xl font-bold shadow-md shadow-red-900/20">
                    📚
                  </div>
                  <h3 className="font-bold text-xl text-[#171b1c] group-hover:text-[#c1262e] transition-colors mb-2.5">
                    Technical Intern Training (TITP)
                  </h3>
                  <p className="text-[#686868] text-[15px] leading-relaxed">
                    Candidate sourcing, screening, practical assessment, and coordination for technical intern arrangements under Japanese OTIT standards, plus 2027 ESD transition guidance.
                  </p>
                </div>
                <Link href="/japan/titp" className="mt-6 text-[#c1262e] font-semibold text-sm inline-flex items-center gap-1">
                  <span>TITP &amp; ESD Framework</span>
                  <span>→</span>
                </Link>
              </div>

              {/* Service 4 */}
              <div className="bg-[#f8f9fa] border border-black/5 rounded-2xl p-7 hover:border-[#c1262e]/40 transition-all group flex flex-col justify-between">
                <div>
                  <div className="size-14 rounded-2xl bg-[#0c2230] text-white flex items-center justify-center mb-5 text-2xl font-bold shadow-md">
                    💻
                  </div>
                  <h3 className="font-bold text-xl text-[#171b1c] group-hover:text-[#c1262e] transition-colors mb-2.5">
                    IT &amp; Engineering Recruitment
                  </h3>
                  <p className="text-[#686868] text-[15px] leading-relaxed">
                    Connecting international businesses with qualified IT professionals, software developers, civil, mechanical, electrical engineers, and CAD/BIM specialists from Bangladesh.
                  </p>
                </div>
                <Link href="/japan/it-engineering" className="mt-6 text-[#c1262e] font-semibold text-sm inline-flex items-center gap-1">
                  <span>Hire Tech Talent</span>
                  <span>→</span>
                </Link>
              </div>

              {/* Service 5 */}
              <div className="bg-[#f8f9fa] border border-black/5 rounded-2xl p-7 hover:border-[#c1262e]/40 transition-all group flex flex-col justify-between">
                <div>
                  <div className="size-14 rounded-2xl bg-[#c1262e] text-white flex items-center justify-center mb-5 text-2xl font-bold shadow-md shadow-red-900/20">
                    🏭
                  </div>
                  <h3 className="font-bold text-xl text-[#171b1c] group-hover:text-[#c1262e] transition-colors mb-2.5">
                    Skilled &amp; Semi-Skilled Manpower
                  </h3>
                  <p className="text-[#686868] text-[15px] leading-relaxed">
                    Sourcing workers for manufacturing, construction, hospitality, agriculture, food processing, logistics, and automobile maintenance, subject to employer requirements.
                  </p>
                </div>
                <Link href="/industries" className="mt-6 text-[#c1262e] font-semibold text-sm inline-flex items-center gap-1">
                  <span>Industries We Serve</span>
                  <span>→</span>
                </Link>
              </div>

              {/* Service 6 */}
              <div className="bg-[#f8f9fa] border border-black/5 rounded-2xl p-7 hover:border-[#c1262e]/40 transition-all group flex flex-col justify-between">
                <div>
                  <div className="size-14 rounded-2xl bg-[#0c2230] text-white flex items-center justify-center mb-5 text-2xl font-bold shadow-md">
                    🌐
                  </div>
                  <h3 className="font-bold text-xl text-[#171b1c] group-hover:text-[#c1262e] transition-colors mb-2.5">
                    International Workforce Solutions
                  </h3>
                  <p className="text-[#686868] text-[15px] leading-relaxed">
                    Comprehensive recruitment coordination, COE document handling, visa processing, pre-departure orientation, and arrival coordination for dependable international placement.
                  </p>
                </div>
                <Link href="/services" className="mt-6 text-[#c1262e] font-semibold text-sm inline-flex items-center gap-1">
                  <span>View All Services</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 6-Step Recruitment Process with Interactive Diagram */}
        <section id="training" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-[#fff5f5] overflow-hidden">
          <div className="max-w-[1520px] mx-auto">
            <div className="text-center max-w-[900px] mx-auto mb-10">
              <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-white px-3.5 py-1 rounded-full border border-[#c1262e]/20">
                Methodology
              </span>
              <h2 className="font-bold text-[#171b1c] text-[30px] sm:text-[44px] leading-tight mt-2">
                Our 6-Step Recruitment Process
              </h2>
              <p className="text-[#737777] text-base sm:text-lg mt-2">
                From initial workforce planning and candidate selection to technical assessment and deployment coordination, we ensure an organized, employer-focused journey.
              </p>
            </div>

            <SelectionDiagram />

            {/* Mobile Cards for the 6 Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 md:hidden">
              {selectionSteps.map((item) => (
                <div
                  key={item.step}
                  className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="bg-[#c1262e] p-2.5 rounded-[14px] size-[52px] flex items-center justify-center">
                      <img alt="" className="size-full object-contain" src={item.icon} />
                    </div>
                    <span className="font-bold text-2xl text-[#c1262e]/30">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#171b1c] text-[20px]">
                    {item.title}
                  </h3>
                  <p className="text-[#73736e] text-[14.5px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Building the Bangladesh–Japan Talent Bridge */}
        <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white">
          <div className="max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-5">
              <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-[#fff5f5] px-3.5 py-1 rounded-full w-fit">
                Bilateral Partnership
              </span>
              <h2 className="font-bold text-[#171b1c] text-[30px] sm:text-[42px] leading-tight">
                Building the Bangladesh–Japan Talent Bridge
              </h2>
              <p className="text-[#686868] text-base sm:text-lg leading-relaxed">
                Japan&apos;s evolving workforce requirements create major opportunities for qualified international talent. Bangladesh offers an energetic, rapidly growing pool of workers and technical professionals across industrial, construction, engineering, and service occupations.
              </p>
              <p className="text-[#686868] text-base sm:text-lg leading-relaxed">
                Sanjana International aims to support this relationship by connecting Japanese employers with appropriately screened and prepared Bangladeshi candidates.
              </p>
              <div className="bg-[#f8f9fa] border-l-4 border-[#c1262e] p-5 rounded-r-xl">
                <p className="font-semibold text-[#171b1c] text-base">
                  &ldquo;Successful international employment requires more than technical qualifications. Language ability, cultural understanding, professional discipline, and clear communication are equally essential.&rdquo;
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/japan"
                  className="bg-[#c1262e] hover:bg-[#a61e25] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  Explore Japan Corridors
                </Link>
                <Link
                  href="/training"
                  className="bg-[#0c2230] hover:bg-[#151719] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  Candidate Training Facility
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/11]">
                <img
                  src="/images/bangladesh-japan.jpg"
                  alt="Bangladesh Japan Talent Bridge"
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-bold text-xl sm:text-2xl">BGD000036 · OTIT Approved</p>
                    <p className="text-white/80 text-sm mt-1">
                      Direct bilateral coordination through our Dhaka headquarters and Shibuya Tokyo office.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Sanjana International */}
        <section id="why-choose-us" className="w-full bg-[#fff5f5] py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
          <div className="max-w-[1520px] mx-auto flex flex-col gap-10">
            <div className="flex flex-col gap-3 max-w-[1000px]">
              <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-white px-3.5 py-1 rounded-full w-fit border border-[#c1262e]/20">
                Why Partner With Us
              </span>
              <h2 className="font-bold text-[#171b1c] text-[30px] sm:text-[44px] leading-tight">
                Why Choose Sanjana International?
              </h2>
              <p className="text-[#171b1c]/80 text-[16px] sm:text-[18px] leading-relaxed">
                We combine government-recognized recruitment credentials, rigorous technical trade tests, intensive Japanese training, and transparent communication.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-7 flex flex-col">
                {whyChooseItems.map((item, idx) => {
                  const isOpen = openWhyIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="border-b border-[#ffc0c0] py-5 first:pt-2"
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenWhyIndex(isOpen ? null : idx)}
                        className="flex items-center justify-between gap-4 w-full text-left cursor-pointer group"
                      >
                        <div className="flex items-center gap-3.5">
                          <span className="bg-[#cc0a2f] flex items-center justify-center shrink-0 size-[26px]">
                            <img alt="" className="size-[16px]" src={imgCheck2} />
                          </span>
                          <span className="font-semibold text-[#022f34] group-hover:text-[#c1262e] transition-colors text-[18px] sm:text-[22px]">
                            {item.title}
                          </span>
                        </div>
                        <span className="text-[#c1262e] text-2xl font-bold shrink-0">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isOpen && (
                        <p className="text-[#707070] text-[15px] sm:text-[17px] leading-relaxed mt-3 pl-10">
                          {item.description}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-[20px] overflow-hidden aspect-square w-full shadow-lg">
                  <img
                    alt="Skilled Bangladeshi Workforce"
                    className="size-full object-cover"
                    src={imgFrame4675}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-7">
                    <div className="text-white">
                      <p className="font-bold text-xl">Government Recruiting Licence (RL-711)</p>
                      <p className="text-white/80 text-sm mt-1">
                        Ensuring ethical standards, documented selection, and full consular compliance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SSW Program Preview with Type 1 & Type 2 cards */}
        <section id="job-categories" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white">
          <div className="max-w-[1520px] mx-auto flex flex-col gap-10 items-center">
            <div className="flex flex-col gap-3 items-center text-center max-w-[850px]">
              <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-[#fff5f5] px-3.5 py-1 rounded-full">
                Japan Employment Framework
              </span>
              <h2 className="font-bold text-[#c1262e] text-[32px] sm:text-[44px]">
                Specified Skilled Worker (SSW) Visa Pathways
              </h2>
              <p className="text-[#686868] text-base sm:text-lg">
                Japan&apos;s SSW system provides an employment pathway in designated industrial sectors for foreign workers who possess the required occupational skills and language proficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
              {/* SSW Type-1 Card */}
              <div className="bg-[#fffdfd] border-2 border-[#442039]/20 rounded-2xl flex flex-col justify-between gap-7 p-7 sm:p-10 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 items-center">
                    <div className="bg-[#cc0a2f] flex items-center justify-center shrink-0 size-[48px] rounded-lg">
                      <span className="font-black text-white text-[20px]">01</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-[#ff3658] text-[13px] tracking-wider uppercase">
                        Entry &amp; Intermediate Skilled
                      </span>
                      <h3 className="font-bold text-[#0c2230] text-[22px]">
                        SSW (i) – Specified Skilled Worker No. 1
                      </h3>
                    </div>
                  </div>

                  <p className="text-[#555] text-[16px] sm:text-[17.5px] leading-relaxed">
                    Designed for workers with occupational trade skills and Japanese language ability (JLPT N4 or JFT-Basic A2). Valid for up to 5 years total stay in designated fields.
                  </p>

                  <ul className="flex flex-col gap-3">
                    {[
                      "Requires passing industry skill exam + Japanese test (N4/JFT A2)",
                      "Up to 5 years total period of stay in Japan",
                      "Eligible across 16+ industrial sectors",
                      "Standard Japanese wages matching local counterparts",
                      "Pathway to transition to SSW (ii) upon advanced evaluation",
                    ].map((point, idx) => (
                      <li key={idx} className="flex gap-3 items-center text-[#333] text-[15px] sm:text-[16px]">
                        <span className="bg-[#cc0a2f] flex items-center justify-center shrink-0 size-[20px] rounded-full">
                          <img alt="" className="size-[12px]" src={imgCheck1} />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/japan/ssw"
                  className="bg-[#cc0a2f] hover:bg-[#b00828] text-white rounded-xl py-3.5 px-6 font-semibold flex items-center justify-between transition-colors"
                >
                  <span>Learn More About SSW (i)</span>
                  <span>→</span>
                </Link>
              </div>

              {/* SSW Type-2 Card */}
              <div className="bg-[#fffdfd] border-2 border-[#442039]/20 rounded-2xl flex flex-col justify-between gap-7 p-7 sm:p-10 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 items-center">
                    <div className="bg-[#0c2230] flex items-center justify-center shrink-0 size-[48px] rounded-lg">
                      <span className="font-black text-white text-[20px]">02</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-[#c1262e] text-[13px] tracking-wider uppercase">
                        Advanced Skilled Tier
                      </span>
                      <h3 className="font-bold text-[#0c2230] text-[22px]">
                        SSW (ii) – Specified Skilled Worker No. 2
                      </h3>
                    </div>
                  </div>

                  <p className="text-[#555] text-[16px] sm:text-[17.5px] leading-relaxed">
                    Designed for workers with advanced occupational skills and supervisory experience. Permits renewable stay without a 5-year limit and family accompaniment.
                  </p>

                  <ul className="flex flex-col gap-3">
                    {[
                      "For candidates with higher supervisory and technical expertise",
                      "Renewable status of residence (potential permanent residency path)",
                      "Spouses and children permitted to live in Japan",
                      "High-demand technical roles across expanding sectors",
                      "Sanjana International provides employer matching and legal filing",
                    ].map((point, idx) => (
                      <li key={idx} className="flex gap-3 items-center text-[#333] text-[15px] sm:text-[16px]">
                        <span className="bg-[#0c2230] flex items-center justify-center shrink-0 size-[20px] rounded-full">
                          <img alt="" className="size-[12px]" src={imgCheck1} />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/japan/ssw"
                  className="bg-[#0c2230] hover:bg-[#1a384c] text-white rounded-xl py-3.5 px-6 font-semibold flex items-center justify-between transition-colors"
                >
                  <span>Explore SSW (ii) Eligibility</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full bg-[#fff5f5] py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
          <div className="max-w-[1520px] mx-auto flex flex-col gap-10 items-center">
            <div className="flex flex-col gap-2 items-center text-center">
              <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-white px-3.5 py-1 rounded-full border border-[#c1262e]/20">
                Client Trust
              </span>
              <h2 className="font-bold text-[#c1262e] text-[32px] sm:text-[48px] leading-tight">
                What Global Employers Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1200px]">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#dfdede] rounded-2xl p-7 sm:p-8 flex flex-col justify-between gap-6 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {t.isDarkLogoBg ? (
                        <div className="bg-black rounded-full size-10 flex items-center justify-center">
                          <img alt={t.company} className="h-5 w-5" src={t.logo} />
                        </div>
                      ) : (
                        <img alt={t.company} className="size-10" src={t.logo} />
                      )}
                      <span className="font-bold text-[#171717] text-lg">
                        {t.company}
                      </span>
                    </div>
                    <img alt="" className="size-6 opacity-60" src={imgGroup} />
                  </div>

                  <p className="text-[#555] text-base leading-relaxed italic">
                    {t.quote}
                  </p>

                  <div className="flex items-center gap-3.5 pt-4 border-t border-black/10">
                    <img
                      alt={t.author}
                      className="size-12 rounded-full object-cover"
                      src={t.avatar}
                    />
                    <div>
                      <p className="font-bold text-[#171717] text-[16px]">{t.author}</p>
                      <p className="text-[#7a7a7a] text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white">
          <div className="max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-[#c1262e] font-semibold text-sm uppercase tracking-wider bg-[#fff5f5] px-3.5 py-1 rounded-full w-fit">
                Common Inquiries
              </span>
              <h2 className="font-bold text-[#171b1c] text-[28px] sm:text-[38px] leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-[#686868] text-base leading-relaxed">
                Clear answers regarding overseas employment, Japanese immigration standards, trade testing, and ethical recruitment policies.
              </p>

              <div className="bg-[#0c2230] rounded-2xl p-6 sm:p-7 flex flex-col gap-4 text-white">
                <div className="bg-[#c1262e] rounded-full size-12 flex items-center justify-center">
                  <img alt="" className="size-6" src={imgPhone} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Need Personal Guidance?</h3>
                  <p className="text-white/80 text-sm mt-1">
                    Our multilingual recruitment advisors in Dhaka and Tokyo are ready to assist.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 mt-2">
                  <a
                    href="tel:+8801901850573"
                    className="bg-[#c1262e] hover:bg-[#a61e25] text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
                  >
                    Call Dhaka: +880 1901-850573
                  </a>
                  <Link
                    href="/contact"
                    className="bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
                  >
                    Send Inquiry
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="border-b border-black/10 py-5">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="flex items-center justify-between gap-4 w-full text-left cursor-pointer group"
                    >
                      <span className="font-semibold text-[#022f34] group-hover:text-[#c1262e] transition-colors text-[17px] sm:text-[19px]">
                        {faq.q}
                      </span>
                      <img
                        alt=""
                        className="size-6 shrink-0"
                        src={isOpen ? imgMinus : imgPlus}
                      />
                    </button>
                    {isOpen && (
                      <p className="text-[#686868] text-[15px] sm:text-[16px] leading-relaxed mt-3">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Global Workforce Dual CTA Section */}
        <section
          id="ssw-registration"
          className="relative w-full bg-[#cc0a2f] py-16 sm:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden"
        >
          <img
            alt="Global Workforce"
            className="absolute inset-0 size-full object-cover opacity-15 pointer-events-none mix-blend-overlay"
            src="/images/japan-bridge.jpg"
          />
          <div className="relative z-10 max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 flex flex-col gap-4 text-white">
              <span className="text-white/80 font-bold tracking-widest text-xs uppercase">
                Take the Next Step
              </span>
              <h2 className="font-bold text-[32px] sm:text-[44px] lg:text-[52px] leading-tight tracking-tight">
                Let&apos;s Build Your Global Workforce Together.
              </h2>
              <p className="text-white/95 text-base sm:text-lg leading-relaxed">
                Whether you are an international employer seeking qualified Bangladeshi manpower or a candidate pursuing legitimate overseas career growth, Sanjana International is your trusted partner.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Employer Card */}
              <div className="bg-white rounded-2xl p-7 flex flex-col justify-between gap-6 shadow-2xl">
                <div>
                  <div className="size-12 rounded-xl bg-[#fff5f5] text-[#c1262e] flex items-center justify-center font-bold text-xl mb-4">
                    🏢
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#c1262e]">
                    For Employers
                  </span>
                  <h3 className="font-bold text-[#151719] text-[22px] mt-1">
                    Find the Right Talent
                  </h3>
                  <p className="text-[#737783] text-[14.5px] leading-relaxed mt-2">
                    Submit your manpower requirements. We evaluate your job specifications and prepare a customized sourcing, testing, and deployment plan.
                  </p>
                </div>
                <Link
                  href="/employers"
                  className="bg-[#cc0a2f] hover:bg-[#a60826] text-white font-bold h-12 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Submit Manpower Needs</span>
                  <span>→</span>
                </Link>
              </div>

              {/* Candidate Card */}
              <div className="bg-[#0c2230] rounded-2xl p-7 flex flex-col justify-between gap-6 shadow-2xl text-white">
                <div>
                  <div className="size-12 rounded-xl bg-white/10 text-white flex items-center justify-center font-bold text-xl mb-4">
                    ✈️
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-300">
                    For Job Candidates
                  </span>
                  <h3 className="font-bold text-white text-[22px] mt-1">
                    Explore Overseas Careers
                  </h3>
                  <p className="text-[#bec1c7] text-[14.5px] leading-relaxed mt-2">
                    Register with Sanjana International. Learn about legitimate employment opportunities in Japan and global markets without misleading promises.
                  </p>
                </div>
                <Link
                  href="/candidates"
                  className="bg-white hover:bg-gray-100 text-[#0c2230] font-bold h-12 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Register as Candidate</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Universal Shared Site Footer */}
      <SiteFooter />
    </div>
  );
}
