import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Mail, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Page Not Found | BE UNIC",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full bg-white text-[#181818] flex flex-col justify-between">
      <Header />

      {/* 404 Error Section */}
      <section className="w-full max-w-[840px] mx-auto px-6 pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 flex flex-col items-center text-center">
        {/* 404 Graphic Illustration */}
        <div className="relative w-full max-w-[420px] sm:max-w-[500px] md:max-w-[560px] aspect-[1536/1024] mb-6 sm:mb-8 select-none">
          <Image
            src="/404.png"
            alt="404 - Page Not Found"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 500px, 560px"
            className="object-contain select-none"
          />
        </div>

        {/* Heading & Text */}
        <h1 className="text-[26px] sm:text-[32px] md:text-[38px] font-bold text-[#181818] tracking-tight">
          Page Not Found
        </h1>
        <p className="mt-3 text-[14.5px] sm:text-[15.5px] text-[#666666] max-w-[500px] leading-relaxed">
          The page you are looking for doesn’t exist or has been moved. If you have questions or need assistance, reach out directly via email.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#222222] hover:bg-black text-white text-[13.5px] font-medium px-6 py-3 rounded-full transition-colors w-full sm:w-auto shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <a
            href="mailto:beunicmark@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-[#F5F5F7] hover:bg-[#EAEAEA] text-[#181818] text-[13.5px] font-medium px-6 py-3 rounded-full border border-[#E5E5E5] transition-colors w-full sm:w-auto"
          >
            <Mail className="w-4 h-4 text-[#555555]" />
            <span>beunicmark@gmail.com</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
