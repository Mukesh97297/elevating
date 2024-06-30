import React from "react";

const OurPartenerCard = ({ item }) => {
  return (
    <article>
      <div className="our-services-card rounded-[30px] overflow-hidden">
        <div className="bg-[#1B1B1B] p-4 flex justify-center items-center w-full sm:h-[200px] h-20">
          <img src={item.logoimg} alt="" />
        </div>
      </div>
    </article>
  );
};

export default OurPartenerCard;
