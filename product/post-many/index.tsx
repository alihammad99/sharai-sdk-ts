import axios from "axios";

export const clientGetManyProducts = async (list: string[], active = true) => {
  try {
    const response = await axios.post(
      `/api/product/post-many?active=${active}`,
      { products: [...list] },
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
