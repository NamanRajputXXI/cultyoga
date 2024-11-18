import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Carousel = ({ heading, data }) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 4,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 15,
        },
      },
      "(max-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 15,
        },
      },
      "(max-width: 640px)": {
        slides: {
          perView: 1,
          spacing: 15,
        },
      },
    },
    created(s) {
      let timeout;
      function nextSlide() {
        s.next();
      }
      function clearNextTimeout() {
        clearTimeout(timeout);
      }
      function setNextTimeout() {
        clearTimeout(timeout);
        timeout = setTimeout(nextSlide, 3000); // 2 seconds interval
      }
      s.on("slideChanged", setNextTimeout);
      s.on("dragStarted", clearNextTimeout);
      setNextTimeout();
    },
  });

  return (
    <section className="flex flex-col md:py-10 py-5 gap-10 px-10">
      <h1 className="md:text-5xl text-2xl font-bold">{heading}</h1>
      <div ref={sliderRef} className="keen-slider rounded-md  mx-auto  w-full">
        {data.map((item, index) => (
          <div
            className="keen-slider__slide  bg-black text-white rounded-md  flex flex-col "
            key={item.id}
          >
            <img src={item.image} alt="" />
            <div className="flex flex-col gap-5 px-5 pt-5">
              <div className="flex justify-between gap-5">
                <h5 className="font-semibold text-cyan-400 text-xl">
                  {item.name}
                </h5>
                <button className="bg-white text-black w-fit h-fit rounded-md py-2 px-4">
                  cure
                </button>
              </div>
              <p>{item.about}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
