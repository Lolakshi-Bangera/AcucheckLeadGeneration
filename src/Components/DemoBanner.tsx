"use client";
import Image from "next/image";
import React from "react";
import "../app/globals.css";

export default function DemoBanner() {
  return (
    <section className="relative w-full bg-black overflow-hidden flex flex-col md:flex-row items-center justify-center">
      {/* Left Superman Illustration */}
      <div className="w-full lg:w-[41%] xl:w-[80%] lg:h-[300px] xl:h-[332px] flex flex-row items-end justify-center lg:justify-end xl:justify-start">
        <Image
          src="/supermanone.png"
          alt="Flying Character"
          width={260}
          height={600}
          className="md:w-full md:h-[300px] lg:w-full xl:w-[80%] w-full h-[200px] object-contain max-w-[320px] lg:max-w-full relative top-[-43px] md:top-[-98px] lg:top-[-75px]"
        />
      </div>

      {/* Center Text Section */}
      <div className="w-full md:w-full md:mt-[10px] lg:mt-0 lg:w-[30%] lg:max-w-[30%] xl:w-[35%] flex flex-col items-center md:items-start md:flex-row justify-between mt-2 md:mt-[-60px] relative top-[-37px] lg:top-0 xl:left-[-134px]">
        <div className="flex-1 text-center lg:text-left px-2">
          <h2 className="text-white text-lg md:text-2xl font-bold mb-3">
            Ready to see AcuCheck in action
          </h2>

          <div className="text-white text-[16px] mb-3 leading-relaxed">
            Register Today and Book Your Seat for Our Next Demo! <br />
            <span className="text-gray-300">
              (Spots are limited and are given on a first come first serve basis)
            </span>
          </div>

          <button  onClick={() => {
                const element = document.getElementById("demo-form");
                element?.scrollIntoView({ behavior: "smooth" });
              }} className="bg-[#FFF4EC] text-[#FF893D] font-semibold rounded-md px-7 py-2 text-[16px] mt-5 shadow-[0px_6px_18px_rgba(0,0,0,0.15)] hover:scale-[1.03] transition-transform duration-200">
            Register Now
          </button>
        </div>
      </div>

      {/* Right Rocket Illustration */}
      <div className="hidden md:block w-full md:w-[70%] lg:w-[25%] xl:w-[30%] flex justify-start items-start md:mt-[10px] lg:mt-0">
        <Image
          src="/Badge.svg"
          alt="Rocket Icon"
          width={120}
          height={50}
          className="md:w-full md:max-h-[250px] lg:h-[300px] xl:h-[350px] w-full h-full object-contain relative md:top-[-62px] lg:top-[-64px] xl:top-[-54px]"
          priority
        />
      </div>
    </section>
  );
}
