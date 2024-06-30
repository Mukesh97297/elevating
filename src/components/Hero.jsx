import React from "react";

const Hero = () => {
  return (
    <section className="relative w-screen">
      <img
        src="/images/hero.png"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex justify-center top-20">
        <div>
          <h4 className="text-yellow-600 text-4xl font-bold text-center">
            Bharat Ascend Esport
          </h4>
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-[10rem] font-bold border border-white opacity-10 whitespace-nowrap">
                Bharat Ascend Esport
              </h1>
            </div>
            <h1 className="uppercase text-white font-bold text-[110px] text-center absolute top-2">
              elevating gamers elevating the game
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
