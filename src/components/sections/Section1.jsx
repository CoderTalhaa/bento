import { motion } from "framer-motion";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { FaArrowRight } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { TbBrandFiverr } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { FaCopy } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import World from "../canvas/World";
export default function Section1() {
  const [copied, setCopied] = useState(false);
  const email = "talhacust7@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 5000);
    });
  };
  return (
    <>
      <div className="fixed w-full h-full bg-[url('/glichImg.png')] bg-[length:64px] bg-repeat opacity-[0.06] pointer-events-none"></div>
      <section className="min-h-[100svh] py-[32px]   ">
        <div className="border border-[#242424] mx-3 p-2 rounded-[32px] ">
          <div className=" min-h-[100svh] grid grid-cols-12 gap-3  ">
            <IntroBlock />
            <PersonalImage />
            <About />
            <Project1 />
            <Project2 />
            <Project3 />
            <TechStack />
            {/* <DarkMode /> */}
            <ThreeModel />
            <Gumroad />
            <Contact copyToClipboard={copyToClipboard} copied={copied} />
            <SocialLinks />
          </div>
        </div>
      </section>
    </>
  );
}

const Block = ({ className, ...rest }) => {
  return (
    <div
      className={twMerge(
        " rounded-[32px] border border-[#242424] bg-grid p-8 text-primary ",
        className
      )}
      {...rest}
    />
  );
};

const IntroBlock = () => {
  return (
    <Block className="col-span-12 md:col-span-12 lg:col-span-5 lg:col-start-1 lg:row-start-1 min-h-[200px]">
      <motion.div>
        <h1 className="text-3xl text-primary">Hi, I'm Talha-</h1>
        <p className="text-xl text-secondary mt-3">
          Frontend Developer specialized in animation and 3D, Based in Pakistan.
        </p>
      </motion.div>
    </Block>
  );
};

