import React from "react";
import { useStore } from "@/app/store";

const CatogeryProducts = () => {
  const { selectedCategory } = useStore();
  console.log(selectedCategory);
  return (
    <div className="grid grid-cols-3 gap-6">
      {selectedCategory?.map((item) => (
        <div key={item.id}>
          <h1>{item.price}</h1>
          <img src={item.image} alt={item.title} />
        </div>
      ))}
    </div>
  );
};

export default CatogeryProducts;
