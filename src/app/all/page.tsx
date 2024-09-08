import React from "react";
import Sidebar from "./components/sideBar";
import AllProductCointainer from "./components/allProductCointainer";
import { getHomeData } from "../data/action";

export default async function Page() {
  const allProductData = await getHomeData();
  return (
    <div className="flex gap-8">
      <Sidebar />
      <AllProductCointainer allProductDetails={allProductData} />
    </div>
  );
}
