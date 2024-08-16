import axios from "axios";

export const clientGetAllCategories = async () => {
  try {
    const response = await axios.get(`/api/category/get-all`);
    const { data } = await response.data;
    return { data };
  } catch (error) {
    console.error(error);
  }
};

export const clientGetAllGroupCategories = async () => {
  try {
    const response = await axios.get(`/api/parent-category/get-all`);
    const { data } = await response.data;
    return { data };
  } catch (error) {
    console.error(error);
  }
};
