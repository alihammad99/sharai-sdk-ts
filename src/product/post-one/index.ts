import axios from "axios";
type Product = {
  name: string;
  photos: [];
  description: string;
  price: number;
  variants: [];
  stock: number;
};

export const clientPostOneProducts = async (data: Product) => {
  const server_url = "https://sharai-server.onrender.com";
  try {
    const response = await axios.post(
      `${server_url}/api/products/post-one`,
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
