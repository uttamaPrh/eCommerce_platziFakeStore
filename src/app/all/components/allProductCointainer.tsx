"use client";
import React, { useEffect } from "react";
import { useStore } from "@/app/store";
import { IHome } from "@/app/data/homeInterface";
import Card from "./productCard/card";

const AllProductCointainer = ({
  allProductDetails,
}: {
  allProductDetails: IHome[] | null;
}) => {
  const { setAllProductData } = useStore();
  useEffect(() => {
    if (allProductDetails) {
      setAllProductData(allProductDetails);
    }
  }, [allProductDetails]);
  return <Card />;
};

export default AllProductCointainer;
