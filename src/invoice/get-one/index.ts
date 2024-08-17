import { server_url } from "../../utils/server-url";
import axios from "axios";

export const getOneInvoice = async (id: string) => {
  try {
    const response = await axios.get(
      `${server_url}/api/invoice/get-one?id=${id}`
    );
    const { data } = await response.data;
    return { data };
  } catch (error) {
    console.error(error);
  }
};
