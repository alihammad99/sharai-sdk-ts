import { server_url } from "../../utils/server-url";
import axios from "axios";

export const clientUpdateInvoice = async (data: any) => {
  if (!data) return;
  try {
    await axios.put(`${server_url}/api/invoice/update-one`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("There was a problem posting the data:", error);
  }
};
