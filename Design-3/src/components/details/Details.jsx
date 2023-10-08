import AccessFile from "/icon-access-anywhere.svg";
import AnyFile from "/icon-any-file.svg";
import Security from "/icon-security.svg";
import Collaboration from "/icon-collaboration.svg";
import About from "./About";
import Testimonials from "../testimonials/Testimonials";
import Contact from '../Contact/Contact'
const Details = () => {
  const Data_items = [
    {
      id: 1,
      img: AccessFile,
      h1: "Access your files, anywhere",
      p: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
      id: 2,
      img: Security,
      h1: "Security you can trust",
      p: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files",
    },
    {
      id: 3,
      img: Collaboration,
      h1: "Real-time collaboration",
      p: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required",
    },
    {
      id: 4,
      img: AnyFile,
      h1: "Store any type of file",
      p: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    },
  ];
  return (
    <div className="">
      <div className="bg-[#181f2a] pt-[10rem]">
        <div className="w-[70%] m-auto sm:w-[90%]">
          <div className="grid grid-cols-[1fr,1fr] gap-x-[15rem] gap-y-[8rem] md:gap-[5rem] sm:grid-cols-1 sm:gap-y-[8rem]">
            {Data_items.map((item) => (
              <div key={item.id}>
                <div className="flex justify-center">
                  <img src={item.img} alt="" />
                </div>
                <h1 className="text-white font-bold font-Railway text-xl text-center mt-[1.5rem]">
                  {item.h1}
                </h1>
                <p className="text-gray-300 mt-[1rem] font-OpenSans text-[14px] text-center">
                  {item.p}
                </p>
              </div>
            ))}
          </div>
        </div>
        <About />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
};

export default Details;
