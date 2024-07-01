import React from "react";
import { LinkedInIcon, TwiterIcon } from "./Icon";

const OurTeamCards = ({ item }) => {
  return (
    <div className="w-full bg-black text-white p-6 h-full rounded-[30px] our-services-card overflow-hidden space-y-5">
      <img
        src={item.profile}
        alt=""
        className="max-h-[200px] object-cover w-full"
      />
      <h2 className="sm:text-3xl text-xl font-medium  text-yellow-400 mt-7 mb-2 capitalize font-var-roman text-center">
        {item.name}
      </h2>
      <h4 className="text-sm font-normal text-white italic mb-7 font-var-italic">
        {item.designation}
      </h4>
      <p className="text-sm text-center italic font-normal mb-7 font-var-italic">
        {item.introduction}
      </p>
      <div className="flex justify-center gap-6">
        <TwiterIcon />
        <LinkedInIcon />
      </div>
    </div>
  );
};

export default OurTeamCards;
