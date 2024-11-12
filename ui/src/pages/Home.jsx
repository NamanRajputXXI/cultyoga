import React from "react";
import Navbar from "../components/global/Navbar";
import HeroSection from "../components/home/HeroSection";
import Footer from "../components/global/Footer";
import Carousel from "../components/global/Carousel";
import { minorIssues } from "../utils/carouselData/minor";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Carousel heading={"Minor Issues"} data={minorIssues} />
      <Carousel heading={"Major Conditions"} data={minorIssues} />
      <Footer />
    </>
  );
};

export default Home;
