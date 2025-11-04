"use client";
import Image from "next/image";
import React, { useState } from "react";

const faqs = [
  {
    question: "How secure is borrower’s data with AcuCheck?",
answer: (
  <>
    Extremely secure. We use <strong>256-bit encryption, secure OAuth bank connections</strong>, 
    and follow strict <strong>data compliance protocols</strong>.
    <br />
    No credentials are ever stored, and all data is protected end-to-end.
  </>
),
  },
  {
    question: "What makes AcuCheck different from others?",
    answer: (
      <>
       While others provide raw transaction data, AcuCheck goes several steps further. 
       We deliver <strong> real-time ability to pay, loan stacking warnings, fraud protection,</strong> 
       a customer scoring engine plus more everything your business needs to thrive. 
       It’s not just about data—It’s about growing your business.
      </>
    ),
  },
  {
    question: "Do I need developers to start using AcuCheck?",
    answer:
     (  <>
      Not at all. You can use our <strong>Portal</strong> with zero technical setup.
      </>)
      },
  {
    question: "Does AcuCheck provide both Consumers and business Bank data?",
    answer:
     (  <>
     Absolutely. AcuCheck provides bank data for <strong>consumers, self-employed borrowers, freelancers, </strong>and even <strong>SMBs,</strong>
      making it ideal for <strong>BNPL, auto, medical,</strong> and <strong>embedded finance</strong> use cases.
      </>)
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-white px-4 pb-16">
      {/* Sparkle images as in your code */}
      <Image
        src="/PurpleSparkle.svg"
        alt="Purple Sparkle"
        width={40}
        height={40}
        className="absolute top-5 left-0 md:bottom-[212px] md:left-[3] lg:left-32"
        loading="lazy"
      />
      <Image
        src="/GreenSparkle.svg"
        alt="Green Sparkle"
        width={40}
        height={40}
        className="absolute top-31 right-4  md:right-[3] lg:right-32 lg:top-[200]"
        loading="lazy"
      />
      <Image
        src="/YellowSparkle.svg"
        alt="Yellow Sparkle"
        width={40}
        height={40}
        className="absolute bottom-20 left-10 md:bottom-[212px] md:left-[3] lg:left-32"
        loading="lazy"
      />

      <div className="max-w-2xl w-full mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mt-20 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="w-full space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <div
                className={`${
                  open === idx
                    ? "border-[#A1C7FF] bg-white"
                    : "border-[#E8EAED] bg-white"
                } border rounded-[10px] transition-all`}
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-5 font-medium text-left focus:outline-none"
                  onClick={() => setOpen(open === idx ? -1 : idx)}
                  aria-expanded={open === idx}
                >
                  <span className="text-[#0E0E11] font-semibold text-[20px]">
                    {faq.question}
                  </span>
                  <span className="ml-2 text-2xl text-[#0E0E11]">
                    {open === idx ? "−" : "+"}
                  </span>
                </button>
              </div>
              {open === idx && (
                <div className="border border-[#A1C7FF] rounded-b-[10px] mt-2 px-6 py-5 text-[#0E0E11] text-[17px] bg-white transition-all">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="font-extrabold text-[18px] mb-2 text-[#0E0E11]">
            Still have questions ?
          </div>
          <div className="text-[#000000CC] opacity-[60%] font-bold text-[20px] mb-5">
            Can&apos;t find the answer you&apos;re looking for? 
          </div>
          <button  onClick={() => {
                const element = document.getElementById("demo-form");
                element?.scrollIntoView({ behavior: "smooth" });
              }} className="cursor-pointer inline-block bg-black text-white px-6 py-3 rounded-[50px] shadow-[0px_2px_20px_0px_#0000001A] "  >
            Get Your Demo
          </button>
        </div>
      </div>
    </section>
  );
}
