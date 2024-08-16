import axios from "axios";

export const FetchSearchCustomer = async (
  phrase: string,
  setSearchResult?: any
) => {
  try {
    const res = await axios.get(`/api/customer/search?phrase=${phrase}`);
    const value = res.data.result;
    if (setSearchResult) {
      setSearchResult(value);
    }
  } catch (error) {
    console.error("There was a problem posting the data:", error);
  }
};
