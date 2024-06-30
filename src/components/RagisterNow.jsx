"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SliderCard from "./common/SliderCard";
import { carddata } from "./common/Helper";

const RagisterNow = () => {
  return (
    <section className="relative w-screen sm:p-6 p-4">
      <img
        src="/images/Ellipse 4.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="max-w-[1260px] w-full mx-auto">
        <div className="space-y-4">
          <h4 className="text-yellow-400 text-xl italic font-medium font-neus text-center">
            Tournament
          </h4>
          <h1 className="heading text-center text-white">
            Bharat esport Upcoming tournament
          </h1>
          <div>
            <div className="flex justify-center mb-4">
              <button className={`main-button sm:w-[244px] w-[200px]`}>
                <span> Register Now!</span>
              </button>
            </div>
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

        {/* <Swiper
  spaceBetween={10}
  centeredSlides={true}
  pagination={true}
  slidesPerView={3}
  loop={true}
  className="mySwiper"
>
  {carddata.map((card, index) => (
    <SwiperSlide key={index} className="flex justify-center">
      <div className="grid grid-cols-3">
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
    </SwiperSlide>
  ))}
</Swiper> */}
      </div>
    </section>
  );
};

export default RagisterNow;
