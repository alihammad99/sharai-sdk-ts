type Data = {
    store_id: string | null;
    token: string | null;
    "Content-Type"?: string;
};
export declare const headers: Data;
export declare const config: ({ store_id, token }: Data) => void;
export {};
