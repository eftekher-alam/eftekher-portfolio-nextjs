import Link from "next/link";
import { RiLinkedinBoxLine, RiGithubLine, RiFacebookBoxLine } from "react-icons/ri"


const Socials = () => {
  return <div className="flex item-center text-2xl gap-x-5">
    <Link href={"https://www.linkedin.com/in/eftekher"} target="_blank" className="hover:text-accent transition-all duration-300">
      <RiLinkedinBoxLine />
    </Link>
    <Link href={"https://github.com/eftekher-alam"} target="_blank" className="hover:text-accent transition-all duration-300">
      <RiGithubLine />
    </Link>
    <Link href={"https://www.facebook.com/eftekher2018"} target="_blank" className="hover:text-accent transition-all duration-300">
      <RiFacebookBoxLine />
    </Link>
  </div>;
};

export default Socials;
