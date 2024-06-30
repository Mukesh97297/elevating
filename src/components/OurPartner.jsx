import React from "react";
import OurPartenerCard from "./common/OurPartenerCard";
import { ourpartnercarditems } from "./common/Helper";

const OurPartner = () => {
  return (
    <section className="w-screen relative sm:p-6 p-4 flex justify-center items-center">
      <img
        src="/images/Ellipse 4.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="max-w-[1260px] w-full mx-auto">
        <h4 className="text-yellow-400 font-medium italic text-xl mb-2 text-center font-neus">
          Partners
        </h4>
        <div className="space-y-7">
          <h1 className="heading text-white text-center">Our Partners</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {ourpartnercarditems.map((item, index) => (
              <OurPartenerCard key={index} item={item} />
            ))}
          </div>
          <div className="flex justify-center">
            <button className={`main-button sm:w-[244px] w-[200px]`}>
              <span>next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartner;
