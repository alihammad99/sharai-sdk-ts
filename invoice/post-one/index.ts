import axios from "axios";

export const clientPostOneInvoice = async (data: any) => {
  if (!data) return;
  try {
    await axios.post("/api/orders/post-one", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return true;
  } catch (error) {
    console.error("There was a problem posting the data:", error);
    return false;
  }
};
