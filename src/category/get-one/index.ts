import { validateUrl } from "@/validate-url";
import axios from "axios";

export const fetchOneCategory = async (id: string) => {
  const url = process.env.SHARAI_SERVER_URL;
  try {
    validateUrl();
    const response = await axios.get(`${url}/api/category/get-one?id=${id}`);
    const { data } = await response.data;
    return { data };
  } catch (error) {
    console.error(error);
  }
};
