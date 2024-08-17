type Product = {
    name: string;
    photos: [];
    description: string;
    price: number;
    variants: [];
    stock: number;
};
export declare const clientPostOneProducts: (data: Product) => Promise<any>;
export {};
