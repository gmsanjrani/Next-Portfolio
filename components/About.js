import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";

function About() {

  return (
    <section className=" h-[50vh] w-full flex flex-row flex-nowrap justify-center items-center
                lg:h-[60vh] relative overflow-hidden" >
      
      <ParallaxLayer horizontal offset={-0.7} speed={-0.7} factor={1}>
        
        <h1 className=" absolute invisible md:visible lg:text-9xl  text-[#EEE] lg:font-['AvenirHeavy']
           lg:text-[10rem] xl:text-[11rem] lg:left-[-20%] lg:top-[20%] whitespace-nowrap">
            ABOUT ME
        </h1>
        
        </ParallaxLayer>
        
      

      <p
        className=" font-['AvenirRoman'] text-2xl text-center p-3 md:text-3xl sm:p-8 md:p-8 lg:p-20 xl:p-24 z-10
       lg:text-4xl lg:font-['AvenirLight'] lg:ml-[20%] lg:mr-[5%] lg:text-start lg:top-[5%] text-black">
        Front-end developer who cares deeply about user experience. Serious
        passion for Full Stack development.
      </p>
      
    </section>
  );
}

export default About;
