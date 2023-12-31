import React from 'react'
import footer from "../../assets/images/footer.png"
import { socials } from '../../data/socials';
import { Link } from "react-router-dom";


interface DataItem {
  id: number;
  icon: any;
  text: string;
  url: string;
}
function Footer() {

		return (
      <section
        className="w-full h-full bg-cover "
        style={{
          backgroundImage: `url(${footer})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="lg:w-full w-11/12 container mx-auto">
          <div className="w-full flex flex-col lg:flex-row items-center lg:py-[9rem] py-[4rem]">
            <div className="lg:w-[70%] w-full">
              <h3 className="font-play text-white lg:text-9xl text-4xl font-extrabold">
               Contact me
              </h3>
              <div className="w-[40%] h-[12px] bg-[#FF3E26] mt-12 lg:block hidden"></div>
            </div>
            <div className="lg:w-[30%] w-full grid grid-cols-2 lg:gap-9 gap-5 lg:mt-0 mt-9 ">
              {socials.map((item: DataItem, index) => {
                const Icon = item?.icon;
                return (
                  <Link
                    to={item?.url}
                    key={index}
                    className="flex items-center justify-center rounded-full lg:h-[80px] lg:w-[80px] h-[60px] w-[60px] bg-[#FF3E26]"
                  >
                    <Icon className="text-black lg:text-6xl text-4xl" />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="border-t border-[#ff3e26] w-full lg:py-8 py-5 flex lg:items-end items-center justify-center lg:justify-end">
            <p className='text-white/60 lg:text-base text-sm font-anon lg:text-end text-center lg:w-full w-[80%]'>Copyright © Oladele David 2023 All rights Reserved</p>
          </div>
        </div>
      </section>
    );
}

export default Footer