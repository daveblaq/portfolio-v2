import React from 'react'
import footer from "../../assets/images/footer.png"
import { socials } from '../../data/socials';
import { Link } from "react-router-dom";


interface DataItem {
  id: number;
  icon: any;
  text: string;
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
        <div className="w-full container mx-auto">
          <div className="w-full flex items-center py-[9rem]">
            <div className="w-[70%]">
              <h3 className="font-play text-white text-9xl font-extrabold">
                Follow me
              </h3>
              <div className="w-[40%] h-[12px] bg-[#FF3E26] mt-12"></div>
            </div>
            <div className="w-[30%] grid grid-cols-2 gap-9">
              {socials.map((item: DataItem, index) => {
                const Icon = item?.icon;
                return (
                  <Link
                    to=""
                    key={index}
                    className="flex items-center justify-center rounded-full h-[80px] w-[80px] bg-[#FF3E26]"
                  >
                    <Icon className="text-black text-6xl" />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="border-t border-[#ff3e26] w-full py-8 flex items-end justify-end">
            <p className='text-white/60 text-base font-anon'>Copyright © Oladele David 2023 All rights Reserved</p>
          </div>
        </div>
      </section>
    );
}

export default Footer