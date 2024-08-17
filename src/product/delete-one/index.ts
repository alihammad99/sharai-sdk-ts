import { validateUrl } from "@/validate-url";
import axios from "axios";

export const clientDeleteOneProduct = async (id: string) => {
  const url = process.env.SHARAI_SERVER_URL;
  validateUrl();

  try {
    await axios.delete(`${url}/api/product/delete-one?id=${id}`);
  } catch (error) {
    console.error(error);
  }
};
