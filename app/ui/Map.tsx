import Image from "next/image";
const LPUMap = () => {
  return (
    <div className=" mx-auto w-full h-96 md:max-w-xl relative ">
      <Image
        src="/images/map.jpg"
        alt="map"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
};

export default LPUMap;
