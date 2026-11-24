import type { Metadata } from "next";
import SubPageShell from "@/components/SubPageShell";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Sanjana International",
  description:
    "Get in touch with Sanjana International — head office in Dhaka, Bangladesh and Japan office in Shibuya, Tokyo. Call, email or send us a message.",
};

type IconName = "phone" | "mail" | "globe" | "pin" | "user";

function Icon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.7 2z" />
    ),
    mail: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

const quickLinks = [
  { icon: "phone" as const, label: "Mobile", value: "+880 1901-850573", href: "tel:+8801901850573" },
  { icon: "phone" as const, label: "Phone", value: "+880 2-55123797", href: "tel:+880255123797" },
  { icon: "mail" as const, label: "Email", value: "info@sanjanahr.com", href: "mailto:info@sanjanahr.com" },
  { icon: "globe" as const, label: "Website", value: "www.sanjanahr.com", href: "https://www.sanjanahr.com" },
];

const offices = [
  {
    flag: "🇧🇩",
    tag: "Head Office",
    city: "Dhaka, Bangladesh",
    lines: ["Shatabdi Center, 292 Inner Circular Road", "6-G (6th Floor), Fakirapool", "Dhaka-1000, Bangladesh"],
    contacts: [
      { icon: "phone" as const, text: "+880 1901-850573", href: "tel:+8801901850573" },
      { icon: "phone" as const, text: "+880 2-55123797", href: "tel:+880255123797" },
      { icon: "mail" as const, text: "info@sanjanahr.com", href: "mailto:info@sanjanahr.com" },
    ],
    map: "Shatabdi Center, 292 Inner Circular Road, Fakirapool, Dhaka 1000",
  },
  {
    flag: "🇯🇵",
    tag: "Japan Office",
    city: "Shibuya, Tokyo",
    lines: ["Sanjana International Ltd.", "433 Soft Town Aoyama, 3-1-24 Jingumae", "Shibuya-ku, Tokyo 150-0001"],
    jp: "〒150-0001 東京都渋谷区神宮前 3-1-24 ソフトタウン青山 433",
    contacts: [{ icon: "phone" as const, text: "03-6910-5465", href: "tel:+81369105465" }],
    map: "3-1-24 Jingumae, Shibuya-ku, Tokyo 150-0001",
  },
];

