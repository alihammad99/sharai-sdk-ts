import { headers } from "../../config";
import { server_url } from "../../utils/server-url";
import axios from "axios";

export const clientDeleteOneInvoice = async (id: string) => {
  try {
    await axios.delete(`${server_url}/api/invoice/delete-one?id=${id}`, {
      headers: headers(),
    });
  } catch (error) {
    console.error(error);
  }
};
