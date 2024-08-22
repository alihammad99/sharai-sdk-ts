import { headers } from "../../config";
import { server_url } from "../../utils/server-url";
import axios from "axios";
import { clientGetOneInvoice } from "../get-one";

type Props = {
  id?: string;
  sort?: string;
  page?: number;
  limit?: number;
  active?: true;
};

export const clientGetProduct = (options?: Props) => {
  if (options) {
    const { id } = options;
    if (id) {
      return clientGetOneInvoice(id);
    } else {
      return clientGetAllInvoices(options);
    }
  } else {
    return clientGetAllInvoices();
  }
};

export const clientGetAllInvoices = async (options?: Props) => {
  try {
    const response = await axios.get(
      `${server_url}/api/order?page=${options?.page}`,
      {
        headers,
      }
    );
    const { data } = await response;
    return data;
  } catch (error) {
    console.error(error);
  }
};
