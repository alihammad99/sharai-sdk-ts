import { headers } from "../../config";
import { server_url } from "../../utils/server-url";
import axios from "axios";
type Photo = {
  name: string;
  format: string;
  base46content: string;
};
type Variant = { options: []; colors: []; price: number; stock: number };
type Product = {
  name: string;
  photos?: Photo[];
  description?: string;
  price: number;
  variants: { title: string; list: Variant[] };
  stock?: number;
  discount?: number;
  category: string;
};

export const clientPostOneProducts = async (data: Product) => {
  try {
    const response = await axios.post(
      `${server_url}/api/product`,
      { ...data },
      { headers }
    );
    const { id } = response.data;
    return id;
  } catch (error) {
    console.error("There was a problem posting the data:", error);
  }
};
