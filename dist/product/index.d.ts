declare const Product: {
    DELETE: (id: string) => Promise<void>;
    GET: (options: {
        sort?: string | null;
        page: number;
        limit?: number | null;
        active: true;
        id?: string;
        category?: string;
        products?: string[];
    }) => Promise<any>;
    POST: (data: {
        name: string;
        photos?: {
            name: string;
            format: string;
            base46content: string;
        }[];
        description: string;
        price: number;
        variants: {
            title: string;
            list: {
                options: [];
                colors: [];
                price: number;
                stock: number;
            }[];
        };
        stock?: number;
    }) => Promise<any>;
    SEARCH: (phrase: string) => Promise<any>;
};
export default Product;
