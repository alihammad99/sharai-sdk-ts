import { headers } from "../../config";
import { server_url } from "../../utils/server-url";
import axios from "axios";

export const clientDeleteOneCategory = async (id: string) => {
  try {
    await axios.delete(`${server_url}/api/category/delete-one?id=${id}`);
  } catch (error) {
    console.error(error);
  }
};

export const fetchDeleteOneGroupCategory = async (id: string) => {
  try {
    await axios.delete(
      `${server_url}/api/parent-category/delete-one?id=${id}`,
      { headers: headers() }
    );
  } catch (error) {
    console.error(error);
  }
};
