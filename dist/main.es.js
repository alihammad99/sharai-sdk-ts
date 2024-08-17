import s from "axios";
const l = () => {
}, R = async (t) => {
  const r = process.env.SHARAI_SERVER_URL;
  try {
    await s.delete(`${r}/api/product/delete-one?id=${t}`);
  } catch (e) {
    console.error(e);
  }
}, d = async (t, r, e = !0, o = !1) => {
  const i = `${process.env.SHARAI_SERVER_URL}/api/product/get-by-category?id=${t}&active=${e}&similar=${o}`;
  try {
    const c = await s.get(i), { data: n } = await c.data;
    return { data: n };
  } catch (c) {
    console.error(c);
  }
}, y = async (t, r = !0) => {
  const e = process.env.SHARAI_SERVER_URL;
  try {
    const o = await s.post(
      `${e}/api/product/post-many?active=${r}`,
      { products: [...t] },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    ), { result: a } = o.data;
    return a;
  } catch (o) {
    console.error("There was a problem posting the data:", o);
  }
}, E = (t) => {
  const { id: r, category: e, products: o, active: a } = t;
  return r ? p(t) : o && (o == null ? void 0 : o.length) > 0 ? y(o, a) : e ? d(e) : p(t);
}, p = async (t) => {
  const r = process.env.SHARAI_SERVER_URL, { sort: e, page: o, limit: a, active: i } = t, c = e ? `${r}/api/product/get-all?sort=${e}&page=${o}&limit=${a}&active=${i}` : `${r}/api/product/get-all?page=${o}&limit=${a}&active=${i}`;
  try {
    const n = await s.get(c), { data: u } = await n.data;
    return { data: u };
  } catch (n) {
    console.error(n);
  }
}, h = async (t) => {
  const r = process.env.SHARAI_SERVER_URL;
  try {
    const e = await s.post(
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
  try {
    return (await s.get(`${r}/api/product/search?phrase=${t}`)).data.result;
  } catch (e) {
    console.error("There was a problem posting the data:", e);
  }
}, L = {
  DELETE: R,
  GET: E,
  POST: h,
  SEARCH: S
}, g = async (t) => {
  const r = process.env.SHARAI_SERVER_URL;
  try {
    await s.delete(`${r}/api/invoice/delete-one?id=${t}`);
  } catch (e) {
    console.error(e);
  }
}, v = async (t = 1) => {
  const r = process.env.SHARAI_SERVER_URL;
  try {
    const e = await s.get(`${r}/api/invoice/get-all?page=${t}`), { data: o } = await e.data;
    return { data: o };
  } catch (e) {
    console.error(e);
  }
}, A = async (t) => {
  if (!t) return;
  const r = process.env.SHARAI_SERVER_URL;
  try {
    return await s.post(`${r}/api/orders/post-one`, t, {
      headers: {
        "Content-Type": "application/json"
      }
    }), !0;
  } catch (e) {
    return console.error("There was a problem posting the data:", e), !1;
  }
}, $ = async (t) => {
  const r = process.env.SHARAI_SERVER_URL;
  try {
    return (await s.get(`${r}/api/invoice/search?phrase=${t}`)).data.result;
  } catch (e) {
    console.error("There was a problem posting the data:", e);
  }
}, U = {
  DELETE: g,
  GET: v,
  POST: A,
  SEARCH: $
}, _ = async (t) => {
  const r = process.env.SHARAI_SERVER_URL;
  try {
    l(), await s.delete(`${r}/api/category/delete-one?id=${t}`);
  } catch (e) {
    console.error(e);
  }
}, w = async () => {
  const t = process.env.SHARAI_SERVER_URL;
  try {
    l();
    const r = await s.get(`${t}/api/category/get-all`), { data: e } = await r.data;
    return { data: e };
  } catch (r) {
    console.error(r);
  }
}, T = async (t) => {
  const r = process.env.SHARAI_SERVER_URL;
  if (t)
    try {
      l(), await s.post(`${r}/api/category/post-one`, t, {
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
  U as Invoice,
  L as Product
};
