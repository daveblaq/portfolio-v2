import React, { useEffect, useState } from "react";
import profile from "../../assets/images/profile.jpg";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import MobileNav from "./MobileNav";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const [open, setOpen] = useState(false);
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
    <>
      <header
        className={`fixed top-0 left-0 w-full z-10 transition duration-300 lg:py-4 py-1 ${
          scrolled ? "bg-[#FEF2F2] shadow-b shadow-sm" : "bg-white"
        }`}
      >
        <div className="container lg:w-full mx-auto w-11/12">
          <div className="w-full flex items-center justify-between py-3">
            <Link to="/" className="w-full flex items-center">
              <div className="lg:h-[45px] lg:w-[45px] rounded-full h-[35px] w-[35px] border-2 border-white overflow-hidden">
                <img src={profile} alt="Profile" className="w-full h-full" />
              </div>
              <div className="ml-2 ">
                <h3 className="font-play font-extrabold text-black/70 lg:text-2xl text-lg leading-tight">
                  David Oladele
                </h3>
              </div>
            </Link>
            <div
              className="h-[40px] w-[40px] bg-[#FF3E26] rounded-full lg:hidden flex items-center justify-center cursor-pointer "
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <RiCloseFill className="text-white text-[30px]" />
              ) : (
                <HiMenuAlt4 className="text-white text-[30px]" />
              )}
            </div>
            <div className="items-center gap-8 lg:flex hidden">
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
      {open && <MobileNav />}
    </>
  );
}

export default Navbar;
