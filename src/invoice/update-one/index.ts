import axios from "axios";

export const clientUpdateInvoice = async (data: any) => {
  if (!data) return;
  try {
    await axios.put("/api/invoice/update-one", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("There was a problem posting the data:", error);
  }
};
