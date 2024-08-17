type Photo = {
    name: string;
    format: string;
    base46content: string;
};
type Product = {
    name: string;
    photos?: Photo[];
    description: string;
    price: number;
    variants: [];
    stock?: number;
};
export declare const clientPostOneProducts: (data: Product) => Promise<any>;
export {};
