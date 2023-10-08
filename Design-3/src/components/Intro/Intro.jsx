import Ilustraion from "/illustration-intro.png";
import { useState, useEffect } from "react";
import DekstopCurve from "/bg-curvy-desktop.svg";
import MobileCurve from "/bg-curvy-mobile.svg";
const Intro = () => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const [isMobile, setIsMobile] = useState(false);
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 450);
  };
  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  });
  return (
    <div className="mt-[2rem] z-40 relative">
      <div className="absolute bottom-0 left-0 w-full z-[-1]">
        <img
          src={isMobile ? MobileCurve : DekstopCurve}
          alt="curve"
          className="w-full"
        />
      </div>
      <div className="flex justify-center w-[90%] m-auto">
        <img src={Ilustraion} alt="illustration" />
      </div>
      <div className="flex justify-center mt-[3rem] flex-col sm:mt-[1.5rem] w-[90%] m-auto">
        <h1 className="text-[2rem] font-Railway text-white font-bold text-center w-[50%] m-auto md:w-[70%] sm:w-[100%] sm:text-[1.5rem]">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="text-[14px] text-center text-gray-300 mt-[1.5rem] font-OpenSans w-[35%] m-auto md:w-[50%] sm:w-[100%] sm:text-[16px]">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers
        </p>

        <div className="flex justify-center mt-[1rem]">
          <button
            className={`text-center text-white ${
              isHover
                ? "bg-[#65e2d9]"
                : "bg-gradient-to-tr from-[#65e2d9] to-[#339ecc]"
            }
              w-fit px-[3rem] py-[.5rem] rounded-[5rem]`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
