// Type definition for the data structure
type Data = {
  store_id: string | null;
  token: string | null;
  "Content-Type"?: string;
};

// Singleton class to manage the headers
class HeaderManager {
  private static instance: HeaderManager;
  private _headers: Data = {
    store_id: null,
    token: null,
    "Content-Type": "application/json",
  };

  // Private constructor to prevent direct instantiation
  private constructor() {}

  // Public method to get the singleton instance
  public static getInstance(): HeaderManager {
    if (!HeaderManager.instance) {
      HeaderManager.instance = new HeaderManager();
    }
    return HeaderManager.instance;
  }

  // Method to update the headers
  public config({ store_id, token }: Data) {
    if (store_id) {
      this._headers.store_id = store_id;
    }
    if (token) {
      this._headers.token = token;
    }
  }

  // Method to get the current headers
  public get headers(): Data {
    return this._headers;
  }
}

// Create a singleton instance
const headerManager = HeaderManager.getInstance();

// Export the methods directly
export const config = headerManager.config.bind(headerManager);
export const headers = headerManager.headers;
