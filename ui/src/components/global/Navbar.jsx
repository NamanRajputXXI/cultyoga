import React, { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { handleSuccess } from "../../utils/AuthUtil";
import { ToastContainer } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState("");
  const [showMenu, setShowMenu] = useState("false");
  const [showDropDown, setShowDropDown] = useState(false);
  const menuRef = useRef(null);
  const dropDownRef = useRef(null);

  const showMenuFunction = () => {
    setShowMenu("true");
  };

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("userName"));
  });
  const hideMenuFunction = () => {
    setShowMenu("false");
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      hideMenuFunction();
      // console.log(menuRef.current);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    setLoggedInUser(null);
    handleSuccess("Logout Successfully");
    navigate("/");
  };
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
            <Link to={"/poses"}>Poses</Link>
          </li>
          <li className="font-semibold cursor-pointer">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
        <div className="hidden md:flex">
          {loggedInUser ? (
            <div
              className="text-xl text-white font-semibold  bg-teal-500  px-5 py-1 rounded-md cursor-pointer"
              onClick={() => setShowDropDown((prev) => !prev)}
              ref={dropDownRef}
            >
              {loggedInUser}
              {showDropDown && (
                <div className="absolute top-[75px] right-6 bg-red-400 shadow-md rounded-md flex flex-col ">
                  <Link
                    to={"/profile"}
                    className="px-3 py-2 hover:bg-gray-200 text-gray-700 cursor-pointer"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-3 py-2 hover:bg-gray-200 text-gray-700 text-left"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              className="text-xl text-white font-semibold  bg-teal-500  px-5 py-1 rounded-md"
              to={"/login"}
            >
              Log In
            </Link>
          )}
        </div>
        <div onClick={showMenuFunction} className="cursor-pointer  md:hidden">
          <RxHamburgerMenu className="text-4xl" />
        </div>
      </div>

      {/* -------------------------Mobile Menu Slide-------------------------- */}
      {/* -------------------------Mobile Menu Slide-------------------------- */}
      <div
        ref={menuRef}
        className={`bg-gray-300 z-[999999] p-5 fixed w-48 h-screen items-center justify-center flex flex-col gap-8 top-0 transform transition-transform duration-500 ease-out ${
          showMenu == "true" ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-center w-full">
          <div onClick={hideMenuFunction} className="cursor-pointer">
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
            <Link to={"/poses"}>Poses</Link>
          </li>
          <li className="font-semibold cursor-pointer">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
        <div className="relative">
          {loggedInUser ? (
            <div className="flex flex-col items-center">
              <button
                className="text-xl text-white font-semibold bg-teal-500 px-5 py-2 rounded-sm"
                onClick={() => setShowDropDown((prev) => !prev)}
              >
                {loggedInUser}
              </button>
              {showDropDown && (
                <div className="mt-2 bg-white shadow-md rounded-md flex flex-col py-2 w-full">
                  <Link
                    to={"/profile"}
                    className="px-4 py-2 hover:bg-gray-200 text-gray-700 cursor-pointer text-center"
                    onClick={hideMenuFunction}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      hideMenuFunction();
                    }}
                    className="px-4 py-2 hover:bg-gray-200 text-gray-700 text-center"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              className="text-xl max-w-[250px] text-white font-semibold bg-green-500 px-5 py-2 rounded-sm"
              to={"/login"}
              onClick={hideMenuFunction}
            >
              Log In
            </Link>
          )}
        </div>
      </div>
      <ToastContainer />
    </nav>
  );
};

export default Navbar;
