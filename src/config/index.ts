import Cookies from "js-cookie";
import { parse, serialize } from "cookie";

// Define the key for storing headers in cookies
const COOKIE_KEY = "headers";

// Type definition for the data structure
type Data = {
  store_id?: string;
  token?: string;
  "Content-Type"?: string;
};

class CookieManager {
  private static instance: CookieManager;

  // Private constructor to prevent direct instantiation
  private constructor() {}

  // Public method to get the singleton instance
  public static getInstance(): CookieManager {
    if (!CookieManager.instance) {
      CookieManager.instance = new CookieManager();
    }
    return CookieManager.instance;
  }

  // Set headers in cookies
  public setHeaders(data: Data) {
    const headersObject: Record<string, string> = {};

    if (data.store_id) headersObject["store_id"] = data.store_id;
    if (data.token) headersObject["token"] = data.token;
    if (data["Content-Type"])
      headersObject["Content-Type"] = data["Content-Type"];

    const cookieValue = serialize(COOKIE_KEY, JSON.stringify(headersObject), {
      path: "/",
    });
    Cookies.set(COOKIE_KEY, cookieValue, { path: "/" });
  }

  // Get headers from cookies
  public getHeaders(): Record<string, string> {
    const cookieValue = Cookies.get(COOKIE_KEY);
    if (!cookieValue) return {};

    try {
      const headersObject = JSON.parse(cookieValue);
      return headersObject;
    } catch (error) {
      console.error("Error parsing headers from cookies:", error);
      return {};
    }
  }
}

// Create a singleton instance
const cookieManager = CookieManager.getInstance();

// Export the functions
export const config = (data: Data) => cookieManager.setHeaders(data);
export const headers = () => cookieManager.getHeaders();
