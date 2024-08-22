type Photo = {
    name: string;
    format: string;
    base46content: string;
};
type Variant = {
    options: [];
    colors: [];
    price: number;
    stock: number;
};
type Product = {
    name: string;
    photos?: Photo[];
    description?: string;
    price: number;
    variants: {
        title: string;
        list: Variant[];
    };
    stock?: number;
    discount?: number;
    category: string;
};
export declare const clientPostOneProducts: (data: Product) => Promise<any>;
export {};
