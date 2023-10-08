import React, { useState } from "react";
import Footer from "../Footer/Footer";
const Contact = () => {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [mail, setMail] = useState("");
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = ()=>{
    setIsHover(true);
  }
  const handleMouseLeave = ()=>{
    setIsHover(false);
  }
  const checkValidMail = () => {
    if (mail) {
      if (mail.endsWith("@gmail.com")) {
        setIsValidEmail(true);
        setMail("");
        alert("Thank You");
      } else {
        setIsValidEmail(false);
        setMail("");
      }
    }
  };
  return (
    <>
      <div className="relative flex justify-center w-[60%] m-auto mt-[20rem] sm:w-[90%]">
        <div className="bg-[#1c2431] py-[1.5rem] px-[2rem] shadow-lg rounded-md absolute mt-[-8rem] sm:mt-[-10rem]">
          <div className="flex flex-col  justify-center items-center">
            <h1 className="text-white font-bold font-Railway text-2xl">
              Get early access today
            </h1>
            <p className="text-gray-300 text-[14px] text-center mt-[1.5rem]">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
          </div>
          <div className="flex gap-x-4 mt-[1.5rem] items-center sm:grid sm:gap-y-[1.5rem] md:grid md:gap-y-[1.5rem]">
            <div className="w-[65%] bg-white py-[.5rem] rounded-[5rem] sm:w-[100%] md:w-[100%]">
              <input
                type="text"
                className="w-[100%] px-[1rem] rounded-[5rem] border-none outline-none bg-transparent"
                placeholder="email@example.com"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </div>
            <button
              className={`text-center text-white ${isHover ? 'bg-[#65e2d9]' : 'bg-gradient-to-tr from-[#65e2d9] to-[#339ecc]'}
              w-fit px-[3rem] py-[.5rem] rounded-[5rem]  sm:w-[100%] md:w-[100%]`}
              onClick={checkValidMail}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Get Started for Free
            </button>
          </div>
          {!isValidEmail ? (
            <p className="text-[14px] text-red-700 ml-[2rem]">
              Please enter a valid email address
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
