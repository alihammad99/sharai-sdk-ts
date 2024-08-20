import { headers } from "../../config";
import { server_url } from "../../utils/server-url";
import axios from "axios";

export const clientDeleteOneProduct = async (id: string) => {
  try {
    await axios.delete(`${server_url}/api/product/${id}`, {
      headers,
    });
  } catch (error) {
    console.error(error);
  }
};
