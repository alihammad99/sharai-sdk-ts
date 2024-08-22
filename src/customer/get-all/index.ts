import axios from "axios";

export const fetchAllCustomers = async (page = 1) => {
  try {
    const response = await axios.get(`/api/customer?page=${page}`);
    const { data } = await response;
    return data;
  } catch (error) {
    console.error(error);
  }
};
