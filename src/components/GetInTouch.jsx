import React from "react";
import Fotter from "./common/Fotter";

const GetInTouch = () => {
  return (
    <section className="relative p-4 bg-yellow-400">
      <div className="max-w-[1230px] w-full mx-auto">
        <div className="flex md:flex-row flex-col items-start justify-between gap-6 mb-6">
          <h1 className="heading text-black md:text-start text-center lg:max-w-[600px] md:max-w-[335px] w-full capitalize">
            Let’s Get In Touch With Us!
          </h1>
          <div className="md:max-w-[600px] w-full mx-auto flex flex-col justify-between h-full gap-7 md:text-start text-center">
            <p className="paragraph text-black italic lowercase">
              Join us as we continue to shape the future of esports, bringing
              unforgettable experiences to gamers fans around the world.
            </p>
            <form className="flex w-full items-center px-4">
              <div className="footer-input w-full">
                <input
                  className="h-[50px] px-[30px] xl:px-[44px] w-full bg-transparent text-[#BABABA] text-xs lg:text-base leading-[100%] capitalize italic outline-none"
                  placeholder="Your Email Address ..."
                  type="email"
                  required
                />
              </div>
              <button
                type="submit"
                className="relative -ml-2 common-button bg-black max-w-[136px] xl:max-w-[244px] w-full h-[50px] text-white sm:text-base text-sm font-bold italic leading-[100%] capitalize "
              >
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>
        <Fotter />
      </div>
    </section>
  );
};

export default GetInTouch;
