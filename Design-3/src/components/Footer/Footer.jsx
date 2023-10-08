import React from "react";
import Logo from "/logo.svg";
import { MdLocationPin } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
  const data1 = [
    { id: 1, name: "About Us" },
    { id: 2, name: "Jobs" },
    { id: 3, name: "Press" },
    { id: 4, name: "Blog" },
  ];

  const data2 = [
    { id: 1, name: "Contact Us" },
    { id: 2, name: "Terms" },
    { id: 3, name: "Privacy" },
  ];

  return (
    <div className="bg-[#0b1523] pt-[10rem] pb-[5rem] sm:pt-[15rem] md:pt-[15rem]">
      <div className="w-[90%] m-auto">
        <img src={Logo} alt="" className="h-[2.6rem]" />
        <div className="mt-[3rem] grid grid-cols-6 gap-x-[5rem] md:grid-cols-4 md:gap-y-[2rem] sm:grid-cols-1 sm:gap-y-[2rem]">

          <div className="col-span-2 sm:col-span-1">
            <p className="flex gap-x-2 sm:gap-x-[1.5rem] ">
              <MdLocationPin className="text-[3rem] text-white" />
              <small className="text-gray-300 text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </small>
            </p>
          </div>
          <div className="col-span-1 grid">
            <p className="flex gap-x-[1rem] sm:gap-x-[1.5rem] sm:mb-[1rem] cursor-pointer hover:font-bold">
              <BiSolidPhoneCall className="text-[1.5rem] text-white" />
              <small className="text-gray-300 text-[14px]">
                +1-543-123-4567
              </small>
            </p>

            <p className="flex gap-x-[1rem] sm:gap-x-[1.5rem] cursor-pointer hover:font-bold">
              <MdMail className="text-[1.5rem] text-white" />
              <small className="text-gray-300 text-[14px]">
                example@fylo.com
              </small>
            </p>
          </div>
          <div className="col-span-1">
            <ul  className="text-white text-[14px] sm:text-[16px]">
              {data1.map((data) => (
                <li key={data.id} className="mt-[.8rem] first:mt-0 cursor-pointer hover:font-bold">{data.name}</li>
              ))}
            </ul>
          </div>
          <div className="col-span-1">
            <ul className="text-white text-[14px] sm:text-[16px]">
              {data2.map((data) => (
                <li key={data.id} className="mt-[.8rem] first:mt-0 cursor-pointer hover:font-bold">{data.name}</li>
              ))}
            </ul>
          </div>
          <div className="flex gap-x-4 col-span-1 text-white sm:justify-center h-fit cursor-pointer">
            <div className="border-white border-[.1rem] p-[.5rem] rounded-full hover:border-[#65e2d9] hover:text-[#65e2d9]">
                <FaFacebookF/>
            </div>
            <div className="border-white border-[.1rem] p-[.5rem] rounded-full hover:border-[#65e2d9] hover:text-[#65e2d9]">
                <BsTwitter />
            </div>
            <div className="border-white border-[.1rem] p-[.5rem] rounded-full hover:border-[#65e2d9] hover:text-[#65e2d9]">
                <BsInstagram/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
