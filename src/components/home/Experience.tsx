import React from 'react'
import profile from "../../assets/images/profile.jpg";


function Experience() {
	const Item = () => {
		return (
      <div className="w-full inline-flex">
        <div className="flex flex-col justify-between items-center">
          <div className="h-[90px] w-[90px] relative rounded-full shadow-md overflow-hidden border border-[#ff3e26]/30 bg-white flex items-center justify-center">
            <img src={profile} alt="Education" className="h-[70px] w-[70px] rounded-full overflow-hidden" />
          </div>
          <div className="border-[0.8px] h-[7rem] border-[#FF3E26] rotate-180"></div>
        </div>
        <div className="ml-8">
          <h3 className="font-play font-extrabold  text-2xl leading-tight text-black/70">
            Freecodecamp
          </h3>
          <p className="font-anon font-medium  text-xl leading-tight text-black/70 py-2">
            Frontend Developer
          </p>
          <p className="font-inter uppercase font-medium  text-[12px] leading-tight text-zinc-500 tracking-widest pb-2">
            Oct 11, 2022 - Jan 16, 2023
          </p>
          <p className="tracking-light text-zinc-400 font-inter font-normal">
            Rebranded and built the frontend infrastructure of Agpro's
            Angular-based service web app that allows thousands of clients
            across the USA monitor their barn activity
          </p>
        </div>
      </div>
    );
	}
		return (
      <section className="w-full  h-screen py-[6.6rem]  relative bg-white">
        <div className="w-full container mx-auto experience">
          <h3 className="font-play font-extrabold  text-4xl leading-tight text-black/70">
            Work Experience
          </h3>
          <div className="w-full mt-[4rem] grid grid-cols-2 relative gap-y-10 gap-x-12 ">
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