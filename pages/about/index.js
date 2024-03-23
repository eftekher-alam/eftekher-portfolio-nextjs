import React, { useState } from "react";
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaBootstrap,
  FaFigma,
  FaNodeJs,
  FaGit,
  FaGithub
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiAdobexd,
  SiAdobephotoshop,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiMicrosoftsqlserver
} from "react-icons/si";

import { TbBrandMysql, } from "react-icons/tb";


//  data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Front End Development',
        icons: [
          <FaHtml5 key={1} />,
          <FaCss3 key={2} />,
          <FaJs key={3} />,
          <FaReact key={4} />,
          // <SiNextdotjs key={5} />,
          <SiTailwindcss key={6} />,
          <FaBootstrap key={7} />,
        ],
      },
      {
        title: 'Back End Development',
        icons: [
          <FaNodeJs key={1} />,
          // <SiExpress  key={2} />,
          <p className="text-[22px] pb-1 leading-5" key={2}>ex</p>,
          <p className="text-base" key={3}>.NET</p>,
          <SiMongodb key={5} />,
          <SiMicrosoftsqlserver key={6} />,
          <TbBrandMysql key={4} />,
        ],
      },
      {
        title: 'Others',
        icons: [
          <FaGit key={1} />,
          <FaGithub key={2} />,
          <SiFirebase key={3} />,
          <FaFigma key={1} />,
        ],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Full Stack Developer',
        institute: "Pinovation Tech Ltd, Dhaka, BD",
        stage: 'Jan 2023 - Dec 2023 (1 Year)',
      }
    ],
  },
  {
    title: 'Training',
    info: [
      {
        title: 'Complete Web Development Course With Jhankar Mahbub',
        institute: "Programming Hero",
        stage: 'Jul 2023 – Dec 2023 (6 month)',
      },
      {
        title: 'Web Application Development using ASP.NET',
        institute: "sDB-BISEW",
        stage: 'Mar 2021 – Sep 2021 (460 hour)',
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'BSc in Computer Science and Engineering',
        institute: "Bangladesh University of Business and Technology, Dhaka, BD",
        cgpa: "3.91 out of 4.00",
        stage: 'Dec 2020 - May 2024',
      },
      {
        title: 'Diploma in Data Telecommunication and Networking',
        institute: "Feni Computer Institute, Feni, BD",
        cgpa: "3.20 out of 4.00",
        stage: 'May 2016 - May 2019',
      },
    ],
  },
];

import Circles from './../../components/Circles';
import Avatar from './../../components/Avatar';

//counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return <div className="h-full bg-primary/30 py-32 text-center lg:text-left">
    <Circles />
    {/* avatar img */}
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="hidden lg:flex absolute bottom-0 -left-[14.8%] w-[30%]"
    >
      <Avatar />
    </motion.div>
    <div className="container mx-auto h-full flex flex-col items-center lg:flex-row gap-x-6 lg:pt-[1%] ">
      {/* text */}
      <div className="flex-1 flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 max-md:text-2xl max-xl:text-4xl"
        >
          Captivating <span className="text-accent">stories</span> birth magnificent designs.
        </motion.h2>
        {/* for large screen */}
        <motion.p
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-[500px] mx-auto lg:mx-0 mb-6 lg:mb-12 px-2 lg:px-0 max-md:hidden"
        >
          {`In 2016, I began learning programming. Since then, I've learned multiple programming languages, data structures, and algorithms. Furthermore, I've worked for a software company for almost 1 year.`}
        </motion.p>
        {/* from small screen */}
        <motion.p
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-[500px] mx-auto lg:mx-0 mb-4 px-2 md:hidden"
        >
          {`In 2016, I began learning programming. Since then, I've learned multiple languages, data structures, and algorithms.`}
        </motion.p>
        {/* counters */}
        <motion.div
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden md:flex md:max-w-xl lg:max-w-none mx-auto xl:mx-0 mb-8"
        >
          <div className="flex flex-1 lg:gap-x-6">
            {/* experience */}
            <div className="relative flex-1 lg:after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:left-0" >
              <div className="text-2xl lg:text-4xl font-extrabold text-accent mb-2 ml-5">
                <CountUp start={0} end={12} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ml-5">Months of experience</div>
            </div>
            {/* Projects */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:left-0" >
              <div className="text-2xl lg:text-4xl font-extrabold text-accent mb-2 ml-5">
                <CountUp start={0} end={20} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ml-5">Finished projects</div>
            </div>
            {/* Professional Training Counter */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:left-0" >
              <div className="text-2xl lg:text-4xl font-extrabold text-accent mb-2 ml-5">
                <CountUp start={0} end={2} duration={8} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[150px] ml-5">Professional training</div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* info */}
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-col w-full lg:max-w-[48%] h-[480px]  lg:pt-[1%]"
      >
        {/* title */}
        <div className="flex gap-x-4 lg:gap-x-8 mx-auto xl:mx-0 mb-4" >
          {aboutData.map((item, itemIndex) => {
            return (
              <div
                key={itemIndex}
                className={`cursor-pointer capitalize lg:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 
                ${index === itemIndex && "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"}`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            )
          })}
        </div>
        <div className="py-2 lg:py-6 flex flex-col gap-y-2 lg:gap-y-4 items-center lg:items-start">
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div key={itemIndex} className="flex-1 flex flex-col max-w-max text-white/70">
                {/* title */}
                <div className="font-semibold text-white">{item.title}</div>
                <div>{item?.institute}</div>
                <div>{item?.cgpa ? "CGPA : " + item?.cgpa : ""}</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4 items-center">
                  {item.icons?.map((icon, itemIndex) => {
                    return <div key={itemIndex} className="text-2xl">{icon}</div>
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </div>
  </div>;
};

export default About;
