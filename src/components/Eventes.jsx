import React from "react";
import { eventcardsitems } from "./common/Helper";
import EventCards from "./common/EventCards";

const Eventes = () => {
  return (
    <section className="w-screen sm:p-6 p-4 relative">
      <div className="max-w-[1260px] w-full mx-auto">
        <h4 className="text-yellow-400 font-medium italic text-xl mb-2">
          News and Update
        </h4>
        <div className="sm:space-y-24 space-y-16">
          <div className="flex flex-wrap items-center sm:space-y-0 space-y-4">
            <div className="sm:w-1/2 w-full">
              <h1 className="heading text-white">Our Events and Tournaments</h1>
            </div>
            <div className="sm:w-1/2 w-full">
              <p className="text-white paragraph italic">
                We{`'`}re more than just a team - we{`'`}re a family united by
                our passion for gaming and competitive spirit. Founded 2022, we
                {`'`}ve grown into a powerhouse in the esports world, competing
                across multiple titles and platforms. Whether you{`'`}re a
                seasoned pro or just starting your gaming journey, there{`'`}s a
                place for you here with us.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {eventcardsitems.map((item, index) => (
              <div className="max-h-[600px] h-full relative py-7" key={index}>
                <EventCards item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eventes;
