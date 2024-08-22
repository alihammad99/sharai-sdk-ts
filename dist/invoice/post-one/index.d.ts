type Props = {
    name: string;
    address: {
        phone: string;
        city: string;
        street: string;
        receiver: string;
        cost: number;
    };
    products: [
        {
            id: string;
            name: string;
            photos: [
                {
                    url: string;
                }
            ];
            price: number;
            variant: {
                id: string;
                key: string;
                value: string;
                color: {
                    name: string;
                    qty: 2;
                };
            };
        }
    ];
    price: number;
    total: number;
};
export declare const clientPostOneInvoice: (data: Props) => Promise<boolean | undefined>;
export {};
