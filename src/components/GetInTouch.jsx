import React from "react";
import Fotter from "./common/Fotter";

const GetInTouch = () => {
  return (
    <section className="relative sm:p-6 p-4 w-screen bg-yellow-400">
      <div className="max-w-[1260px] w-full mx-auto">
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div>
              <h1 className="heading text-black sm:text-start text-center">
                Let’s Get In Touch With Us!
              </h1>
            </div>
            <div className="space-y-4">
              <p className="paragraph text-black italic sm:text-start text-center">
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
                  className="relative -ml-2 common-button bg-black max-w-[136px] xl:max-w-[244px] w-full h-[50px] text-white sm:text-base text-sm font-bold italic leading-[100%] capitalize"
                >
                  <span>Subscribe</span>
                </button>
              </form>
            </div>
          </div>
          <Fotter />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
