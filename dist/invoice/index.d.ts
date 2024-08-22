declare const Invoice: {
    DELETE: (id: string) => Promise<void>;
    GET: (options?: {
        id?: string;
        sort?: string;
        page?: number;
        limit?: number;
        active?: true;
    }) => Promise<any>;
    POST: (data: {
        name: string;
        address: {
            phone: string;
            city: string;
            street: string;
            receiver: string;
            cost: number;
        };
        products: [{
            id: string;
            name: string;
            photos: [{
                url: string;
            }];
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
        }];
        price: number;
        total: number;
    }) => Promise<boolean | undefined>;
    SEARCH: (phrase: string) => Promise<any>;
};
export default Invoice;
