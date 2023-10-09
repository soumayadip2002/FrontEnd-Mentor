import React from "react";
import Logo from "/logo.svg";
import { useState, useEffect } from "react";
import Menu from "/icon-hamburger.svg";
import Close from "/icon-close.svg";
const Nav = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const nav_items = [
    {
      id: 1,
      name: "About",
    },

    {
      id: 2,
      name: "Careers",
    },

    {
      id: 3,
      name: "Events",
    },

    {
      id: 4,
      name: "Products",
    },

    {
      id: 5,
      name: "Supports",
    },
  ];
  console.log(open);
  return (
    <div className="w-[80%] m-auto flex justify-between pt-[3rem]">
      <div className="h-[33px] sm:h-[18px] z-[30]">
        <img src={Logo} alt="logo" className="h-full" />
      </div>
      <div
        className="2xl:hidden sm:block absolute z-[40] right-[2rem]"
        onClick={() => setOpen(!open)}
      >
        <img src={open ? Close : Menu} alt="" />
      </div>
      <ul
        className={`flex gap-x-[.8rem] font-Alata text-[15px] text-White sm:flex-col sm:h-[100vh] sm:w-[100%]
         sm:top-0 sm sm:bg-Black sm:fixed sm:justify-center sm:pl-[1.5rem] sm:text-[20px] sm:font-normal
         ${
           open ? "right-0" : "right-[-110%]"
         } sm:delay-150 transition-all ease-out`}
      >
        {nav_items.map((item) => (
          <li
            key={item.id}
            className="hover:border-b-[2px] cursor-pointer mx-[.3rem] sm:mt-[.7rem] sm:first:mt-0"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
