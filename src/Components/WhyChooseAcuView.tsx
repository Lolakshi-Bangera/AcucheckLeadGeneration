// components/WhyChooseAcuView.tsx
import Image from "next/image";
import React from "react";

const features = [
  {
    title: "Live Bank Data",
    description: "Real-time customer banking information.",
    icon: "/WhyLive.svg", // keep placeholder — you'll replace later
  },
  {
    title: "Ability to Pay",
    description: "Loan & payments that fit the customers' income.",
    icon: "/WhyAbility.svg",
  },
  {
    title: "Predictive Risk Scoring",
    description: "Scores based on customer spending behavior.",
    icon: "/WhyPredictive.svg",
  },
  {
    title: "Risk Alerts",
    description: "Spot risks traditional IBVs miss.",
    icon: "/WhyRisk.svg",
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "256-bit encryption, 2MFA, secure OAuth connections — security built for modern business.",
    icon: "/WhyEnterPrise.svg",
  },
];

const WhyChooseAcuView = () => {
  return (
    <section className="py-16 bg-white w-full">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Why AcuCheck?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[16px] border border-[#EAEAEA] shadow-[0_6px_18px_rgba(0,0,0,0.06)] p-6 flex flex-col items-start"
            >
              <div className="mb-4 flex items-center justify-start">
                {/* keep icon path; you'll replace actual icons later */}
                <Image src={feature.icon} alt={feature.title} width={64} height={64} />
              </div>

              <h3 className="text-[#000000] text-[18px] md:text-[20px] font-semibold mb-2 text-start">
                {feature.title}
              </h3>

              <p className="text-[14px] md:text-[15px] text-[#00000099] text-start leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-[#000000CC] opacity-[60%] font-medium text-[16px] md:text-[18px] mt-12 mb-6">
          Get a tailored demo to witness how AcuCheck fits your needs.
        </p>
        <a
          href="#demo-form"
          className="inline-block bg-black text-white px-6 py-3 rounded-[50px] shadow-[0px_6px_24px_rgba(0,0,0,0.15)]"
        >
          Schedule A Demo Today
        </a>
      </div>
    </section>
  );
};

export default WhyChooseAcuView;
