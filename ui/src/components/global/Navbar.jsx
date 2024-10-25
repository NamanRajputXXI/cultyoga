import React, { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState("false");
  const menuRef = useRef(null);

  const showMenuFunction = () => {
    setShowMenu("true");
  };

  const hideMenuFunction = () => {
    setShowMenu("false");
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      hideMenuFunction();
      console.log(menuRef.current);
    }
  };

  useEffect(() => {
    console.log("useEfffect is running");

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <nav className=" w-full">
      <div className="py-5 sm:px-10 px-5 flex justify-between items-center h-full">
        <div>
          <Link to={"/"} className=" font-dynaPuff text-3xl">
            CultYoga
          </Link>
        </div>
        <ul className="hidden md:flex gap-10">
          <li className="font-semibold cursor-pointer">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="font-semibold cursor-pointer">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="font-semibold cursor-pointer">
            <Link to={"/Blogs"}>Blogs</Link>
          </li>
          <li className="font-semibold cursor-pointer">
            <Link to={"/products"}>Products</Link>
          </li>
          <li className="font-semibold cursor-pointer">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
        <div className="hidden md:flex">
          <Link
            className="text-xl text-white font-semibold bg-green-500 px-5 py-1 rounded-md"
            to={"/login"}
          >
            Log In
          </Link>
        </div>
        <div onClick={showMenuFunction} className="cursor-pointer  md:hidden">
          <RxHamburgerMenu className="text-4xl" />
        </div>
      </div>

      {/* -------------------------Mobile Menu Slide-------------------------- */}
      <div
        ref={menuRef}
        className={`bg-gray-300 z-[999999] p-5 fixed w-48 h-screen items-center justify-center flex flex-col gap-8 top-0 transform transition-transform duration-500 ease-out ${
          showMenu == "true" ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-center w-full">
          <div onClick={hideMenuFunction} className=" cursor-pointer">
            <RxCross1 className="text-4xl" />
          </div>
        </div>
        <ul className="flex items-center justify-center flex-col gap-8">
          <li className="font-semibold cursor-pointer">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="font-semibold cursor-pointer">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="font-semibold cursor-pointer">
            <Link to={"/services"}>Services</Link>
          </li>
          <li className="font-semibold cursor-pointer">
            <Link to={"products"}>Products</Link>
          </li>
          <li className="font-semibold cursor-pointer">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
        <div>
          <Link
            className="text-xl text-white font-semibold bg-green-500 px-5 py-2 rounded-sm"
            to={"/login"}
          >
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
