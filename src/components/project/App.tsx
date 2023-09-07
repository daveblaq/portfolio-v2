import React, { useState, useRef, useEffect } from "react";
import { IconButton } from "../common/IconButton";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { RiGithubFill, } from "react-icons/ri";

function App() {


  const Item = () => {
      const dropdownRef: React.RefObject<HTMLDivElement> = useRef(null);
      const [isOpen, setIsOpen] = useState(false);

      useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
          ) {
            setIsOpen(false);
          }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [dropdownRef]);

      const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
    return (
      <div className="w-full p-[20px] rounded-[8px] shadow-md flex flex-col items-center justify-between border-[0.8px] border-black/20">
        <div className="flex items-center justify-between w-full pb-5">
          <div className="flex items-center">
            <div className="bg-[#FEF2F2] rounded-full h-[60px] w-[60px] shadow-sm"></div>
            <h3 className="font-play font-extrabold text-xl text-black/70 basis-1/2 leading-[48px] pl-3">
              Lambatoken
            </h3>
          </div>
          <div className="relative" ref={dropdownRef}>
            <div
              className="cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown();
              }}
            >
              <HiDotsVertical className="text-xl text-black/50" />
            </div>
            {isOpen && (
              <div
                className={`absolute -left-28 w-[137px] mt-1 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-[4px] shadow-lg z-50 ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                <div className="w-full divide-y-2 divide-gray-100 cursor-pointer">
                  <div className="flex items-center px-5 py-1 text-base font-anon text-black opacity-50 hover:bg-[#FEF2F2]">
                    <RiGithubFill size={20} className="mr-4" />
                    Github
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
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
            <IconButton icon={FaGooglePlay} text="Playstore" />
            <IconButton icon={FaApple} text="AppStore" />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="py-10 w-full lg:grid lg:grid-cols-3 flex flex-col lg:flex-row gap-12">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
}

export default App;
