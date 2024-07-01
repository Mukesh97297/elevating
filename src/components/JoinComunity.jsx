import React from "react";
import {
  BlackChatIcon,
  BlackFacebookIcon,
  BlackInstagramIcon,
  BlackTwiterIcon,
  BlackYoutubeIcon,
} from "./common/Icon";

const JoinComunity = () => {
  return (
    <section className="relative max-w-[1288px] w-full md:pt-16 pt-10 pb-5 mx-auto px-5 md:px-7 sm:before:bg-comunity-bg before:bg-about-us before:absolute before:top-0 before:left-0 before:bg-no-repeat before:w-full before:h-full before:bg-full">
      <div className="max-w-[1070px] flex flex-col text-center items-center md:gap-8 gap-6 justify-center mx-auto">
        <div className="flex flex-col xl:gap-5 md:gap-7 gap-3 text-center items-center justify-center z-10 ">
          <h1 className="heading text-black text-center max-w-[300px] sm:max-w-[1008px] w-full">
            Join Our community
          </h1>
          <p className="paragraph text-center italic lg:max-w-[630px] w-full mx-auto">
            By joining the Bharat Ascend esport community, you’ll be part of a
            passionate group of individuals who share your love for esports and
            gaming.{" "}
          </p>
        </div>
        <div className="w-full text-center space-y-6 our-services-card rounded-[30px] overflow-hidden">
          <div className="bg-black p-6 space-y-4">
            <h4 className="text-white lg:text-3xl text-xl font-medium  font-var-italic italic pb-2">
              You’ll have the opportunity to:
            </h4>
            <li className="text-white paragraph italic">
              Connect: Build friendships and connect with fans from around the.
              world
            </li>
            <li className="text-white paragraph italic">
              Engage: Participate in interactive events and engage directly with
              your favorite players.
            </li>
            <li className="text-white paragraph italic">
              Grow: Learn from the best and improve your skills through
              community resources and support.
            </li>
          </div>
        </div>
        <div className="flex justify-end w-full z-10">
          <div className="flex items-center xl:gap-7 md:gap-6 gap-4 cursor-pointer">
            <p className="text-black italic text-sm font-neus lowercase">
              Follow Us on
            </p>
            <BlackFacebookIcon className="sm:h-6 h-[19.5px] sm:w-6 w-[19.5px]" />
            <BlackTwiterIcon className="sm:h-6 h-[19.5px] sm:w-6 w-[19.5px]" />
            <BlackInstagramIcon className="sm:h-6 h-[19.5px] sm:w-6 w-[19.5px]" />
            <BlackChatIcon className="sm:h-6 h-[19.5px] sm:w-6 w-[19.5px]" />
            <BlackYoutubeIcon className="sm:h-6 h-[19.5px] sm:w-6 w-[19.5px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinComunity;
