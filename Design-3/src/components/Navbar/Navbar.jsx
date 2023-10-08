import React from "react";
import Logo from "/logo.svg";
const Navbar = () => {
  const nav_items = [
    {
      name: "Features",
    },

    {
      name: "Team",
    },

    {
      name: "Sign In",
    },
  ];
  return (
    <div className="bg-[#1c2431] flex justify-between items-center mt-[4rem] sm:mt-[2rem]">
      <div className='block h-[2rem]'>
        <img src={Logo} alt="logo" className='h-[100%]' />
      </div>

      <div>
        <ul className="flex gap-x-5">
          {nav_items.map((item) => (
            <li
              key={item.name}
              className="text-gray-300 font-Railway text-[14px] hover:text-white hover:font-bold hover:underline cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
