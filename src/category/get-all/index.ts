import { validateUrl } from "@/validate-url";
import axios from "axios";

export const clientGetAllCategories = async () => {
  const url = process.env.SHARAI_SERVER_URL;
  try {
    validateUrl();
    const response = await axios.get(`${url}/api/category/get-all`);
    const { data } = await response.data;
    return { data };
  } catch (error) {
    console.error(error);
  }
};

export const clientGetAllGroupCategories = async () => {
  const url = process.env.SHARAI_SERVER_URL;
  try {
    validateUrl();
    const response = await axios.get(`${url}/api/parent-category/get-all`);
    const { data } = await response.data;
    return { data };
  } catch (error) {
    console.error(error);
  }
};
