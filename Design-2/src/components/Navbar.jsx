import React from "react";
import { useState } from "react";
import Menu from '../../public/icon-menu.svg';
import CloseMenu from '../../public/icon-menu-close.svg';
const Navbar = () => {
  const items = [
    {
      name: "Home",
    },

    {
      name: "New",
    },
    {
      name: "Popular",
    },
    {
      name: "Trending",
    },
    {
      name: "Categories",
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="flex w-full justify-between mt-[2.5rem] sm:mt-[1.5rem]">
      <div className="text-3xl font-Inter font-extrabold">W.</div>
      <div className="xl:hidden lg:hidden md:hidden z-20 cursor-pointer absolute right-7 top-8" onClick={()=>setOpen(!open)}>
        <img src={open ? CloseMenu : Menu} alt=""/>
      </div>
      <ul
        className={`flex gap-7 sm:flex-col sm:w-[80%] sm:shadow-lg sm:fixed
         sm:top-0 sm:h-[100vh] sm:bg-[#fffdfa] sm:p-10 ${open ? 'right-0' : 'right-[-110%]'}  sm:font-semibold 
         sm:delay-200 sm:ease-in sm:transition-all`}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className="text-[#5d5f79] text-base cursor-pointer hover:text-[#f15e50] sm:text-[#00001a] sm:first:mt-[10rem]"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
