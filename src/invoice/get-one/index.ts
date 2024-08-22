import { headers } from "../../config";
import { server_url } from "../../utils/server-url";
import axios from "axios";

export const clientGetOneInvoice = async (id: string) => {
  try {
    const response = await axios.get(`${server_url}/api/order/${id}`, {
      headers,
    });
    const { data } = await response;
    return data;
  } catch (error) {
    console.error(error);
  }
};
