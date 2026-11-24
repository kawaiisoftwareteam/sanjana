import type { Metadata } from "next";
import SubPageShell from "@/components/SubPageShell";
import HiringRequestForm from "./HiringRequestForm";

export const metadata: Metadata = {
  title: "Hire Skilled Workers | Sanjana International",
  description:
    "International staffing and recruitment for employers. Trade-tested, trained and visa-ready workers for nursing care, construction, manufacturing, food service and more.",
};

const services = [
  {
    title: "Talent Sourcing",
    text: "Large pre-screened candidate pool across skilled, semi-skilled and technical trades.",
  },
  {
    title: "Trade Testing",
    text: "Practical skill assessments by qualified engineers, with video-recorded results on request.",
  },
  {
    title: "Language & Skill Training",
    text: "Japanese language (N5–N3) and job-specific training at our own training centre.",
  },
  {
    title: "Medical & Documentation",
    text: "Medical check-ups at authorized centres, police clearance and full paperwork handled.",
  },
  {
    title: "Visa & Deployment",
    text: "Visa processing, government approvals, flight booking and pre-departure orientation.",
  },
  {
    title: "Post-Arrival Support",
    text: "Follow-up with workers and employers after arrival to ensure smooth settlement.",
  },
];

const steps = [
  { n: "01", title: "Send your requirement", text: "Roles, number of workers, salary and timeline." },
  { n: "02", title: "Sourcing plan", text: "We share candidate availability, timeline and cost." },
  { n: "03", title: "Shortlist & interview", text: "Review CVs, trade-test videos and interview online or on-site." },
  { n: "04", title: "Training & visa", text: "Selected workers are trained, medically checked and visa-processed." },
  { n: "05", title: "Deployment", text: "Workers arrive ready to work, with ongoing support from our team." },
];

const stats = [
  { value: "RL-711", label: "Govt. approved license" },
  { value: "16+", label: "Industries supplied" },
  { value: "60–90", label: "Days avg. deployment" },
  { value: "100%", label: "Trade-tested workers" },
];

const faqs = [
  {
    q: "How many workers can you supply?",
    a: "From a single specialist to large batches of 100+ workers. Tell us your numbers and we’ll confirm availability in the sourcing plan.",
  },
  {
    q: "Can we interview candidates before selection?",
    a: "Yes. We arrange online interviews, share trade-test videos, or host your team for on-site selection at our centre.",
  },
  {
    q: "Which visa programs do you work with?",
    a: "Specified Skilled Worker (SSW Type-1 and Type-2), Technical Intern Training Program, and other employment visas depending on the destination country.",
  },
  {
    q: "What does it cost the employer?",
    a: "Costs depend on the role, quantity and visa program. We provide a transparent quotation along with the sourcing plan — no hidden fees.",
  },
];

export default function EmployersPage() {
  return (
    <SubPageShell active="/employers">
      {/* Hero */}
      <section className="relative w-full text-white px-4 sm:px-6 lg:px-12 py-16 sm:py-24 overflow-hidden font-['Inter',sans-serif]">
        <img
          src="/figma/global-employers.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover scale-105 blur-[3px] pointer-events-none"
        />
        <div className="relative max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-white font-semibold tracking-wide text-[15px] uppercase drop-shadow">
              For Employers · International Staffing & Recruitment
            </p>
            <h1 className="font-bold text-[34px] sm:text-[48px] lg:text-[58px] leading-[1.08] tracking-tight mt-3 drop-shadow-md">
              Find the Right Talent for Your Business.
            </h1>
            <p className="text-[17px] sm:text-[20px] text-white mt-5 drop-shadow max-w-[640px] leading-[1.55]">
              Tell us the roles, numbers and timeline. We’ll come back with a
              sourcing plan, then select, test, train and deploy workers who are
              ready from day one.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#hiring-request"
                className="inline-flex items-center h-[54px] px-7 rounded-[12px] bg-white text-[#C1272E] font-bold text-[16px] shadow-md hover:bg-gray-50 transition-colors"
              >
                Submit Hiring Request
              </a>
              <a
                href="tel:+16473525272"
                className="inline-flex items-center h-[54px] px-7 rounded-[12px] border border-white/60 bg-white/10 backdrop-blur-sm text-white font-semibold text-[16px] hover:bg-white/25 transition-colors"
              >
                Call Our Corporate Team
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="relative overflow-hidden bg-black/25 backdrop-blur-md border border-white/25 rounded-[14px] px-5 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-colors hover:bg-black/35"
              >
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                <p className="text-[24px] sm:text-[30px] font-semibold leading-none tracking-tight">{s.value}</p>
                <p className="text-white/85 text-[12px] font-medium uppercase tracking-[0.08em] mt-2.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 sm:py-20 font-['Inter',sans-serif]">
        <div className="max-w-[1520px] mx-auto">
          <p className="text-[#cc0a2f] font-semibold text-[16px]">What we do</p>
          <h2 className="font-bold text-[#151719] text-[30px] sm:text-[40px] tracking-tight mt-1">
            End-to-end recruitment, handled for you
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {services.map((s, i) => (
              <div key={s.title} className="bg-white rounded-[18px] border border-black/5 shadow-sm p-6">
                <span className="inline-flex items-center justify-center size-[44px] rounded-[12px] bg-[#fff0f2] text-[#cc0a2f] font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-bold text-[#151719] text-[19px] mt-4">{s.title}</h3>
                <p className="text-[#737783] text-[15px] leading-[1.55] mt-1.5">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#151719] text-white px-4 sm:px-6 lg:px-12 py-16 sm:py-20 font-['Inter',sans-serif]">
        <div className="max-w-[1520px] mx-auto">
          <p className="text-[#ff8a96] font-semibold text-[16px]">How hiring works</p>
          <h2 className="font-bold text-[30px] sm:text-[40px] tracking-tight mt-1">
            From requirement to arrival in 5 steps
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-10">
            {steps.map((s) => (
              <li key={s.n} className="border-t-2 border-[#cc0a2f] pt-4">
                <p className="text-[#ff8a96] font-bold text-[14px]">STEP {s.n}</p>
                <h3 className="font-bold text-[18px] mt-1">{s.title}</h3>
                <p className="text-white/70 text-[15px] leading-[1.5] mt-1.5">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Form */}
      <section id="hiring-request" className="px-4 sm:px-6 lg:px-12 py-16 sm:py-20 scroll-mt-24 font-['Inter',sans-serif]">
        <div className="max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="text-[#cc0a2f] font-semibold text-[16px]">Hiring request</p>
            <h2 className="font-bold text-[#151719] text-[30px] sm:text-[40px] tracking-tight leading-[1.15] mt-1">
              Tell us who you need.
            </h2>
            <p className="text-[#737783] text-[16px] leading-[1.6] mt-4">
              Fill in what you know — we’ll follow up on the rest. You’ll receive a
              sourcing plan with candidate availability, timeline and cost within 2
              business days.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <h3 className="font-bold text-[#151719] text-[18px]">Frequently asked</h3>
              {faqs.map((f) => (
                <details key={f.q} className="group bg-white rounded-[12px] border border-black/5 p-4">
                  <summary className="cursor-pointer font-semibold text-[#151719] text-[15px] list-none flex justify-between gap-3">
                    {f.q}
                    <span className="text-[#cc0a2f] group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-[#737783] text-[14.5px] leading-[1.55] mt-2">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8 bg-white rounded-[20px] border border-black/5 shadow-sm p-5 sm:p-8">
            <HiringRequestForm />
          </div>
        </div>
      </section>
    </SubPageShell>
  );
}
