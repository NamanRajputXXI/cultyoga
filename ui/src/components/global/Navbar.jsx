import React, { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

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
      <div className="p-5 flex justify-between items-center h-full">
        <div>
          <h1 className="font-bold text-3xl">CultYoga</h1>
        </div>
        <ul className="hidden md:flex gap-10">
          <li className="font-semibold cursor-pointer">Home</li>
          <li className="font-semibold cursor-pointer">About</li>
          <li className="font-semibold cursor-pointer">Services</li>
          <li className="font-semibold cursor-pointer">Products</li>
          <li className="font-semibold cursor-pointer">Contact Us</li>
        </ul>
        <div className="hidden md:flex">
          <button className="text-xl text-white font-semibold bg-green-500 px-5 py-1 rounded-md">
            Log In
          </button>
        </div>
        <div onClick={showMenuFunction} className="cursor-pointer  md:hidden">
          <RxHamburgerMenu className="text-4xl" />
        </div>
      </div>

      {/* -------------------------Mobile Menu Slide-------------------------- */}
      <div
        ref={menuRef}
        className={`bg-gray-300 p-5 fixed w-64 h-screen flex flex-col gap-8 top-0 transform transition-transform duration-500 ease-out ${
          showMenu == "true" ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between w-full">
          <h1 className="font-bold text-3xl">CultYoga</h1>
          <div onClick={hideMenuFunction} className=" cursor-pointer">
            <RxCross1 className="text-4xl" />
          </div>
        </div>
        <ul className="flex flex-col gap-8">
          <li className="font-semibold cursor-pointer">Home</li>
          <li className="font-semibold cursor-pointer">About</li>
          <li className="font-semibold cursor-pointer">Services</li>
          <li className="font-semibold cursor-pointer">Products</li>
          <li className="font-semibold cursor-pointer">Contact Us</li>
        </ul>
        <div>
          <button className="text-xl text-white font-semibold bg-green-500 px-5 py-2 rounded-sm">
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
