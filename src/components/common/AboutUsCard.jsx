import React from "react";

const AboutUsCard = ({ item }) => {
  return (
    <div className="max-w-sm mx-auto bg-black text-white p-4 rounded-[30px] border-4 border-yellow-400 sm:space-y-4 space-y-2">
      <h1 className="text-yellow-300 lg:text-6xl text-3xl font-medium lg:text-start text-center">
        {item.heading}
      </h1>
      <h4 className="text-white lg:text-3xl text-xl font-medium lg:text-start text-center">
        {item.subheading}
      </h4>
      <p className="text-white text-sm font-normal lg:text-start text-center">
        {item.description}
      </p>
    </div>
  );
};

export default AboutUsCard;
