import { validateUrl } from "@/validate-url";
import axios from "axios";

export const clientSearchProduct = async (phrase: string) => {
  const url = process.env.SHARAI_SERVER_URL;
  validateUrl();
  try {
    const res = await axios.get(`${url}/api/product/search?phrase=${phrase}`);
    const value = res.data.result;
    return value;
  } catch (error) {
    console.error("There was a problem posting the data:", error);
  }
};
