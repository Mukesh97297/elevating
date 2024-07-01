import React from "react";
import {
  ChatIcon,
  FacebookIcon,
  InstagramIcon,
  TwiterIcon, // Note: Correcting spelling from "TwiterIcon" to "TwitterIcon"
  YoutubeIcon,
} from "./common/Icon";

const Hero = () => {
  return (
    <section className="relative w-screen h-full">
      <div className="relative py-7">
        <div className="flex justify-center">
          <img
            src="/images/herovector1.png"
            alt=""
            className="h-full w-full inset-0 object-cover z-10"
          />
        </div>
      </div>
      <div className="flex justify-center top-0">
        <img src="/images/Subtract.png" alt="" className="inset-0 z-10" />
      </div>
      <img
        src="/images/hero.png"
        alt="Hero background"
        className="object-cover w-full h-full absolute top-0 left-0"
      />
      <div className="max-w-[1260px] w-full mx-auto relative flex flex-col items-center z-10 h-full space-y-7 p-4">
        <img
          src="/images/Ellipse 4.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="w-full text-center">
          <h4 className="text-yellow-400 text-3xl font-neus font-medium italic capitalize">
            Welcome to Bharat Ascend Esport
          </h4>
          <div className="relative">
            <h1 className="outlined-text uppercase font-bold font-neusroamn xl:text-[140px] sm:text-8xl text-4xl leading-none absolute opacity-50">
              Bharat Ascend Esport
            </h1>
            <h1 className="uppercase text-white font-bold xl:text-[110px] xl:leading-[120px] sm:text-6xl text-2xl relative font-neus sm:top-3 top-2">
              Elevating Gamers, Elevating the Game
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap sm:justify-between justify-center mt-14 w-full">
          <div className="relative sm:w-[410px] w-full sm:h-[243px] h-auto mb-8">
            <img
              src="/images/herolayout2.png"
              alt="Hero background"
              className="object-cover absolute inset-0 w-full h-full"
            />
            <div className="relative md:p-6 p-4 sm:space-y-7 space-y-2 bg-black bg-opacity-50">
              <div className="common-button w-[80px] h-[10px] bg-yellow-400"></div>
              <p className="text-white font-neus font-normal italic text-sm">
                We{`'`}re more than just a team - we{`'`}re a family united by
                our passion for gaming and competitive spirit. We{`'`}ve grown
                into a powerhouse in the esports world, competing across
                multiple titles and platforms.
              </p>
              <button className="common-button gradient font-bold italic text-white lg:text-base text-sm leading-none capitalize py-2 px-4">
                <span>Join the Community</span>
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-yellow-400 italic font-bold text-base">
              Upcoming Tournament
            </h4>
            <div className="relative sm:w-[410px] w-full sm:h-[243px] h-auto overflow-hidden">
              <img
                src="/images/heroimage1.png"
                alt="Hero background"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-wrap justify-between items-center mt-4 bg-black bg-opacity-50 p-4">
              <p className="text-white italic text-sm font-neus">
                Follow Us on
              </p>
              <FacebookIcon className="sm:h-6 h-5 sm:w-6 w-5" />
              <TwiterIcon className="sm:h-6 h-5 sm:w-6 w-5" />
              <InstagramIcon className="sm:h-6 h-5 sm:w-6 w-5" />
              <ChatIcon className="sm:h-6 h-5 sm:w-6 w-5" />
              <YoutubeIcon className="sm:h-6 h-5 sm:w-6 w-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full">
        <img
          src="/images/herovector.png"
          alt=""
          className="h-full w-full inset-0 object-cover bg-[#141318]"
        />
        <img
          src="/images/textbg.png"
          alt=""
          className="w-full inset-0 object-cover relative"
        />
      </div>
    </section>
  );
};

export default Hero;
