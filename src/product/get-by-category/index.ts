import axios from "axios";

export const clientGetProductsByCategory = async (
  id: string,
  sort?: string | null,
  active = true,
  similar = false
) => {
  const url = process.env.SHARAI_SERVER_URL;
  const URL = sort
    ? `${url}/api/product/get-by-category?id=${id}&sort=${sort}&active=${active}&similar=${similar}`
    : `${url}/api/product/get-by-category?id=${id}&active=${active}&similar=${similar}`;
  try {
    const response = await axios.get(URL);
    const { data } = await response.data;
    return { data };
  } catch (error) {
    console.error(error);
  }
};
