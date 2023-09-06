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
    <section className="py-[80px] w-full bg-white">
      <div className=" container mx-auto flex flex-col items-start h-full">
        <div className="flex items-center border-b border-[#FF3E26] w-full">
          {tabs.map((item: DataItem, index) => {
            return (
              <div
                className={`py-6 px-5 ${
                  item?.id === active ? `bg-[#FF3E26]` : ``
                }`}
                onClick={() => setActive(item?.id)}
              >
                <h3
                  className={`font-anon text-lg cursor-pointer ${
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
