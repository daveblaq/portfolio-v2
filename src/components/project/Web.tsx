import React, { useRef } from "react";
import { IconButton } from "../common/IconButton";
import { RiGithubFill, RiExternalLinkLine } from "react-icons/ri";
import { webprojects } from "../../data/webprojects";
import Image from "../common/Image";


interface DataItem {
  item?: any;
  text: string;
  url?: string;
  image?: string;
  description?: string;
  stack?: any;
}

interface ItemProps {
  item?: any;
}

function Web() {


const Item: React.FC<ItemProps> = ({ item }) => {
 
  return (
    <div className="w-full p-[20px] rounded-[8px] shadow-md flex flex-col items-center justify-between border-[0.8px] border-black/20">
      <div className="bg-[#FEF2F2] rounded-[8px] h-[200px] w-full">
      <Image src={item?.image} />
      </div>
      <div className="w-full">
        <h3 className="font-play font-extrabold text-xl text-black/70 basis-1/2 leading-[48px]">
          {item?.text}
        </h3>
        <p className="font-inter text-black/50 text-sm font-normal leading-relaxed pt-2">
          {item?.description}
        </p>
        <div className="py-2 w-full grid grid-cols-3 gap-2">
          {item?.stack.map((item: any) => {
            return (
              <div className="px-2 py-[5px] rounded-[4px] bg-gray-200/40 text-[13px] flex items-center justify-center text-zinc-500 font-anon">
                {item}
              </div>
            );
          })}
        </div>
        <div className="pt-2 flex items-center gap-4">
          {item?.github && (
            <IconButton icon={RiGithubFill} text="Github" link={item?.github} />
          )}

          {item?.url && (
            <IconButton
              icon={RiExternalLinkLine}
              text="Preview"
              link={item?.url}
            />
          )}
        </div>
      </div>
    </div>
  );
};
  return (
    <div className="py-10 w-full lg:grid lg:grid-cols-3 flex flex-col lg:flex-row gap-12">
      {webprojects.map((item: DataItem, index) => {
        return <Item item={item} key={index} />;
      })}
    
    </div>
  );
}

export default Web;
