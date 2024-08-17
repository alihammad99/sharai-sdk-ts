import { validateUrl } from "../../utils/validate-url";
import axios from "axios";

export const clientUpdateInvoice = async (data: any) => {
  const url = process.env.SHARAI_SERVER_URL;
  validateUrl();
  if (!data) return;
  try {
    await axios.put(`${url}/api/invoice/update-one`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("There was a problem posting the data:", error);
  }
};
