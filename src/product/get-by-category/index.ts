import { headers } from "../../config";
import { server_url } from "../../utils/server-url";
import axios from "axios";

export const clientGetProductsByCategory = async (
  id: string,
  sort?: string | null,
  active = true,
  similar = false
) => {
  const URL = sort
    ? `${server_url}/api/product/get-by-category?id=${id}&sort=${sort}&active=${active}&similar=${similar}`
    : `${server_url}/api/product/get-by-category?id=${id}&active=${active}&similar=${similar}`;
  try {
    const response = await axios.get(URL, { headers });
    const { data } = await response;
    return data;
  } catch (error) {
    console.error(error);
  }
};
