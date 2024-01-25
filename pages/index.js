// next image
import Image from "next/image"

// components
import ParticlesContainer from "../components/ParticlesContainer"
import ProjectsBtn from "../components/ProjectsBtn"
import Avatar from "../components/Avatar"

// framer motion
import { motion } from "framer-motion"

// variants
import { fadeIn } from "../variants"

const Home = () => {
  return <div className="bg-primary/60 h-full">
    {/* text */}
    <div className="w-full h-full bg-gradient-to-r from-primary/10 vai-black/30 to-black/10">
      <div className="text-center flex flex-col justify-center lg:pt-5 lg:text-left h-full container mx-auto">
        {/* title */}
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h1"
        >
          Transforming Ideas <br /> Into <span className="text-accent">Digital Reality</span>
        </motion.h1>
        {/* subtitle */}
        <motion.p
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-sm md:max-w-lg lg:max-w-xl mx-auto lg:mx-0 mb-8 lg:mb-10"
        >
          {`I'm a MERN Stack Developer / Front End Developer with 1 year of experience in full stack web development.`}
        </motion.p>
        {/* button */}
        <div className="flex justify-center lg:hidden relative">
          <ProjectsBtn />
        </div>
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden lg:flex"
        >
          <ProjectsBtn />
        </motion.div>
      </div>
    </div>
    {/* image */}
    <div>image</div>
  </div>;
};

export default Home;
