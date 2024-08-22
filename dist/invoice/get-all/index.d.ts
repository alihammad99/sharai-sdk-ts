type Props = {
    id?: string;
    sort?: string;
    page?: number;
    limit?: number;
    active?: true;
};
export declare const clientGetProduct: (options?: Props) => Promise<any>;
export declare const clientGetAllInvoices: (options?: Props) => Promise<any>;
export {};
