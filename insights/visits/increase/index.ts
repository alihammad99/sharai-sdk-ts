import axios from 'axios';

export const fetchIncreaseVisits = async () => {
  try {
    await axios.get(`/api/insights/visits/increase`);
  } catch (error) {
    console.error(error);
  }
};
