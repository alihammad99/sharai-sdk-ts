import { validateUrl } from "../../utils/validate-url";
import axios from "axios";

export const clientDeleteOneCategory = async (id: string) => {
  const url = process.env.SHARAI_SERVER_URL;
  try {
    validateUrl();
    await axios.delete(`${url}/api/category/delete-one?id=${id}`);
  } catch (error) {
    console.error(error);
  }
};

export const fetchDeleteOneGroupCategory = async (id: string) => {
  const url = process.env.SHARAI_SERVER_URL;
  try {
    validateUrl();
    await axios.delete(`${url}/api/parent-category/delete-one?id=${id}`);
  } catch (error) {
    console.error(error);
  }
};
