"use client";

import NavDropdown from "@/components/NavDropdown";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const assetPathPrefix = "/figma";
const imgVector65 = `${assetPathPrefix}/49deb.png`;
const imgGlobalWorkforce = `${assetPathPrefix}/global-workforce-hero.jpg`;
const imgGlobalEmployers = `${assetPathPrefix}/global-employers.jpg`;
const imgGlobalCandidates = `${assetPathPrefix}/global-candidates.jpg`;
const imgVector66 = `${assetPathPrefix}/33e76.png`;
const imgVector67 = `${assetPathPrefix}/c0a8b.png`;
const imgRectangle58 = `${assetPathPrefix}/1afeb.png`;
const imgGeminiGeneratedImage3D5U7T3D5U7T3D5U11 = `${assetPathPrefix}/f710d.png`;
const imgEllipse1534 = `${assetPathPrefix}/9c025.png`;
const imgEllipse1535 = `${assetPathPrefix}/13a89.png`;
const imgCalendarIcon = `${assetPathPrefix}/4cd7d.png`;
const imgFrame4675 = `${assetPathPrefix}/21a21.png`;
const imgSubtract = `${assetPathPrefix}/28a48.svg`;
const imgArrowRight = `${assetPathPrefix}/25f80.svg`;
const imgSvg = `${assetPathPrefix}/16862.svg`;
const imgSvg1 = `${assetPathPrefix}/23dcd.svg`;
const imgCircleCheck = `${assetPathPrefix}/70b9c.svg`;
const imgCircleCheck1 = `${assetPathPrefix}/662dc.svg`;
const imgSubtract1 = `${assetPathPrefix}/5196c.svg`;
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
const imgMapPin = `${assetPathPrefix}/bd034.svg`;
const imgCircleCheck2 = `${assetPathPrefix}/7880d.svg`;
const imgArrowRight3 = `${assetPathPrefix}/d2dd7.svg`;
const imgFrame = `${assetPathPrefix}/54cd2.svg`;
const imgFrame1 = `${assetPathPrefix}/baabe.svg`;
const imgFrame2 = `${assetPathPrefix}/dd972.svg`;
const imgFrame3 = `${assetPathPrefix}/dd2b3.svg`;
const imgFrame4 = `${assetPathPrefix}/57f2c.svg`;
const imgFrame5 = `${assetPathPrefix}/09298.svg`;
const imgCheck1 = `${assetPathPrefix}/e9e2f.svg`;
const imgCheck2 = `${assetPathPrefix}/d8c87.svg`;

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about-us" },
  { label: "Job Categories", href: "#job-categories" },
  { label: "Training", href: "#training" },
  { label: "Contact Us", href: "#contact-us" },
  { label: "SSW Registration", href: "#ssw-registration" },
];

const heroSlides = [
  {
    image: imgVector65,
    title: "Career in Japan.",
    fontClass: "font-['Playfair',Georgia,serif] font-medium tracking-tight",
    fontSize: "text-[clamp(2.5rem,7.5vw,8.5rem)]",
    subtitle:
      "Your trusted recruitment partner for skilled professionals, technical specialists, and workforce solutions across international markets.",
    accent: "text-white",
  },
  {
    image: imgVector66,
    title: "Build Your Future in Tokyo",
    fontClass: "font-['Poppins',sans-serif] font-bold tracking-tight",
    fontSize: "text-[clamp(2rem,6vw,6.75rem)]",
    subtitle:
      "Government-approved language & technical training programs tailored for high-demand careers in Japan.",
    accent: "text-white",
  },
  {
    image: imgVector67,
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
    title: "Selection",
    description:
      "Our experienced technical team selects qualified workers based on client requirements.",
    icon: imgFrame5,
  },
  {
    step: "02",
    title: "Trade Test",
    description:
      "Candidates undergo practical skill assessments by qualified engineers to verify their trade expertise.",
    icon: imgFrame,
  },
  {
    step: "03",
    title: "Medical Check-Up",
    description:
      "Selected candidates undergo medical examinations at authorized hospitals to confirm fitness for employment.",
    icon: imgFrame4,
  },
  {
    step: "04",
    title: "Language & Skill Training",
    description:
      "Our experienced technical team prepares qualified workers with Japanese language and trade standards.",
    icon: imgFrame3,
  },
  {
    step: "05",
    title: "Orientation",
    description:
      "Selected workers receive guidance about workplace conditions, company policies, and country regulations.",
    icon: imgFrame2,
  },
  {
    step: "06",
    title: "Deployment Notification",
    description:
      "Employers receive flight schedules, worker details, and necessary updates three days beforehand.",
    icon: imgFrame1,
  },
];

const whyChooseItems = [
  {
    title: "Licensed & Trusted Agency",
    description:
      "Government-approved recruitment agency committed to transparent and reliable overseas employment services.",
  },
  {
    title: "Skilled Candidate Selection",
    description:
      "Rigorous practical trade tests and screening by qualified engineers ensure candidates match your exact technical requirements.",
  },
  {
    title: "Quality & Medical Assurance",
    description:
      "Every candidate completes certified medical examinations and background verification prior to visa filing.",
  },
  {
    title: "Complete Workforce Support",
    description:
      "From Japanese language training (JLPT N4 / JFT A2) to COE documentation and pre-departure orientation.",
  },
  {
    title: "Reliable Employer Communication",
    description:
      "Dedicated account coordination with flight schedules, worker dossiers, and timely updates throughout deployment.",
  },
];

const faqs = [
  {
    q: "How do I apply for SSW Type-1 in Japan?",
    a: "Candidates must pass the Japanese language test (JLPT N4 or JFT-Basic A2) and the relevant SSW skills assessment test before submitting an application.",
  },
  {
    q: "Do you offer emergency placement services?",
    a: "Yes, we provide expedited screening and fast-track processing for urgent manpower recruitment requests.",
  },
  {
    q: "Are the training programs certified?",
    a: "Yes, all Japanese language and technical training courses follow official JITCO and TITP regulatory standards.",
  },
  {
    q: "What job categories do you provide?",
    a: "We recruit for construction, manufacturing, agriculture, caregiving, hospitality, and IT engineering sectors in Japan.",
  },
  {
    q: "Do you assist with visa processing?",
    a: "We provide complete end-to-end documentation, Certificate of Eligibility (COE) filing, and embassy visa support.",
  },
];

