import axios from "axios";

export const fetchOneCategory = async (id: string) => {
  try {
    const response = await axios.get(`/api/category/get-one?id=${id}`);
    const { data } = await response.data;
    return { data };
  } catch (error) {
    console.error(error);
  }
};
