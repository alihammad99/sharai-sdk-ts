declare const Category: {
    DELETE: (id: string) => Promise<void>;
    GET: () => Promise<{
        data: any;
    } | undefined>;
    POST: (data: any) => Promise<void>;
};
export default Category;
