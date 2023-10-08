import React from "react";
import DeksTopImage from "/image-web-3-desktop.jpg";
import MobileImage from "/image-web-3-mobile.jpg";

import { useState, useEffect } from "react";
const First = () => {
  const [isMobile, setIsMobile] = useState(false);
  const checkMobile = ()=>{
    setIsMobile(window.innerWidth<=768)
  };
  useEffect(()=>{
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  },[])
  return (
    <div className="w-[100%] m-auto">
      <div className="w-[100%]">
        <img src={isMobile ? MobileImage : DeksTopImage} alt="" className="sm:h-[18rem] w-[100%] sm:block sm:object-cover sm:object-center" />
      </div>
      <div className="grid grid-cols-2 gap-x-0 mt-[1.5rem] sm:grid-cols-1 sm:gap-y-4 sm:mb-[3rem] md:gap-3">
        <div className="text-5xl font-bold">The Bright <br /> Future of <br /> Web 3.0?</div>
        <div>
          <p className="text-[15px] text-[#5d5f79]">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise ?
          </p>
          <button className={`w-fit ${isMobile ? 'bg-[#f15e50]' : 'bg-[#00001a]'} mt-[1.5rem] px-[1.3rem] py-[.7rem] 
          uppercase tracking-[.3rem] text-white text-xs`}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default First;
