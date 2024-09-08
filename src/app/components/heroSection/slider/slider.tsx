import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useStore } from "@/app/store";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "next/image";
import ProductTag from "../../productTag";

const Slider = () => {
  const { homeData } = useStore();

  return (
    <>
      <Splide
        options={{
          type: "loop",
          perPage: 4,
          perMove: 1,
          gap: "1rem",
          pagination: false,
          arrows: false,
          autoScroll: {
            speed: 0.5,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {homeData?.map((item, index) => {
          return (
            <SplideSlide key={index}>
              <div className="flex relative item-center rounded-lg justify-center w-[full] h-[180px] bg-white mt-3">
                <div className="overflow-hidden rounded-lg h-full w-[200px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    height={100}
                    width={100}
                    className="size-full object-cover hover:scale-105 transition-transform duration-500 rounded-lg"
                  />
                  <ProductTag itemName={item.title} itemprice={item.price} />
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </>
  );
};

export default Slider;
