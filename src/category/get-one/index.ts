import { headers } from "../../config";
import { server_url } from "../../utils/server-url";
import axios from "axios";

export const fetchOneCategory = async (id: string) => {
  try {
    const response = await axios.get(`${server_url}/api/category/${id}`, {
      headers,
    });
    const { data } = await response.data;
    return { data };
  } catch (error) {
    console.error(error);
  }
};