const team = [
  {
    name: "Mr. Junji Ueda",
    role: "Representative Director",
    initials: "JU",
    phones: [
      { label: "Tel", value: "03-6910-5465", href: "tel:+81369105465" },
      { label: "Cell", value: "+81 90-5343-5325", href: "tel:+819053435325" },
    ],
    email: "j.udea@sanjanainternational.jp",
  },
  {
    name: "Masahiro Kondo",
    role: "Manager, Sales",
    initials: "MK",
    phones: [{ label: "Cell", value: "+81 90-3618-9880", href: "tel:+819036189880" }],
    email: "m.kondo@sanjanainternational.jp",
  },
  {
    name: "Md Mizanur Rahman",
    role: "Manager, Marketing",
    initials: "MR",
    phones: [{ label: "Cell", value: "+81 70-2656-9786", href: "tel:+817026569786" }],
    email: "mizanyumna@gmail.com",
  },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const role = (await searchParams).role;

  return (
    <SubPageShell active="/contact">
      <div className="font-['Inter',sans-serif]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#151719] text-white px-4 sm:px-6 lg:px-12 pt-16 sm:pt-24 pb-36 sm:pb-44">
          <img
            src="/figma/global-workforce-hero.jpg"
            alt=""
            className="absolute inset-0 size-full object-cover opacity-25 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#cc0a2f]/70 via-[#151719]/80 to-[#151719] pointer-events-none" />
          <div className="absolute -top-32 -right-32 size-[420px] rounded-full bg-[#cc0a2f]/30 blur-[120px] pointer-events-none" />

          <div className="relative max-w-[1240px] mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-4 py-1.5 text-[13px] font-semibold tracking-wide uppercase">
              <span className="size-2 rounded-full bg-[#4ade80] animate-pulse" />
              We’re here to help
            </span>
            <h1 className="font-bold text-[38px] sm:text-[56px] lg:text-[64px] leading-[1.05] tracking-tight mt-5">
              Let’s start a <span className="text-[#ff8a96]">conversation</span>.
            </h1>
            <p className="text-white/80 text-[17px] sm:text-[19px] leading-[1.6] mt-5 max-w-[640px] mx-auto">
              Whether you’re hiring skilled workers or looking for your next job
              abroad, our teams in Dhaka and Tokyo are ready to answer.
            </p>
          </div>
        </section>

        {/* Quick contact cards (overlapping hero) */}
        <section className="relative px-4 sm:px-6 lg:px-12 -mt-24 sm:-mt-28">
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((q) => (
              <a
                key={q.label}
                href={q.href}
                target={q.icon === "globe" ? "_blank" : undefined}
                rel={q.icon === "globe" ? "noopener noreferrer" : undefined}
                className="group bg-white rounded-[20px] p-6 shadow-[0_16px_40px_rgba(21,23,25,0.10)] border border-black/5 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(204,10,47,0.15)] transition-all"
              >
                <span className="flex items-center justify-center size-[50px] rounded-[14px] bg-[#fff0f2] text-[#cc0a2f] group-hover:bg-[#cc0a2f] group-hover:text-white transition-colors">
                  <Icon name={q.icon} className="size-[22px]" />
                </span>
                <p className="text-[#737783] text-[13px] font-semibold uppercase tracking-[0.08em] mt-5">{q.label}</p>
                <p className="text-[#151719] text-[17px] font-bold mt-1 break-all">{q.value}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Offices */}
        <section className="px-4 sm:px-6 lg:px-12 py-16 sm:py-24">
          <div className="max-w-[1240px] mx-auto">
            <div className="text-center max-w-[620px] mx-auto">
              <p className="text-[#cc0a2f] font-semibold text-[15px] uppercase tracking-[0.1em]">Our offices</p>
              <h2 className="font-bold text-[#151719] text-[30px] sm:text-[42px] tracking-tight mt-2">
                Two countries, one team
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
              {offices.map((o) => (
                <article
                  key={o.tag}
                  className="bg-white rounded-[24px] border border-black/5 shadow-sm overflow-hidden flex flex-col"
                >
                  <div className="relative h-[220px] bg-[#eceef1]">
                    <iframe
                      title={`${o.tag} map`}
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(o.map)}&z=15&output=embed`}
                      className="absolute inset-0 size-full border-0 grayscale-[30%]"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col gap-5 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <span className="inline-block rounded-full bg-[#fff0f2] text-[#cc0a2f] text-[12.5px] font-bold uppercase tracking-[0.08em] px-3 py-1">
                          {o.tag}
                        </span>
                        <h3 className="font-bold text-[#151719] text-[24px] mt-3">{o.city}</h3>
                      </div>
                      <span className="text-[40px] leading-none" aria-hidden="true">{o.flag}</span>
                    </div>

                    <div className="flex gap-3 text-[#4b4f58] text-[15.5px] leading-[1.6]">
                      <Icon name="pin" className="size-5 shrink-0 mt-0.5 text-[#cc0a2f]" />
                      <div>
                        {o.lines.map((l) => (
                          <p key={l}>{l}</p>
                        ))}
                        {o.jp && <p className="text-[#737783] text-[14px] mt-2">{o.jp}</p>}
                      </div>
                    </div>

                    <div className="mt-auto pt-5 border-t border-black/5 flex flex-wrap gap-2">
                      {o.contacts.map((c) => (
                        <a
                          key={c.text}
                          href={c.href}
                          className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 h-[40px] text-[14px] font-medium text-[#151719] hover:border-[#cc0a2f] hover:text-[#cc0a2f] transition-colors"
                        >
                          <Icon name={c.icon} className="size-4" />
                          {c.text}
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Japan team */}
        <section className="bg-[#151719] text-white px-4 sm:px-6 lg:px-12 py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute -bottom-40 -left-40 size-[460px] rounded-full bg-[#cc0a2f]/20 blur-[130px] pointer-events-none" />
          <div className="relative max-w-[1240px] mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="text-[#ff8a96] font-semibold text-[15px] uppercase tracking-[0.1em]">Japan office · Contact persons</p>
                <h2 className="font-bold text-[30px] sm:text-[42px] tracking-tight mt-2">Talk to our people directly</h2>
              </div>
              <p className="text-white/60 text-[15.5px] max-w-[380px]">
                Employers in Japan can reach our Tokyo team for hiring, sales and
                partnership inquiries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
              {team.map((p) => (
                <article
                  key={p.name}
                  className="rounded-[22px] bg-white/[0.04] border border-white/10 p-6 sm:p-7 backdrop-blur hover:bg-white/[0.07] hover:border-white/20 transition-colors flex flex-col"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center size-[56px] rounded-full bg-gradient-to-br from-[#cc0a2f] to-[#ff5a6e] font-bold text-[18px] shadow-[0_8px_20px_rgba(204,10,47,0.35)]">
                      {p.initials}
                    </span>
                    <div>
                      <h3 className="font-bold text-[19px] leading-tight">{p.name}</h3>
                      <p className="text-[#ff8a96] text-[14px] font-medium mt-1">{p.role}</p>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-2.5 mt-6 pt-5 border-t border-white/10 text-[15px]">
                    {p.phones.map((ph) => (
                      <li key={ph.href}>
                        <a href={ph.href} className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                          <Icon name="phone" className="size-4 text-white/50" />
                          <span className="text-white/50 w-9">{ph.label}</span>
                          {ph.value}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a href={`mailto:${p.email}`} className="flex items-center gap-3 text-white/80 hover:text-white transition-colors break-all">
                        <Icon name="mail" className="size-4 text-white/50 shrink-0" />
                        {p.email}
                      </a>
                    </li>
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section id="message" className="px-4 sm:px-6 lg:px-12 py-16 sm:py-24 scroll-mt-24">
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <p className="text-[#cc0a2f] font-semibold text-[15px] uppercase tracking-[0.1em]">Send a message</p>
              <h2 className="font-bold text-[#151719] text-[30px] sm:text-[42px] tracking-tight leading-[1.12] mt-2">
                Tell us what you need.
              </h2>
              <p className="text-[#737783] text-[16.5px] leading-[1.65] mt-4">
                Employers, candidates and IT professionals — send a short inquiry
                and the right person on our team will respond.
              </p>

              <ol className="mt-8 flex flex-col gap-5">
                {[
                  ["We review your inquiry", "Your message goes to the team responsible for your request."],
                  ["We reply with next steps", "A sourcing plan for employers, matching openings for candidates."],
                  ["We stay in touch", "One point of contact through the whole journey."],
                ].map(([t, d], i) => (
                  <li key={t} className="flex gap-4">
                    <span className="flex items-center justify-center size-[36px] shrink-0 rounded-full bg-[#151719] text-white text-[14px] font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-[#151719] text-[17px]">{t}</h3>
                      <p className="text-[#737783] text-[15px] mt-0.5">{d}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-8 rounded-[16px] bg-[#fff0f2] border border-[#cc0a2f]/10 px-5 py-4 text-[14.5px] text-[#7a1020]">
                <span className="font-bold">Recruiting Licence (RL-711)</span> · Government of Bangladesh
              </div>
            </div>

            <div className="lg:col-span-7 bg-white rounded-[24px] border border-black/5 shadow-[0_20px_50px_rgba(21,23,25,0.08)] p-6 sm:p-10">
              <ContactForm initialRole={typeof role === "string" ? role : undefined} />
            </div>
          </div>
        </section>
      </div>
    </SubPageShell>
  );
}
