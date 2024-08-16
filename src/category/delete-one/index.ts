import axios from "axios";

export const clientDeleteOneCategory = async (id: string) => {
  try {
    await axios.delete(`/api/category/delete-one?id=${id}`);
  } catch (error) {
    console.error(error);
  }
};

export const fetchDeleteOneGroupCategory = async (id: string) => {
  try {
    await axios.delete(`/api/parent-category/delete-one?id=${id}`);
  } catch (error) {
    console.error(error);
  }
};
