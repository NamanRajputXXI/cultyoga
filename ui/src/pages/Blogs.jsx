import React from "react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <section className="bg-[url('/Images/blogHero.jpg')] bg-cover bg-center h-fit relative">
        {/* Add a gradient overlay container */}
        <div className="absolute top-0 left-0 lg:w-2/3 w-full h-full bg-gradient-to-r from-black/100 to-transparent" />

        {/* Main content div with relative positioning to appear above the overlay */}
        <div className="relative flex text-white sm:p-10 p-5 flex-col gap-10 lg:w-1/2 w-full">
          <div className="flex flex-col">
            <h1 className="md:text-5xl text-3xl font-bold">Embrace Wellness</h1>
            <h1 className="md:text-5xl text-3xl font-bold">Embrace Balance</h1>
            <h1 className="md:text-5xl text-3xl font-bold">Embrace Cultyoga</h1>
          </div>
          <p>
            Discover a holistic journey to wellness with Cultyoga. Dive into a
            world of yoga insights, wellness tips, and curated poses that bring
            balance to mind, body, and spirit. Join us as we explore the
            transformative power of yoga for a healthier, more mindful life.
          </p>
          <button className="px-5 py-3 bg-teal-500 w-fit rounded-md flex items-center justify-center">
            Read our Blog
          </button>
        </div>
      </section>

      <section className="md:py-20 py-10">
        <h1 className=" text-center md:text-7xl font-bold">
          Blog will publish soon
        </h1>
      </section>
      <Footer />
    </>
  );
};

export default Blogs;
