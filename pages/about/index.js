import React, { useState } from "react";
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key={1} />,
          <FaCss3 key={2} />,
          <FaJs key={3} />,
          <FaReact key={4} />,
          <SiNextdotjs key={5} />,
          <SiFramer key={6} />,
          <FaWordpress key={7} />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key={1} />, <SiAdobexd key={2} />, <SiAdobephotoshop key={3} />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
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
    <div className="container mx-auto h-full flex flex-col items-center lg:flex-row gap-x-6">
      {/* text */}
      <div className="flex-1 flex flex-col justify-center">
        <motion.h2 
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2"
        >
          Captivating <span className="text-accent">stories</span> birth magnificent designs.
        </motion.h2>
        <motion.p
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-[500px] mx-auto lg:mx-0 mb-6 lg:mb-12 px-2 lg:px-0"
         >
          {`10 years ago, I began freelancing as developer. Since then, I've donne remote work for agencies, counsulted fro startups, and collaborated on digital products for business and consumer use.`}
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
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0" >
              <div className="text-2xl lg:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={10} duration={10} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
            </div>
            {/* Clients */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0" >
              <div className="text-2xl lg:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={250} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied clients</div>
            </div>
            {/* Projects */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0" >
              <div className="text-2xl lg:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={250} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished projects</div>
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
        className="flex flex-col w-full lg:max-w-[48%] h-[480px]"
       >
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
              <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/70">
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, itemIndex) => {
                    return <div key={itemIndex} className="text-2xl text-white">{icon}</div>
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
