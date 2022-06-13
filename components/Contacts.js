import React from "react";
import linkdin from "../public/Images/Social/linkedin.svg";
import tweeter from "../public/Images/Social/twitter.svg";
import mail from "../public/Images/Social/mail.svg";
import insta from "../public/Images/Social/insta.svg";
import git from "../public/Images/Social/git.svg";
import fb from "../public/Images/Social/fb.svg";
import Image from "next/image";
import { ParallaxLayer } from "@react-spring/parallax";
import Link from "next/link";

function Contacts({ size }) {
  return (
    <div className=" flex justify-center items-center gap-8 md:gap-12 ml-[10%] relative">
      <Link href={""}>
        <a target="_blank">
          <Image
            src={tweeter}
            alt="nothing"
            width={size >= 1024 ? 100 : 60}
            height={size >= 1024 ? 100 : 60}
            className="z-50 cursor-pointer"
          />
        </a>
      </Link>
      <Link href={"https://github.com/gmsanjrani"}>
        <a target="_blank">
          <Image
            src={git}
            alt="nothing"
            width={size >= 1024 ? 100 : 60}
            height={size >= 1024 ? 100 : 60}
            className="z-50 cursor-pointer"
          />
        </a>
      </Link>
      <Link href={"https://www.linkedin.com/in/gmsanjrani/"}>
        <a target="_blank">
          <Image
            src={linkdin}
            alt="nothing"
            width={size >= 1024 ? 100 : 60}
            height={size >= 1024 ? 100 : 60}
            className="z-50 cursor-pointer"
          />
        </a>
      </Link>
      <Link href={""}>
        <a target="_blank">
          <Image
            src={insta}
            alt="nothing"
            width={size >= 1024 ? 100 : 60}
            height={size >= 1024 ? 100 : 60}
            className="z-50 cursor-pointer"
          />
        </a>
      </Link>
      <Link href={"gmsanjrani111@gmail.com"}>
        <a target="_blank">
          <Image
            src={mail}
            alt="nothing"
            width={size >= 1024 ? 100 : 60}
            height={size >= 1024 ? 100 : 60}
            className="z-50 cursor-pointer"
          />
        </a>
      </Link>
      <Link href={""}>
        <a target="_blank">
          <Image
            src={fb}
            alt="nothing"
            width={size >= 1024 ? 100 : 60}
            height={size >= 1024 ? 100 : 60}
            className="z-50 cursor-pointer"
          />
        </a>
      </Link>

      <ParallaxLayer horizontal offset={-21} speed={-0.7} factor={1}>
        <h1
          className=" absolute invisible md:visible lg:text-8xl  text-[#EEE] lg:font-['AvenirHeavy']
           lg:text-[10rem] xl:text-[11rem] lg:bottom-[30%]  whitespace-nowrap "
        >
          CONTACTS
        </h1>
      </ParallaxLayer>
    </div>
  );
}

export default Contacts;
