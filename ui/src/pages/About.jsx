import React from "react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <section className="py-10 md:py-20 relative z-0 b">
        <div className="px-5 sm:px-10 relative text-center">
          <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl md:leading-normal">
            Elevate Your Wellness with
            <span className="text-teal-500">Cultyoga</span>
          </h1>
          <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
            Discover the power of yoga and holistic health. Join us in a journey
            towards a balanced, healthier life.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-24 relative">
        <div className="px-5 sm:px-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box">
              <img
                src="/Images/about1.jpg"
                alt="About Us Cultyoga"
                className="max-lg:mx-auto rounded-md object-cover"
              />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                  About Us
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Cultyoga was founded with a vision to provide accessible,
                  holistic health solutions for everyone. We are dedicated to
                  offering expert-guided yoga practices, personalized wellness
                  journeys, and a supportive community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 relative">
        <div className="px-5 sm:px-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9">
            <div className="lg:pr-24 flex items-center">
              <div className="data w-full">
                <img
                  src="/Images/about2.jpg"
                  alt="Cultyoga since 2024"
                  className="block rounded-md lg:hidden mb-9 mx-auto object-cover"
                />
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                  Embracing Wellness Since 2024
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Since our founding, Cultyoga has focused on crafting a
                  supportive space for growth and healing. We emphasize not only
                  physical wellness but also mental clarity and emotional
                  resilience through yoga.
                </p>
              </div>
            </div>
            <div className="img-box">
              <img
                src="/Images/about2.jpg"
                alt="Cultyoga since 2024"
                className="hidden rounded-md lg:block object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">
            Our Impact in Numbers
          </h2>
          <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-teal-500">
                  95%
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Customer Satisfaction
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    Our clients consistently experience improved well-being and
                    personal growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-teal-500">
                  200+
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Wellness Programs
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    Offering diverse programs designed to meet individual health
                    and wellness goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-teal-500">
                  1000+
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Lives Transformed
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    Cultyoga has positively impacted over a thousand clients by
                    enhancing their mental and physical well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
