import React from "react";
import { aboutcarditem } from "./common/Helper";
import AboutUsCard from "./common/AboutUsCard";

const AboutUs = () => {
  return (
    <section className="relative w-screen sm:p-6 p-4">
      <div className="absolute inset-0">
        <img
          src="/images/layout2.png"
          alt="background"
          className="h-full w-full"
        />
      </div>
      <div className="relative w-full h-full lg:h-auto flex items-center justify-center lg:py-7 py-20">
        <div className="max-w-[1288px] mx-auto space-y-8">
          <button className="bg-black text-yellow-400 rounded-[30px] px-4 py-2">
            The Story About Us
          </button>
          <div className="space-y-8">
            <div className="flex flex-wrap items-center lg:space-y-0 space-y-4">
              <div className="sm:w-1/2 w-full">
                <h1 className="text-black xl:text-[80px] sm:text-[40px] text-[28px] xl:leading-[96px] sm:leading-10 leading-9 font-medium">
                  What is Bharat Ascend Esport
                </h1>
              </div>
              <div className="sm:w-1/2 w-full">
                <p className="text-black italic font-normal lg:text-xl text-sm leading-7">
                  We’re India{`'`}s premier esports broadcasting and tournament
                  organizing company. Our mission is to elevate the gaming
                  experience by hosting top-tier events, producing engaging
                  broadcasts, and creating opportunities for gamers to showcase
                  their skills.
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap">
              {aboutcarditem.map((item, id) => (
                <div className="sm:w-1/3 w-full" key={id}>
                  <AboutUsCard item={item} />
                </div>
              ))}
            </div>
            <div className="space-y-4 text-center">
              <h1 className="text-black lg:text-7xl md:text-4xl text-3xl font-medium">
                Esport Broadcasting and Tournament Organizer
              </h1>
              <p className="text-black lg:max-w-[700px] w-full lg:text-xl text-sm mx-auto">
                We nurture local talent, promote competitive excellence, and
                build a vibrant gaming community. Join us in transforming Indian
                esports, one tournament at a time.
              </p>
            </div>
            <div className="lg:pb-14 pb-0">
              <img
                src="/images/event5.png"
                alt="event"
                className="w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
