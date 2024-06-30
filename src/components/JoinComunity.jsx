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
    <section className="w-screen relative sm:p-6 p-4">
      <div className="w-full max-w-[1290px] mx-auto">
        <div className="absolute inset-0">
          <img
            src="/images/layout1.png"
            alt="background"
            className="h-full w-full"
          />
        </div>
        <div className="relative w-full h-full lg:h-auto flex items-center justify-center py-7">
          <div className="max-w-[1070px] mx-auto px-4 space-y-8">
            <h1 className="heading text-black text-center">
              Join Our community
            </h1>
            <p className="paragraph text-center italic">
              By joining the Bharat Ascend esport community, you’ll be part of a
              passionate group of individuals who share your love for esports
              and gaming.{" "}
            </p>
            <div className="w-full text-center space-y-6 our-services-card rounded-[30px] overflow-hidden">
              <div className="bg-black p-6 space-y-4">
                <h4 className="text-white lg:text-3xl text-xl font-medium italic font-neus pb-2">
                  You’ll have the opportunity to:
                </h4>
                <li className="text-white paragraph italic font-neus">
                  Connect: Build friendships and connect with fans from around
                  the. world
                </li>
                <li className="text-white paragraph italic font-neus">
                  Engage: Participate in interactive events and engage directly
                  with your favorite players.
                </li>
                <li className="text-white paragraph italic font-neus">
                  Grow: Learn from the best and improve your skills through
                  community resources and support.
                </li>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="flex items-center gap-4">
                <p className="text-black italic text-sm font-neus">
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
        </div>
      </div>
    </section>
  );
};

export default JoinComunity;
