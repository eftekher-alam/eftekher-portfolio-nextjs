import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return <header className="absolute z-30 w-full flex items-center px-10 lg:px-0 h-[80px]">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:pr-4">
        {/* logo */}
        <Link href={"/"}>
          <h2 className="text-white text-2xl font-bold">eftekher <span className="font-extralight">alam</span><span className="text-[#FF2B2E]">.</span></h2>
          {/* <Image src={"/logo.svg"} alt="" width={250} height={50} priority={true} /> */}
        </Link>
        {/* socials icons */}
        <Socials />
      </div>
    </div>
  </header>;
};

export default Header;
