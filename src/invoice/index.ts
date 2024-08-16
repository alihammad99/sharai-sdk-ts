import { clientDeleteOneInvoice } from "./delete-one";
import { clientGetAllInvoices } from "./get-all";
import { clientPostOneInvoice } from "./post-one";
import { clientSearchInvoice } from "./search";

const Invoice = {
  DELETE: clientDeleteOneInvoice,
  GET: clientGetAllInvoices,
  POST: clientPostOneInvoice,
  SEARCH: clientSearchInvoice,
};

export default Invoice;
