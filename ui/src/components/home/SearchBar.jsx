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

  const searchClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    setHighlightedIndex(-1); // Reset highlight on input change

    if (e.target.value === "") {
      setFilterData([]);
      setSearchPerformed(false);
    } else {
      const filteredData = data.filter((item) =>
        item.name.toLowerCase().startsWith(e.target.value.toLowerCase())
      );
      setFilterData(filteredData);
      setSearchPerformed(true);
    }
  };

  const fetchData = async () => {
    try {
      const [yogaResponse, diseasesResponse] = await Promise.all([
        fetch(`${baseUrl}/yogaposes`),
        fetch(`${baseUrl}/diseases`),
      ]);
      const yogaData = await yogaResponse.json();
      const diseasesData = await diseasesResponse.json();
      const combinedData = [
        ...yogaData.map((item) => ({ ...item, type: "yoga pose" })),
        ...diseasesData.map((item) => ({ ...item, type: "disease" })),
      ];

      setData(combinedData);
    } catch (err) {
      console.log("Not able to fetch", err);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prevIndex) =>
        prevIndex < filterData.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (e.key === "Enter") {
      if (highlightedIndex >= 0) {
        const selectedItem = filterData[highlightedIndex];
        setInput(selectedItem.name);
        setFilterData([]);
        setHighlightedIndex(-1);
        setSearchPerformed(false);
      }
    }
  };

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
              className={`w-full px-12 py-2 cursor-pointer hover:bg-gray-300 ${
                highlightedIndex === i ? "bg-gray-300" : ""
              } ${
                i === filterData.length - 1 ? "rounded-b-xl" : "" // Apply rounded-b-xl to the last item
              }
               `}
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
