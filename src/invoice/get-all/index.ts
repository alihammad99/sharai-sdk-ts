import { validateUrl } from "@/validate-url";
import axios from "axios";

export const clientGetAllInvoices = async (page = 1) => {
  const url = process.env.SHARAI_SERVER_URL;
  try {
    validateUrl();
    const response = await axios.get(`${url}/api/invoice/get-all?page=${page}`);
    const { data } = await response.data;
    return { data };
  } catch (error) {
    console.error(error);
  }
};
