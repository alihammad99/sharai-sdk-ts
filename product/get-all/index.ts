import axios from "axios";
import { clientGetProductsByCategory } from "../get-by-category";
import { clientGetManyProducts } from "../post-many";

type Props = {
  sort?: string | null;
  page: number;
  limit?: number | null;
  active: true;
  id?: string;
  category?: string;
  products?: string[];
};

export const clientGetProduct = (options: Props) => {
  const { id, category, products, active } = options;
  if (id) {
    return clientGetAllProducts(options);
  } else if (products && products?.length > 0) {
    return clientGetManyProducts(products, active);
  } else if (category) {
    return clientGetProductsByCategory(category);
  } else {
    return clientGetAllProducts(options);
  }
};

export const clientGetAllProducts = async (options: Props) => {
  const { sort, page, limit, active } = options;
  const URL = sort
    ? `/api/product/get-all?sort=${sort}&page=${page}&limit=${limit}&active=${active}`
    : `/api/product/get-all?page=${page}&limit=${limit}&active=${active}`;
  try {
    const response = await axios.get(URL);
    const { data } = await response.data;
    return { data };
  } catch (error) {
    console.error(error);
  }
};
