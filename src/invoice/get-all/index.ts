import { headers } from "../../config";
import { server_url } from "../../utils/server-url";
import axios from "axios";

export const clientGetAllInvoices = async (page = 1) => {
  try {
    const response = await axios.get(`${server_url}/api/order?page=${page}`, {
      headers,
    });
    const { data } = await response;
    return { data };
  } catch (error) {
    console.error(error);
  }
};
