import { baseUrl, endPoints } from "@/app/core/costants/endpoints";
import { IHome } from "./homeInterface";
import axios from "axios";

export const getCatogeryData = async ({
  id,
}: {
  id: string;
}): Promise<IHome[] | null> => {
  // console.log(baseUrl + endPoints.catogery + id);

  try {
    const categoryResponse = await axios.get<any>(
      baseUrl + endPoints.catogery + id
    );
    return categoryResponse.data;
  } catch (error) {
    return null;
  }
};
