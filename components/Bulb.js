import Image from "next/image";

const Bulb = () => {
  return <div className="max-md:hidden absolute -left-[11%] -bottom-24 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] lg:w-[260px]">
    <Image
      src={"/bulb.png"}
      width={260}
      height={200}
      alt={""}
      className="w-full h-full"
    />
  </div>;
};

export default Bulb;
