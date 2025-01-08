import React, { useEffect, useState } from "react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const fetchBlogData = async () => {
    try {
      const response = await fetch('https://cultyogabackend.vercel.app/api/blogs'); 
      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }
      const data = await response.json();
      setBlogs(data); 
    } catch (err) {
      setError(err.message); 
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchBlogData(); 
  }, []);

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
        {loading && <h2 className="text-center text-xl">Loading...</h2>}
        {error && <h2 className="text-center text-red-500">{error}</h2>}
        {!loading && !error && (
          <>
            <h1 className="text-center md:text-7xl font-bold">Our Latest Blogs</h1>
            <ul className="flex flex-col gap-10 mt-10">
              {blogs.map((blog) => (
                <li key={blog._id} className="bg-white p-5 rounded-lg shadow-md">
                  <h1 className="text-3xl md:text-4xl font-bold">{blog.title}</h1>
                  
                  {blog.blogText && (
                    <ol className="list-decimal pl-5 mt-2">
                      {blog.blogText.map((point, index) => (
                        <li key={index} className="mt-1">{point.trim()}</li> 
                      ))}
                    </ol>
                  )}
                  
                  {blog.images && blog.images.length > 0 && (
                    <div className="mt-4">
                      <img src={blog.images[0]} alt={blog.title} className="w-full h-auto rounded-md" />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
      </section>

      <Footer />
    </>
  );
};

export default Blogs;
