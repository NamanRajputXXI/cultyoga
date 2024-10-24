import React, { useRef } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const inputRef = useRef(null);
  const searchClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div className="flex relative w-full ">
      <div className="absolute sm:top-[9px] top-[5px] left-1 sm:left-2">
        <CiSearch color="gray" size={30} onClick={searchClick} />
      </div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search for yoga poses or disease"
        className="w-full sm:h-12 h-10 border border-gray-300 rounded-full pl-10 sm:px-12 shadow-lg focus:outline-none" // Add padding to left with px-12
      />
    </div>
  );
};

export default SearchBar;
