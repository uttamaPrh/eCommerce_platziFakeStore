"use client";
import React, { useEffect } from "react";
import { useStore } from "../store";
import { IHome } from "../data/homeInterface";
import HeroSection from "./heroSection/heroSection";
export default function HomeContainer({ data }: { data: IHome[] | null }) {
  const { setHomeData } = useStore();
  useEffect(() => {
    if (data) {
      setHomeData(data);
    }
  }, [data]);
  return <HeroSection />;
}
