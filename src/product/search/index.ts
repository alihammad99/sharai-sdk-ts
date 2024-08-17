import { headers } from "../../config";
import { server_url } from "../../utils/server-url";
import axios from "axios";

export const clientSearchProduct = async (phrase: string) => {
  try {
    const res = await axios.get(
      `${server_url}/api/product/search?phrase=${phrase}`,
      { headers }
    );
    const value = res.data.result;
    return value;
  } catch (error) {
    console.error("There was a problem posting the data:", error);
  }
};
