import React from "react";
import img1 from "../../public/Images/heroki/heroCloud.png";
import img2 from "../../public/Images/heroki/heroDevelop.png";
import img3 from "../../public/Images/heroki/heroFeatures.png";
import img4 from "../../public/Images/heroki/heroDocs.png";

import Image from "next/image";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function HerokuImages({ size }) {
  return (
    <div className=" absolute w-[70%] md:w-1/2 h-screen right-0 top-0 ">
      <div className=" w-full flex h-full relative">
        <div className=" w-1/2 h-full">
          <ParallaxLayer offset={1} speed={size >= 1024 ? 1.2 : 1.5}>
            <Image
              src={img1}
              alt="nothing"
              width={size >= 1024 ? 250 : 200}
              height={size >= 1024 ? 500 : 400}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={1.5} speed={size >= 1024 ? 0.9 : 1.2}>
            <Image
              src={img2}
              alt="image2"
              width={size >= 1024 ? 200 : 180}
              height={size >= 1024 ? 400 : 350}
            />
          </ParallaxLayer>
        </div>
        <div className=" w-1/2 h-full absolute left-1/2 top-1/2">
          <ParallaxLayer offset={1} speed={size>=1024?1.5:1.7}>
            <Image
              src={img3}
              alt="nothing"
              width={size >= 1024 ? 250 : 200}
              height={size >= 1024 ? 500 : 400}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={1.3} speed={size>=1024?1:1.1}>
            <Image
              src={img4}
              alt="image2"
              width={size >= 1024 ? 200 : 180}
              height={size >= 1024 ? 400 : 350}
            />
          </ParallaxLayer>
        </div>
      </div>
    </div>
  );
}

export default HerokuImages;
