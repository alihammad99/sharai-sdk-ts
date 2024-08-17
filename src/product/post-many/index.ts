import axios from "axios";

export const clientGetManyProducts = async (list: string[], active = true) => {
  const url = process.env.SHARAI_SERVER_URL;
  try {
    const response = await axios.post(
      `${url}/api/product/post-many?active=${active}`,
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
