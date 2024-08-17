import { validateUrl } from "@/validate-url";
import axios from "axios";

export const clientPostOneInvoice = async (data: any) => {
  if (!data) return;
  const url = process.env.SHARAI_SERVER_URL;
  validateUrl();
  try {
    await axios.post(`${url}/api/orders/post-one`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return true;
  } catch (error) {
    console.error("There was a problem posting the data:", error);
    return false;
  }
};
