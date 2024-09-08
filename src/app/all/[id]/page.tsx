import React from "react";
import Sidebar from "../components/sideBar";
import { getCatogeryData } from "./data/action";
import CatogeryItems from "./components/catogeryItems";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const catogeryData = await getCatogeryData({ id });
  // console.log(id);
  return (
    <div className="flex gap-8">
      <Sidebar />
      <CatogeryItems cData={catogeryData} />
    </div>
  );
}
