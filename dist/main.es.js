import { validateUrl as s } from "@/validate-url";
import a from "axios";
const R = async (t) => {
  const r = process.env.SHARAI_SERVER_URL;
  s();
  try {
    await a.delete(`${r}/api/product/delete-one?id=${t}`);
  } catch (e) {
    console.error(e);
  }
}, d = async (t, r, e = !0, o = !1) => {
  const l = `${process.env.SHARAI_SERVER_URL}/api/product/get-by-category?id=${t}&active=${e}&similar=${o}`;
  try {
    const n = await a.get(l), { data: i } = await n.data;
    return { data: i };
  } catch (n) {
    console.error(n);
  }
}, y = async (t, r = !0) => {
  const e = process.env.SHARAI_SERVER_URL;
  try {
    const o = await a.post(
      `${e}/api/product/post-many?active=${r}`,
      { products: [...t] },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    ), { result: c } = o.data;
    return c;
  } catch (o) {
    console.error("There was a problem posting the data:", o);
  }
}, E = (t) => {
  const { id: r, category: e, products: o, active: c } = t;
  return r ? p(t) : o && (o == null ? void 0 : o.length) > 0 ? y(o, c) : e ? d(e) : p(t);
}, p = async (t) => {
  s();
  const r = process.env.SHARAI_SERVER_URL, { sort: e, page: o, limit: c, active: l } = t, n = e ? `${r}/api/product/get-all?sort=${e}&page=${o}&limit=${c}&active=${l}` : `${r}/api/product/get-all?page=${o}&limit=${c}&active=${l}`;
  try {
    const i = await a.get(n), { data: u } = await i.data;
    return { data: u };
  } catch (i) {
    console.error(i);
  }
}, h = async (t) => {
  const r = process.env.SHARAI_SERVER_URL;
  s();
  try {
    const e = await a.post(
      `${r}/api/products/post-one`,
      { ...t },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    ), { result: o } = e.data;
    return o;
  } catch (e) {
    console.error("There was a problem posting the data:", e);
  }
}, S = async (t) => {
  const r = process.env.SHARAI_SERVER_URL;
  s();
  try {
    return (await a.get(`${r}/api/product/search?phrase=${t}`)).data.result;
  } catch (e) {
    console.error("There was a problem posting the data:", e);
  }
}, U = {
  DELETE: R,
  GET: E,
  POST: h,
  SEARCH: S
}, g = async (t) => {
  const r = process.env.SHARAI_SERVER_URL;
  s();
  try {
    await a.delete(`${r}/api/invoice/delete-one?id=${t}`);
  } catch (e) {
    console.error(e);
  }
}, v = async (t = 1) => {
  const r = process.env.SHARAI_SERVER_URL;
  s();
  try {
    const e = await a.get(`${r}/api/invoice/get-all?page=${t}`), { data: o } = await e.data;
    return { data: o };
  } catch (e) {
    console.error(e);
  }
}, A = async (t) => {
  if (!t) return;
  const r = process.env.SHARAI_SERVER_URL;
  s();
  try {
    return await a.post(`${r}/api/orders/post-one`, t, {
      headers: {
        "Content-Type": "application/json"
      }
    }), !0;
  } catch (e) {
    return console.error("There was a problem posting the data:", e), !1;
  }
}, $ = async (t) => {
  const r = process.env.SHARAI_SERVER_URL;
  s();
  try {
    return (await a.get(`${r}/api/invoice/search?phrase=${t}`)).data.result;
  } catch (e) {
    console.error("There was a problem posting the data:", e);
  }
}, m = {
  DELETE: g,
  GET: v,
  POST: A,
  SEARCH: $
}, _ = async (t) => {
  const r = process.env.SHARAI_SERVER_URL;
  try {
    s(), await a.delete(`${r}/api/category/delete-one?id=${t}`);
  } catch (e) {
    console.error(e);
  }
}, w = async () => {
  const t = process.env.SHARAI_SERVER_URL;
  try {
    s();
    const r = await a.get(`${t}/api/category/get-all`), { data: e } = await r.data;
    return { data: e };
  } catch (r) {
    console.error(r);
  }
}, T = async (t) => {
  const r = process.env.SHARAI_SERVER_URL;
  if (t)
    try {
      s(), await a.post(`${r}/api/category/post-one`, t, {
        headers: {
          "Content-Type": "application/json"
        }
      });
    } catch (e) {
      console.error("There was a problem posting the data:", e);
    }
}, H = {
  DELETE: _,
  GET: w,
  POST: T
  // SEARCH: clientSearchProduct,
};
export {
  H as Category,
  m as Invoice,
  U as Product
};
