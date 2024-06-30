import React from "react";
import { LinkedInIcon, TwiterIcon } from "./Icon";

const OurTeamCards = ({ item }) => {
  return (
    <div className="w-full bg-black text-white p-4 rounded-[30px] our-services-card overflow-hidden space-y-5">
      <img src={item.profile} alt="" />
      <h2 className="sm:text-3xl text-xl font-medium  text-yellow-400 font-neus">
        {item.name}
      </h2>
      <h4 className="text-sm font-normal text-white italic font-neus">
        {item.designation}
      </h4>
      <p className="text-sm text-center italic font-normal font-neus">
        {item.introduction}
      </p>
      <div className="flex justify-center gap-4">
        <TwiterIcon />
        <LinkedInIcon />
      </div>
    </div>
  );
};

export default OurTeamCards;
