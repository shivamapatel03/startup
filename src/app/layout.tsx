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
  title: "BE UNIC | Modern Digital & AI Agency",
  description:
    "We craft intuitive UI/UX, scalable applications, and modern digital solutions that accelerate brand growth.",
  openGraph: {
    title: "BE UNIC | Modern Digital Agency",
    description: "We craft intuitive UI/UX, scalable applications, and modern digital solutions that accelerate brand growth.",
    type: "website",
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
