declare const Category: {
    DELETE: (id: string) => Promise<void>;
    GET: () => Promise<any>;
    POST: (data: any) => Promise<void>;
};
export default Category;
