import React, {useState, useRef, useEffect} from "react";
import { IconButton } from "../common/IconButton";
import { RiGithubFill, RiExternalLinkLine } from "react-icons/ri";

function Web() {





  const Item = () => {
    return (
      <div className="w-full p-[20px] rounded-[8px] shadow-md flex flex-col items-center justify-between border-[0.8px] border-black/20">
        <div className="bg-[#FEF2F2] rounded-[8px] h-[200px] w-full"></div>
        <div>
          <h3 className="font-play font-extrabold text-xl text-black/70 basis-1/2 leading-[48px]">
            Lambatoken
          </h3>
          <p className="font-inter text-black/50 text-sm font-normal leading-relaxed pt-2">
            I've worked on tons of little projects over the years but these are
            the ones that I'm most proud of. Many of them are open-source, so if
            you see something that piques your interest, check out the code and
            contribute if you have ideas on how it can be improved.
          </p>
          <div className="py-2 w-full grid grid-cols-3 gap-2">
            <div className="px-2 py-[5px] rounded-[23px] bg-gray-200/40 text-[13px] flex items-center justify-center text-zinc-500 font-anon">
              Tailwind CSS
            </div>
            <div className="px-2 py-[5px] rounded-[23px] bg-gray-200/40 text-[13px] flex items-center justify-center text-zinc-500 font-anon">
              React
            </div>
            <div className="px-2 py-[5px] rounded-[23px] bg-gray-200/40 text-[13px] flex items-center justify-center text-zinc-500 font-anon">
              Redux
            </div>
          </div>
          <div className="pt-2 flex items-center gap-4">
            <IconButton icon={RiGithubFill} text="Github" />
            <IconButton icon={RiExternalLinkLine} text="Preview" />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="py-10 w-full grid grid-cols-3 gap-12">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
}

export default Web;
