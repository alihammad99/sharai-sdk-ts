import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });
const config = {
  envPath: "../.env",
};
dotenv.config({ path: path.resolve(__dirname, config.envPath) });


export { default as Product } from "./product";
export { default as Invoice } from "./invoice";
export { default as Category } from "./category";
