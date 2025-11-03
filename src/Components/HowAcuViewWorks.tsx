"use client";

import Image from "next/image";

export default function HowAcuViewWorks() {
  const cards = [
    {
      title: "1. Customer Connects Their Bank Account",
      description: (
        <>
          Secure authorized connections to 10,000+ banks and credit unions, 
          enabling customers to link their accounts in seconds.
        </>
      ),
      bgColor: "bg-[#C6FBEE]",
      icons: ["/Customer1.svg", "/Customer2.svg", "/Customer3.svg"],
      pointerIcon: "/pointer.svg",
      layout: "side",
    },
    {
      title: "2. Real-Time Cash Flow Analysis",
      description: (
        <>
          Instantly interprets transaction data, income sources, obligations,
           and recurring expenses using built-in risk models.
        </>
      ),
      bgColor: "bg-[#D6D7FF]",
      icons: ["/Realtime1.svg"],
      layout: "inline",
    },
    {
      title: "3. Debt-to-Income (DTI) Score",
      description: (
        <>
          Calculate customer affordability using our in-house DTI calculator.
        </>
      ),
      bgColor: "bg-[#D7EDFF]",
      icons: ["/Debt1.svg", "/Debt2.svg"],
      layout: "above",
    },
    {
      title: "4. Actionable Risk Insights",
      description: (
        <>
         Receive a real-time credit profile that includes ability to pay, fraud warnings, 
         potential loan stacking and is optimized for your Business.
        </>
      ),
      bgColor: "bg-[#E6D7FF]",
      icons: ["/Actionable1.svg"],
      layout: "aboveOne",
    },
  ];

  return (
    <section className="mb-10 px-4 md:px-12 bg-white">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-[30px] md:text-[45px] font-bold text-[#0F1720]">
          How{" "}
          <span
            className="bg-gradient-to-r bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(to right, #67A2EF, #8B7CFB)",
            }}
          >
            AcuCheck
          </span>{" "}
          Works
        </h2>
        <p className="text-[#000000CC] text-[18px] md:text-[20px] mt-2 opacity-60">
         It’s quick, simple, and built for lenders. AcuCheck pulls live bank data and shows you what matters. 
         No guesswork, no noise. Just the real story behind every customer.
        </p>
      </div>

      <div
        className="
  grid grid-cols-1 
  sm:grid-cols-2 
  [@media(min-width:1380px)]:grid-cols-4 
  gap-7 xl:gap-5 justify-items-center w-full
"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-stretch w-full max-w-[340px] mx-auto"
          >
            <div
              className={`${card.bgColor} rounded-[25px] py-8 px-5 flex flex-col min-h-[300px] relative`}
            >
              {/* Card 1: Advanced Fraud Detection */}
              {card.layout === "side" && (
                <div className="flex flex-row items-center gap-4 w-full h-full">
                  <div className="flex flex-col gap-3 items-center shrink-0">
                    {card.icons.map((icon, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-[8px] shadow-md p-2 flex items-center justify-center"
                      >
                        <Image
                          src={icon}
                          alt={`Icon ${i}`}
                          width={25}
                          height={25}
                        />
                      </div>
                    ))}
                  </div>
                  {/* Double bordered description box with pointer icon */}
                  <div className="relative flex-1 flex items-center">
                    <div className="bg-white rounded-[15px] px-2 py-2 w-full flex items-center justify-center">
                      <div className="border border-[#DCDCDC] rounded-[10px] p-4 text-[16px] text-[#3B3C45] text-left w-full relative">
                        {card.description}
                        {/* Pointer icon at bottom right */}
                        {card.pointerIcon && (
                          <span className="absolute bottom-2 right-2">
                            <Image
                              src={card.pointerIcon}
                              alt="Pointer"
                              width={24}
                              height={24}
                            />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Card 2: Real-Time Borrower Data */}
              {card.layout === "inline" && (
                <div className="flex w-full h-full items-center justify-center relative">
                  {/* Shadow / Border Layer */}
                  <div
                    className="absolute w-[270px] h-4 rounded-[8px] bg-white opacity-[44%] shadow-[0px_8px_32px_0px_#0000001A] z-0"
                    style={{
                      bottom: "39px", // fixed distance for all screen sizes
                      left: "50%",
                      transform: "translateX(-50%)", // centers it horizontally
                    }}
                  ></div>

                  {/* Card Content */}
                  <div className="relative bg-white rounded-[15px] px-4 py-4 w-full flex items-center justify-center z-10">
                    <div className="flex items-center w-full">
                      <div className="bg-[#F7F7F7] rounded-[8px] p-2 flex items-center justify-center mr-3 border border-[#E5E5E5]">
                        <Image
                          src={card.icons[0]}
                          alt="Icon"
                          width={32}
                          height={32}
                        />
                      </div>
                      <div className="text-[16px] text-[#3B3C45] text-left w-full">
                        {card.description}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Card 3: Seamless Banking Verification */}
              {card.layout === "above" && (
                <div className="flex flex-col w-full h-full items-center justify-center gap-2 relative">
                  {/* First icon above, rotated */}
                  <div className="flex w-full pl-1 mb-2 relative z-10">
                    <div className="bg-white rounded-[8px] shadow-md p-2 flex items-center justify-center -rotate-12 border border-[#E5E5E5]">
                      <Image
                        src={card.icons[0]}
                        alt="Bank Icon"
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                  {/* Description box - sits above (higher z-index) */}
                  <div className="bg-white rounded-[15px] px-2 py-2 w-full flex items-center justify-center shadow-lg relative z-10">
                    <div className="rounded-[10px] p-4 text-[16px] text-[#3B3C45] text-left w-full bg-[#F7F8FA]">
                      {card.description}
                    </div>
                  </div>
                  {/* Second icon - partially hidden behind description box */}
                  <div className="absolute right-6 bottom-[130px] z-0">
                    <div className="bg-white rounded-[16px] shadow-md p-2 flex items-center justify-center rotate-12 border border-[#E5E5E5]">
                      <Image
                        src={card.icons[1]}
                        alt="User Icon"
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>
                </div>
              )}
              {card.layout === "aboveOne" && (
                <div className="flex flex-col w-full h-full items-center justify-center gap-2">
                  <div className="flex flex-row justify-center">
                    <div className="bg-white rounded-[8px] shadow-md p-2 flex items-center justify-center border border-[#E5E5E5] relative top-[28px] z-20">
                      <Image
                        src={card.icons[0]}
                        alt="Risk Icon"
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                  <div className="bg-white rounded-[15px] px-2 py-8 w-full flex items-center justify-center shadow-lg relative">
                    <div className="p-4 text-[16px] text-[#3B3C45] text-left w-full relative z-10">
                      {card.description}
                    </div>
                    <Image
                      src="/glassy.svg"
                      alt="Glassy Border Bottom"
                      width={340}
                      height={24}
                      className="absolute left-0 bottom-0 w-full"
                      style={{ pointerEvents: "none" }}
                    />
                  </div>
                </div>
              )}
            </div>
            {/* Black Title Card */}
            <div className="bg-[#0E0E11] text-white text-center py-3 font-semibold text-base rounded-[12px]">
              {card.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
