declare const Invoice: {
    DELETE: (id: string) => Promise<void>;
    GET: (options?: {
        id?: string;
        sort?: string;
        page?: number;
        limit?: number;
        active?: true;
    }) => Promise<any>;
    POST: (data: any) => Promise<boolean | undefined>;
    SEARCH: (phrase: string) => Promise<any>;
};
export default Invoice;
