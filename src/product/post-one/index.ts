import { validateUrl } from "../../utils/validate-url";
import axios from "axios";

export const clientPostOneProducts = async (data: any) => {
  const url = process.env.SHARAI_SERVER_URL;
  validateUrl();
  try {
    const response = await axios.post(
      `${url}/api/products/post-one`,
      { ...data },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { result } = response.data;
    return result;
  } catch (error) {
    console.error("There was a problem posting the data:", error);
  }
};
