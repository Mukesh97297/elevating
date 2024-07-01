import React from "react";
import { eventcardsitems } from "./common/Helper";
import EventCards from "./common/EventCards";
import JoinComunity from "./JoinComunity";
import OurPartner from "./OurPartner";
import OurTeam from "./OurTeam";

const Eventes = () => {
  return (
    <div className="relative h-full w-full before:bg-events-bg before:absolute before:top-0 before:left-0 before:bg-center before:bg-no-repeat  before:w-full before:h-full before:bg-full">
      <section className="relative max-w-[1288px] w-full pt-[62px] md:pt-8 pb-14 md:pb-16 xl:pb-32 mx-auto px-5 md:px-7">
        <h4 className="text-yellow-400 font-medium italic text-xl font-var-italic ">
          News and Update
        </h4>
        <div className="flex md:flex-row flex-col justify-between gap-3 md:gap-8 w-full md:items-center mb-12 md:mt-7 mt-2">
          <h1 className="heading text-white md:w-1/2 w-full">
            Our Events and Tournaments
          </h1>
          <p className="text-white paragraph italic md:w-1/2 w-full">
            We{`'`}re more than just a team - we{`'`}re a family united by our
            passion for gaming and competitive spirit. Founded 2022, we
            {`'`}ve grown into a powerhouse in the esports world, competing
            across multiple titles and platforms. Whether you
            {`'`}re a seasoned pro or just starting your gaming journey, there
            {`'`}s a place for you here with us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-7 md:gap-6 gap-3">
          {eventcardsitems.map((item, index) => (
            <div className="max-h-[600px] h-full relative py-7" key={index}>
              <EventCards item={item} />
            </div>
          ))}
        </div>
      </section>
      <JoinComunity />
      <OurPartner />
      <OurTeam />
    </div>
  );
};

export default Eventes;
