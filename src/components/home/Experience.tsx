import React from 'react'
import { work } from '../../data/work';



interface DataItem {
  id: number;
  company: string;
  role: string;
  image: string;
  start: string;
  end: string;
  description: string;
}


interface ItemProps {
  item?: any;
}
function Experience() {
	const Item: React.FC<ItemProps> = ({ item }) => {
    return (
      <div className="w-full inline-flex">
        <div className="flex flex-col justify-between items-center">
          <div className="lg:h-[90px] lg:w-[90px] h-[80px] w-[80px] p-3 relative rounded-full shadow-md overflow-hidden border border-[#ff3e26]/30 bg-white flex items-center justify-center">
            <img
              src={item?.image}
              alt="Education"
              className=" rounded-full bg-cover pointer-events-none"
            />
          </div>
          <div className="border-[0.8px] h-[15rem] border-[#FF3E26]/30 rotate-180"></div>
        </div>
        <div className="lg:ml-8 ml-4">
          <h3 className="font-play font-extrabold  lg:text-2xl text-xl leading-tight text-black/70">
            {item?.company}
          </h3>
          <p className="font-anon font-medium  lg:text-xl text-md leading-tight text-black/70 py-2">
            {item?.role}
          </p>
          <p className="font-inter uppercase font-medium  lg:text-[12px] text-[10px] leading-tight text-zinc-500 tracking-widest pb-2">
            {item?.start} -{" "}
            <span className={`${item?.status === 1 ? `text-[#ff3e26]` : ``}`}>
              {item?.end}
            </span>
          </p>
          <p className="tracking-light text-zinc-400 font-inter font-normal lg:text-base text-sm">
            {item?.description}
          </p>
        </div>
      </div>
    );
  };
		return (
      <section className="w-full  lg:h-full h-full lg:py-[6.6rem]  py-[4rem] relative bg-white">
        <div className="lg:w-full w-11/12 container mx-auto">
          <h3 className="font-play font-extrabold  lg:text-4xl text-2xl leading-tight text-black/70">
            Work Experience
          </h3>
          <div className="w-full mt-[4rem] lg:grid lg:grid-cols-2 flex flex-col relative lg:gap-y-10 gap-x-12 gap-y-5">
            {work.map((item: DataItem, index) => {
              return <Item item={item} />;
            })}
          </div>
        </div>
      </section>
    );
}

export default Experience