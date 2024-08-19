import { headers } from "../../config";
import { server_url } from "../../utils/server-url";
import axios from "axios";

export const clientGetAllInvoices = async (page = 1) => {
  try {
    const response = await axios.get(
      `${server_url}/api/invoice/get-all?page=${page}`,
      { headers: headers() }
    );
    const { data } = await response.data;
    return { data };
  } catch (error) {
    console.error(error);
  }
};
