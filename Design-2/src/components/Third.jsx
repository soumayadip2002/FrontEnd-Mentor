import React from "react";
import RetroPc from "/image-retro-pcs.jpg";
import Laptop from "/image-top-laptops.jpg";
import Gaming from "/image-gaming-growth.jpg";
const Third = () => {
  return (
    <div className="mt-[3rem] mb-[4rem] grid grid-cols-3 gap-[5rem] md:grid-cols-2 md:gap-[2rem] sm:grid-cols-1">
      <div className="flex gap-5">
        <div>
          <img src={RetroPc} alt="pc" className="h-[8rem] w-auto md:h-[11rem]" />
        </div>
        <div className="gap-y-5">
          <h1 className="text-[2rem] text-[#c5c6ce] font-bold">01</h1>
          <h3 className="text-[16px] text-[#00001a] font-bold hover:text-[#f15e50] cursor-pointer">
            Reviving Retro PCs
          </h3>
          <p className="mt-[.5rem] text-[15px] text-[#5d5f79]">
            What happens when old PCs <br /> are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="flex gap-5">
        <div>
          <img src={Laptop} alt="pc" className="h-[8rem] w-auto md:h-[11rem]" />
        </div>
        <div className="gap-y-5">
          <h1 className="text-[2rem] text-[#c5c6ce] font-bold">02</h1>
          <h3 className="text-[16px] text-[#00001a] font-bold hover:text-[#f15e50] cursor-pointer">
            Top 10 Laptops of 2022
          </h3>
          <p className="mt-[.5rem] text-[15px] text-[#5d5f79]">
             Our best picks for various <br /> needs and budgets.
          </p>
        </div>
      </div>

      <div className="flex gap-5">
        <div>
          <img src={Gaming} alt="pc" className="h-[8rem] w-auto md:h-[11rem]" />
        </div>
        <div className="gap-y-5">
          <h1 className="text-[2rem] text-[#c5c6ce] font-bold">03</h1>
          <h3 className="text-[16px] text-[#00001a] font-bold hover:text-[#f15e50] cursor-pointer">
            The Growth of Gaming
          </h3>
          <p className="mt-[.5rem] text-[15px] text-[#5d5f79]">
            How the pandemic has <br /> sparked fresh opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Third;
