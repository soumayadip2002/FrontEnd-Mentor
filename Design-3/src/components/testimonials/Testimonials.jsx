import User1 from "/profile-1.jpg";
import User2 from "/profile-2.jpg";
import User3 from "/profile-3.jpg";
import Quotes from "/bg-quotes.png";
const Testimonials = () => {
  const userData = [
    {
      id: 1,
      name: "Satish Patel",
      img: User1,
      profile: "Founder & CEO, Huddle",
      review:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },

    {
      id: 2,
      img: User2,
      name: "Bruce McKenzie",
      profile: "Founder & CEO, Huddle",
      review:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },

    {
      id: 3,
      img: User3,
      name: "Iva Boyd",
      profile: "Founder & CEO, Huddle",
      review:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
  ];
  return (
    <div className="w-[80%] m-auto mt-[10rem] relative sm:w-[85%]">
      <img src={Quotes} alt="" className='absolute top-[-2.2rem] left-[-.5rem] z-[0] sm:left-0' />
      <div className="grid grid-cols-3 gap-x-[2rem] sm:grid-cols-1 sm:gap-y-[2rem] md:grid-cols-2">
        {userData.map((item) => (
          <div key={item.id} className="bg-[#202a3c] py-[1.5rem] px-[2rem] z-[1000] mb-[1rem] rounded-md">
            <p className="text-gray-300 text-[14px]">{item.review}</p>
            <div className='flex gap-x-2 mt-[1.5rem]'>
              <div>
                <img src={item.img} alt="user" className='h-[3rem] rounded-full' />
              </div>
              <div>
                <h3 className="text-white font-bold">{item.name}</h3>
                <small className="text-gray-400">{item.profile}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
