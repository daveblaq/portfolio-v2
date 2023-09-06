import React, { useEffect, useState } from "react";
import profile from "../../assets/images/profile.jpg";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
	const { pathname } = location;
	
  const splitLocation = pathname.split("/");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 transition duration-300 py-4 ${
        scrolled ? "bg-[#FEF2F2] shadow-b shadow-sm" : "bg-white"
      }`}
    >
      <div className="container w-full mx-auto">
        <div className="w-full flex items-center justify-between">
          <Link to="/" className="w-full flex items-center">
            <div className="h-[45px] w-[45px] rounded-full border-2 border-white overflow-hidden">
              <img src={profile} alt="Profile" className="w-full h-full" />
            </div>
            <div className="ml-2 ">
              <h3 className="font-play font-extrabold text-black/70 text-2xl leading-tight">
                David Oladele
              </h3>
            </div>
          </Link>
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className={`text-lg font-anon  ${
                splitLocation[1] === "" ? `text-[#FF3E26]` : `text-black/70`
              }`}
            >
              Home
            </Link>
            <Link
              to="/about-me"
              className={`text-lg font-anon  ${
                splitLocation[1] === "about-me"
                  ? `text-[#FF3E26]`
                  : `text-black/70`
              }`}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`text-lg font-anon  ${
                splitLocation[1] === "projects"
                  ? `text-[#FF3E26]`
                  : `text-black/70`
              }`}
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
