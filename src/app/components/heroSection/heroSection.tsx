import React from "react";
import { useStore } from "@/app/store";
import Image from "next/image";

const HeroSection = () => {
  const { homeData } = useStore();
  //   console.log(homeData);
  return (
    <>
      <div className="mx-auto grid max-w-screen-2xl  gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]">
        {homeData?.slice(5, 8).map((item, index) => {
          console.log(item.category);
          return (
            <div
              key={index}
              className={` overflow-hidden rounded-lg ${
                index === 0
                  ? "md:col-span-4 md:row-span-2"
                  : "md:col-span-2 md:row-span-1"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="size-full object-cover hover:scale-105 transition-transform duration-500 rounded-lg"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HeroSection;
