import { checkCustomer } from "@/app/utils/cookies/set";
import axios from "axios";

export const clientUpdateCustomer = async (data: any) => {
  const customer = await checkCustomer();

  if (!customer) return;

  try {
    const send = await axios.put(`/api/customer/update-one`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (send.data.status === 200) {
      return true;
    }
    if (send.data.status === 403) {
      return false;
    }
  } catch (error) {
    console.error("There was a problem posting the data:", error);
  }
};