const testimonials = [
  {
    company: "Eco Zone",
    logo: imgFi9421732,
    isDarkLogoBg: false,
    quote:
      "“Working with Sanjana International was a seamless experience from start to finish. Their team understood our requirements, delivered reliable candidates, and handled every compliance step. The quality, communication, and attention to detail truly stood out.”",
    author: "Floyd Miles",
    role: "Senior Consultant",
    avatar: imgEllipse1534,
  },
  {
    company: "Wheel Stas",
    logo: imgFi18301594,
    isDarkLogoBg: true,
    quote:
      "“Sanjana International brought both technical screening expertise and dedication to our workforce hiring. They helped us streamline our recruitment process and onboard skilled, job-ready talent quickly. We’re extremely happy with the final outcome.”",
    author: "Leslie Alexander",
    role: "Operations Director",
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
    <div className="relative origin-top-left" style={{ width: DIAGRAM_W, height: DIAGRAM_H, transform: `scale(${scale})` }}>
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
            <path d="M1 1 L7 4.5 L1 8" fill="none" stroke="#6b6b6b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
              <p className="font-['Barlow_Condensed',sans-serif] font-semibold text-[#404040] text-[28px] leading-tight">
                {node.item.title}
              </p>
              <p className="font-['Arimo',sans-serif] leading-[1.5] text-[#73736e] text-[15px]">
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
  const [activeNav, setActiveNav] = useState<string>("#home");
  const [openWhyIndex, setOpenWhyIndex] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Contact form state
  const [contactRole, setContactRole] = useState<string>("Employer");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Responsive navbar refs & measurement (modern-web-guidance navbar pattern)
  const headerRef = useRef<HTMLElement | null>(null);
  const headerInnerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const lastHeaderWidthRef = useRef<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const syncNavbarLayout = useCallback(() => {
    const header = headerRef.current;
    const inner = headerInnerRef.current;
    const menu = menuRef.current;
    if (!header || !inner || !menu) return;

    const wasWide = header.classList.contains("is-wide");
    const wasOpen =
      !wasWide &&
      (menu.matches(":popover-open") || menu.classList.contains(":popover-open"));

    header.classList.add("is-measuring");
    header.classList.add("is-wide");
    menu.removeAttribute("popover");

    const fitsInline = inner.scrollWidth <= inner.clientWidth + 1;

    if (fitsInline) {
      header.classList.add("is-wide");
      menu.removeAttribute("popover");
    } else {
      header.classList.remove("is-wide");
      menu.setAttribute("popover", "auto");
      if (wasOpen && typeof menu.showPopover === "function") {
        try {
          menu.showPopover();
        } catch {
          // Ignore if already open or unsupported
        }
      }
    }

    requestAnimationFrame(() => {
      header.classList.remove("is-measuring");
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Load popover polyfill only if native popover is missing
    if (!Object.hasOwn(HTMLElement.prototype, "popover")) {
      const script = document.createElement("script");
      script.type = "module";
      script.src =
        "https://unpkg.com/@oddbird/popover-polyfill@latest/dist/popover.min.js";
      document.head.appendChild(script);
    }

    const header = headerRef.current;
    const menu = menuRef.current;
    if (!header || !menu) return;

    syncNavbarLayout();

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === header) {
          const newWidth = entry.contentRect.width;
          const isWide = header.classList.contains("is-wide");
          if (isWide || newWidth > lastHeaderWidthRef.current) {
            lastHeaderWidthRef.current = newWidth;
            syncNavbarLayout();
          } else {
            lastHeaderWidthRef.current = newWidth;
          }
        } else {
          syncNavbarLayout();
        }
      }
    });

    observer.observe(header);
    observer.observe(menu);

    return () => observer.disconnect();
  }, [syncNavbarLayout]);

  const handleNavClick = (href: string) => {
    setActiveNav(href);
    const menu = menuRef.current;
    if (menu && menu.hasAttribute("popover") && typeof menu.hidePopover === "function") {
      try {
        menu.hidePopover();
      } catch {
        // Ignore if already closed
      }
    }
  };

  const handleSelectRoleAndScroll = (role: string) => {
    setContactRole(role);
    setSubmitted(false);
    const el = document.getElementById("contact-us");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
    setFullName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="w-full min-h-screen bg-[#f8f9fa] flex flex-col">
      {/* Header / Navbar */}
      <header
        ref={headerRef}
        className="site-header sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-black/5 shadow-xs"
      >
        <div
          ref={headerInnerRef}
          className="header-inner max-w-[1760px] mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-12 xl:px-20 h-[76px] sm:h-[88px] lg:h-[104px]"
        >
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-[8px] shrink-0 group focus-visible:outline-2 focus-visible:outline-[#c1262e] focus-visible:outline-offset-4 rounded-md"
          >
            <div className="grid grid-cols-[max-content] grid-rows-[max-content] leading-none place-items-start relative shrink-0">
              <div className="col-start-1 row-start-1 h-[42px] sm:h-[50px] lg:h-[56px] w-[44px] sm:w-[52px] lg:w-[58px] relative">
                <img
                  alt="Sanjana International Logo"
                  className="block size-full object-contain"
                  src={imgSubtract}
                />
              </div>
              <div className="col-start-1 row-start-1 flex h-[42px] sm:h-[50px] lg:h-[56px] items-center justify-center ml-[45px] sm:ml-[54px] lg:ml-[60px] w-[7px]">
                <div className="-rotate-90 flex-none">
                  <span className="font-['Poppins',sans-serif] text-[#c1262e] text-[3.8px] sm:text-[4.2px] tracking-[0.3px] whitespace-nowrap block">
                    SANJANA INTERNATIONAL
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-['Poppins',sans-serif] font-semibold leading-none text-[18px] sm:text-[22px] lg:text-[26px] whitespace-nowrap">
              <span className="text-[#c1262e] -mb-0.5">Sanjana</span>
              <span className="text-black">International</span>
            </div>
          </a>

          {/* Primary Navigation */}
          <nav
            className="site-nav flex items-center gap-3 sm:gap-5"
            aria-label="Primary"
          >
            <ul
              id="site-menu"
              ref={menuRef}
              popover="auto"
              className="site-menu bg-white border border-black/10 rounded-2xl shadow-2xl p-4 sm:p-5 gap-2 lg:gap-5 xl:gap-7 text-[14px] xl:text-[16px] font-['Inter',sans-serif]"
            >
              {navLinks.map((item) => {
                const isActive = activeNav === item.href;
                return (
                  <li key={item.href} className="w-full lg:w-auto">
                    <a
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => handleNavClick(item.href)}
                      className={`block py-2.5 px-3 lg:py-1.5 lg:px-1 rounded-lg lg:rounded-none whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-[#c1262e] focus-visible:outline-offset-4 ${
                        isActive
                          ? "font-semibold text-[#c1262e] bg-[#fff5f5] lg:bg-transparent lg:border-b-2 lg:border-[#c1262e]"
                          : "font-normal text-[#171b1c] hover:text-[#c1262e] hover:bg-black/5 lg:hover:bg-transparent"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
              <li className="w-full lg:w-auto">
                <NavDropdown
                  title="Opportunities"
                  triggerClassName="py-2.5 px-3 lg:py-1.5 lg:px-1 w-full lg:w-auto justify-between"
                />
              </li>
              {/* Mobile-only CTA inside menu */}
              <li className="w-full pt-2 mt-2 border-t border-black/10 sm:hidden">
                <a
                  href="#contact-us"
                  onClick={() => handleNavClick("#contact-us")}
                  className="flex items-center justify-center gap-2 w-full bg-[#c1262e] hover:bg-[#a61e25] text-white font-semibold text-[15px] py-3 px-4 rounded-[10px] transition-colors"
                >
                  <span>GET STARTED</span>
                  <img alt="" className="size-4" src={imgArrowRight} />
                </a>
              </li>
            </ul>

            {/* Desktop / Tablet CTA Button */}
            <a
              href="#contact-us"
              onClick={() => handleNavClick("#contact-us")}
              className="hidden sm:inline-flex bg-[#c1262e] hover:bg-[#a61e25] active:scale-[0.98] transition-all gap-3 h-[44px] lg:h-[52px] items-center justify-center px-5 lg:px-6 rounded-[10px] shrink-0 text-white font-['Inter',sans-serif] font-semibold text-[14px] lg:text-[15px] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#c1262e] focus-visible:outline-offset-2"
            >
              <span>GET STARTED</span>
              <img alt="" className="size-[18px]" src={imgArrowRight} />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              popoverTarget="site-menu"
              popoverTargetAction="toggle"
              aria-controls="site-menu"
              className="menu-button inline-flex items-center justify-center gap-2 h-[44px] px-3.5 rounded-[10px] border border-black/15 bg-white text-[#171b1c] hover:border-[#c1262e] hover:text-[#c1262e] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#c1262e]"
            >
              <svg
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <span className="text-sm font-medium">Menu</span>
            </button>
          </nav>
        </div>
      </header>

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
                  {idx === 0 && (
                    <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/65" />
                  )}
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
                  GOVT. APPROVED RECRUITING AGENCY (RL-711)
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

        {/* Stats / Highlights Strip */}
        <section className="relative z-20 max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-12 -mt-6 sm:-mt-10 pb-12 lg:pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white border border-black/5 drop-shadow-[0px_4px_16px_rgba(255,0,0,0.1)] rounded-lg flex flex-col gap-2 justify-center p-6">
              <p
                className="font-['Manrope',sans-serif] font-extrabold text-[#d71920] text-[34px] sm:text-[40px] leading-none"
                style={{ fontFeatureSettings: '"dlig" 1' }}
              >
                200+
              </p>
              <p
                className="font-['Inter',sans-serif] font-medium text-[#303030] text-[15px] sm:text-[16px]"
                style={{ fontFeatureSettings: '"dlig" 1' }}
              >
                Workers placed in Japan
              </p>
            </div>

            <div className="bg-white border border-black/5 drop-shadow-[0px_4px_16px_rgba(255,0,0,0.1)] rounded-lg flex flex-col gap-2 justify-center p-6">
              <p
                className="font-['Manrope',sans-serif] font-extrabold text-[#171717] text-[34px] sm:text-[40px] leading-none"
                style={{ fontFeatureSettings: '"dlig" 1' }}
              >
                RL-711
              </p>
              <p
                className="font-['Inter',sans-serif] font-medium text-[#303030] text-[15px] sm:text-[16px]"
                style={{ fontFeatureSettings: '"dlig" 1' }}
              >
                Active recruiting license
              </p>
            </div>

            <div className="bg-white border border-black/5 drop-shadow-[0px_4px_16px_rgba(255,0,0,0.1)] rounded-lg flex gap-4 items-start p-6">
              <div className="shrink-0 size-[24px] mt-1">
                <img alt="" className="size-full object-contain" src={imgSvg} />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3
                  className="font-['Inter',sans-serif] font-semibold text-[#171717] text-[20px] sm:text-[22px] leading-[1.2]"
                  style={{ fontFeatureSettings: '"dlig" 1' }}
                >
                  Integrated training &amp; recruitment
                </h3>
                <p
                  className="font-['Inter',sans-serif] text-[#686868] text-[15px] leading-snug"
                  style={{ fontFeatureSettings: '"dlig" 1' }}
                >
                  Language and technical preparation before placement.
                </p>
              </div>
            </div>

            <div className="bg-white border border-black/5 drop-shadow-[0px_4px_16px_rgba(255,0,0,0.1)] rounded-lg flex gap-4 items-start p-6">
              <div className="shrink-0 size-[24px] mt-1">
                <img alt="" className="size-full object-contain" src={imgSvg1} />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3
                  className="font-['Inter',sans-serif] font-semibold text-[#171717] text-[20px] sm:text-[22px] leading-[1.2]"
                  style={{ fontFeatureSettings: '"dlig" 1' }}
                >
                  End-to-end placement assistance
                </h3>
                <p
                  className="font-['Inter',sans-serif] text-[#686868] text-[15px] leading-snug"
                  style={{ fontFeatureSettings: '"dlig" 1' }}
                >
                  Language and technical preparation before placement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Sanjana International */}
        <section id="about-us" className="w-full bg-[#fff5f5] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
          <div className="max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image + 15+ Years Badge */}
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
                  15+
                </span>
                <span className="font-['Inter',sans-serif] font-semibold text-[16px] sm:text-[22px] text-center leading-tight mt-1">
                  Years
                  <br />
                  Experience
                </span>
              </div>
            </div>

            {/* Agency Introduction */}
            <div className="flex flex-col gap-5 sm:gap-6 items-start">
              <p className="font-['Inter',sans-serif] font-medium text-[#c1262e] text-[20px] sm:text-[26px]">
                About Sanjana International
              </p>
              <h2 className="font-['Inter',sans-serif] font-semibold text-[#171b1c] text-[28px] sm:text-[38px] lg:text-[44px] leading-[1.18] tracking-tight">
                Building Connections. Creating Global Opportunities.
              </h2>
              <p className="font-['Inter',sans-serif] text-[#737777] text-[16px] sm:text-[19px] leading-[1.6]">
                For more than 16 years we have matched Bangladeshi workers and
                professionals with employers abroad - licensed, accountable, and
                focused on getting each placement right.
              </p>

              <ul className="flex flex-col gap-3.5 sm:gap-4 py-2 w-full">
                {[
                  {
                    text: "Licensed by the Government of Bangladesh - RL-711",
                    icon: imgCircleCheck,
                  },
                  {
                    text: "More than 16 years of operational experience",
                    icon: imgCircleCheck1,
                  },
                  {
                    text: "An experienced, professionally trained recruitment team",
                    icon: imgCircleCheck,
                  },
                  {
                    text: "Modern business operations and processes",
                    icon: imgCircleCheck,
                  },
                  {
                    text: "Committed to quality, ethics and client satisfaction",
                    icon: imgCircleCheck1,
                  },
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start sm:items-center gap-3.5 sm:gap-4">
                    <img
                      alt=""
                      className="size-[22px] sm:size-[26px] shrink-0 mt-0.5 sm:mt-0"
                      src={benefit.icon}
                    />
                    <span className="font-['Inter',sans-serif] font-medium text-[#171b1c] text-[16px] sm:text-[19px]">
                      {benefit.text}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#why-choose-us"
                className="inline-flex h-[56px] sm:h-[64px] items-center justify-center px-8 sm:px-10 bg-[#c1262e] hover:bg-[#a61e25] active:scale-[0.98] transition-all rounded-[12px] text-white font-['Inter',sans-serif] font-semibold text-[18px] sm:text-[20px]"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </section>

        {/* Selection Procedures / Training */}
        <section id="training" className="w-full py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
          <div className="max-w-[1520px] mx-auto">
            <div>
              <SelectionDiagram />

              {/* Heading below diagram */}
              <div className="flex flex-col gap-4 items-center text-center max-w-[1100px] mx-auto mt-6">
                <h2 className="font-['Inter',sans-serif] font-semibold text-[28px] sm:text-[36px] xl:text-[40px] text-black">
                  Selection Procedures
                </h2>
                <p className="font-['Inter',sans-serif] leading-[1.55] text-[#737777] text-[16px] sm:text-[18px] xl:text-[19px]">
                  Selected candidates meet the requirement criteria of our clients.
                  We evaluate their skill-set to match the job description, and
                  their ability and willingness towards the new job. We focus on
                  adding valuable human resources to the client’s companies.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10 md:hidden">
                {selectionSteps.map((item) => (
                  <div
                    key={item.step}
                    className="bg-white border border-black/10 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col gap-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="bg-[#c1262e] p-2.5 rounded-[14px] size-[56px] flex items-center justify-center">
                        <img alt="" className="size-full object-contain" src={item.icon} />
                      </div>
                      <span className="font-['Arimo',sans-serif] font-bold text-2xl text-[#c1262e]/30">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="font-['Barlow_Condensed',sans-serif] font-semibold text-[#404040] text-[24px] leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-['Arimo',sans-serif] text-[#73736e] text-[15px] leading-[1.5]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SSW Visa Types / Job Categories */}
        <section
          id="job-categories"
          className="w-full bg-[#fff5f5] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12"
        >
          <div className="max-w-[1520px] mx-auto flex flex-col gap-10 sm:gap-14 items-center">
            <div className="flex flex-col gap-3 items-center text-center">
              <p className="font-['Inter',sans-serif] font-semibold text-[#323232] text-[20px] sm:text-[26px]">
                Our Another Programs
              </p>
              <h2 className="font-['Inter',sans-serif] font-semibold text-[#c1262e] text-[32px] sm:text-[42px] tracking-wide">
                SSW Visa Types
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full">
              {/* SSW Type-1 Card */}
              <div className="bg-white border border-[#442039] flex flex-col justify-between gap-7 p-6 sm:p-10 text-[#022f34]">
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 items-center">
                    <div className="bg-[#cc0a2f] border border-[#6b6075] flex items-center justify-center shrink-0 size-[48px]">
                      <span className="font-['Lato',sans-serif] font-black text-[#fafaff] text-[20px]">
                        01
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-['Lato',sans-serif] font-bold text-[#ff3658] text-[13px] tracking-[1px]">
                        ENTRY LEVEL
                      </span>
                      <h3 className="font-['Lato',sans-serif] font-black text-[#0c2230] text-[20px]">
                        SSW Type-1
                      </h3>
                    </div>
                  </div>

                  <p className="font-['Lato',sans-serif] leading-[1.45] text-[17px] sm:text-[19px]">
                    This type is for entry-level workers with basic working skills.
                    Candidates must demonstrate Japanese language proficiency and
                    pass the required assessments.
                  </p>

                  <ul className="flex flex-col gap-3.5">
                    {[
                      "For entry-level workers with basic skills",
                      "Must know JLPT N4 and pass JFT A2",
                      "Visa valid for up to 5 years",
                      "Spouse not permitted under this visa type",
                      "Renewable within the 5-year period",
                    ].map((point, idx) => (
                      <li key={idx} className="flex gap-3 items-center">
                        <span className="bg-[#cc0a2f] flex items-center justify-center shrink-0 size-[20px]">
                          <img alt="" className="size-[12px]" src={imgCheck1} />
                        </span>
                        <span className="font-['Lato',sans-serif] text-[16px] sm:text-[18px]">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => handleSelectRoleAndScroll("Candidate")}
                  className="bg-[#cc0a2f] hover:bg-[#b00828] border border-[#4a3a50] flex gap-3 sm:gap-4 min-h-[72px] py-3 items-center justify-between px-4 sm:px-5 w-full text-left cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className="relative shrink-0 size-[40px] overflow-hidden">
                      <img
                        alt=""
                        className="absolute h-[3507.69%] left-[-2800%] max-w-none top-[-2803.85%] w-[9796.15%]"
                        src={imgCalendarIcon}
                      />
                    </div>
                    <div className="flex flex-col text-white min-w-0">
                      <span className="font-['Inter',sans-serif] font-bold text-[12px] tracking-[0.4px]">
                        DURATION
                      </span>
                      <span className="font-['Inter',sans-serif] font-extrabold text-[17px] sm:text-[18px]">
                        Up to 5 Years
                      </span>
                    </div>
                  </div>
                  <span className="font-['Inter',sans-serif] font-semibold text-sm text-white shrink-0 whitespace-nowrap group-hover:translate-x-1 transition-transform">
                    Apply Now →
                  </span>
                </button>
              </div>

              {/* SSW Type-2 Card */}
              <div className="bg-white border border-[#442039] flex flex-col justify-between gap-7 p-6 sm:p-10 text-[#022f34]">
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 items-center">
                    <div className="bg-[#cc0a2f] border border-[#6b6075] flex items-center justify-center shrink-0 size-[48px]">
                      <span className="font-['Lato',sans-serif] font-black text-[#fafaff] text-[20px]">
                        02
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-['Lato',sans-serif] font-bold text-[#ff3658] text-[13px] tracking-[1px]">
                        ADVANCED LEVEL
                      </span>
                      <h3 className="font-['Lato',sans-serif] font-black text-[#0c2230] text-[20px]">
                        SSW Type-2
                      </h3>
                    </div>
                  </div>

                  <p className="font-['Lato',sans-serif] leading-[1.45] text-[17px] sm:text-[19px]">
                    After completing SSW Type-1 and gaining experience, the
                    candidate can extend their visa for the next 5 years. This
                    advanced tier brings greater rights including family
                    reunification.
                  </p>

                  <ul className="flex flex-col gap-3.5">
                    {[
                      "Available after completing SSW Type-1",
                      "Requires demonstrated work experience",
                      "Extendable for next 5 years",
                      "Candidates may bring family to Japan",
                      "Legal procedures required for family arrival",
                    ].map((point, idx) => (
                      <li key={idx} className="flex gap-3 items-center">
                        <span className="bg-[#cc0a2f] flex items-center justify-center shrink-0 size-[20px]">
                          <img alt="" className="size-[12px]" src={imgCheck1} />
                        </span>
                        <span className="font-['Lato',sans-serif] text-[16px] sm:text-[18px]">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => handleSelectRoleAndScroll("Candidate")}
                  className="bg-[#cc0a2f] hover:bg-[#b00828] border border-[#4a3a50] flex gap-3 sm:gap-4 min-h-[72px] py-3 items-center justify-between px-4 sm:px-5 w-full text-left cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className="relative shrink-0 size-[40px] overflow-hidden">
                      <img
                        alt=""
                        className="absolute h-[3507.69%] left-[-5203.85%] max-w-none top-[-2803.85%] w-[9796.15%]"
                        src={imgCalendarIcon}
                      />
                    </div>
                    <div className="flex flex-col text-white min-w-0">
                      <span className="font-['Inter',sans-serif] font-bold text-[12px] tracking-[0.4px]">
                        FAMILY
                      </span>
                      <span className="font-['Inter',sans-serif] font-extrabold text-[17px] sm:text-[18px]">
                        Family Members Allowed
                      </span>
                    </div>
                  </div>
                  <span className="font-['Inter',sans-serif] font-semibold text-sm text-white shrink-0 whitespace-nowrap group-hover:translate-x-1 transition-transform">
                    Inquire →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-choose-us" className="w-full py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
          <div className="max-w-[1520px] mx-auto flex flex-col gap-10">
            <div className="flex flex-col gap-3 max-w-[1100px]">
              <p className="font-['Inter',sans-serif] font-semibold text-[#c1262e] text-[20px] sm:text-[26px]">
                Why Choose Us
              </p>
              <h2 className="font-['Inter',sans-serif] font-semibold text-[#171b1c] text-[28px] sm:text-[40px] lg:text-[48px] leading-[1.2]">
                Connecting Global Employers with Skilled &amp; Reliable Bangladeshi Talent.
              </h2>
              <p className="font-['Inter',sans-serif] text-[#171b1c]/80 text-[16px] sm:text-[19px] leading-[1.5]">
                Sanjana International delivers trusted recruitment solutions through
                expert selection, skill assessment, and dedicated workforce support.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
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
                          <span className="font-['Sora',sans-serif] text-[#022f34] group-hover:text-[#c1262e] transition-colors text-[20px] sm:text-[26px]">
                            {item.title}
                          </span>
                        </div>
                        <span className="text-[#c1262e] text-xl font-bold shrink-0">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isOpen && (
                        <p className="font-['Sora',sans-serif] text-[#707070] text-[16px] sm:text-[18px] leading-[1.55] mt-3 pl-10">
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full bg-[#fff5f5] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
          <div className="max-w-[1520px] mx-auto flex flex-col gap-10 sm:gap-14 items-center">
            <div className="flex flex-col gap-2 items-center text-center">
              <p className="font-['Inter',sans-serif] font-semibold text-[20px] sm:text-[26px] text-black">
                Testimonials
              </p>
              <h2 className="font-['Inter',sans-serif] font-semibold text-[#c1262e] text-[34px] sm:text-[54px] lg:text-[72px] leading-[1.15]">
                What our clients saying
              </h2>
            </div>

            <div className="testimonial-marquee w-full overflow-hidden">
              <div className="testimonial-track flex w-max">
                {[0, 1, 2, 3].map((copy) =>
                  testimonials.map((t, idx) => (
                <div
                  key={`${copy}-${idx}`}
                  aria-hidden={copy > 0}
                  className="bg-white border border-[#dfdede] rounded-[12px] p-5 sm:p-6 flex flex-col justify-between gap-4 shrink-0 mr-4 sm:mr-6 w-[260px] sm:w-[380px] lg:w-[420px]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {t.isDarkLogoBg ? (
                        <div className="bg-black rounded-full size-[36px] sm:size-[40px] flex items-center justify-center shrink-0">
                          <img alt={t.company} className="h-[20px] w-[20px]" src={t.logo} />
                        </div>
                      ) : (
                        <img
                          alt={t.company}
                          className="size-[36px] sm:size-[40px] shrink-0"
                          src={t.logo}
                        />
                      )}
                      <span className="font-['Inter',sans-serif] font-semibold text-[#171717] text-[18px] sm:text-[22px]">
                        {t.company}
                      </span>
                    </div>
                    <img alt="" className="size-[24px] sm:size-[28px] shrink-0" src={imgGroup} />
                  </div>

                  <p className="font-['Inter',sans-serif] font-medium text-[#7a7a7a] text-[14px] sm:text-[15px] leading-[1.5]">
                    {t.quote}
                  </p>

                  <div className="flex flex-col gap-3">
                    <div className="bg-[#d9d9d9] h-px w-full" />
                    <div className="flex items-center gap-3.5">
                      <img
                        alt={t.author}
                        className="size-[40px] sm:size-[48px] rounded-full object-cover shrink-0"
                        src={t.avatar}
                      />
                      <div>
                        <p className="font-['Inter',sans-serif] font-semibold text-[#171717] text-[16px] sm:text-[18px]">
                          {t.author}
                        </p>
                        <p className="font-['Inter',sans-serif] text-[#7a7a7a] text-[13px] sm:text-[14px]">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                  )),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
          <div className="max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Info + Call Card */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <p className="font-['Inter',sans-serif] font-semibold text-[#c1262e] text-[16px] sm:text-[20px]">
                  FAQ
                </p>
                <h2 className="font-['Inter',sans-serif] font-semibold text-[#171b1c] text-[24px] sm:text-[32px] leading-[1.2]">
                  Questions We Get Often
                </h2>
                <p className="font-['Inter',sans-serif] text-[#171b1c]/80 text-[14px] sm:text-[16px]">
                  Answers to your most common questions about Japan recruitment,
                  training, and SSW visa processing.
                </p>
              </div>

              <div className="bg-[#0c2230] rounded-[20px] p-6 sm:p-8 flex flex-col gap-5">
                <div className="bg-[#c1262e] rounded-full size-[60px] flex items-center justify-center">
                  <img alt="" className="size-[28px]" src={imgPhone} />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
                  <div>
                    <h3 className="font-['Inter',sans-serif] text-white text-[18px] sm:text-[20px]">
                      Still have a question?
                    </h3>
                    <p className="font-['Inter',sans-serif] text-[#cdcdcd] text-[13px] sm:text-[15px] mt-1">
                      Our team is ready to assist you with anything you need.
                    </p>
                  </div>
                  <a
                    href="tel:+16473525272"
                    className="inline-flex h-[52px] items-center justify-center px-6 bg-[#c1262e] hover:bg-[#a61e25] transition-colors rounded-[11px] text-white font-['Inter',sans-serif] font-semibold text-[14px] whitespace-nowrap shrink-0"
                  >
                    Make A Call
                  </a>
                </div>
              </div>
            </div>

            {/* Right Interactive FAQ Accordion */}
            <div className="lg:col-span-7 flex flex-col">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border-b border-[#c5c5c5] last:border-b-0 py-5 sm:py-6"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="flex items-center justify-between gap-4 w-full text-left cursor-pointer group"
                    >
                      <span className="font-['Inter',sans-serif] text-[#022f34] group-hover:text-[#c1262e] transition-colors text-[16px] sm:text-[19px] leading-snug">
                        {faq.q}
                      </span>
                      <img
                        alt=""
                        className="size-[26px] sm:size-[30px] shrink-0"
                        src={isOpen ? imgMinus : imgPlus}
                      />
                    </button>
                    {isOpen && (
                      <p className="font-['Inter',sans-serif] text-[#707070] text-[14px] sm:text-[16px] leading-[1.55] mt-3">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Global Workforce / SSW Registration */}
        <section
          id="ssw-registration"
          className="relative w-full bg-[#cc0a2f] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden"
        >
          <img
            alt="Global Workforce"
            className="absolute inset-0 size-full object-cover opacity-20 pointer-events-none mix-blend-overlay"
            src={imgGlobalWorkforce}
          />
          <div className="relative z-10 max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 flex flex-col gap-4 text-white">
              <h2 className="font-['Inter',sans-serif] font-bold text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.1] tracking-tight">
                Let’s Build Your Global Workforce Together.
              </h2>
              <p className="font-['Inter',sans-serif] font-medium text-[17px] sm:text-[20px] leading-[1.55] text-white/95">
                Whether you are an international employer looking for qualified
                talent or a professional seeking opportunities abroad, Sanjana
                International is ready to help.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* For Employers Card */}
              <div className="bg-white shadow-xl rounded-[20px] p-6 flex flex-col justify-between gap-6 group hover:shadow-2xl transition-all">
                <div>
                  <div className="w-full h-[110px] mb-4 rounded-[12px] overflow-hidden relative">
                    <img
                      src={imgGlobalEmployers}
                      alt="Employers"
                      className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5 p-1.5 bg-white/90 backdrop-blur rounded-lg shadow">
                      <img alt="" className="size-[20px]" src={imgBriefcaseBusiness} />
                    </div>
                  </div>
                  <p className="font-['Inter',sans-serif] text-[#737783] text-[15px]">
                    For Employers
                  </p>
                  <h3 className="font-['Inter',sans-serif] font-bold text-[#151719] text-[24px] leading-tight mt-1">
                    Find the Right Talent
                  </h3>
                  <p className="font-['Inter',sans-serif] text-[#737783] text-[15px] leading-[1.55] mt-2">
                    Tell us the roles, numbers and timeline. We’ll come back with
                    a sourcing plan.
                  </p>
                </div>
                <Link
                  href="/employers"
                  className="bg-[#cc0a2f] hover:bg-[#a60826] transition-colors flex gap-3 h-[52px] items-center justify-center rounded-[12px] w-full text-white font-['Inter',sans-serif] font-bold text-[16px] cursor-pointer"
                >
                  <span>Start Hiring</span>
                  <img alt="" className="size-[18px]" src={imgArrowRight1} />
                </Link>
              </div>

              {/* For Candidates Card */}
              <div className="bg-[#151719] shadow-xl rounded-[20px] p-6 flex flex-col justify-between gap-6 group hover:shadow-2xl transition-all">
                <div>
                  <div className="w-full h-[110px] mb-4 rounded-[12px] overflow-hidden relative">
                    <img
                      src={imgGlobalCandidates}
                      alt="Candidates"
                      className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5 p-1.5 bg-[#151719]/90 backdrop-blur rounded-lg shadow">
                      <img alt="" className="size-[20px]" src={imgPlane} />
                    </div>
                  </div>
                  <p className="font-['Inter',sans-serif] text-[#dbdde0] text-[15px]">
                    For Candidates
                  </p>
                  <h3 className="font-['Inter',sans-serif] font-bold text-white text-[24px] leading-tight mt-1">
                    Explore Global Opportunities
                  </h3>
                  <p className="font-['Inter',sans-serif] text-[#bec1c7] text-[15px] leading-[1.55] mt-2">
                    Share your skills and experience. We’ll match you to suitable
                    openings abroad.
                  </p>
                </div>
                <Link
                  href="/jobs"
                  className="bg-white hover:bg-gray-100 transition-colors flex gap-3 h-[52px] items-center justify-center rounded-[12px] w-full text-[#151719] font-['Inter',sans-serif] font-semibold text-[16px] cursor-pointer"
                >
                  <span>Find Opportunities</span>
                  <img alt="" className="size-[18px]" src={imgArrowRight2} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section id="contact-us" className="w-full py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
          <div className="max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Contact Introduction */}
            <div className="lg:col-span-5 flex flex-col">
              <p className="font-['Inter',sans-serif] font-semibold text-[#c1262e] text-[28px] sm:text-[42px] leading-tight">
                Contact
              </p>
              <h2 className="font-['Inter',sans-serif] font-bold text-[#151719] text-[32px] sm:text-[44px] leading-[1.15] tracking-tight mt-1">
                Tell us what you need.
              </h2>
              <p className="font-['Inter',sans-serif] text-[#737783] text-[17px] sm:text-[19px] leading-[1.55] mt-4 mb-8">
                Employers, candidates and IT professionals - send us a short
                inquiry and the right person on our team will respond.
              </p>

              <div className="border-l-2 border-[#e2dbd4] flex flex-col gap-6 pl-6">
                <div>
                  <h3 className="font-['Inter',sans-serif] font-medium text-[#151719] text-[19px] sm:text-[21px]">
                    We review your inquiry
                  </h3>
                  <p className="font-['Inter',sans-serif] text-[#737783] text-[15px] sm:text-[16px] mt-1">
                    Your message goes to the team responsible for your request.
                  </p>
                </div>
                <div>
                  <h3 className="font-['Inter',sans-serif] font-medium text-[#151719] text-[19px] sm:text-[21px]">
                    We reply with next steps
                  </h3>
                  <p className="font-['Inter',sans-serif] text-[#737783] text-[15px] sm:text-[16px] mt-1">
                    For employers, a sourcing plan; for candidates, matching openings.
                  </p>
                </div>
                <div>
                  <h3 className="font-['Inter',sans-serif] font-medium text-[#151719] text-[19px] sm:text-[21px]">
                    We stay in touch
                  </h3>
                  <p className="font-['Inter',sans-serif] text-[#737783] text-[15px] sm:text-[16px] mt-1">
                    One point of contact through the whole recruitment journey.
                  </p>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t-2 border-[#e2dbd4] flex flex-col gap-5">
                <div className="flex gap-3.5 items-start">
                  <img alt="" className="size-[22px] shrink-0 mt-1" src={imgMapPin} />
                  <div>
                    <p className="font-['Inter',sans-serif] font-medium text-[#151719] text-[19px]">
                      Head Office
                    </p>
                    <p className="font-['Inter',sans-serif] text-[#737783] text-[16px]">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
                <div className="flex gap-3.5 items-start">
                  <img alt="" className="size-[22px] shrink-0 mt-1" src={imgCircleCheck2} />
                  <div>
                    <p className="font-['Inter',sans-serif] font-medium text-[#151719] text-[19px]">
                      Government Licence
                    </p>
                    <p className="font-['Inter',sans-serif] text-[#737783] text-[16px]">
                      No. RL-711, Government of Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Inquiry Form */}
            <form
              onSubmit={handleFormSubmit}
              className="lg:col-span-7 bg-white border-2 border-[#e2dbd4] rounded-[20px] p-6 sm:p-10 flex flex-col gap-6"
            >
              <div className="flex flex-col gap-3">
                <span className="font-['Inter',sans-serif] text-[#151719] text-[17px] sm:text-[18px]">
                  I am contacting you as
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {["Employer", "Candidate", "IT Recruitment", "Other"].map(
                    (role) => {
                      const active = contactRole === role;
                      return (
                        <button
                          key={role}
                          type="button"
                          onClick={() => setContactRole(role)}
                          className={`h-[48px] px-3 rounded-[10px] border-2 font-['Inter',sans-serif] text-[15px] transition-colors cursor-pointer ${
                            active
                              ? "bg-[#fcf0f2] border-[#cc0a2f] text-[#cc0a2f] font-medium"
                              : "bg-white border-[#e2dbd4] text-[#151719] hover:border-[#cc0a2f]/50"
                          }`}
                        >
                          {role}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              <label className="flex flex-col gap-2">
                <span className="font-['Inter',sans-serif] text-[#151719] text-[17px]">
                  Full Name
                </span>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  className="border-2 border-[#e2dbd4] focus:border-[#cc0a2f] focus:outline-none rounded-[10px] h-[52px] px-4 font-['Inter',sans-serif] text-[16px] text-[#151719]"
                />
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label className="flex flex-col gap-2">
                  <span className="font-['Inter',sans-serif] text-[#151719] text-[17px]">
                    Email Address
                  </span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="border-2 border-[#e2dbd4] focus:border-[#cc0a2f] focus:outline-none rounded-[10px] h-[52px] px-4 font-['Inter',sans-serif] text-[16px] text-[#151719]"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="flex items-center justify-between font-['Inter',sans-serif] text-[17px]">
                    <span className="text-[#151719]">Phone Number</span>
                    <span className="text-[#737783] text-[14px]">Optional</span>
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+880 1XXX-XXXXXX"
                    className="border-2 border-[#e2dbd4] focus:border-[#cc0a2f] focus:outline-none rounded-[10px] h-[52px] px-4 font-['Inter',sans-serif] text-[16px] text-[#151719]"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2">
                <span className="font-['Inter',sans-serif] text-[#151719] text-[17px]">
                  Message
                </span>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Roles, number of workers, destination country and expected start date..."
                  className="border-2 border-[#e2dbd4] focus:border-[#cc0a2f] focus:outline-none rounded-[10px] p-4 font-['Inter',sans-serif] text-[16px] text-[#151719] resize-y"
                />
              </label>

              {submitted && (
                <div
                  role="status"
                  className="bg-green-50 border border-green-300 text-green-900 rounded-[10px] px-4 py-3 text-[15px] font-['Inter',sans-serif]"
                >
                  Thank you! Your {contactRole} inquiry has been received. Our
                  recruitment team will contact you shortly.
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <p className="font-['Inter',sans-serif] text-[#737783] text-[15px]">
                  All fields except phone are required.
                </p>
                <button
                  type="submit"
                  className="bg-[#cc0a2f] hover:bg-[#a60826] active:scale-[0.98] transition-all flex gap-3 h-[54px] items-center justify-center px-7 rounded-[12px] text-white font-['Inter',sans-serif] font-bold text-[16px] cursor-pointer shrink-0"
                >
                  <span>Submit Inquiry</span>
                  <img alt="" className="size-[18px]" src={imgArrowRight3} />
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#0d0d0c] pt-14 sm:pt-20 pb-10 px-4 sm:px-6 lg:px-12 text-[#a7a9ac]">
        <div className="max-w-[1520px] mx-auto flex flex-col gap-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-3 flex flex-col gap-5">
              <h3 className="font-['Arimo',sans-serif] font-bold text-[#e4e4e5] text-[15px] uppercase tracking-wider">
                Quick Link
              </h3>
              <ul className="flex flex-col gap-2.5 font-['Arimo',sans-serif] text-[18px]">
                <li>
                  <a href="#about-us" className="hover:text-white transition-colors">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#training" className="hover:text-white transition-colors">
                    Process
                  </a>
                </li>
                <li>
                  <a href="#job-categories" className="hover:text-white transition-colors">
                    Our work
                  </a>
                </li>
                <li>
                  <a href="#ssw-registration" className="hover:text-white transition-colors">
                    SSW Registration
                  </a>
                </li>
                <li>
                  <a href="#contact-us" className="hover:text-white transition-colors">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-5">
              <h3 className="font-['Arimo',sans-serif] font-bold text-[#e4e4e5] text-[15px] uppercase tracking-wider">
                Utility
              </h3>
              <ul className="flex flex-col gap-2.5 font-['Arimo',sans-serif] text-[18px]">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#why-choose-us" className="hover:text-white transition-colors">
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="#about-us" className="hover:text-white transition-colors">
                    License (RL-711)
                  </a>
                </li>
                <li>
                  <a href="#contact-us" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div className="sm:col-span-2 lg:col-span-6 flex flex-col gap-4">
              <h3 className="font-['Arimo',sans-serif] font-bold text-[#e4e4e5] text-[15px] uppercase tracking-wider">
                Address
              </h3>
              <p className="font-['Arimo',sans-serif] text-[22px] sm:text-[26px] leading-snug">
                101 Richmond St E, Toronto, M5C 1N9, ON, Canada
              </p>
              <a
                href="tel:+16473525272"
                className="font-['Arimo',sans-serif] text-[22px] sm:text-[26px] hover:text-white transition-colors w-fit"
              >
                +1 (647) 352-5272
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-y border-white/10 py-6 font-['Arimo',sans-serif] text-[18px] sm:text-[24px]">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              FACEBOOK
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              DRIBBBLE
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LINKEDIN
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              INSTAGRAM
            </a>
          </div>

          {/* Large Brand & Graphic */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pt-2">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="grid grid-cols-[max-content] grid-rows-[max-content] leading-none place-items-start relative shrink-0">
                <div className="col-start-1 row-start-1 h-[76px] sm:h-[120px] lg:h-[150px] w-[78px] sm:w-[124px] lg:w-[155px] relative">
                  <img alt="" className="size-full object-contain" src={imgSubtract1} />
                </div>
                <div className="col-start-1 row-start-1 flex h-[76px] sm:h-[120px] lg:h-[150px] items-center justify-center ml-[82px] sm:ml-[130px] lg:ml-[162px] w-[14px]">
                  <div className="-rotate-90 flex-none">
                    <span className="font-['Poppins',sans-serif] text-white text-[6px] sm:text-[9px] lg:text-[11px] tracking-[1px] whitespace-nowrap block">
                      SANJANA INTERNATIONAL
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-['Poppins',sans-serif] font-semibold leading-none text-[36px] sm:text-[56px] lg:text-[72px]">
                <span className="text-white -mb-1 sm:-mb-2">Sanjana</span>
                <span className="text-[#c1262e]">International</span>
              </div>
            </div>

            <div className="w-full max-w-[340px] sm:max-w-[380px] aspect-[493/328] relative rounded-xl overflow-hidden">
              <img
                alt="Sanjana International Global Reach"
                className="size-full object-cover"
                src={imgGeminiGeneratedImage3D5U7T3D5U7T3D5U11}
              />
            </div>
          </div>

          {/* Credits */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/10 font-['Arimo',sans-serif] text-[15px] sm:text-[17px]">
            <p>
              Powered by{" "}
              <a href="#home" className="underline hover:text-white transition-colors">
                Sanjana International
              </a>
            </p>
            <p>© 2026</p>
            <p>Designed By (Sanjana International)</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
