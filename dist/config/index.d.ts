type Data = {
    store_id?: string;
    token?: string;
    "Content-Type"?: string;
};
export declare const config: (data: Data) => void;
export declare const headers: () => Record<string, string>;
export {};
