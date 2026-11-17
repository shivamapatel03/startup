import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://beunicstudio.com"),
  title: "BE UNIC | Premium App Design & Development Studio",
  description:
    "We design and develop exceptional websites, mobile applications, and digital products that help ambitious businesses innovate, scale, and stand out.",
  keywords: [
    "BE UNIC",
    "App Design Studio",
    "Web Development",
    "UI/UX Design",
    "Mobile Applications",
    "SaaS Development",
    "Custom Software",
    "Digital Products",
  ],
  authors: [{ name: "BE UNIC", url: "https://beunicstudio.com" }],
  creator: "BE UNIC",
  publisher: "BE UNIC",
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
      "We design and develop exceptional websites, mobile applications, and digital products that help ambitious businesses innovate, scale, and stand out.",
    url: "https://beunicstudio.com",
    siteName: "BE UNIC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BE UNIC | Premium App Design & Development Studio",
    description:
      "We design and develop exceptional websites, mobile applications, and digital products that help ambitious businesses innovate, scale, and stand out.",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/new.png", type: "image/png" },
    ],
    apple: [{ url: "/new.png", type: "image/png" }],
  },
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
      </body>
    </html>
  );
}
