import { headers } from "../../config";
import { server_url } from "../../utils/server-url";
import axios from "axios";

export const clientGetAllCategories = async () => {
  try {
    const response = await axios.get(`${server_url}/api/category`, {
      headers,
    });
    const { data } = await response;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const clientGetAllGroupCategories = async () => {
  try {
    const response = await axios.get(`${server_url}/api/group-category`, {
      headers,
    });
    const { data } = await response;
    return data;
  } catch (error) {
    console.error(error);
  }
};
