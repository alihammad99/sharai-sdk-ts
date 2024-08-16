import axios from "axios";

export const clientGetAllInvoices = async (page = 1) => {
  try {
    const response = await axios.get(`/api/invoice/get-all?page=${page}`);
    const { data } = await response.data;
    return { data };
  } catch (error) {
    console.error(error);
  }
};
