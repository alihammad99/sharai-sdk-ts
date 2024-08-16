import { clientDeleteOneCategory } from "./delete-one";
import { clientGetAllCategories } from "./get-all";
import { clientAddCategory } from "./post-one";

const Category = {
  DELETE: clientDeleteOneCategory,
  GET: clientGetAllCategories,
  POST: clientAddCategory,
  // SEARCH: clientSearchProduct,
};

export default Category;
