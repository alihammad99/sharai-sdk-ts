import axios from "axios";

export const clientSearchProduct = async (phrase: string) => {
  try {
    const res = await axios.get(`/api/product/search?phrase=${phrase}`);
    const value = res.data.result;
    return value;
  } catch (error) {
    console.error("There was a problem posting the data:", error);
  }
};
