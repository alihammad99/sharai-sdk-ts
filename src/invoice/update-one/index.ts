import { headers } from "../../config";
import { server_url } from "../../utils/server-url";
import axios from "axios";

export const clientUpdateInvoice = async (data: any) => {
  if (!data) return;
  try {
    await axios.put(`${server_url}/api/order/${data.id}`, data, { headers });
  } catch (error) {
    console.error("There was a problem posting the data:", error);
  }
};
