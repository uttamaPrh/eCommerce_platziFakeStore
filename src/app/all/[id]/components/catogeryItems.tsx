"use client";
import React, { useEffect } from "react";
import { IHome } from "../data/homeInterface";
import { useStore } from "@/app/store";
import CatogeryProducts from "./catogeryProducts";

const CatogeryItems = ({ cData }: { cData: IHome[] | null }) => {
  const { setSelectedCategory } = useStore();
  //   console.log(cData);
  useEffect(() => {
    setSelectedCategory(cData);
  }, [cData]);
  //   console.log(selectedCategory);
  return <CatogeryProducts />;
};

export default CatogeryItems;
