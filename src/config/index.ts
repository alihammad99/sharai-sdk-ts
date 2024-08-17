type Data = {
  store_id: string | null;
  token: string | null;
  "Content-Type"?: string;
};

export const headers: Data = {
  store_id: null,
  token: null,
  "Content-Type": "application/json",
};

export const config = ({ store_id, token }: Data) => {
  if (store_id) {
    headers.store_id = store_id;
  }
  if (token) {
    headers.token = token;
  }
  console.log("headers");
  console.log(headers);
};
