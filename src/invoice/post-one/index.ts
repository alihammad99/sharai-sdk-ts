import { headers } from "../../config";
import { server_url } from "../../utils/server-url";
import axios from "axios";

export const clientPostOneInvoice = async (data: any) => {
  if (!data) return;
  try {
    await axios.post(`${server_url}/api/orders/post-one`, data, {
      headers,
    });
    return true;
  } catch (error) {
    console.error("There was a problem posting the data:", error);
    return false;
  }
};
