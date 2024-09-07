import { create } from "zustand";
import { IHome } from "./data/homeInterface";

type State = {
  homeData: IHome[] | null;
  setHomeData: (data: IHome[] | null) => void;
};
export const useStore = create<State>((set) => ({
  homeData: null,
  setHomeData: (data) => set({ homeData: data }),
}));
