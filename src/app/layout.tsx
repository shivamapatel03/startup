import type { Metadata } from "next";
import { Inter, Outfit, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-cursive",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://beunicstudio.com"),
  title: "BE UNIC | Modern Digital & AI Agency",
  description:
    "We craft intuitive UI/UX, scalable web applications, custom AI agents, and modern digital architectures that accelerate brand growth.",
  keywords: [
    "Digital Agency",
    "AI Solutions",
    "Web Development",
    "UI/UX Design",
    "Mobile Applications",
    "Brand Identity",
    "SEO & Growth",
    "Custom AI Agents",
    "Enterprise AI Integrations",
    "BE UNIC",
  ],
  authors: [{ name: "BE UNIC Agency", url: "https://beunicstudio.com" }],
  creator: "BE UNIC Agency",
  publisher: "BE UNIC Agency",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "BE UNIC | Modern Digital & AI Agency",
    description:
      "We craft intuitive UI/UX, scalable web applications, custom AI agents, and modern digital architectures that accelerate brand growth.",
    url: "https://beunicstudio.com",
    siteName: "BE UNIC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BE UNIC | Modern Digital & AI Agency",
    description:
      "We craft intuitive UI/UX, scalable web applications, custom AI agents, and modern digital architectures that accelerate brand growth.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${greatVibes.variable} h-full antialiased dark scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#050816] text-slate-100 selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
