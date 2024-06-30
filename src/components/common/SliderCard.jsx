import React from "react";

const SliderCard = ({
  image,
  title,
  date,
  location,
  game,
  description,
  isCenter,
}) => {
  return (
    <div
      className={`bg-[#1B1B1B] shadow-lg xl:w-[560px] md:w-[340px] w-[305px] our-services-card sm:p-6 p-4 rounded-[30px] overflow-hidden sm:space-y-7 space-y-4 ${
        isCenter ? "mt-10" : ""
      }`}
    >
      <img
        src={image}
        alt={title}
        className="w-full xl:h-64 sm:h-44 h-40 object-cover rounded-[14px]]"
      />
      <div className="sm:space-y-7 space-y-4">
        <h3 className="text-yellow-500 xl:text-2xl sm:text-xl text-base font-medium font-neus lg:text-start text-center">
          {title}
        </h3>
        <p className="text-white text-sm font-normal italic font-neus lg:text-start text-center">
          {description}
        </p>
        <div className="flex flex-wrap gap-4 items-center text-yellow-400 text-sm font-medium font-neus">
          <span className="rounded-[30px] border border-yellow-400 px-4 py-2">
            {date}
          </span>
          <span className="rounded-[30px] border border-yellow-400 px-4 py-2">
            {location}
          </span>
          <span className="rounded-[30px] border border-yellow-400 px-4 py-2">
            {game}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
