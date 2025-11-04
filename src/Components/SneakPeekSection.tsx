"use client";
import Image from "next/image";
import React from "react";

export default function SneakPeekSection() {

  return (
    <section className="relative w-full flex items-center justify-center min-h-[400px] md:min-h-[520px] overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/cashflow_bg.webm" type="video/webm" />
      </video>

      {/* Flower overlay that covers entire section */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/flowerbg.webp"
          alt="Flower Overlay"
          fill
          className="object-cover object-left  opacity-20 mix-blend-screen"
          priority
        />
      </div>

      {/* Blue gradient tint overlay */}
    

      {/* Content */}
      <div className="relative z-30 w-full flex flex-col items-center justify-center text-center px-6 py-10 md:py-20">
        <div className="text-black/80 text-[21px] font-bold mb-2">Get Started</div>

        <h2 className="text-black text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight max-w-[1200px]">
          See how Cash flow affects the customers' ability to pay
        </h2>

        <div className="text-black/90 text-base md:text-lg font-semibold mt-3 mb-6">
          The right loan amount can lower your defaults
        </div>

        <p className="text-black/80 text-sm md:text-base max-w-2xl leading-relaxed">
          Cash Flow is the new credit score. AcuCheck helps you assess real-time income,
          spending, and financial obligations, so you can lend smarter and reduce risk
          from day one.
        </p>

        <button
          // onClick={() => router.push("/under-renovation")}
            onClick={() => {
                const element = document.getElementById("demo-form");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
          className="mt-8 bg-black text-white text-sm font-medium px-8 py-3 rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.3)] transition-transform hover:scale-105"
        >
          Get Your Demo
        </button>
      </div>

      {/* Bottom overlay for better text readability */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/10 to-white/30 mix-blend-overlay z-20" />
    </section>
  );
}
