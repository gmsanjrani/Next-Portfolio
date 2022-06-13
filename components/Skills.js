import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";

function Skills() {
  return (
    <div className=" flex items-center justify-center lg:p-10 gap-20 h-[100vh] md:gap-24 lg:gap-64 relative">
      <div className=" z-30">
        <p className=" text-2xl p-2 text-[#222] md:text-3xl lg:text-5xl xl:p-3 tracking-wider ">
          React.js
        </p>
        <p className=" text-2xl p-2 text-[#222] md:text-3xl lg:text-5xl xl:p-3 tracking-wider ">
          Next.js
        </p>
        <p className=" text-2xl p-2 text-[#222] md:text-3xl lg:text-5xl xl:p-3 tracking-wider ">
          Tailwind
        </p>
        <p className=" text-2xl p-2 text-[#222] md:text-3xl lg:text-5xl xl:p-3 tracking-wider ">
          Node.js
        </p>
      </div>
      <div className=" z-30">
        <p className=" text-2xl p-2 text-[#222] md:text-3xl lg:text-5xl xl:p-3 tracking-wider ">
          Python
        </p>
        <p className=" text-2xl p-2 text-[#222] md:text-3xl lg:text-5xl xl:p-3 tracking-wider ">
          Django
        </p>
        <p className=" text-2xl p-2 text-[#222] md:text-3xl lg:text-5xl xl:p-4 tracking-wider ">
          Rest API
        </p>
        <p className=" text-2xl p-2 text-[#222] md:text-3xl lg:text-5xl xl:p-4 tracking-wider ">
          Beautiful Soup
        </p>
          </div>
          <ParallaxLayer horizontal offset={4.3} speed={0.7} factor={1}>
        <h1
          className=" absolute invisible md:visible lg:text-8xl  text-[#EEE] lg:font-['AvenirHeavy']
           lg:text-[10rem] xl:text-[11rem] lg:left-[-20%] lg:top-[55%] whitespace-nowrap"
        >
          Skills
        </h1>
        </ParallaxLayer>
    </div>
  );
}

export default Skills;
