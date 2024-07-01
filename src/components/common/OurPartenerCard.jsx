import React from "react";

const OurPartenerCard = ({ item }) => {
  return (
    <article className="w-full cursor-pointer">
      <div className="our-services-card md:rounded-[30px] rounded-2xl overflow-hidden before:rounded-2xl sm:before:rounded-[30px]">
        <div className="bg-[#1B1B1B] flex justify-center items-center w-full xl:py-16 md:py-9 py-4 xl:px-20 md:px-6 px-5">
          <img
            src={item.logoimg}
            alt=""
            className=" object-contain xl:min-h-15 min-h-9 max-w-52 w-full"
          />
        </div>
      </div>
    </article>
  );
};

export default OurPartenerCard;
