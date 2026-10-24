import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sanjana International | Licensed Overseas Recruitment Agency (RL-711)",
  description: "Sanjana International is a premier licensed overseas staffing and recruitment agency in Dhaka, Bangladesh (License: RL-711). Approved by the Ministry of Labor & Employment. Specializing in Japan SSW programs and global IT talent placement.",
  keywords: [
    "Sanjana International",
    "RL-711",
    "Bangladesh Overseas Employment",
    "Japan SSW Program",
    "Specified Skilled Worker Japan",
    "IT Talent Placement Japan",
    "Licensed Recruitment Agency Dhaka",
    "Caregiver Japan Recruitment"
  ],
  authors: [{ name: "Sanjana International" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Sanjana International | Your Trusted Bridge to Global Careers",
    description: "Licensed overseas staffing agency in Dhaka, Bangladesh (License: RL-711). Connecting skilled talent with trusted employers worldwide safely, legally, and transparently.",
    url: "https://sanjanahr.com",
    siteName: "Sanjana International",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable} h-full scroll-smooth light`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${jost.className} min-h-full flex flex-col bg-white text-[#4A5878] antialiased selection:bg-[#0B3D91] selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
