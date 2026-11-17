import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CookieConsent } from "@/components/ui/CookieConsent";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://beunicstudio.com";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BE UNIC | Premium App Design & Development Studio",
    template: "%s | BE UNIC",
  },
  description:
    "BE UNIC is a premier digital design & software engineering studio. We build exceptional mobile applications (iOS & Android), intuitive UI/UX interfaces, and high-performance websites for ambitious brands and fast-growing startups.",
  keywords: [
    "BE UNIC",
    "App Design Studio",
    "Mobile App Development",
    "UI/UX Design Studio",
    "iOS App Development",
    "Android App Development",
    "Web Development Studio",
    "React Native Development",
    "Next.js Development",
    "Digital Product Studio",
    "SaaS Product Design",
    "Custom Software Development",
    "Figma UI UX Design",
    "India Design Studio",
    "Product Design Agency",
  ],
  authors: [{ name: "BE UNIC", url: siteUrl }],
  creator: "BE UNIC",
  publisher: "BE UNIC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
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
    title: "BE UNIC | Premium App Design & Development Studio",
    description:
      "We design and develop exceptional mobile applications, intuitive interfaces, and scalable websites that help ambitious businesses innovate, scale, and stand out.",
    url: siteUrl,
    siteName: "BE UNIC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "BE UNIC - Premium App Design & Development Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BE UNIC | Premium App Design & Development Studio",
    description:
      "We design and develop exceptional mobile applications, intuitive interfaces, and scalable websites that help ambitious businesses innovate, scale, and stand out.",
    images: ["/hero.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/new.png", type: "image/png" },
    ],
    apple: [{ url: "/new.png", type: "image/png" }],
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#000000] text-[#FFFFFF] selection:bg-[#52A8FF]/30 selection:text-white font-sans">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
