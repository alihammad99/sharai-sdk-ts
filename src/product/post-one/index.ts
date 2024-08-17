import axios from "axios";

export const clientPostOneProducts = async (data: any) => {
  try {
    const response = await axios.post(
      `/api/products/post-one`,
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
