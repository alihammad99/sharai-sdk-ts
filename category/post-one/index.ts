import axios from "axios";

export const clientAddCategory = async (data: any) => {
  if (!data) return;
  try {
    await axios.post("/api/category/post-one", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("There was a problem posting the data:", error);
  }
};
