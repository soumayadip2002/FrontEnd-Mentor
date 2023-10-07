import React from "react";

const Second = () => {
  return (
    <div className="h-full bg-[#00001a] px-[1.5rem]">
      <div className="border-b-[.1rem] border-[#c5c6ce]  mt-[2rem]">
        <h1 className="text-3xl font-bold text-[#e9ab53]">New</h1>
        <h2 className="mt-[2rem] text-[16px] font-bold text-[#fffdfa] hover:text-[#e9ab53] cursor-pointer">
          Hydrogen VS Electric Cars
        </h2>
        <p className="text-[#c5c6ce] text-[14px] mt-[.5rem] mb-[2rem]">
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
      </div>
      <div className="border-b-[.1rem] border-[#c5c6ce]">
        <h2 className="text-lg font-bold text-[#fffdfa] hover:text-[#e9ab53] mt-[2rem] cursor-pointer">
          The Downsides of AI Artistry
        </h2>
        <p className="text-[#c5c6ce] text-[14px] mt-[.5rem] mb-[2rem]">
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>
      <div>
        <h1 className="text-lg font-bold text-[#fffdfa] hover:text-[#e9ab53] mt-[2rem] cursor-pointer">
          Is VC Funding Drying Up?
        </h1>
        <p className="text-[#c5c6ce] text-[14px] mt-[.5rem]">
        Private funding by VC firms is down 50% YOY. We take a look at what that means.
        </p>
      </div>
    </div>
  );
};

export default Second;
