import React from "react";
import HomeContainer from "./components/homeContainer";
import { getHomeData } from "./data/action";

export default async function Page() {
  const homeDetails = await getHomeData();
  return <HomeContainer data={homeDetails} />;
}