const About = () => {
  return (
    <Block className="col-span-12 md:col-span-9 lg:col-span-4 p-5 flex flex-col justify-around hover:bg-secondary/20  group ">
      <h1 className="text-secondary tracking-widest leading-5">ABOUT</h1>
      <p className="text-2xl leading-relaxed ">
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

const PersonalImage = () => {
  return (
    <Block className="hidden md:block col-span-3 lg:col-span-2 p-0 overflow-clip  ">
      <div className="relative w-full h-full">
        <img
          src="/talha1.jpg"
          alt="project1"
          className="h-full w-full object-cover   "
          style={{ objectPosition: "-2% 20%" }}
        />
      </div>
    </Block>
  );
};

const Project1 = () => {
  return (
    <Block className="col-span-12 md:col-span-6 lg:col-span-2 lg:row-start-1 p-0 overflow-hidden ">
      <img
        src="/img1.png"
        alt="project1"
        className=" h-full w-full object-cover"
      />
    </Block>
  );
};
const Project2 = () => {
  return (
    <Block className="col-span-12 md:col-span-6 lg:col-span-2 lg:row-start-1 p-0 overflow-hidden ">
      <div className="overflow-hidden h-[300px]  ">
        <img
          src="/img2.png"
          alt="project1"
          className=" h-full w-full object-cover  "
          style={{ objectPosition: "center 10%" }}
        />
      </div>
    </Block>
  );
};

const Project3 = () => {
  return (
    <Block className="col-span-12 md:col-span-12 lg:col-span-3  p-0 overflow-clip">
      <div>
        <img
          src="/img1.png"
          alt="project1"
          className=" h-full w-full object-cover"
        />
      </div>
    </Block>
  );
};

const TechStack = () => {
  return (
    <Block className="col-span-12 md:col-span-12 lg:col-span-3 flex flex-col justify-evenly ">
      <h1 className="text-4xl">Stack I use</h1>
      <div className=" h-[72px] relative w-full ">
        <section className="maskImage flex w-full h-full overflow-hidden p-0 m-0 items-center ">
          <ul className="flex w-full h-full items-center gap-[16px] relative will-change-transform">
            <li>
              <div className="rounded-[16px] bg-[#242424] flex justify-center  items-center aspect-square flex-nowrap h-[72px] relative w-[72px] overflow-hidden">
                <div className="aspect-square h-[36px]  overflow-hidden relative w-[36px]">
                  <div className="absolute top-0 left-0 border-inherit ">
                    <img
                      src="/react.png"
                      alt=""
                      className="block w-full h-full object-center object-contain "
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="rounded-[16px] bg-[#242424] flex justify-center  items-center aspect-square flex-nowrap h-[72px] relative w-[72px] overflow-hidden">
                <div className="aspect-square h-[36px]  overflow-hidden relative w-[36px]">
                  <div className="absolute top-0 left-0 border-inherit ">
                    <img
                      src="/react.png"
                      alt=""
                      className="block w-full h-full object-center object-contain "
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="rounded-[16px] bg-[#242424] flex justify-center  items-center aspect-square flex-nowrap h-[72px] relative w-[72px] overflow-hidden">
                <div className="aspect-square h-[36px]  overflow-hidden relative w-[36px]">
                  <div className="absolute top-0 left-0 border-inherit ">
                    <img
                      src="/react.png"
                      alt=""
                      className="block w-full h-full object-center object-contain "
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="rounded-[16px] bg-[#242424] flex justify-center  items-center aspect-square flex-nowrap h-[72px] relative w-[72px] overflow-hidden">
                <div className="aspect-square h-[36px]  overflow-hidden relative w-[36px]">
                  <div className="absolute top-0 left-0 border-inherit ">
                    <img
                      src="/react.png"
                      alt=""
                      className="block w-full h-full object-center object-contain "
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </Block>
  );
};

const DarkMode = () => {
  return (
    <Block className="col-span-4 md:col-span-3 lg:col-span-2 ">
      <h1>DarkMode</h1>
    </Block>
  );
};

const ThreeModel = () => {
  return (
    <Block className="col-span-12 md:col-span-12 lg:col-span-3 lg:row-start-2 lg:col-start-10 lg:row-span-2 p-0 overflow-clip md:min-h-[400px]">
      <div className="relative h-full">
        <World />
      </div>
    </Block>
  );
};

const Gumroad = () => {
  return (
    <Block className="col-span-12 md:col-span-6 lg:col-span-3 lg:row-start-3 ">
      <h1 className="text-2xl">Gumroad</h1>
    </Block>
  );
};

const Contact = ({ copyToClipboard, copied }) => {
  return (
    <Block className="col-span-12 md:col-span-6  lg:col-span-3 flex flex-col justify-around text-center items-center ">
      <h1 className="text-4xl">Have a project in mind?</h1>
      <button
        onClick={copyToClipboard}
        className="px-6 py-4 bg-[#242424] text-white rounded-2xl hover:bg-[#24242491] focus:outline-none"
      >
        {copied ? (
          <span className="flex justify-center items-center gap-3 text-3xl">
            Copied
            <TiTick />
          </span>
        ) : (
          <span className="flex justify-center items-center gap-3 text-3xl">
            Copy Email
            <FaCopy />{" "}
          </span>
        )}
      </button>
    </Block>
  );
};

const SocialLinks = () => {
  return (
    <Block className="col-span-12 lg:col-span-3 lg:row-start-1 bg-transparent border-none p-1">
      <div className="grid grid-cols-12 lg:grid-cols-3 h-full place-items-center ">
        <div className=" border border-[#66666667] p-5 rounded-3xl bg-grid hover:bg-sky-500 transition-all duration-300">
          <BsTwitterX size={25} />
        </div>
        <div
          className="border border-[#66666667] p-5 rounded-3xl bg-grid
        hover:bg-purple-600 transition-all duration-300"
        >
          <FaInstagram size={25} />
        </div>
        <div
          className="border border-[#66666667] p-5 rounded-3xl bg-grid
        hover:bg-blue-700 transition-all duration-300"
        >
          <FaLinkedinIn size={25} />
        </div>
        <div
          className="border border-[#66666667] p-5 rounded-3xl bg-grid
        hover:bg-red-500 transition-all duration-300"
        >
          <FiGithub size={25} />
        </div>
        <div
          className="border border-[#66666667] p-5 rounded-3xl bg-grid
        hover:bg-green-500 transition-all duration-300"
        >
          <TbBrandFiverr size={25} />
        </div>
        <div
          className="hidden lg:block border border-[#66666667] p-5 rounded-3xl bg-grid
        hover:bg-orange-700 transition-all duration-300"
        >
          <MdOutlineEmail size={25} />
        </div>
      </div>
    </Block>
  );
};
