import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Work | Featured Mobile & Web Projects",
  description:
    "Explore featured digital work by BE UNIC, including the Food Delivery App, Medicine Management platform, ZAP digital banking app, Starwoods Resort, and Ujaval.",
  alternates: {
    canonical: "/our-work",
  },
  openGraph: {
    title: "Our Work | Featured Mobile & Web Projects | BE UNIC",
    description:
      "Explore featured work by BE UNIC, including mobile apps, digital healthcare platforms, fintech interfaces, and luxury hospitality websites.",
    url: "https://beunicstudio.com/our-work",
    type: "website",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "BE UNIC Portfolio - Digital Products & Mobile Apps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | Featured Mobile & Web Projects | BE UNIC",
    description:
      "Explore featured work by BE UNIC, including mobile apps, digital healthcare platforms, fintech interfaces, and luxury hospitality websites.",
    images: ["/hero.png"],
  },
};

export default function OurWorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
