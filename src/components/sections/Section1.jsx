import { AnimatePresence, motion } from "framer-motion";
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
import Slider from "./Slider";
import AboutInfo from "./AboutInfo";
import ProjectInfo from "./ProjectInfo";
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

  const [activeSection, setActiveSection] = useState("default");
  const handleAboutClick = () => setActiveSection("about");
  const handleProjectClick = () => setActiveSection("project");
  const handleBackClick = () => setActiveSection("default");

  return (
    <>
      <div className="fixed w-full h-full bg-[url('/glichImg.png')] bg-[length:64px] bg-repeat opacity-[0.06] pointer-events-none z-[100]"></div>

      <AnimatePresence mode="wait">
        {activeSection === "default" && (
          <section className="min-h-[100svh] py-[25px] flex">
            <div className="w-full border border-[#242424] mx-3 p-4 rounded-[32px]">
              <div className="h-full grid grid-cols-12 gap-3">
                <IntroBlock />
                <PersonalImage />
                <About setAbout={handleAboutClick} />
                <Projects setProject={handleProjectClick} />
                <Project3 />
                <TechStack />
                <ThreeModel />
                <Gumroad />
                <Contact copyToClipboard={copyToClipboard} copied={copied} />
                <SocialLinks />
              </div>
            </div>
          </section>
        )}

        {activeSection === "about" && <AboutInfo setAbout={handleBackClick} />}
        {activeSection === "project" && (
          <ProjectInfo setProject={handleBackClick} />
        )}
      </AnimatePresence>
    </>
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
      <motion.div>
        <h1 className="text-3xl text-primary">Hi, I'm Talha-</h1>
        <p className="text-xl text-secondary pt-3 ">
          Frontend Developer specialized in animation and 3D, Based in Pakistan.
        </p>
      </motion.div>
    </Block>
  );
};

const About = ({ setAbout }) => {
  return (
    <Block className="col-span-12 md:col-span-9 xl:col-span-4 p-5 flex flex-col justify-around  hover:bg-secondary/20  group ">
      <div className="" onClick={setAbout}>
        <h1 className="text-secondary tracking-widest leading-5">ABOUT</h1>
        <p className="text-2xl leading-relaxed  ">
          Passionate in creating animation and 3D websites.
        </p>
        <div className="flex justify-end ">
          <div className="border border-[#242424] p-3 rounded-full group-hover:-rotate-45 transition-transform duration-500">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </Block>
  );
};

const PersonalImage = () => {
  return (
    <Block className="hidden md:block col-span-3 xl:col-span-2 p-0 overflow-clip  ">
      <div className="relative w-full h-full">
        <div className="absolute h-full w-full">
          <img
            src="/talha1.jpg"
            alt="project1"
            className="h-full w-full object-cover   "
            style={{ objectPosition: "-2% 20%" }}
          />
        </div>
      </div>
    </Block>
  );
};

const Projects = ({ setProject }) => {
  return (
    <Block className="col-span-12 md:col-span-12 xl:col-span-5 xl:row-start-1 xl:col-start-5 flex flex-col justify-around  hover:bg-secondary/20  group">
      <div onClick={setProject}>
        <h1 className="text-secondary tracking-widest leading-5 text-xl">
          Project
        </h1>
        <p className="text-2xl leading-relaxed   ">View my project here!</p>
        <div className="flex flex-col items-end ">
          <div className="border border-[#242424] p-3 rounded-full group-hover:-rotate-45 transition-transform duration-500">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </Block>
  );
};

const Project1 = () => {
  return (
    <Block className="col-span-12 md:col-span-6 xl:col-span-2 xl:row-start-1 p-0 overflow-hidden ">
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
    <Block className="col-span-12 md:col-span-6 xl:col-span-2 xl:row-start-1 p-0 overflow-hidden ">
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
    <Block className="col-span-12 md:col-span-12  xl:col-span-3  p-0 overflow-clip">
      <div className="relative w-full h-full">
        <div className="xl:absolute h-full w-full top-0 left-0">
          <img
            src="/img1.png"
            alt="project1"
            className=" h-full w-full object-cover"
          />
        </div>
      </div>
    </Block>
  );
};

const TechStack = () => {
  return (
    <Block className="col-span-12 md:col-span-12 xl:col-span-3 flex flex-col justify-evenly ">
      <h1 className="text-4xl md:mb-4">Stack I use</h1>
      <div className="  ">
        <Slider />
      </div>
    </Block>
  );
};

const ThreeModel = () => {
  return (
    <Block className="col-span-12 md:col-span-12 xl:col-span-3 p-0 overflow-clip xl:col-start-10 xl:row-start-2 xl:row-span-2 ">
      <div className="relative h-full">
        <div className=" xl:absolute h-full w-full top-0 left-0">
          <World />
        </div>
      </div>
    </Block>
  );
};

const Gumroad = () => {
  return (
    <Block className="col-span-12 md:col-span-6 xl:col-span-3 xl:row-start-3 ">
      <h1 className="text-2xl">Gumroad</h1>
    </Block>
  );
};

const Contact = ({ copyToClipboard, copied }) => {
  return (
    <Block className="col-span-12 md:col-span-6  xl:col-span-3 flex flex-col justify-around text-center items-center ">
      <h1 className="text-3xl">Have a project in mind?</h1>
      <button
        onClick={copyToClipboard}
        className="px-6 py-4 bg-[#242424] text-white rounded-2xl hover:bg-[#24242491] focus:outline-none"
      >
        {copied ? (
          <span className="flex justify-center items-center gap-3 text-2xl">
            Copied
            <TiTick />
          </span>
        ) : (
          <span className="flex justify-center items-center gap-3 text-2xl">
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
    <Block className="col-span-12 xl:col-span-3  bg-transparent border-none p-0 xl:row-start-1 xl:col-start-10">
      <div className="grid grid-cols-5 xl:grid-cols-3 xl:h-full xl:gap-3 h-[200px] gap-2">
        <div className="flex justify-center items-center border border-[#66666667] p-1 rounded-3xl bg-grid hover:bg-sky-500 transition-all duration-300">
          <BsTwitterX size={36} />
        </div>
        <div
          className="flex justify-center items-center border border-[#66666667] p-1 rounded-3xl bg-grid
        hover:bg-purple-600 transition-all duration-300"
        >
          <FaInstagram size={36} />
        </div>
        <div
          className="flex justify-center items-center border border-[#66666667] p-1 rounded-3xl bg-grid
        hover:bg-blue-700 transition-all duration-300"
        >
          <FaLinkedinIn size={36} />
        </div>
        <div
          className="flex justify-center items-center border border-[#66666667] p-1 rounded-3xl bg-grid
        hover:bg-red-500 transition-all duration-300"
        >
          <FiGithub size={36} />
        </div>
        <div
          className="flex justify-center items-center border border-[#66666667] p-1 rounded-3xl bg-grid
        hover:bg-green-500 transition-all duration-300"
        >
          <TbBrandFiverr size={36} />
        </div>
        <div
          className="hidden  xl:flex justify-center items-center border border-[#66666667] p-1 rounded-3xl bg-grid
        hover:bg-orange-700 transition-all duration-300"
        >
          <MdOutlineEmail size={36} />
        </div>
      </div>
    </Block>
  );
};
