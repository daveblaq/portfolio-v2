import React from "react";
import hero from "../../assets/images/home-hero.png";
import { socials } from "../../data/socials";
import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";



interface DataItem {
  id: number;
  icon: any;
  text: string;
}
function Hero() {
  const overlayStyle = {
    background:
      "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.73) 0.01%, rgba(0, 0, 0, 0.81) 60.42%, #000 100%)",
  };

  return (
    <section className="w-full relative h-screen">
      <img src={hero} alt="home hero" className="h-full w-full" />

      <div className="absolute inset-0" style={overlayStyle}></div>
      <div className="absolute inset-0 w-full">
        <div className="z-10  mx-auto lg:py-[100px] py-[100px] flex items-center justify-center h-full ">
          {/* <Navbar /> */}
          <div className="container lg:w-full w-11/12 flex justify-start gap-[24px]">
            <div className=" h-full w-full lg:max-w-2xl max-w-2xl">
              <h3 className="font-play font-extrabold lg:text-7xl text-4xl text-[#FF3E26]">
                Software Engineer
              </h3>
              <p className="font-anon text-white/50 lg:text-xl text-base font-normal pt-5 leading-relaxed">
                I'm <span className="text-[#FF3E26]">Oladele David</span>, a
                passionate software developer specializing in React/Next.js,
                React Native, Typescript. With a knack for problem-solving, I
                love creating efficient and user-friendly applications,
                constantly seeking innovative ways to improve myself and the
                world at large
              </p>
              <div className="w-full mt-6 flex items-center flex-wrap lg:gap-8 gap-5">
                {socials.map((item: DataItem, index) => {
                  const Icon = item?.icon;
                  return (
                    <Link
                      to=""
                      key={index}
                      className="flex items-center lg:py-6 py-2"
                    >
                      <Icon className="text-[#FF3E26] text-xl" />
                      <p className="text-base text-white/50 hover:text-[#FF3E26] transition duration-300 ease-in-out font-anon pl-3">
                        {item?.text}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
            {/* <div className="">
                <Image />
              </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
