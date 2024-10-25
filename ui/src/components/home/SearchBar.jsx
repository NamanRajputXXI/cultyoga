import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { baseUrl } from "../../assets/baseUrl";
const SearchBar = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const inputRef = useRef(null);

  // click function for the search button
  const searchClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // handleChange function for the input feild
  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
    if (e.target.value === "") {
      setFilterData([]);
    } else {
      const filteredData = data.filter((item, i) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilterData(filteredData);
    }
  };

  // fetch data from the api
  const fetchData = async () => {
    try {
      const response = await fetch(`${baseUrl}/yogaposes`);
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (err) {
      console.log("Not able to fetch", err);
    }
  };

  // fetch the data only one when component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex bg-white rounded-xl  flex-col relative w-full ">
      <div className="flex  w-full">
        <div className="absolute sm:top-[9px] top-[5px] left-1 sm:left-2">
          <CiSearch color="gray" size={30} onClick={searchClick} />
        </div>
        <input
          onChange={handleChange}
          ref={inputRef}
          type="text"
          value={input}
          placeholder="Search for yoga poses or disease"
          className="w-full sm:h-12 h-10  border-gray-300 rounded-xl  pl-10 sm:px-12  focus:outline-none" // Add padding to left with px-12
        />
      </div>
      {filterData.map((item, i) => {
        return (
          <div className="w-full rounded-xl px-12 py-2 bg-white">
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SearchBar;
