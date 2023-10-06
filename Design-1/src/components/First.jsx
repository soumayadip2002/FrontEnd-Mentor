import React from "react";

const First = () => {
  return (
    <div className="bg-gradient-to-b from-violet-800 to-blue-800 flex items-center flex-col w-auto px-10 py-8 rounded-3xl sm:rounded-t-none">
      <h2 className="text-center text-gray-300 text-lg font-bold">
        Your Result
      </h2>
      <div className="rounded-full bg-gradient-to-b from-blue-900 to-inherit shadow-2xl shadow-blue-800 mt-[1rem] h-[8rem] w-[8rem] flex justify-center items-center flex-col">
        <h1 className="text-white text-6xl font-bold">76</h1>
        <h3 className="text-gray-400 text-md">of 100</h3>
      </div>
      <h2 className="mt-[1.5rem] text-white text-xl font-bold">Great</h2>
      <p className="text-gray-400 text-md mt-[1rem] text-center">
        You Scored higher than 65% of <br /> the people who have taken <br /> these test
      </p>
    </div>
  );
};

export default First;
