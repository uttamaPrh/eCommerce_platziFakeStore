import ProductTag from "@/app/components/productTag";
import { useStore } from "@/app/store";
import Image from "next/image";
import React from "react";

const Card = () => {
  const { allProductData } = useStore();
  return (
    <div className="grid grid-cols-3 gap-6 w-full pr-6">
      {allProductData?.map((item, index) => {
        return (
          <div
            key={index}
            className="flex relative items-center rounded-lg justify-center w-full h-[300px] bg-white mt-3"
          >
            <div className="overflow-hidden rounded-lg h-full w-[200px] aspect-square">
              <Image
                src={item.image}
                alt={item.title}
                height={100}
                width={100}
                className="size-full object-contain hover:scale-105 transition-transform duration-500 rounded-lg"
              />
              <ProductTag itemName={item.title} itemprice={item.price} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
