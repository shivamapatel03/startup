import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Work | BE UNIC Digital Product Studio",
  description: "Featured mobile applications, interfaces, and web solutions engineered by BE UNIC.",
};

export default function OurWorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
