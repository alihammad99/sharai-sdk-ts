import { headers } from "../../config";
import { server_url } from "../../utils/server-url";
import axios from "axios";

type Props = {
  name: string;
  address: {
    phone: string;
    city: string;
    street: string;
    receiver: string;
    cost: number;
  };
  products: [
    {
      id: string;
      name: string;
      photos: [
        {
          url: string;
        }
      ];
      price: number;
      variant: {
        id: string;
        key: string;
        value: string;
        color: {
          name: string;
          qty: 2;
        };
      };
    }
  ];
  price: number;
  total: number;
};

export const clientPostOneInvoice = async (data: Props) => {
  if (!data) return;
  try {
    await axios.post(`${server_url}/api/order`, data, {
      headers,
    });
    return true;
  } catch (error) {
    console.error("There was a problem posting the data:", error);
    return false;
  }
};
