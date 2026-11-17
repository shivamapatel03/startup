import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Core Members | Leadership & Engineering Team",
  description:
    "Meet the core team and engineering leadership at BE UNIC: Shivam Patel, Swayam Shah, Om Patel, and Pramukh Prajapati.",
  alternates: {
    canonical: "/members",
  },
  openGraph: {
    title: "Core Members | BE UNIC Leadership Team",
    description:
      "Meet the core engineers and designers behind BE UNIC.",
    url: "https://beunicstudio.com/members",
    type: "profile",
    images: [
      {
        url: "/team/team1.png",
        width: 800,
        height: 800,
        alt: "BE UNIC Core Members",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Core Members | BE UNIC Leadership Team",
    description: "Meet the core engineers and designers behind BE UNIC.",
    images: ["/team/team1.png"],
  },
};

export default function MembersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
