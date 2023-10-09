import React from "react";
import { useEffect, useState } from "react";
import DekstopEarth from "/desktop/image-deep-earth.jpg";
import DekstopNight from "/desktop/image-night-arcade.jpg";
import DekstopSoccer from "/desktop/image-soccer-team.jpg";
import DekstopGrid from "/desktop/image-grid.jpg";
import DekstopFromAbove from "/desktop/image-from-above.jpg";
import DekstopBorealis from "/desktop/image-pocket-borealis.jpg";
import DekstopCuriosity from "/desktop/image-curiosity.jpg";
import DekstopFisheye from "/desktop/image-fisheye.jpg";

import MobileEarth from "/mobile/image-deep-earth.jpg";
import MobileNight from "/mobile/image-night-arcade.jpg";
import MobileSoccer from "/mobile/image-soccer-team.jpg";
import MobileGrid from "/mobile/image-grid.jpg";
import MobileFromAbove from "/mobile/image-from-above.jpg";
import MobileBorealis from "/mobile/image-pocket-borealis.jpg";
import MobileCuriosity from "/mobile/image-curiosity.jpg";
import MobileFisheye from "/mobile/image-fisheye.jpg";
const Creation = () => {
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

  const desktopData = [
    {
      id: 1,
      img: DekstopEarth,
      h1: "Deep earth",
    },
    {
      id: 2,
      img: DekstopNight,
      h1: "Night arcade",
    },
    {
      id: 3,
      img: DekstopSoccer,
      h1: "Soccer team VR",
    },
    {
      id: 4,
      img: DekstopGrid,
      h1: "The grid ",
    },
    {
      id: 5,
      img: DekstopFromAbove,
      h1: "From up above VR",
    },
    {
      id: 6,
      img: DekstopBorealis,
      h1: "Pocket borealis",
    },
    {
      id: 7,
      img: DekstopCuriosity,
      h1: "The curiosity",
    },
    {
      id: 8,
      img: DekstopFisheye,
      h1: "Make it fisheye",
    },
  ];
  const mobileData = [
    {
      id: 1,
      img: MobileEarth,
      h1: "Deep earth",
    },
    {
      id: 2,
      img: MobileNight,
      h1: "Night arcade",
    },
    {
      id: 3,
      img: MobileSoccer,
      h1: "Soccer team VR",
    },
    {
      id: 4,
      img: MobileGrid,
      h1: "The grid ",
    },
    {
      id: 5,
      img: MobileFromAbove,
      h1: "From up above VR",
    },
    {
      id: 6,
      img: MobileBorealis,
      h1: "Pocket borealis",
    },
    {
      id: 7,
      img: MobileCuriosity,
      h1: "The curiosity",
    },
    {
      id: 8,
      img: MobileFisheye,
      h1: "Make it fisheye",
    },
  ];
  return (
    <div className="w-[80%] m-auto sm:w-[90%] mt-[7rem] sm:mt-[4rem] mb-[2rem]">
      <div>
        <div className="flex justify-between sm:grid sm:justify-center">
          <h1 className="text-[45px] uppercase font-JosefinSans md:text-[33px]">
            Our creation
          </h1>
          {isMobile ? (
            ""
          ) : (
            <button className="transition-all ease-linear duration-[.4s] py-[.6rem] h-fit w-[8rem] px-[1.5rem] hover:bg-Black hover:text-White border-[1.5px] border-Black">
              See all
            </button>
          )}
        </div>

        <div className="mt-[5rem] sm:mt-[2rem] grid grid-cols-4 gap-[2rem] sm:grid-cols-1 md:grid-cols-2">
          {isMobile
            ? mobileData.map((item) => (
                <div key={item.id} className="relative cursor-pointer">
                  <img
                    src={item.img}
                    alt=""
                    className="w-[100%] brightness-75 hover:contrast-50"
                  />
                  <h2 className="absolute bottom-[0] left-[1rem] max-w-[37vw] text-[24px] uppercase font-JosefinSans text-White">
                    {item.h1}
                  </h2>
                </div>
              ))
            : desktopData.map((item) => (
                <div key={item.id} className="relative cursor-pointer">
                  <img
                    src={item.img}
                    alt=""
                    className="w-[100%] hover:opacity-60 transition-all ease-linear duration-[.1s]"
                  />
                  <h2 className="absolute bottom-[2rem] left-[1rem] w-[8vw] text-[24px] uppercase font-JosefinSans text-White">
                    {item.h1}
                  </h2>
                </div>
              ))}
        </div>
        {isMobile ? (
          <div className="flex justify-center">
            <button className="transition-all ease-linear duration-[.1s] py-[.6rem] mt-[2rem] h-fit w-[8rem] px-[1.5rem] hover:bg-Black hover:text-White border-[1.5px] border-Black">
              See all
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Creation;
