import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Start Your Project | Contact BE UNIC Digital & AI Agency",
  description:
    "Initiate a conversation with BE UNIC. Inquire about custom Web Development, UI/UX Design, Enterprise AI Solutions, Mobile Applications, and digital architecture.",
  openGraph: {
    title: "Start Your Project | Contact BE UNIC Agency",
    description:
      "Inquire about custom Web Development, UI/UX Design, Enterprise AI Solutions, Mobile Applications, and digital growth.",
    url: "https://beunicstudio.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Start Your Project | Contact BE UNIC Agency",
    description:
      "Inquire about custom Web Development, UI/UX Design, Enterprise AI Solutions, Mobile Applications, and digital growth.",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
