import { validateUrl } from "@/validate-url";
import axios from "axios";

export const getOneInvoice = async (id: string) => {
  const url = process.env.SHARAI_SERVER_URL;
  validateUrl();
  try {
    const response = await axios.get(`${url}/api/invoice/get-one?id=${id}`);
    const { data } = await response.data;
    return { data };
  } catch (error) {
    console.error(error);
  }
};
