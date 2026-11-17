import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us | Start Your Project with BE UNIC",
  description:
    "Get in touch with BE UNIC to discuss mobile app design, iOS & Android development, and custom web applications. Fast response time.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Start Your Project with BE UNIC",
    description:
      "Get in touch with BE UNIC to discuss mobile app design, iOS & Android development, and custom web applications.",
    url: "https://beunicstudio.com/contact",
    type: "website",
    images: [
      {
        url: "/contact.png",
        width: 1200,
        height: 630,
        alt: "Contact BE UNIC Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Start Your Project with BE UNIC",
    description:
      "Get in touch with BE UNIC to discuss mobile app design, iOS & Android development, and custom web applications.",
    images: ["/contact.png"],
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
