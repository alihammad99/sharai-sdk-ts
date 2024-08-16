import axios from "axios";

export const clientResetPassword = async (data: any) => {
  try {
    const send = await axios.put(
      `/api/auth/reset-password`,
      { phone: data.phone, password: data.password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (send.data.status === 200) {
      return true;
    }
    if (send.data.status === 403) {
      return false;
    }
  } catch (error) {
    console.error("There was a problem posting the data:", error);
  }
};
