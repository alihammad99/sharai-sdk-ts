import { validateUrl } from "@/validate-url";
import axios from "axios";

export const clientAddCategory = async (data: any) => {
  const url = process.env.SHARAI_SERVER_URL;
  if (!data) return;
  try {
    validateUrl();
    await axios.post(`${url}/api/category/post-one`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("There was a problem posting the data:", error);
  }
};
