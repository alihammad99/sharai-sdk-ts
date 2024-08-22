type Props = {
    id?: string;
    sort?: string;
    page?: number;
    limit?: number;
    active?: true;
};
export declare const clientGetInvoices: (options?: Props) => Promise<any>;
export declare const clientGetAllInvoices: (options?: Props) => Promise<any>;
export {};
