import React, { useState } from "react";
import Web from "./Web";
import App from "./App";

const tabs = [
  {
    id: 1,
    text: "Web Based Projects",
  },
  {
    id: 2,
    text: "Mobile App Projects",
  },
];

interface DataItem {
  id: number;
  text: string;
}
function Project() {
  const [active, setActive] = useState(1);
  return (
    <section className="lg:py-[80px] py-[50px] lg:w-full bg-white w-11/12 mx-auto">
      <div className=" container mx-auto flex flex-col items-start h-full">
        <div className="flex items-center  border-b border-[#FF3E26] w-full">
          {tabs.map((item: DataItem, index) => {
            return (
              <div
                className={`lg:py-4 py-3 px-5 lg:justify-center flex lg:items-center items-center lg:w-[280px] w-full justify-center ${
                  item?.id === active ? `bg-[#FF3E26]` : ``
                }`}
                onClick={() => setActive(item?.id)}
              >
                <h3
                  className={`font-anon lg:text-lg text-base cursor-pointer ${
                    item?.id === active ? `text-white` : `text-[#FF3E26]`
                  }`}
                >
                  {item?.text}
                </h3>
              </div>
            );
          })}
					</div>
					{active === 1 ? <Web /> : <App />}
      </div>
    </section>
  );
}

export default Project;
