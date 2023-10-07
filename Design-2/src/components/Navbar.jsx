import React, { useEffect } from "react";
import { useState } from "react";
import Menu from '/icon-menu.svg';
import CloseMenu from '/icon-menu-close.svg';
import Logo from '/logo.svg'
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
  
  useEffect(()=>{
    const handleScroll = ()=>{
      setOpen(false)
    }

    window.addEventListener("scroll", handleScroll);
    return ()=>{
      window.removeEventListener("scroll", handleScroll)
    }
  },[]);

  return (
    <div className="flex w-full justify-between mt-[5rem] sm:mt-[1.5rem]">
      <div><img src={Logo} alt="" className="h-[1.7rem]" /></div>
      <div className="xl:hidden lg:hidden md:hidden z-20 cursor-pointer absolute right-7 top-8" onClick={()=>setOpen(!open)}>
        <img src={open ? CloseMenu : Menu} alt=""/>
      </div>


      <div className={`xl:hidden lg:hidden md:hidden h-[100vh] bg-black w-[100vw] 
      fixed  top-0 opacity-[.5] delay-100 ease-in transition-all ${open ? 'right-0' : 'right-[-110%]'}`}></div>
      
      <ul
        className={`flex gap-7 sm:flex-col sm:w-[80%] sm:shadow-lg sm:fixed
         sm:top-0 sm:h-[100vh] sm:bg-[#fffdfa] sm:p-10 ${open ? 'right-0' : 'right-[-110%]'}  sm:font-semibold 
         sm:delay-100 sm:ease-in sm:transition-all`}
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
