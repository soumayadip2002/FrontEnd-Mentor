import React from "react";
import { useEffect, useState } from "react";
import DekstopAbout from "/desktop/image-interactive.jpg";
import MobileAbout from "/mobile/image-interactive.jpg";
const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 500);
  };
  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  });
  return (
    <div className="w-[80%] m-auto mt-[7rem] sm:w-[90%] mb-[2rem] flex lg:flex-col">
      <div className="flex-2">
        <img src={isMobile ? DekstopAbout : MobileAbout} alt="" className="w-full" />
      </div>
      <div className="bg-White shadow-md grid  flex-1 h-fit p-[6rem]  ml-[-9rem] mt-[12rem] 
       lg:ml-[0] lg:mt-[3rem] 2xl:p-[4rem] lg:px-[8rem] md:p-[3.5rem] sm:p-[2rem] lg:shadow-none">
        <h1 className="text-[45px] text-Black text-center uppercase font-JosefinSans leading-tight sm:text-[24px]">The leader in interactive VR</h1>
        <p className="mt-[2rem] text-[15px] text-Gray font-Alata sm:text-center">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
};

export default About;
