import Link from "next/link";
import NavDropdown from "./NavDropdown";

const logo = "/figma/28a48.svg";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about-us" },
  { label: "Contact Us", href: "/contact" },
];

export default function SubPageShell({
  active,
  children,
}: {
  active?: "/jobs" | "/employers" | "/contact";
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen bg-[#f8f9fa] flex flex-col">
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-black/5 shadow-xs">
        <div className="max-w-[1520px] mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-12 h-[72px] sm:h-[84px]">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img alt="Sanjana International Logo" className="h-[40px] sm:h-[48px] w-auto" src={logo} />
            <div className="flex flex-col font-['Poppins',sans-serif] font-semibold leading-none text-[17px] sm:text-[21px]">
              <span className="text-[#c1262e] -mb-0.5">Sanjana</span>
              <span className="text-black">International</span>
            </div>
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-6 lg:gap-8 font-['Inter',sans-serif] text-[15px]">
              {navLinks.slice(0, 2).map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active === l.href ? "page" : undefined}
                    className={
                      active === l.href
                        ? "font-semibold text-[#c1262e] border-b-2 border-[#c1262e] pb-1"
                        : "text-[#171b1c] hover:text-[#c1262e] transition-colors"
                    }
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <NavDropdown title="Opportunities" active={active} />
              </li>
              {navLinks.slice(2).map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active === l.href ? "page" : undefined}
                    className={
                      active === l.href
                        ? "font-semibold text-[#c1262e] border-b-2 border-[#c1262e] pb-1"
                        : "text-[#171b1c] hover:text-[#c1262e] transition-colors"
                    }
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <NavDropdown title="Opportunities" active={active} align="right" className="md:hidden" triggerClassName="text-[14px] font-semibold px-3 py-2" />
            <Link
              href="/contact"
              className="inline-flex bg-[#c1262e] hover:bg-[#a61e25] transition-colors h-[42px] sm:h-[48px] items-center px-4 sm:px-5 rounded-[10px] text-white font-['Inter',sans-serif] font-semibold text-[14px] whitespace-nowrap"
            >
              Contact
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="w-full bg-[#0d0d0c] py-10 px-4 sm:px-6 lg:px-12 text-[#a7a9ac]">
        <div className="max-w-[1520px] mx-auto flex flex-col sm:flex-row gap-4 sm:items-center justify-between font-['Inter',sans-serif] text-[15px]">
          <p>
            © {new Date().getFullYear()} Sanjana International · Recruiting Licence (RL-711)
          </p>
          <div className="flex gap-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/jobs" className="hover:text-white transition-colors">Jobs</Link>
            <Link href="/employers" className="hover:text-white transition-colors">Employers</Link>
            <a href="tel:+16473525272" className="hover:text-white transition-colors">Call Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
