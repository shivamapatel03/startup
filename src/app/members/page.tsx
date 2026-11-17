"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const coreMembers = [
  {
    name: "Shivam Patel",
    role: "Engineering head BE UNIC",
    image: "/team/team1.png",
    linkedin: "https://www.linkedin.com/in/shivam-patel",
  },
  {
    name: "Swayam Shah",
    role: "Design head BE UNIC",
    image: "/team/team2.png",
    linkedin: "https://www.linkedin.com/in/swayam-shah",
  },
  {
    name: "Om Patel",
    role: "Creative head BE UNIC",
    image: "/team/team4.png",
    linkedin: "https://www.linkedin.com/in/om-patel-29a25b357/",
  },
  {
    name: "Pramukh Prajapati",
    role: "Systems head BE UNIC",
    image: "/team/team3.png",
    linkedin: "https://www.linkedin.com/in/pramukhprajapati17/",
  },
];

export default function MembersPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <main className="relative min-h-screen w-full bg-white text-[#181818] flex flex-col justify-between">
        <Header />

        {/* Content Section: Only heading and profile cards (No extra text, no back button, no gradient) */}
        <section className="w-full max-w-[1240px] mx-auto px-6 pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-24">
          <h1 className="text-[28px] sm:text-[34px] md:text-[38px] font-bold text-[#181818] tracking-tight text-center mb-10 sm:mb-14">
            Core members
          </h1>

          {/* Cards Grid: Matching image design with no hover effects on cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 justify-items-center">
            {coreMembers.map((member) => (
              <div
                key={member.name}
                className="relative bg-white border border-[#EAEAEA] rounded-[28px] p-7 sm:p-8 flex flex-col items-center text-center w-full max-w-[275px] shadow-[0_2px_12px_rgba(0,0,0,0.02)] overflow-hidden"
              >
                {/* Blue Gradient Effect at bottom inside card */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 inset-x-0 h-32 pointer-events-none bg-[radial-gradient(ellipse_100%_80%_at_50%_115%,rgba(56,189,248,0.28)_0%,rgba(59,130,246,0.14)_45%,transparent_75%)] select-none"
                />

                {/* Member Avatar */}
                <div className="relative z-10 w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden bg-[#F0F1F3] select-none shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 128px, 144px"
                    className="object-cover object-top select-none"
                  />
                </div>

                {/* Member Name */}
                <h2 className="relative z-10 font-bold text-[18px] sm:text-[19px] text-[#181818] mt-6">
                  {member.name}
                </h2>

                {/* Member Role */}
                <p className="relative z-10 text-[13.5px] sm:text-[14px] text-[#666666] mt-1">
                  {member.role}
                </p>

                {/* View Profile Button redirecting to LinkedIn */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 mt-6 inline-flex items-center justify-center bg-[#222222] hover:bg-black text-white text-[13px] font-medium px-6 py-2.5 rounded-[6px] transition-colors"
                >
                  View profile
                </a>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </Suspense>
  );
}
