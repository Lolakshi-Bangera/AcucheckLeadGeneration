export default function StatsSection() {
  return (
    <section className="bg-black py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-wrap gap-8 justify-between items-center">
        <div className="flex items-center gap-4 flex-1 md:min-w-[224px] lg:min-w-[250px]">
          <object
            type="image/svg+xml"
            data="Acucheck-Lead-generation-1.svg"
            className="w-30 h-30"
            aria-label="Faster Analysis Icon"
          >
            Faster Icon
          </object>
          <div>
            {/* <div className="flex items-baseline">
              <span className="text-white text-[50px] font-bold">97</span>
              <span className="text-[#7D62E7] text-[30px] font-bold ml-1">%</span>
            </div> */}
            <div className="text-gray-300 text-base">Speed That Scales</div>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-1 md:min-w-[224px] lg:min-w-[250px]">
          <object
            type="image/svg+xml"
            data="Acucheck-Lead-generation-2.svg"
            className="w-30 h-30"
            aria-label="Reduction in Loan Stacking Icon"
          >
            Reduction Icon
          </object>
          <div>
            {/* <div className="flex items-baseline">
              <span className="text-white text-[50px] font-bold">73</span>
              <span className="text-[#7D62E7] text-[30px] font-bold ml-1">%</span>
            </div> */}
            <div className="text-gray-300 text-base">Accuracy That Protects</div>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-1 md:min-w-[224px] lg:min-w-[250px]">
          <object
            type="image/svg+xml"
            data="Acucheck-Lead-generation-3.svg"
            className="w-30 h-30"
            aria-label="Ease of Use Icon"
          >
            Easy Icon
          </object>
          <div>
            {/* <div className="flex items-baseline">
              <span className="text-white text-[50px] font-bold">95</span>
              <span className="text-[#7D62E7] text-[30px] font-bold ml-1">%</span>
            </div> */}
            <div className="text-gray-300 text-[20px]">Simplicity That Wins</div>
          </div>
        </div>
      </div>
    </section>
  );
}
