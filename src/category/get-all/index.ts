import { headers } from "../../config";
import { server_url } from "../../utils/server-url";
import axios from "axios";

export const clientGetAllCategories = async () => {
  try {
    const response = await axios.get(`${server_url}/api/category/get-all`);
    const { data } = await response.data;
    return { data };
  } catch (error) {
    console.error(error);
  }
};

export const clientGetAllGroupCategories = async () => {
  try {
    const response = await axios.get(
      `${server_url}/api/parent-category/get-all`,
      { headers }
    );
    const { data } = await response.data;
    return { data };
  } catch (error) {
    console.error(error);
  }
};
