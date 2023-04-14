import React, { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export function HomeSlider({ slides }) {
  const [curreentImage, setCurreentImage] = useState(0);

  const nextImage = () => {
    if (curreentImage === slides.length - 1) {
      setCurreentImage(0);
    } else {
      setCurreentImage((i) => i + 1);
    }
  };
  const prevImage = () => {
    if (curreentImage === 0) {
      setCurreentImage(slides.length - 1);
    } else {
      setCurreentImage((i) => i - 1);
    }
  };
  return (
    <>
      <div className="relative m-auto h-full pb-6">
        <button
          className="absolute right-[1rem] top-1/2 z-10 translate-y-1/2 cursor-pointer"
          onClick={() => nextImage()}
        >
          <AiOutlineArrowRight />
        </button>
        <button
          className="absolute left-[1rem] top-1/2 z-10 translate-y-1/2 cursor-pointer"
          onClick={() => prevImage()}
        >
          <AiOutlineArrowLeft />
        </button>
        {slides &&
          slides.map((slide, index) => {
            return (
              <div
                className="absolute top-1/2 flex h-full w-full items-center justify-center gap-12 py-6 duration-500"
                style={{
                  transform: `translate(-${curreentImage}00%, -50%)`,
                  left: `${index}00%`,
                }}
                key={index}
              >
                <div className={`${slide.text ? "basis-1/4" : ""}`}>
                  <img
                    src={slide.img}
                    alt="asasd"
                    className="max-h-[250px] object-cover"
                    loading="lazy"
                  />
                </div>
                {slide.text && (
                  <div className="max-w-[250px] whitespace-break-spaces text-center lg:max-w-[400px]">
                    <p className="text-xs sm:text-base lg:text-3xl">
                      {slide.text}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        <div
          className="absolute left-0 flex w-full flex-row-reverse items-center justify-center gap-2"
          style={{
            bottom: "-1rem",
          }}
        >
          {slides.map((slide, index) => {
            return (
              <i
                key={index}
                className={`block h-1 w-4 cursor-pointer bg-slate-50 ${
                  curreentImage === index && "bg-slate-500"
                }`}
                onClick={() => setCurreentImage(index)}
              ></i>
            );
          })}
        </div>
      </div>
    </>
  );
}
