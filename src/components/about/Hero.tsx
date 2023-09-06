import React from 'react'
import Image from '../home/Image';
import { tech } from '../../data/tech';
import { tools } from '../../data/tools';
import { Link } from 'react-router-dom';
import uniuyo from "../../assets/images/uniuyo.jpg";



interface DataItem {
  id: number;
  icon: any;
  tech: string;
  text: string;
  color: string;
  url: string;
}
function Hero() {


	return (
    <section className="w-full py-[13rem] bg-white">
      {" "}
      <div className="container mx-auto flex items-center justify-center h-full">
        <div className="w-full flex justify-between gap-[24px]">
          <div className=" h-full w-full lg:max-w-2xl max-w-2xl">
            <h3 className="font-play font-extrabold text-4xl text-black/70 basis-1/2 leading-[48px]">
              I'm Oladele David. I live in Nigeria, where I build the future.
            </h3>

            <p className="font-inter text-black/50 text-lg font-normal leading-relaxed pt-12">
              As a software developer with over 6 years of experience, I bring a
              wealth of knowledge and expertise to the table. As a software
              developer with over 6 years of experience, I bring a wealth of
              knowledge and expertise to the table.
            </p>
            <div className="border border-[#FF3E26]/30 bg-white w-full mt-8 overflow-hidden rounded-[8px] p-10">
              <p className="font-anon text-zinc-500 text-lg font-semibold">
                If you ever spot me in the wild, don't hesitate to say hello!
                Let's grab a cup of coffee ☕ and geek out over the latest
                advancements in front-end development or discuss our favorite
                programming language.
              </p>
            </div>
            <h3 className="font-play font-extrabold pt-12 text-4xl text-black/70 basis-1/2 leading-[48px]">
              Education
            </h3>
            <div className="mt-5">
              <div className='flex items-center'>
                <div className="h-[90px] w-[90px] rounded-full shadow-md overflow-hidden border border-[#ff3e26]/30 bg-white flex items-center justify-center">
                  <img
                    src={uniuyo}
                    alt="Education"
                    className="h-[60px] w-[80px]"
                  />
                  
                </div>
                <div className="ml-4">
                  <p className="font-inter uppercase font-medium  text-sm leading-tight text-zinc-500 tracking-widest pb-2">
                    March 11, 2018 - August 31, 2023
                  </p>
                  <p className="font-anon uppercase font-medium  text-base leading-tight text-zinc-500 tracking-widest pb-2">
                    <span className="text-[#ff3e26]">B.Sc.(Ed.)</span> in
                    Computer and Robotics Education
                  </p>
                  <p className="font-inter uppercase font-medium  text-[12px] leading-tight text-zinc-500 tracking-widest pb-2">
                    (Akwa-Ibom, Uyo, Nigeria)
                  </p>
                </div>
              </div>
            </div>
            <h3 className="font-play font-extrabold pt-12 text-4xl text-black/70 basis-1/2 leading-[48px]">
              Soft Skills
            </h3>
            <p className="text-black/50 font-inter text-lg py-8">
              Certain skills I've picked along the way that deserves mentioning:
            </p>
            <p>
              <span className="font-extrabold text-lg text-[#FF3E26] font-inter">
                Attention to detail:
              </span>
              <span className="font-normal text-lg text-black/50 font-inter pl-2">
                I am meticulous when it comes to deliverables.
              </span>
            </p>
            <h3 className="font-play font-extrabold pt-12 text-4xl text-black/70 basis-1/2 leading-[48px]">
              Usage
            </h3>
            <p className="text-black/50 font-inter text-lg pt-8">
              Tools, technologies and gadgets I use on a daily basis but not
              limited to.
            </p>
            <h3 className="font-play font-extrabold pt-9 text-3xl text-black/70 basis-1/2 leading-[48px]">
              Technologies
            </h3>
            <div>
              {tech.map((item: DataItem, index) => {
                const Icon = item?.icon;
                return (
                  <div className="flex items-center ml-3 py-3">
                    <Link to={item?.url} className="flex items-center">
                      <Icon color={item?.color} className={`text-3xl`} />
                      <h3 className="text-lg underline text-[#FF3E26] font-anon pl-3">
                        {item?.tech}
                      </h3>
                    </Link>
                    <p className="text-lg text-zinc-500 pl-2">
                      {" "}
                      - {item?.text}
                    </p>
                  </div>
                );
              })}
            </div>
            <h3 className="font-play font-extrabold pt-9 text-3xl text-black/70 basis-1/2 leading-[48px]">
              Tools
            </h3>
            <div>
              {tools.map((item: DataItem, index) => {
                const Icon = item?.icon;
                return (
                  <div className="flex items-center ml-3 py-3">
                    <Link to={item?.url} className="flex items-center">
                      <Icon color={item?.color} className={`text-3xl`} />
                      <h3 className="text-lg underline text-[#FF3E26] font-anon pl-3">
                        {item?.tech}
                      </h3>
                    </Link>
                    <p className="text-lg text-zinc-500 pl-2">
                      {" "}
                      - {item?.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="">
            <Image />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero