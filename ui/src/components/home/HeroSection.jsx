import React from "react";
import SearchBar from "./SearchBar";

const HeroSection = () => {
  return (
    <section className="bg-[url('/Images/heroSectionBg.jpg')] flex flex-col justify-center md:items-start items-center bg-cover bg-center h-[500px] md:h-[700px]">
      <div className="flex flex-col gap-10 sm:px-10 px-5">
        <h1 className="text-white text-2xl  sm:text-5xl font-bold">
          Find Your Path to Wellness <br />
          with Cultyoga
        </h1>
        <SearchBar />
      </div>
    </section>
  );
};

export default HeroSection;
