import { headers } from "../../config";
import { server_url } from "../../utils/server-url";
import axios from "axios";

export const clientAddCategory = async (data: any) => {
  if (!data) return;
  try {
    await axios.post(`${server_url}/api/category/post-one`, data, {
      headers,
    });
  } catch (error) {
    console.error("There was a problem posting the data:", error);
  }
};
