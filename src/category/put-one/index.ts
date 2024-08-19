import { headers } from "../../config";
import { server_url } from "../../utils/server-url";
import axios from "axios";

export const FetchUpdateCategory = async (data: any) => {
  if (!data) return;
  try {
    await axios.post(`${server_url}/api/category/put-one`, data, {
      headers: headers(),
    });
  } catch (error) {
    console.error("There was a problem posting the data:", error);
  }
};

export const FetchUpdateGroupCategory = async (data: any) => {
  if (!data) return;
  try {
    await axios.put(`${server_url}/api/parent-category/put-one`, data, {
      headers: headers(),
    });
  } catch (error) {
    console.error("There was a problem posting the data:", error);
  }
};
