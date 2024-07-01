import React from "react";

const AboutUsCard = ({ item }) => {
  return (
    <div className="our-services-card overflow-hidden">
      <div className="text-white px-4 sm:py-6 py-4 rounded-[30px] sm:space-y-5 space-y-3 bg-black">
        <h1 className="text-yellow-400 lg:text-6xl text-3xl font-medium lg:text-start text-center font-var-roman">
          {item.heading}
        </h1>
        <h4 className="text-white lg:text-3xl text-xl font-medium lg:text-start text-center font-var-roman">
          {item.subheading}
        </h4>
        <p className="text-white text-sm font-normal lg:text-start text-center font-var-roman">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default AboutUsCard;
