import Image from "next/image";
import React from "react";

const EventCards = ({ item }) => {
  return (
    <div className="h-full px-4 our-services-card rounded-[30px] bg-black relative">
      <div className="lg:-top-12 -top-10 relative space-y-7">
        <img src={item.image} alt="" className="w-full" />
        <button className="rounded-[30px] px-4 py-2 border border-yellow-400 text-yellow-400 sm:text-sm text-xs font-neus">
          20/06/2024
        </button>
        <h2 className="text-yellow-400 lg:text-2xl text-xl font-medium font-neus">
          {item.heading}
        </h2>
        <p className="text-white font-normal italic text-sm">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default EventCards;
