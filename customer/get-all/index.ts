import axios from "axios";

export const fetchAllCustomers = async (page = 1) => {
  try {
    const response = await axios.get(`/api/customer/get-all?page=${page}`);
    const { data } = await response.data;
    return { data };
  } catch (error) {
    console.error(error);
  }
};
