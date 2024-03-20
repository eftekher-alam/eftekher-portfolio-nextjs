import Image from "next/image";
import avatar from "../public/avatar_eftekher.png"

const Avatar = () => {
  return <div className="hidden lg:flex lg:max-w-none" >
    <Image src={avatar} width={737} height={678} alt="avatar image" className="translate-z-0 w-full h-full" />
  </div>;
};

export default Avatar;
