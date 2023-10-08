import Productive from "/illustration-stay-productive.png";
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
const About = () => {
  return (
    <div className="grid grid-cols-2 mt-[10rem] w-[80%] m-auto gap-x-[2rem] items-center sm:grid-cols-1 sm:gap-y-[2rem] sm:w-[90%]">
      <div>
        <img src={Productive} alt="about" />
      </div>
      <div>
        <h1 className="text-3xl font-Railway font-bold text-white">
          Stay productive, <br /> wherever you are{" "}
        </h1>
        <p className="mt-[1.5rem] text-[14px] font-OpenSans text-gray-300">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>

        <p className="mt-[1.2rem] text-[14px] font-OpenSans text-gray-300">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>

        <div className="mt-[1.2rem] w-fit text-[14px] font-OpenSans 
        text-[#65e2d9] cursor-pointer flex gap-x-2 items-center hover:text-white hover:border-white border-b-[1.5px] pb-1 border-[#65e2d9]">
          <p>See how Fylo works</p>
          <BsFillArrowRightCircleFill className='text-[1.2rem] hover:text-white'/>
        </div>
      </div>
    </div>
  );
};

export default About;
