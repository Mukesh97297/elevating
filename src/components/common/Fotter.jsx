import React from "react";
import { FacebookIcon, TwiterIcon } from "./Icon";

const Fotter = () => {
  return (
    <article className="bg-[#1B1B1B] w-full sm:h-[350px] h-auto rounded-[30px] p-6 space-y-4">
      <div className="flex flex-col justify-between h-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:space-y-0 space-y-4">
          <div className="sm:justify-start justify-center flex">
            <img src="/images/brandlogowhite.png" alt="logo" />
          </div>
          <div>
            <p className="text-white text-sm font-noraml font-neus italic sm:max-w-[300px] w-full sm:text-start text-center">
              Follow us on social media to keep up with the latest news, events,
              and behind-the-scenes action from Bharat Ascend Esports
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 space-y-4">
          <div className="space-y-4">
            <h4 className="text-white text-sm font-normal font-neus italic sm:text-start text-center">
              Follow Us on
            </h4>
            <div className="flex gap-4 sm:justify-start justify-center">
              <FacebookIcon />
              <TwiterIcon />
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <h2 className="sm:text-xl text-base font-semibold italic font-neus text-white">
              Privacy Policy
            </h2>
            <h2 className="sm:text-xl text-base font-semibold italic font-neus text-white">
              Terms and Condition
            </h2>
          </div>
          <div className="sm:text-end text-center">
            <p className="text-sm font-neus font-normal italic text-white">
              ©2024 Bharat Ascend Esports All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Fotter;
