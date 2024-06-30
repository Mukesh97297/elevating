import React from "react";
import { ourteamitems } from "./common/Helper";
import OurTeamCards from "./common/OurTeamCards";

const OurTeam = () => {
  return (
    <section className="relative w-screen">
      <div className="max-w-[1290px] w-full mx-auto text-center sm:p-6 p-4 space-y-14">
        <div className="lg:max-w-[960px] w-full mx-auto space-y-3">
          <h1 className="heading text-white text-center">
            Meet Our Team Bharat ascend esports
          </h1>
          <p className="paragraph text-white text-center italic">
            At Bharat AScend Esports, we pride ourselves on competing at the
            highest levels across a diverse range of games. Our teams are
            dedicated to achieving excellence and showcasing their skills in
            various competitive titles.{" "}
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          {ourteamitems.map((item, id) => (
            <div
              className="lg:w-1/4 sm:w-1/2 w-full lg:px-2 sm:px-4 px-0 lg:mb-0 mb-4"
              key={id}
            >
              <OurTeamCards item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
