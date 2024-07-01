import React from "react";
import { ourteamitems } from "./common/Helper";
import OurTeamCards from "./common/OurTeamCards";

const OurTeam = () => {
  return (
    <section className="max-w-[1290px] w-full mx-auto text-center pb-28 px-7 relative">
      <div className="">
        <div className="lg:max-w-[960px] w-full mx-auto">
          <h1 className="heading text-white text-center pt-4 mb-7">
            Meet Our Team Bharat ascend esports
          </h1>
          <p className="paragraph text-white text-center italic mt-3 mb-12">
            At Bharat AScend Esports, we pride ourselves on competing at the
            highest levels across a diverse range of games. Our teams are
            dedicated to achieving excellence and showcasing their skills in
            various competitive titles.{" "}
          </p>
        </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 content-between md:gap-7 gap-5 xl:max-w-full max-w-[960px] w-full mx-auto">
          {ourteamitems.map((item, id) => (
            <OurTeamCards item={item} key={id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
