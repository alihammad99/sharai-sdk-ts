import axios from "axios";

export const clientGetOneCustomer = async (id: string) => {
  try {
    const response = await axios.get(`/api/customer/${id}`);
    const { data } = await response;
    return data.customer;
  } catch (error) {
    console.error("There was a problem posting the data:", error);
  }
};
