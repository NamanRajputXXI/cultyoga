import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { baseUrl } from "../../assets/baseUrl";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [searchPerformed, setSearchPerformed] = useState(false); // Track if a search has been performed
  const inputRef = useRef(null);

  // Click function for the search button
  const searchClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // HandleChange function for the input field
  const handleChange = (e) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      setHighlightedIndex(-1);
      setFilterData([]);
      setSearchPerformed(false); // Reset when input is cleared
    } else {
      const filteredData = data.filter((item) =>
        item.name.toLowerCase().startsWith(e.target.value.toLowerCase())
      );
      setFilterData(filteredData);
      setSearchPerformed(true); // Mark that a search has been performed
    }
  };

  // Fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch(`${baseUrl}/yogaposes`);
      const data = await response.json();
      setData(data);
    } catch (err) {
      console.log("Not able to fetch", err);
    }
  };

  // Handle key down for keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault(); // Prevent scrolling
      setHighlightedIndex((prevIndex) =>
        prevIndex < filterData.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault(); // Prevent scrolling
      setHighlightedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (e.key === "Enter") {
      if (highlightedIndex >= 0) {
        const selectedItem = filterData[highlightedIndex];
        setInput(selectedItem.name); // Set input to the selected item's name
        setFilterData([]); // Clear the filtered data
        setHighlightedIndex(-1); // Reset highlighted index
        setSearchPerformed(false); // Reset the search state
      }
    }
  };

  // Fetch the data only once when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex bg-white rounded-xl flex-col relative w-full">
      <div className="flex w-full">
        <div className="absolute sm:top-[9px] top-[5px] left-1 sm:left-2">
          <CiSearch color="gray" size={30} onClick={searchClick} />
        </div>
        <input
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={inputRef}
          type="text"
          value={input}
          placeholder="Search for yoga poses or disease"
          className={`w-full sm:h-12 h-10 border-gray-300 ${
            filterData.length === 0 ? "rounded-xl" : "rounded-t-xl"
          } pl-10 sm:px-12 focus:outline-none`}
        />
      </div>
      {filterData.length > 0 ? (
        <div className="absolute w-full top-10 bg-white rounded-b-xl">
          {filterData.map((item, i) => (
            <div
              key={i}
              className={`w-full px-12 py-2 cursor-pointer  rounded-b-xl hover:bg-gray-300 ${
                highlightedIndex === i ? "bg-gray-300" : ""
              }`}
              onMouseEnter={() => setHighlightedIndex(i)}
              onClick={() => {
                setInput(item.name);
                setFilterData([]);
                setHighlightedIndex(-1);
                setSearchPerformed(false);
              }}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      ) : (
        input !== "" &&
        searchPerformed && (
          <div className="absolute w-full top-10 bg-white rounded-b-xl px-12 py-2">
            <p>No data found</p>
          </div>
        )
      )}
    </div>
  );
};

export default SearchBar;
