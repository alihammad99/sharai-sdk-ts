import axios from "axios";

export const FetchUpdateCategory = async (data: any) => {
  if (!data) return;
  try {
    await axios.post("/api/category/put-one", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("There was a problem posting the data:", error);
  }
};

export const FetchUpdateGroupCategory = async (data: any) => {
  if (!data) return;
  try {
    await axios.put("/api/parent-category/put-one", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("There was a problem posting the data:", error);
  }
};
