import React from 'react'
import { Link, useLocation } from "react-router-dom";

function MobileNav() {
  //assigning location variable
  const location = useLocation();
  //destructuring pathname from location
  const { pathname } = location;

  const splitLocation = pathname.split("/");
  return (
    <div className="w-full bg-white h-screen px-[16px] py-[150px] absolute">
      <div className="flex flex-col w-full items-center gap-[58px]">
        <Link to="/">
          <h3
            className={` text-xl font-medium font-anon ${
              splitLocation[1] === "" ? `text-[#FF3E26]` : `text-black/50`
            }`}
          >
            Home
          </h3>
        </Link>
        <Link to="/about-me">
          <h3
            className={` text-xl font-medium font-anon ${
              splitLocation[1] === "about-me"
                ? `text-[#FF3E26]`
                : `text-black/50`
            }`}
          >
            About
          </h3>
        </Link>
        <Link to="/projects">
          <h3
            className={` text-xl font-medium font-anon ${
              splitLocation[1] === "projects"
                ? `text-[#FF3E26]`
                : `text-black/50`
            }`}
          >
            Projects
          </h3>
        </Link>
      </div>
    </div>
  );
}

export default MobileNav