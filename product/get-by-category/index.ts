import axios from "axios";

export const clientGetProductsByCategory = async (
  id: string,
  sort?: string | null,
  active = true,
  similar = false
) => {
  const URL = sort
    ? `/api/product/get-by-category?id=${id}&sort=${sort}&active=${active}&similar=${similar}`
    : `/api/product/get-by-category?id=${id}&active=${active}&similar=${similar}`;
  try {
    const response = await axios.get(URL);
    const { data } = await response.data;
    return { data };
  } catch (error) {
    console.error(error);
  }
};
