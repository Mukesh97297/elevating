"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SliderCard from "./common/SliderCard";
import { carddata } from "./common/Helper";

const RagisterNow = () => {
  return (
    <section className="relative h-full w-full before:bg-events-bg before:absolute before:top-0 before:left-0 before:bg-center before:bg-no-repeat  before:w-full before:h-full before:bg-full">
      <img
        src="/images/Ellipse 4.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative max-w-[1288px] w-full pt-[62px] md:pt-8 pb-14 md:pb-16 xl:pb-32 mx-auto md:px-0 px-5">
        <h4 className="text-yellow-400 lg:text-xl text-sm font-var-italic italic font-medium  text-center">
          Tournament
        </h4>
        <h1 className="heading text-center text-white">
          Bharat esport Upcoming tournament
        </h1>
        <div className="flex justify-center mb-4 mt-2">
          <button className={`main-button max-w-[220px] w-full`}>
            <span> Register Now!</span>
          </button>
        </div>

        <div>
          <div className="flex gap-6 w-full overflow-hidden justify-center">
            {carddata.map((card, index) => (
              <div key={index} className="w-full">
                <SliderCard
                  image={card.image}
                  title={card.title}
                  date={card.date}
                  location={card.location}
                  game={card.game}
                  description={card.description}
                  isCenter={index === 1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RagisterNow;
