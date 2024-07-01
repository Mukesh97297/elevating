import React from "react";
import { aboutcarditem } from "./common/Helper";
import AboutUsCard from "./common/AboutUsCard";

const AboutUs = () => {
  return (
    <section className="relative max-w-[1440px] w-full pt-[62px] md:pt-8 pb-14 md:pb-16 xl:pb-32 mx-auto px-5 md:px-7 sm:before:bg-about-us before:absolute before:top-0 before:left-0 before:bg-no-repeat  before:w-full before:h-full z-10 before:bg-about-us1 before:bg-full">
      <div className="max-w-[1288px] w-full mx-auto relative">
        <div>
          <button className="bg-black text-yellow-400 rounded-[30px] px-4 py-4 font-var-italic font-medium italic">
            The Story About Us
          </button>
        </div>
        <div className="flex md:flex-row flex-col justify-between gap-3 md:gap-8 w-full md:items-center md:mb-12 mb-7 md:mt-7 mt-4">
          <h2 className="heading md:w-1/2 w-full text-black">
            What is Bharat Ascend Esport
          </h2>
          <p className="paragraph md:w-1/2 w-full text-black italic">
            We’re India{`'`}s premier esports broadcasting and tournament
            organizing company. Our mission is to elevate the gaming experience
            by hosting top-tier events, producing engaging broadcasts, and
            creating opportunities for gamers to showcase their skills.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:gap-7 md:gap-6 gap-3">
          {aboutcarditem.map((item, id) => (
            <div className="w-full" key={id}>
              <AboutUsCard item={item} />
            </div>
          ))}
        </div>
        <div className="text-center xl:mt-24 lg:mt-5 sm:mt-12 mt-16 ">
          <h1 className="text-black lg:text-7xl md:text-4xl text-3xl font-medium lg:max-w-[1008px] w-full mx-auto font-var-roman">
            Esport Broadcasting and Tournament Organizer
          </h1>
          <p className="text-black lg:max-w-[630px] w-full lg:text-xl text-sm mx-auto font-var-italic xl:mt-7 mt-3 xl:mb-9 mb-5 italic">
            We nurture local talent, promote competitive excellence, and build a
            vibrant gaming community. Join us in transforming Indian esports,
            one tournament at a time.
          </p>
        </div>
        <div className="lg:pb-14 pb-0">
          <img src="/images/event5.png" alt="event" className="w-auto h-auto" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
