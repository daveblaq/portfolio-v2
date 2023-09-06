import React from 'react'
import profile from "../../assets/images/profile.jpg";


function Experience() {
	const Item = () => {
		return (
      <div className="w-full inline-flex">
        <div className="flex flex-col justify-between items-center">
          <div className="lg:h-[90px] lg:w-[90px] h-[80px] w-[80px] relative rounded-full shadow-md overflow-hidden border border-[#ff3e26]/30 bg-white flex items-center justify-center">
            <img src={profile} alt="Education" className="lg:h-[70px] lg:w-[70px] h-[60px] w-[60px] rounded-full overflow-hidden" />
          </div>
          <div className="border-[0.8px] h-[7rem] border-[#FF3E26] rotate-180"></div>
        </div>
        <div className="lg:ml-8 ml-4">
          <h3 className="font-play font-extrabold  lg:text-2xl text-xl leading-tight text-black/70">
            Freecodecamp
          </h3>
          <p className="font-anon font-medium  lg:text-xl text-md leading-tight text-black/70 py-2">
            Frontend Developer
          </p>
          <p className="font-inter uppercase font-medium  lg:text-[12px] text-[10px] leading-tight text-zinc-500 tracking-widest pb-2">
            Oct 11, 2022 - Jan 16, 2023
          </p>
          <p className="tracking-light text-zinc-400 font-inter font-normal lg:text-base text-sm">
            Rebranded and built the frontend infrastructure of Agpro's
            Angular-based service web app that allows thousands of clients
            across the USA monitor their barn activity
          </p>
        </div>
      </div>
    );
	}
		return (
      <section className="w-full  lg:h-screen h-full lg:py-[6.6rem]  py-[4rem] relative bg-white">
        <div className="lg:w-full w-11/12 container mx-auto">
          <h3 className="font-play font-extrabold  lg:text-4xl text-2xl leading-tight text-black/70">
            Work Experience
          </h3>
          <div className="w-full mt-[4rem] lg:grid lg:grid-cols-2 flex flex-col relative lg:gap-y-10 gap-x-12 gap-y-5">
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </section>
    );
}

export default Experience