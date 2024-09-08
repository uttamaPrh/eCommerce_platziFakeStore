import React from "react";

const ProductTag = ({
  itemName,
  itemprice,
}: {
  itemName: string;
  itemprice: number;
}) => {
  const truncateTitle = (title: string, wordLimit: number) => {
    const words = title.split(" ");
    return (
      words.slice(0, wordLimit).join(" ") +
      (words.length > wordLimit ? "..." : "")
    );
  };
  return (
    <div className="absolute bottom-6 left-4 flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
      <div className=" line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
        {truncateTitle(itemName, 3)}
      </div>
      <div className="flex-none rounded-full bg-blue-600 p-2 text-white">
        {" "}
        $ {itemprice}{" "}
      </div>
    </div>
  );
};

export default ProductTag;
