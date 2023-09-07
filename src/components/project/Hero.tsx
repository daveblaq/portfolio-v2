import React from "react";

function Hero() {
  return (
    <section className="lg:pt-[150px] pt-[100px] w-full bg-white">
      <div className=" container mx-auto flex items-start h-full lg:w-full w-11/12">
        <div className=" h-full w-full lg:max-w-2xl max-w-2xl">
          <h3 className="font-play font-extrabold lg:text-4xl text-2xl text-black/70 basis-1/2 leading-[48px]">
            Projects
          </h3>
          <p className="font-inter text-black/50 lg:text-lg text-base font-normal leading-relaxed lg:pt-7 pt-4">
            I've worked on tons of little projects over the years but these are
            the ones that I'm most proud of. Many of them are open-source, so if
            you see something that piques your interest, check out the code and
            contribute if you have ideas on how it can be improved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
