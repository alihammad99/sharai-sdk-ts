import { validateUrl } from "../../utils/validate-url";
import axios from "axios";

export const clientDeleteOneInvoice = async (id: string) => {
  const url = process.env.SHARAI_SERVER_URL;
  validateUrl();
  try {
    await axios.delete(`${url}/api/invoice/delete-one?id=${id}`);
  } catch (error) {
    console.error(error);
  }
};
