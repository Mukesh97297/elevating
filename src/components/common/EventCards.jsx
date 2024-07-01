import Image from "next/image";
import React from "react";

const EventCards = ({ item }) => {
  return (
    <div className="h-full px-4 our-services-card rounded-[30px] bg-black relative">
      <div className="lg:-top-12 -top-10 relative space-y-7">
        <img src={item.image} alt="" className="w-full" />

        <div className="flex flex-wrap gap-4">
          {item.dates &&
            item.dates.map((date, index) => (
              <button
                key={index}
                className="rounded-[30px] px-4 h-9 font-medium border border-yellow-400 text-yellow-400 sm:text-sm text-xs font-var-roman flex items-center justify-center"
              >
                {date}
              </button>
            ))}
        </div>
        <h2 className="text-yellow-400 lg:text-2xl text-xl font-medium font-var-roman">
          {item.heading}
        </h2>
        <p className="text-white font-normal italic text-sm font-var-italic">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default EventCards;
