// next image
import Image from "next/image";

// next lLink 
import Link from "next/link"

// icons 
import { HiArrowRight } from "react-icons/hi2"

const ProjectsBtn = () => {
  return <div className="mx-auto lg:mx-0">
    <Link
      href={"/work"}
      className="relative w-[150px] h-[150px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
    >
      <Image
        src={"/rounded-text.png"}
        width={141}
        height={148}
        alt=""
        className="animate-spin-slow w-full max-w-[120px] max-h-[120px]"
      />
      <HiArrowRight
        className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"
      ></HiArrowRight>
    </Link>
  </div>;
};

export default ProjectsBtn;
