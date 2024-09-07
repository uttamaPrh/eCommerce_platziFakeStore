import { IHome } from "./homeInterface";
import { baseUrl, endPoints } from "../core/costants/endpoints";
import axios from "axios";

export const getHomeData = async (): Promise<IHome[] | null> => {
  console.log(baseUrl + endPoints.products);
  try {
    const homeResponse = await axios.get<any>(baseUrl + endPoints.products);
    return homeResponse.data;
  } catch (error) {
    return null;
  }
};
