import React from "react";
import OurPartenerCard from "./common/OurPartenerCard";
import { ourpartnercarditems } from "./common/Helper";

const OurPartner = () => {
  return (
    <section className="relative w-full">
      <img
        src="/images/Ellipse 4.png"
        alt=""
        className="absolute h-full inset-0 w-full z-0"
      />
      <div className="max-w-[1290px] w-full mx-auto flex flex-col justify-center items-center text-center xl:py-24 md:py-36 md:pb-14 pb-20 pt-16 px-5">
        <h4 className="text-yellow-400 font-medium italic text-xl font-var-italic capitalize ">
          Partners
        </h4>
        <h1 className="heading text-white text-center mt-4 mb-8">
          Our Partners
        </h1>
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 content-center">
            {ourpartnercarditems.map((item, index) => (
              <OurPartenerCard key={index} item={item} />
            ))}
          </div>
        </div>{" "}
        <button className={`main-button max-w-[220px] w-full  mt-16`}>
          <span>next</span>
        </button>
      </div>
    </section>
  );
};

export default OurPartner;
