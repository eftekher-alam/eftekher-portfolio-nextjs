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
          {`I'm Eftekher Alam, I'm a MERN Stack Developer with 1 year of experience in full stack web development. Crafting modern, scalable web applications to bring your vision to life with MERN magic ✨`}
        </motion.p>
        {/* button */}
        <div className="flex justify-center lg:hidden relative z-10">
          <ProjectsBtn />
        </div>
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden lg:flex z-10"
        >
          <ProjectsBtn />
        </motion.div>
      </div>
    </div>
    {/* image */}
    <div className="w-full h-full absolute right-0 bottom-0">
      {/* Background image */}
      <div className="bg-none lg:bg-explosion lg:bg-cover lg:bg-right lg:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
      </div>
      {/* particles */}
      <ParticlesContainer />
      {/* aviator image */}
      <motion.div
        className="w-full h-full max-w-[737px] max-h-[678px] absolute  lg:bottom-0 lg:-right-[5%] xl:right-[7%]"
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Avatar />
      </motion.div>
    </div>
  </div >;
};

export default Home;
