"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RealTimeTechnology() {
  const router = useRouter();

  return (
    <section className="relative bg-white flex flex-col items-center justify-center w-full overflow-hidden">
      {/* ======= HEADER (Plane + Title) ======= */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-0 text-center md:text-left z-20">
        <div className="flex-shrink-0 relative md:left-[-154px] mx-auto md:mx-0 mb-4 md:mb-0">
          <Image
            src="/PaperPlane.png"
            alt="Paper Plane"
            width={308}
            height={276}
            className="object-contain w-full h-full"
            priority
          />
        </div>

        <h1 className="text-[26px] sm:text-[30px] md:text-[40px] lg:text-[50px] font-bold text-black leading-tight md:leading-snug ">
          Real-Time Financial Data + Advanced Analysis
        </h1>
      </div>

      {/* ======= MAIN SECTION WITH BACKGROUND VIDEO ======= */}
      <div className="relative flex flex-col md:flex-row justify-between px-6  md:pb-14  max-w-[2600px] w-[100vw] h-[100vh] z-10">
        {/* 🎥 Background video */}
        <video
          src="/Realtime_bg.webm"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-contain -z-10 opacity-100"
        />

        {/* ===== LEFT TEXT CONTENT ===== */}
        <div className="w-full md:w-[40%] flex flex-col items-center md:items-start justify-center text-center md:text-left ">
          <p className="text-[18px] sm:text-[20px] font-bold text-black mt-4">
            AcuCheck transforms raw bank data into clean,
            <br className="hidden md:block" />
            actionable intelligence.
          </p>

          <p className="text-[16px] sm:text-[18px] text-[#000000B2] mt-3">
            From real-time income tracking and spending analysis to fraud alerts and loan stacking detection,
            AcuCheck empowers you with smarter underwriting designed for real-world lending.
          </p>

          <button
            onClick={() => router.push("/under-renovation")}
            className="inline-block mt-6 bg-[#5983E2] text-white font-bold px-8 py-4 rounded-full w-[200px] sm:w-[200px] text-center mb-2.5 shadow-[0_2px_20px_0_rgba(0,0,0,0.1)]"
          >
            Get Started Today
          </button>
        </div>

        {/* ===== RIGHT SIDE VISUAL (Video/Card) ===== */}
        <div className="md:w-1/2 w-full flex flex-col items-center relative md:mt-0 overflow-visible">
          <div className="relative w-full h-full flex items-end justify-end">
            {/* The /Card_bg.webm — placed absolutely and IN FRONT of the background video */}
            <video
              src="/Card_bg.webm"
              autoPlay
              loop
              muted
              playsInline
              className={`
                absolute
                z-20
                pointer-events-none
                md:right-[-5%] lg:right-[-10%] xl:right-[-2%]         /* shift slightly beyond container to the right */
               md:bottom-[22%]  lg:bottom-[18%]   xl:bottom-[-13%]        /* lift so it sits over the tablet area */
                w-[180px] h-[180px] /* base mobile size */
                sm:w-[260px] sm:h-[260px]
                md:w-[980px] md:h-[380px]
                lg:w-[1320px] lg:h-h-[920px]
                xl:w-[1320px] xl:h-[920px]
                object-contain
                transform
                translate-x-0
                translate-y-0
                
              `}
            />

            {/* If you were previously rendering the man as a separate image, remove it.
                The man is inside Realtime_bg.webm (background), so we do NOT overlay an Image here.
                If you still have a separate man png, keep it with a lower z-index (z-10). */}
          </div>
        </div>
      </div>
    </section>
  );
}
