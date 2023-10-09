import React from "react";
import Logo from "/logo.svg";
import Facebook from '/icon-facebook.svg';
import Twitter from '/icon-twitter.svg';
import Pinterest from '/icon-pinterest.svg';
import Instagram from '/icon-instagram.svg';
const Footer = () => {
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
  return (
    <div className="mt-[4rem] bg-Black text-White">
      <div className="w-[80%] m-auto py-[2rem] flex justify-between sm:grid sm:justify-center sm:text-center">
        <div className="sm:grid sm:justify-center">
          <img src={Logo} alt="" className="h-[24px]" />
          <ul className="flex gap-x-[2rem] text-[15px] font-Alata mt-[1.5rem] md:gap-x-[1rem] sm:grid sm:gap-y-[2rem]">
            {nav_items.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
        <div className="sm:mt-[3rem]">
          <div className="flex gap-x-[1rem] h-[20px] justify-end sm:justify-center">
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={Pinterest} alt="" />
            <img src={Instagram} alt="" />
          </div>
          <p className="mt-[1.5rem] text-Gray text-[15px]">© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
