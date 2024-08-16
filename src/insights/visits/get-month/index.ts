import axios from "axios";

export const fetchVisitsMonth = async () => {
  try {
    const response = await axios.get(`/api/insights/visits/get-month`);
    const { data } = await response.data;
    return { data };
  } catch (error) {
    console.error(error);
  }
};
