import { clientDeleteOneProduct } from "./delete-one";
import { clientGetProduct } from "./get-all";
import { clientPostOneProducts } from "./post-one";
import { clientSearchProduct } from "./search";

const Product = {
  DELETE: clientDeleteOneProduct,
  GET: clientGetProduct,
  POST: clientPostOneProducts,
  SEARCH: clientSearchProduct,
};

export default Product;
