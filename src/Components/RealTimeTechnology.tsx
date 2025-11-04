"use client";

import React from "react";
import Image from "next/image";

export default function RealTimeFinancialData() {
  return (
    <section className="relative w-full overflow-hidden bg-white sm:min-h-[360px] md:min-h-[560px] lg:min-h-[800px] 2xl:min-h-[970px] ">
      {/* Full-bleed background video covering the whole section */}
      <video
        autoPlay
        loop
        muted
        playsInline
        // ensure video fills the section and is behind everything
        className="absolute inset-0 w-full h-full object-contain object-bottom xl:object-cover z-0"
      >
        <source src="/Realtime_bg.webm" type="video/webm" />
        {/* Optional fallback if browser doesn't support webm */}
        {/* <source src="/Realtime_bg.mp4" type="video/mp4" /> */}
      </video>


      {/* Paper Plane (top-right) */
      /* Keep it interactive off so clicks pass through, if desired */ }
      <div className="absolute -top-2 -left-12 w-12 h-12 md:w-56 md:h-66 z-30 pointer-events-none">
        <Image src="/PaperPlane.png" alt="Paper Plane" fill className="object-contain" />
      </div>
 {/* ===== Centered Heading ===== */}
      <div className="relative z-40 text-center px-6 mt-10 xl:pt-16">
        <h2 className="text-3xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-black ">
          Real-Time Financial Data + Advanced Analysis
        </h2>
      </div>
      {/* Content container — placed above video and overlay */}
      <div className="relative z-40 max-w-[2560px]  px-6 md:pr-12 pb-48 sm:pb-36 md:py-24 flex flex-col md:flex-row items-center justify-between">
        {/* Left content */}
        <div className="md:w-1/3 max-w-[260px] xl:max-w-lg text-left text-black xl:mt-30 xl:ml-35">
         

          <p className="mt-6 text-base md:text-lg font-semibold text-gray-900">
            AcuCheck transforms raw bank data into clean, actionable intelligence.
          </p>

          <p className="mt-3 text-sm md:text-base text-gray-700/90">
            From real-time income tracking and spending analysis to fraud alerts
            and loan stacking detection, AcuCheck empowers you with smarter
            underwriting designed for real-world lending.
          </p>

          <button className="mt-6 px-6 py-2 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium">
            Get Started Today
          </button>
        </div>

        {/* Right spacer (keeps layout like Figma) */}
        <div className="md:w-2/3 hidden md:block" aria-hidden="true" />
      </div>
    </section>
  );
}
