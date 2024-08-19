// Type definition for the data structure
type Data = {
  store_id?: string;
  token?: string;
  "Content-Type"?: string;
};

// Define a class to manage headers
class HeaderManager {
  private static instance: HeaderManager;
  private headersMap: Map<string, string> = new Map();

  // Private constructor to prevent direct instantiation
  private constructor() {
    // Initialize with default values
    this.headersMap.set("Content-Type", "application/json");
  }

  // Public method to get the singleton instance
  public static getInstance(): HeaderManager {
    if (!HeaderManager.instance) {
      HeaderManager.instance = new HeaderManager();
    }
    return HeaderManager.instance;
  }

  // Method to update headers
  public setHeaders({ store_id, token, "Content-Type": contentType }: Data) {
    if (store_id) this.headersMap.set("store_id", store_id);
    if (token) this.headersMap.set("token", token);
    if (contentType) this.headersMap.set("Content-Type", contentType);
  }

  // Method to get headers as a plain object
  public getHeaders(): Record<string, string> {
    const headersObject: Record<string, string> = {};
    this.headersMap.forEach((value, key) => {
      headersObject[key] = value;
    });
    return headersObject;
  }
}

// Create a singleton instance
const headerManager = HeaderManager.getInstance();

// Export the headers object and the setter function
export const headers = () => headerManager.getHeaders();
export const config = (data: Data) => headerManager.setHeaders(data);
