import axios from "axios";

export const clientDeleteOneInvoice = async (id: string) => {
  try {
    await axios.delete(`/api/invoice/delete-one?id=${id}`);
  } catch (error) {
    console.error(error);
  }
};
