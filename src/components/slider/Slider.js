import "./Slider.css";
import "./SliderData.js";
import React, { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { sliderData } from "./SliderData";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderLenght = sliderData.length;
  console.log(sliderLenght);

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  // function auto(){
  //     slideInterval = setInterval(nextSlide, intervalTime);
  // }

  useEffect(() => {
    if (autoScroll) {
      function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
      }
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide, autoScroll, slideInterval]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide == sliderLenght - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide == 0 ? sliderLenght - 1 : currentSlide - 1);
  };
  return (
    <div className="slider">
      <AiOutlineLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineRight className="arrow next" onClick={nextSlide} />

      {sliderData.map((slide, index) => {
        const { image, heading, desc } = slide;
        return (
          <div
            key={index}
            className={index === currentSlide ? "slide current" : "slide"}
          >
            {index === currentSlide && (
              <>
                <a href="/products">
                  <img src={image} alt="image" />
                </a>
                {/* <div className="content">
                  <h2>{heading}</h2>
                  <p>{desc}</p>
                  <hr />
                  <a className="--btn --btn-primary" href="#product">
                    Shop Now
                  </a>
                </div> */}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
