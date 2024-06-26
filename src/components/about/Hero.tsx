import React from "react";
import Image from "../home/Image";
import { tech } from "../../data/tech";
import { tools } from "../../data/tools";
import { gadgets } from "../../data/gadgets";
import { Link } from "react-router-dom";
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
    <section className="w-full lg:py-[13rem] py-[10rem] bg-white">
      {" "}
      <div className="container mx-auto flex items-center justify-center h-full lg:w-full w-11/12">
        <div className="w-full flex flex-col-reverse lg:flex-row justify-between gap-[24px]">
          <div className=" h-full w-full lg:max-w-2xl max-w-2xl">
            <h3 className="font-play font-extrabold lg:text-4xl text-2xl text-black/70 basis-1/2 lg:leading-normal">
              I'm Oladele David. I live in South Africa, where I build the
              future.
            </h3>

            <p className="font-inter text-black/50 lg:text-lg text-base font-normal leading-relaxed lg:pt-12 pt-5">
              Over the years, I've had the privilege of crafting intuitive and
              visually appealing user interfaces that not only meet but exceed
              user expectations. My journey in the world of coding has been an
              exciting one, filled with a deep passion for creating seamless web
              experiences. I thrive on challenges and am always eager to explore
              the latest trends and technologies in the ever-evolving frontend
              landscape. Whether it's harnessing the power of React, Typescript,
              or React Native, I'm all about crafting pixel-perfect, responsive
              designs that make an impact.
            </p>
            <p className="font-inter text-black/50 lg:text-lg text-base font-normal leading-relaxed lg:pt-6 pt-5">
              I'm currently open to exciting job opportunities and
              collaborations that allow me to leverage my expertise to build
              remarkable web applications. If you're looking to bring your
              project to life, improve your user experience, or embark on a
              frontend adventure, I'm your go-to collaborator!
            </p>
            <div className="border border-[#FF3E26]/30 bg-white w-full mt-8 overflow-hidden rounded-[8px] lg:p-10 p-5">
              <p className="font-anon text-zinc-500 lg:text-lg text-base font-semibold">
                If you ever spot me in the wild, don't hesitate to say hello!
                Let's grab a cup of coffee ☕ and geek out over the latest
                advancements in front-end development or discuss our favorite
                programming language.
              </p>
            </div>
            <h3 className="font-play font-extrabold pt-12 lg:text-4xl text-2xl text-black/70 basis-1/2 leading-[48px]">
              Education
            </h3>
            <div className="mt-5 w-full">
              <div className="flex items-center w-full">
                <div className="lg:h-[90px] lg:w-[90px] w-[80px] h-[80px] rounded-full shadow-md overflow-hidden border border-[#ff3e26]/30 bg-white flex p-1 items-center justify-center">
                  <img
                    src={uniuyo}
                    alt="Education"
                    className=" pointer-events-none"
                  />
                </div>
                <div className="lg:ml-4 ml-3">
                  <p className="font-inter uppercase font-medium  lg:text-sm text-[10px] leading-tight text-zinc-500 tracking-widest pb-2">
                    March 11, 2018 - August 31, 2023
                  </p>
                  <p className="font-anon uppercase font-medium  lg:text-base text-sm leading-tight text-zinc-500 tracking-widest pb-2 lg:w-full w-[80%]">
                    <span className="text-[#ff3e26]">B.Sc.(Ed.)</span> in
                    Computer and Robotics Education
                  </p>
                  <p className="font-inter uppercase font-medium  lg:text-[12px] text-[10px] leading-tight text-zinc-500 tracking-widest pb-2">
                    (Akwa-Ibom, Uyo, Nigeria)
                  </p>
                </div>
              </div>
            </div>
            <h3 className="font-play font-extrabold pt-12 lg:text-4xl text-2xl text-black/70 basis-1/2 leading-[48px]">
              Soft Skills
            </h3>
            <p className="text-black/50 font-inter lg:text-lg text-base lg:py-8 py-4">
              Certain skills I've picked along the way that deserves mentioning:
            </p>
            <p>
              <span className=" lg:text-lg text-base text-[#FF3E26] font-anon underline">
                Attention to detail:
              </span>
              <span className="font-normal lg:text-lg text-base text-black/50 font-inter pl-2">
                I am meticulous when it comes to deliverables.
              </span>
            </p>
            <p className="pt-3">
              <span className=" lg:text-lg text-base text-[#FF3E26] font-anon underline">
                Communication:
              </span>
              <span className="font-normal lg:text-lg text-base text-black/50 font-inter pl-2">
                I facilitate regular team meetings, provide project updates to
                stakeholders, and serve as a central point of contact for
                project-related matters.
              </span>
            </p>
            <h3 className="font-play font-extrabold lg:pt-12 pt-7 lg:text-4xl text-2xl text-black/70 basis-1/2 leading-[48px]">
              Usage
            </h3>
            <p className="text-black/50 font-inter lg:text-lg text-base lg:pt-8 pt-4">
              Tools, technologies and gadgets I use on a daily basis but not
              limited to.
            </p>
            <h3 className="font-play font-extrabold lg:pt-9 pt-7 lg:text-3xl text-xl text-black/70 basis-1/2 leading-[48px]">
              Technologies
            </h3>
            <div>
              {tech.map((item: DataItem, index) => {
                const Icon = item?.icon;
                return (
                  <div className="flex items-center ml-3 py-3">
                    <Link to={item?.url} className="flex items-center">
                      <Icon
                        color={item?.color}
                        className={`lg:text-3xl text-2xl`}
                      />
                      <h3 className="lg:text-lg text-base underline text-[#FF3E26] font-anon pl-3">
                        {item?.tech}
                      </h3>
                    </Link>
                    <p className="lg:text-lg text-base text-zinc-500 pl-2">
                      {" "}
                      - {item?.text}
                    </p>
                  </div>
                );
              })}
            </div>
            <h3 className="font-play font-extrabold pt-9 lg:text-3xl text-xl text-black/70 basis-1/2 leading-[48px]">
              Tools
            </h3>
            <div>
              {tools.map((item: DataItem, index) => {
                const Icon = item?.icon;
                return (
                  <div className="flex items-center ml-3 py-3">
                    <Link to={item?.url} className="flex items-center">
                      <Icon
                        color={item?.color}
                        className={`lg:text-3xl text-2xl`}
                      />
                      <h3 className="lg:text-lg text-base underline text-[#FF3E26] font-anon pl-3">
                        {item?.tech}
                      </h3>
                    </Link>
                    <p className="lg:text-lg text-base text-zinc-500 pl-2">
                      {" "}
                      - {item?.text}
                    </p>
                  </div>
                );
              })}
            </div>
            {/* <h3 className="font-play font-extrabold pt-9 lg:text-3xl text-xl text-black/70 basis-1/2 leading-[48px]">
              Gadgets
            </h3>
            <div>
              {gadgets.map((item: DataItem, index) => {
                const Icon = item?.icon;
                return (
                  <div className="flex items-center ml-3 py-3">
                    <Link to={item?.url} className="flex items-center">
                      <Icon
                        color={item?.color}
                        className={`lg:text-3xl text-2xl`}
                      />
                      <h3 className="lg:text-lg text-base underline text-[#FF3E26] font-anon pl-3">
                        {item?.tech}
                      </h3>
                    </Link>
                    <p className="lg:text-lg text-base text-zinc-500 pl-2">
                      {" "}
                      - {item?.text}
                    </p>
                  </div>
                );
              })}
            </div> */}
          </div>
          <div className="">
            <Image />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
