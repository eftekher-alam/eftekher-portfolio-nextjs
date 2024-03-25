// components
import WorkSlider from './../../components/WorkSlider';
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from './../../variants';


const Work = () => {
  return <div className="h-full bg-primary/30 pt-[80px] max-lg:pb-[80px]">
    <Circles />
    <div className="h-full flex lg:items-center max-lg:pt-4 justify-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-8">
          {/* text */}
          <div className="lg:w-[25vw] xl:w-[30vw] flex items-center justify-center max-lg:mb-4">
            <div className="max-lg:text-center">
              <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 max-md:text-2xl max-xl:text-4xl lg:-mt-8"
            >
              My work<span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Passionate MERN Stack Developer specializing in front-end development. Proficient in React.js, Redux, HTML5, CSS3.
            </motion.p>
            </div>
          </div>
          {/* services */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full lg:max-w-[65%]"
          >
            {/* slider */}
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
    <Bulb />
  </div>;
};

export default Work;
