import React from "react";
import user from "../../assets/images/user-image.png";
import { SiAdobeacrobatreader } from "react-icons/si";

function Image() {
  return (
    <div className="w-[450px] h-[500px] bg-white   overflow-hidden shadow-md p-3">
      <div className="bg-red-200 h-[85%] w-full">
        <img src={user} alt="User" className="h-full w-full  bg-contain" />
      </div>
      <div className="h-[15%] w-full py-2">
					<div className="w-full flex items-center justify-center bg-[#FF3E26] py-4 cursor-pointer shadow-md">
						<SiAdobeacrobatreader className="text-white text-lg" />
						<h3 className="text-white font-anon pl-4 font-extrabold">Download Resume</h3>
								</div>
      </div>
    </div>
  );
}

export default Image;
