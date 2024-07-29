import React from "react";
import { GiCrossedBones } from "react-icons/gi";
import { twMerge } from "tailwind-merge";

export default function AboutInfo({ setAbout }) {
  return (
    <div className="fixed top-0 left-0 min-h-[100svh] w-full bg-[#090909] z-50 text-white  ">
      <div className="border border-[#242424] my-2 mx-3 p-4 rounded-[13px]  ">
        <div className="bg-zinc-600 max-w-[1200px] mx-auto p-3 flex flex-col gap-[40px] items-center ">
          <div
            className="border border-[#242424] p-3 rounded-full group-hover:-rotate-45 transition-transform duration-500"
            onClick={setAbout}
          >
            <GiCrossedBones size={30} />
          </div>
          <div className=" h-full w-full  grid grid-cols-12 gap-3 bg-red-500 ">
            <IntroBlock />
            <IntroBlock />
            <IntroBlock />
            <IntroBlock />
            <IntroBlock />
            <IntroBlock />
            <IntroBlock />
          </div>
        </div>
      </div>
    </div>
  );
}

const Block = ({ className, ...rest }) => {
  return (
    <div
      className={twMerge(
        " rounded-[32px] border border-[#242424] bg-grid p-8 text-primary  ",
        className
      )}
      {...rest}
    />
  );
};

const IntroBlock = () => {
  return (
    <Block className="col-span-12 md:col-span-12 xl:col-span-4  ">
      <div>
        <h1 className="text-3xl text-primary">Hi, I'm Talha-</h1>
        <p className="text-xl text-secondary pt-3 ">
          Frontend Developer specialized in animation and 3D, Based in Pakistan.
        </p>
      </div>
    </Block>
  );
};

const About = () => {
  return (
    <Block className="col-span-12 md:col-span-9 xl:col-span-4 p-5 flex flex-col justify-around  hover:bg-secondary/20  group ">
      <h1 className="text-secondary tracking-widest leading-5">ABOUT</h1>
      <p className="text-2xl leading-relaxed  ">
        Passionate in creating animation and 3D websites.
      </p>
      <div className="flex justify-end ">
        <div className="border border-[#242424] p-3 rounded-full group-hover:-rotate-45 transition-transform duration-500">
          <FaArrowRight />
        </div>
      </div>
    </Block>
  );
};
