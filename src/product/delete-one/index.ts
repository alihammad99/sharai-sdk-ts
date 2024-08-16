import axios from "axios";

export const clientDeleteOneProduct = async (id: string) => {
  try {
    await axios.delete(`/api/product/delete-one?id=${id}`);
  } catch (error) {
    console.error(error);
  }
};
