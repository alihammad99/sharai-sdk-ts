import axios from "axios";

export const getOneInvoice = async (id: string) => {
  try {
    const response = await axios.get(`/api/invoice/get-one?id=${id}`);
    const { data } = await response.data;
    return { data };
  } catch (error) {
    console.error(error);
  }
};
