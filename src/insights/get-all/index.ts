import axios from "axios";

export const fetchAllInsights = async () => {
  try {
    const response = await axios.get(`/api/insights/get-all`);
    const { data } = await response;
    return { data };
  } catch (error) {
    console.error(error);
  }
};
