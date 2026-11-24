import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanjana International - Career in Japan",
  description: "Govt. Approved Recruiting Agency (RL-711). Your trusted recruitment partner for skilled professionals, technical specialists, and workforce solutions across international markets.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&family=Barlow+Condensed:wght@600;700;800&family=Cinzel:wght@600;700;800;900&family=Inter:wght@400;500;600;700;800&family=Lato:wght@400;700;900&family=Manrope:wght@400;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Poppins:wght@400;500;600;700;800&family=Sora:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-white text-[#171717] overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
