import Image from "next/image";
import React from "react";

export default function SpeakToExperts() {
  return (
    <section className="bg-[#1A191A] text-white flex flex-col py-10 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-10 w-full relative overflow-hidden">
      <div className="md:hidden xl:block relative flex flex-col w-full items-start pointer-events-none select-none z-0 xl:max-w-[68%] xl:w-[68%]">
        <span
          className="
            text-[25vw] sm:text-[13vw] md:text-[10vw] lg:text-[8vw] xl:text-[15vw]
            leading-none font-extrabold tracking-tight opacity-30
            stroke-responsive
            mt-4 xl:mr-5
          "
          style={{
            WebkitTextStroke: "0.3px #E0E0E0",
            color: "transparent",
            whiteSpace: "nowrap",
          }}
        >
          speak to
        </span>
        <span
          className="
            text-[25vw] sm:text-[13vw] md:text-[10vw] lg:text-[8vw] xl:text-[15vw]
            leading-none font-extrabold tracking-tight opacity-30
            stroke-responsive 
            -mt-[2vw] mb-2 xl:hidden
          "
          style={{
            WebkitTextStroke: "0.3px #E0E0E0",
            color: "transparent",
            whiteSpace: "nowrap",
          }}
        >
          our <br /> experts
        </span>
        <span
          className="
            text-[25vw] sm:text-[13vw] md:text-[10vw] lg:text-[8vw] xl:text-[15vw]
            leading-none font-extrabold tracking-tight opacity-30
            stroke-responsive 
            -mt-[2vw] mb-2 hidden xl:block xl:mt-4
          "
          style={{
            WebkitTextStroke: "0.3px #160f0fff",
            color: "transparent",
            whiteSpace: "nowrap",
          }}
        >
          our experts
        </span>
      </div>
      <div className=" hidden md:block xl:hidden  relative flex flex-col w-full items-center pointer-events-none select-none z-0">
        <span
          className="
            text-[16vw] sm:text-[13vw] md:text-[10vw] lg:text-[10vw]
            leading-none font-extrabold tracking-tight opacity-30
            stroke-responsive
            mt-4 md:mr-5
          "
          style={{
            WebkitTextStroke: "0.3px #E0E0E0",
            color: "transparent",
            whiteSpace: "nowrap",
          }}
        >
          speak to
        </span>
        <span
          className="
            text-[16vw] sm:text-[13vw] md:text-[10vw] lg:text-[10vw]
            leading-none font-extrabold tracking-tight opacity-30
            stroke-responsive
            -mt-[2vw] mb-2
          "
          style={{
            WebkitTextStroke: "0.3px #E0E0E0",
            color: "transparent",
            whiteSpace: "nowrap",
          }}
        >
          our experts
        </span>
      </div>
      <div className="relative z-10 flex flex-col justify-start items-start max-w-full sm:max-w-lg w-full  mt-[16vw] sm:mt-[8vw] md:mt-[4vw] mb-8 sm:mb-10 sm:ml-0 relative xl:left-[62vw] xl:top-[-29vw] xl:max-w-[35%] xl:w-[35%] xl:ml-0 xl:mt-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-left w-full">
          Need personalised advice?
        </h2>
        <p className="text-base sm:text-lg opacity-80 text-left text-[#FFFFFFB2] w-full xl:max-w-[92%]">
          Connect with our experts for tailored solutions with AcuCheck.
        </p>
      </div>
      <div
        className="
          relative z-10
          grid grid-cols-1 
          sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4
          gap-4 sm:gap-6
          w-full
          mx-auto
          mb-6 sm:mb-10 sm:mx-0
        "
      >
        {/* Email */}
        <div className="flex items-center gap-3 sm:gap-4 bg-[#232324] rounded-lg px-4 sm:px-6 py-3 sm:py-4 w-full min-h-[60px]">
          <Image
            src="/contact_email.svg"
            alt="Email Icon"
            width={28}
            height={28}
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <span className="text-white text-sm sm:text-base break-words">
            sales@acufi.com
          </span>
        </div>
        {/* Phone */}
        <div className="flex items-center gap-3 sm:gap-4 bg-[#232324] rounded-lg px-4 sm:px-6 py-3 sm:py-4 w-full min-h-[60px]">
          <Image
            src="/contact_phone.svg"
            alt="Phone Icon"
            width={28}
            height={28}
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <span className="text-white text-sm sm:text-base break-words">
            +1-866-711-4350
          </span>
        </div>
        {/* Location */}
        <div className="flex items-center gap-3 sm:gap-4 bg-[#232324] rounded-lg px-4 sm:px-6 py-3 sm:py-4 w-full min-h-[60px]">
          <Image
            src="/contact_location.svg"
            alt="Location Icon"
            width={28}
            height={28}
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <span className="text-white text-sm sm:text-base break-words">
            United States
          </span>
        </div>
        {/* Hours */}
        <div className="flex items-center gap-3 sm:gap-4 bg-[#232324] rounded-lg px-4 sm:px-6 py-3 sm:py-4 w-full min-h-[60px]">
          <Image
            src="/contact_mail.svg"
            alt="Hours Icon"
            width={28}
            height={28}
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <div className="flex flex-col">
            <div className="text-white text-sm sm:text-base">
              Monday to Friday,
            </div>
            <div className="text-white text-sm sm:text-base">
              9:00 AM – 6:00 PM EST
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// import Image from "next/image";
// import React from "react";

// export default function SpeakToExpertsSection() {
//   return (
//     <section className="bg-[#1A191A] text-white flex flex-col py-10 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-10 w-full relative overflow-hidden">
//       <div className="md:hidden xl:block relative flex flex-col w-full items-start pointer-events-none select-none z-0 xl:max-w-[68%] xl:w-[68%]">
//         <span
//           className="
//             text-[25vw] sm:text-[13vw] md:text-[10vw] lg:text-[8vw] xl:text-[12vw]
//             leading-none font-extrabold tracking-tight opacity-30
//             stroke-responsive
//             mt-4 xl:mr-5
//           "
//           style={{
//             WebkitTextStroke: "0.3px #E0E0E0",
//             color: "transparent",
//             whiteSpace: "nowrap",
//           }}
//         >
//           speak to
//         </span>
//         <span
//           className="
//             text-[25vw] sm:text-[13vw] md:text-[10vw] lg:text-[8vw] xl:text-[13vw]
//             leading-none font-extrabold tracking-tight opacity-30
//             stroke-responsive
//             -mt-[2vw] mb-2 xl:hidden
//           "
//           style={{
//             WebkitTextStroke: "0.3px #E0E0E0",
//             color: "transparent",
//             whiteSpace: "nowrap",
//           }}
//         >
//           our <br /> experts
//         </span>
//         <span
//           className="
//             text-[25vw] sm:text-[13vw] md:text-[10vw] lg:text-[8vw] xl:text-[13vw]
//             leading-none font-extrabold tracking-tight opacity-30
//             stroke-responsive
//             -mt-[2vw] mb-2 hidden xl:block
//           "
//           style={{
//             WebkitTextStroke: "0.3px #E0E0E0",
//             color: "transparent",
//             whiteSpace: "nowrap",
//           }}
//         >
//           our experts
//         </span>
//       </div>
//       <div className=" hidden md:block xl:hidden  relative flex flex-col w-full items-center pointer-events-none select-none z-0">
//         <span
//           className="
//             text-[16vw] sm:text-[13vw] md:text-[10vw] lg:text-[10vw]
//             leading-none font-extrabold tracking-tight opacity-30
//             stroke-responsive
//             mt-4 md:mr-5
//           "
//           style={{
//             WebkitTextStroke: "0.3px #E0E0E0",
//             color: "transparent",
//             whiteSpace: "nowrap",
//           }}
//         >
//           speak to
//         </span>
//         <span
//           className="
//             text-[16vw] sm:text-[13vw] md:text-[10vw] lg:text-[10vw]
//             leading-none font-extrabold tracking-tight opacity-30
//             stroke-responsive
//             -mt-[2vw] mb-2
//           "
//           style={{
//             WebkitTextStroke: "0.3px #E0E0E0",
//             color: "transparent",
//             whiteSpace: "nowrap",
//           }}
//         >
//           our experts
//         </span>
//       </div>
//       <div className="relative z-10 flex flex-col justify-start items-start max-w-full sm:max-w-lg w-full  mt-[16vw] sm:mt-[8vw] md:mt-[4vw] mb-8 sm:mb-10 sm:ml-0 relative xl:left-[852px] xl:top-[-294px] xl:max-w-[35%] xl:w-[35%] xl:ml-0 xl:mt-0">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-left w-full">
//           Need personalised advice?
//         </h2>
//         <p className="text-base sm:text-lg opacity-80 text-left text-[#FFFFFFB2] w-full">
//           Connect with our experts to learn how to unlock real-time borrower
//           insights with AcuView. Fill in your details and we will get in touch
//           within 24 hours.
//         </p>
//       </div>
//       <div
//         className="
//           relative z-10
//           grid grid-cols-1
//           sm:grid-cols-2
//           gap-4 sm:gap-6
//           w-full
//           max-w-2xl
//           mx-auto
//           mb-6 sm:mb-10 sm:mx-0
//         "
//       >
//         {/* Email */}
//         <div className="flex items-center gap-3 sm:gap-4 bg-[#232324] rounded-lg px-4 sm:px-6 py-3 sm:py-4 w-full min-h-[60px]">
//           <Image
//             src="/contact_email.svg"
//             alt="Email Icon"
//             width={28}
//             height={28}
//             className="w-6 h-6 sm:w-8 sm:h-8"
//           />
//           <span className="text-white text-sm sm:text-base break-words">
//             sales@acufi.com
//           </span>
//         </div>
//         {/* Phone */}
//         <div className="flex items-center gap-3 sm:gap-4 bg-[#232324] rounded-lg px-4 sm:px-6 py-3 sm:py-4 w-full min-h-[60px]">
//           <Image
//             src="/contact_phone.svg"
//             alt="Phone Icon"
//             width={28}
//             height={28}
//             className="w-6 h-6 sm:w-8 sm:h-8"
//           />
//           <span className="text-white text-sm sm:text-base break-words">
//             +1-866-711-4350
//           </span>
//         </div>
//         {/* Location */}
//         <div className="flex items-center gap-3 sm:gap-4 bg-[#232324] rounded-lg px-4 sm:px-6 py-3 sm:py-4 w-full min-h-[60px]">
//           <Image
//             src="/contact_location.svg"
//             alt="Location Icon"
//             width={28}
//             height={28}
//             className="w-6 h-6 sm:w-8 sm:h-8"
//           />
//           <span className="text-white text-sm sm:text-base break-words">
//             United States
//           </span>
//         </div>
//         {/* Hours */}
//         <div className="flex items-center gap-3 sm:gap-4 bg-[#232324] rounded-lg px-4 sm:px-6 py-3 sm:py-4 w-full min-h-[60px]">
//           <Image
//             src="/contact_mail.svg"
//             alt="Hours Icon"
//             width={28}
//             height={28}
//             className="w-6 h-6 sm:w-8 sm:h-8"
//           />
//           <div className="flex flex-col">
//             <div className="text-white text-sm sm:text-base">
//               Monday to Friday,
//             </div>
//             <div className="text-white text-sm sm:text-base">
//               9:00 AM – 6:00 PM EST
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
