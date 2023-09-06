import React from "react";

function Hero() {
  return (
    <section className="pt-[150px] w-full bg-white">
      <div className=" container mx-auto flex items-start h-full">
        <div className=" h-full w-full lg:max-w-2xl max-w-2xl">
          <h3 className="font-play font-extrabold text-4xl text-black/70 basis-1/2 leading-[48px]">
            Projects
          </h3>
          <p className="font-inter text-black/50 text-lg font-normal leading-relaxed pt-7">
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
