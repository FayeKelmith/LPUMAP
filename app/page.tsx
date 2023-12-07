"use client";
import Lottie from "lottie-react";
import animationData from "@/public/animations/hello-greeting.json";
import Image from "next/image";
export default function Home() {
  const imageWidth = 300;
  const imageHeight = 300;
  const imageStyling =
    "w-80 h-80 md:mx-10 relative mx-auto bg-grey shadow-sm my-4 dark:bg-slate-800 rounded-sm hover:shadow-2xl hover:border-2 border-teal-400 rounded-md dark:opacity-80 dark:hover:opacity-100 transition-all ease-in-out delay-100";
  return (
    <div className="pt-20">
      <div className="max-w-screen-sm mx-auto">
        {/* Animation */}
        <Lottie animationData={animationData} loop={true} />
      </div>
      <section className="">
        <div className="mx-auto flex md:flex-row flex-col">
          <div className={imageStyling}>
            <Image
              src="/images/samosa.png"
              alt="Samosa"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className={imageStyling}>
            <Image
              src="/images/help-desk.png"
              alt="Help Desk"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className={imageStyling}>
            <Image
              src="/images/hostel.png"
              alt="Accomodation"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className={imageStyling}>
            <Image
              src="/images/conference.png"
              alt="Events"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
