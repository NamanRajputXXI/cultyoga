import React, { useEffect, useState } from "react";
import Navbar from "../components/global/Navbar";
import HeroSection from "../components/home/HeroSection";
import Footer from "../components/global/Footer";
import Carousel from "../components/global/Carousel";
import { minorIssues } from "../utils/carouselData/minor";

const Home = () => {
  const [minorData, setMinorData] = useState([]);
  const [majorData, setMajorData] = useState([]);
  const fetchCarouselData = async () => {
    let fetchMinorDiseaseData = await fetch(
      "https://cultyogabackend.vercel.app/api/minorDisease"
    );

    fetchMinorDiseaseData = await fetchMinorDiseaseData.json();
    console.log(fetchMinorDiseaseData);
    setMinorData(fetchMinorDiseaseData);
    console.log(minorData);
  };
  useEffect(() => {
    fetchCarouselData();
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <Carousel heading={"Minor Issues"} data={minorData} />
      <Carousel heading={"Major Conditions"} data={minorData} />
      <Footer />
    </>
  );
};

export default Home;
