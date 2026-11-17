import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Core Members | BE UNIC",
  description: "Core members and leadership team at BE UNIC.",
};

export default function MembersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
