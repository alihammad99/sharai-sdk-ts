declare const Invoice: {
    DELETE: (id: string) => Promise<void>;
    GET: (page?: number) => Promise<any>;
    POST: (data: any) => Promise<boolean | undefined>;
    SEARCH: (phrase: string) => Promise<any>;
};
export default Invoice;
