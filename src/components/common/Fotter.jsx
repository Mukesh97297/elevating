import React from "react";
import {
  BrandLogoIcon,
  ChatIcon,
  FacebookIcon,
  InstagramIcon,
  TwiterIcon,
  WhiteBrandLogoIcon,
  YoutubeIcon,
} from "./Icon";

const Fotter = () => {
  return (
    <article className="bg-[#1B1B1B] w-full  rounded-[30px] p-7">
      <div className="flex md:flex-row flex-col justify-between gap-6">
        <div className="lg:max-w-[350px] md:max-w-[170px] w-full flex flex-col md:text-start text-center md:items-start items-center">
          <button>
            <WhiteBrandLogoIcon />
          </button>
          <p className="text-white italic font-var-italic md:text-sm text-xs font-medium mt-7 sm:mb-2 mb-4">
            Follow us on social media to keep up with the latest news, events,
            and behind-the-scenes action from Bharat Ascend Esports
          </p>
          <h4 className="italic font-var-italic text-white text-sm lowercase">
            Follow Us on
          </h4>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 md:content-between content-center items-center gap-6">
          <div className="space-y-4 w-fit italic">
            <h4 className="text-white mb-2 font-semibold xl:text-base text-sm">
              Games
            </h4>
            <ul className=" space-y-4">
              <li className=" cursor-pointer text-white xl:text-sm text-[10px] font-var-italic">
                League Of Legend
              </li>
              <li className=" cursor-pointer text-white xl:text-sm text-[10px] font-var-italic">
                Valorant
              </li>
              <li className=" cursor-pointer text-white xl:text-sm text-[10px] font-var-italic">
                Dota 2
              </li>
              <li className=" cursor-pointer text-white xl:text-sm text-[10px] font-var-italic">
                CS:GO
              </li>
            </ul>
          </div>
          <div className="space-y-4 w-fit italic">
            <h4 className="text-white mb-2 font-semibold xl:text-base text-sm">
              Players
            </h4>
            <ul className=" space-y-4">
              <li className=" cursor-pointer text-white xl:text-sm text-[10px] font-var-italic">
                League Of Legend
              </li>
              <li className=" cursor-pointer text-white xl:text-sm text-[10px] font-var-italic">
                Valorant
              </li>
              <li className=" cursor-pointer text-white xl:text-sm text-[10px] font-var-italic">
                Dota 2
              </li>
              <li className=" cursor-pointer text-white xl:text-sm text-[10px] font-var-italic">
                CS:GO
              </li>
            </ul>
          </div>
          <div className="space-y-4 w-fit italic">
            <h4 className="text-white mb-2 font-semibold xl:text-base text-sm">
              Spornors
            </h4>
            <ul className=" space-y-4">
              <li className=" cursor-pointer text-white xl:text-sm text-[10px] font-var-italic">
                League Of Legend
              </li>
              <li className=" cursor-pointer text-white xl:text-sm text-[10px] font-var-italic">
                Valorant
              </li>
              <li className=" cursor-pointer text-white xl:text-sm text-[10px] font-var-italic">
                Dota 2
              </li>
              <li className=" cursor-pointer text-white xl:text-sm text-[10px] font-var-italic">
                CS:GO
              </li>
            </ul>
          </div>
          <div className="space-y-4 w-fit italic">
            <h4 className="text-white mb-2 font-semibold xl:text-base text-sm">
              Events
            </h4>
            <ul className=" space-y-4">
              <li className=" cursor-pointer text-white xl:text-sm text-[10px] font-var-italic">
                League Of Legend
              </li>
              <li className=" cursor-pointer text-white xl:text-sm text-[10px] font-var-italic">
                Valorant
              </li>
              <li className=" cursor-pointer text-white xl:text-sm text-[10px] font-var-italic">
                Dota 2
              </li>
              <li className=" cursor-pointer text-white xl:text-sm text-[10px] font-var-italic">
                CS:GO
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <ul className="flex items-center gap-4 sm:gap-7 md:justify-start justify-center mt-6 list-none">
          <FacebookIcon />
          <TwiterIcon />
          <InstagramIcon />
          <ChatIcon />
          <YoutubeIcon />
        </ul>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:content-between content-center mt-8 gap-2 w-full">
        <button className="sm:text-xl lg:text-start text-center font-var-italic text-base font-semibold italic text-white">
          Privacy Policy
        </button>
        <button className="sm:text-xl lg:text-start text-center font-var-italic text-base font-semibold italic text-white">
          Terms and Condition
        </button>
        <p className="text-sm lg:text-start text-center font-var-italic font-normal italic text-white">
          ©2024 Bharat Ascend Esports All Right Reserved
        </p>
      </div>
    </article>
  );
};

export default Fotter;
