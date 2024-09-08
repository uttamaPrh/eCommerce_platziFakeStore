import { create } from "zustand";
import { IHome } from "./data/homeInterface";

type State = {
  homeData: IHome[] | null;
  setHomeData: (data: IHome[] | null) => void;
  allProductData: IHome[] | null;
  setAllProductData: (data: IHome[] | null) => void;
  selectedCategory: IHome[] | null;
  setSelectedCategory: (data: IHome[] | null) => void;
};

export const useStore = create<State>((set) => ({
  homeData: null,
  setHomeData: (data) => set({ homeData: data }),
  allProductData: null,
  setAllProductData: (data) => set({ allProductData: data }),
  selectedCategory: null,
  setSelectedCategory: (data) => set({ selectedCategory: data }),
}));
