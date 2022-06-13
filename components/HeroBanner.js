import React, { Fragment } from "react";
import About from "./About";
import { Transition, animated } from '@react-spring/animated'

function HeroBanner() {
  return (
    <div className=''>
      <section className=" flex flex-col flex-nowrap justify-center items-center h-[50vh] w-full lg:h-screen ">
        <h1 className=' font-["Valencia"] pr-3 text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9rem] text-black heroName'>
          Ghulam Muhammad
        </h1>
        <p className=" font-['AvenirRoman'] mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl heroP">
          Front-End/React.js Developer
        </p>
      </section>
      <About  />
    </div>
  );
}

export default HeroBanner;
