import { clientDeleteOneInvoice } from "./delete-one";
import { clientGetInvoices } from "./get-all";
import { clientPostOneInvoice } from "./post-one";
import { clientSearchInvoice } from "./search";

const Invoice = {
  DELETE: clientDeleteOneInvoice,
  GET: clientGetInvoices,
  POST: clientPostOneInvoice,
  SEARCH: clientSearchInvoice,
};

export default Invoice;
