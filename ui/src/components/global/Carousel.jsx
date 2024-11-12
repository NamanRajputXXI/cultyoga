import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Carousel = ({ heading, data }) => {
  useEffect(() => {
    console.log(data);
  }, []);

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 15,
    },
  });

  return (
    <section className="flex flex-col py-10 gap-10 px-10">
      <h1 className="text-5xl font-bold">{heading}</h1>
      <div ref={sliderRef} className="keen-slider rounded-md  mx-auto  w-full">
        {data.map((item, index) => (
          <div
            className="keen-slider__slide  bg-black text-white rounded-md  flex flex-col "
            key={index}
          >
            <img
              src="https://cdn.pixabay.com/photo/2020/06/17/10/32/back-pain-5308969_640.jpg"
              alt=""
            />
            <div className="flex flex-col gap-5 p-5">
              <div className="flex justify-between gap-5">
                <h5>{item.issue}</h5>{" "}
                <button className="bg-white text-black w-1/2 h-10 rounded-md p-1">
                  Click to cure
                </button>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
