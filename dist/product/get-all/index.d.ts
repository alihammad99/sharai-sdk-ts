type Props = {
    sort?: string | null;
    page: number;
    limit?: number | null;
    active: true;
    id?: string;
    category?: string;
    products?: string[];
};
export declare const clientGetProduct: (options: Props) => Promise<any>;
export declare const clientGetAllProducts: (options: Props) => Promise<{
    data: any;
} | undefined>;
export {};
