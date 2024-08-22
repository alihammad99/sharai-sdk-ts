import axios from "axios";

export const fetchVisitsMonth = async () => {
  try {
    const response = await axios.get(`/api/insights/visits/get-month`);
    const { data } = await response;
    return { data };
  } catch (error) {
    console.error(error);
  }
};
