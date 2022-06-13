import HeroBanner from "./HeroBanner";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Heroku from "./heroki/HerokuText";
import Ecommerce from "./ecommerce/EcomText";
import Portfolio from "./portfolio/PortText";
import { useEffect, useRef, useState } from "react";
import Contacts from "./Contacts";
import Skills from "./Skills";

export default function Home() {
  const [size, setSize] = useState({ x: 0 });

  const updateSize = () => setSize({ x: window.innerWidth });

  useEffect(() => (window.onresize = updateSize), [size.x]);

  return (
    <Parallax pages={size.x >= 1024 ? 10.3 : 8.3} className="bar" enabled>
      <ParallaxLayer offset={0} factor={size.x >= 1024 ? 1.5 : 1}>
        <HeroBanner />
      </ParallaxLayer>

      <ParallaxLayer
        sticky={{
          start: size.x >= 1024 ? 1.5 : 1,
          end: size.x >= 1024 ? 3.5 : 3,
        }}
      >
        <Heroku size={size.x} />
      </ParallaxLayer>
      <ParallaxLayer
        sticky={{
          start: size.x >= 1024 ? 3.5 : 3,
          end: size.x >= 1024 ? 5.5 : 4.5,
        }}
      >
        <Ecommerce size={size.x} />
      </ParallaxLayer>
      <ParallaxLayer
        sticky={{
          start: size.x >= 1024 ? 5.5 : 4.5,
          end: size.x >= 1024 ? 7.5 : 6.5,
        }}
      >
        <Portfolio size={size.x} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={size.x >= 1024 ? 8.2 : 7}
        factor={size.x >= 1024 ? 1 : 0.6}
      >
        <Skills />
      </ParallaxLayer>

      <ParallaxLayer
        offset={size.x >= 1024 ? 9.7 : 8.3}
        factor={size.x >= 1024 ? 1 : 0.5}
      >
        <Contacts size={size.x} />
      </ParallaxLayer>
    </Parallax>
  );
}
