import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { baseUrl } from "../../assets/baseUrl";
const SearchBar = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [searchPerformed, setSearchPerformed] = useState(false);
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
      setHighlightedIndex(-1);
      setFilterData([]);
    } else {
      const filteredData = data.filter((item, i) =>
        item.name.toLowerCase().startsWith(e.target.value.toLowerCase())
      );
      setFilterData(filteredData);
      setSearchPerformed(true);
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

  // handle key down for the keyboard navigation
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
        setSearchPerformed(false); // when hit enter it means search is performed
      }
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
          onKeyDown={handleKeyDown}
          ref={inputRef}
          type="text"
          value={input}
          placeholder="Search for yoga poses or disease"
          className={`w-full sm:h-12 h-10  border-gray-300 ${
            filterData.length === 0 ? "rounded-xl" : "rounded-t-xl"
          }  pl-10 sm:px-12  focus:outline-none`}
        />
      </div>
      {filterData.length > 0
        ? filterData.map((item, i) => (
            <div
              key={i} // Adding a unique key is important for list items
              className={`w-full mt-2 h-fit absolute top-10 rounded-b-xl px-12 py-2 bg-white ${
                highlightedIndex === i ? "bg-gray-200" : ""
              }`}
              onMouseEnter={() => setHighlightedIndex(i)} // Highlight on mouse hover
              onClick={() => {
                setInput(item.name); // Set input to the selected item's name
                setFilterData([]); // Clear the filtered data
                setHighlightedIndex(-1); // Reset highlighted index
              }}
            >
              <p>{item.name}</p>
            </div>
          ))
        : input !== "" &&
          searchPerformed && (
            <div className="w-full  h-fit absolute top-10 rounded-b-xl px-12 py-2 bg-white">
              <p>No data found</p>
            </div>
          )}
    </div>
  );
};

export default SearchBar;
