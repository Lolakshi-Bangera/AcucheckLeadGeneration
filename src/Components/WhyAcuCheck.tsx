"use client";
import { useRouter } from "next/navigation";
import React from "react";

const WhyAcuCheck = () => {
  const router = useRouter();

  const pills = [
    "Real-Time Loan Intelligence",
    "Better Returns",
    "Lower Defaults",
    "Loan Stacking and Fraud Protection",
    "Easy APIs or Lender Portal",
  ];

  return (
    <section className="relative flex flex-col items-center justify-start min-h-[500px] md:min-h-[650px] bg-black overflow-hidden px-4 pt-16 pb-24">
      {/* Heading */}
      <h2 className="z-10 text-white text-3xl md:text-4xl lg:text-5xl font-semibold mb-12 text-center">
        Why Choose AcuCheck
      </h2>

      {/* Pills */}
      <div className="z-10 w-full flex justify-center">
        <div className="max-w-3xl w-full flex flex-wrap justify-center gap-3 px-4">
          {pills.map((p, i) => (
            <span
              key={i}
              className="inline-flex items-center justify-center bg-white text-black text-xs md:text-sm px-4 py-2 rounded-full shadow-md whitespace-nowrap"
            >
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* Spacer so pills and heading don't collide with button */}
      <div className="flex-1" />

      {/* Get Started button (compact square) + subtext */}
      <div className="z-10 flex flex-col items-center gap-4 -mt-6">
        <button
          aria-label="Get Started"
          className="bg-white text-black font-normal rounded-2xl w-20 h-20 flex flex-col items-center justify-center shadow-lg cursor-pointer"
          onClick={() => router.push("/under-renovation")}
        >
          <span className="text-xs leading-none">Get Started</span>
          <span className="mt-2 w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </button>

        <p className="text-white text-sm opacity-90 text-center">
          See how AcuCheck can improve your lending
        </p>
      </div>

      {/* Background Video (placed behind content) */}
      <video
        className="pointer-events-none absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/why-acuview-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Optional soft overlay to ensure text contrast over video */}
      <div className="absolute inset-0 z-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
    </section>
  );
};

export default WhyAcuCheck;
