type Data = {
  store_id: string | null;
  token: string | null;
  "Content-Type"?: string;
};

class HeaderManager {
  private static instance: HeaderManager;
  private headersMap: Map<string, any> = new Map();

  // Private constructor to prevent direct instantiation
  private constructor() {
    // Load any persisted data (e.g., from local storage)
    const storedStoreId = localStorage.getItem("store_id");
    const storedToken = localStorage.getItem("token");
    if (storedStoreId) this.headersMap.set("store_id", storedStoreId);
    if (storedToken) this.headersMap.set("token", storedToken);
    this.headersMap.set("Content-Type", "application/json");
  }

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
      this.headersMap.set("store_id", store_id);
      localStorage.setItem("store_id", store_id); // Persist data
    }
    if (token) {
      this.headersMap.set("token", token);
      localStorage.setItem("token", token); // Persist data
    }
  }

  // Method to get the current headers
  public getHeaders(): Data {
    return {
      store_id: this.headersMap.get("store_id") || null,
      token: this.headersMap.get("token") || null,
      "Content-Type": this.headersMap.get("Content-Type") || "application/json",
    };
  }
}

// Create a singleton instance
const headerManager = HeaderManager.getInstance();

// Export the methods directly
export const config = (data: Data) => headerManager.config(data);
export const headers = () => headerManager.getHeaders();
