import o from "axios";
const p = async (e) => {
  try {
    await o.delete(`/api/product/delete-one?id=${e}`);
  } catch (t) {
    console.error(t);
  }
}, d = async (e, t, r = !0, a = !1) => {
  const c = `/api/product/get-by-category?id=${e}&active=${r}&similar=${a}`;
  try {
    const n = await o.get(c), { data: s } = await n.data;
    return { data: s };
  } catch (n) {
    console.error(n);
  }
}, u = async (e, t = !0) => {
  try {
    const r = await o.post(
      `/api/product/post-many?active=${t}`,
      { products: [...e] },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    ), { result: a } = r.data;
    return a;
  } catch (r) {
    console.error("There was a problem posting the data:", r);
  }
}, y = (e) => {
  const { id: t, category: r, products: a, active: c } = e;
  return t ? i(e) : a && (a == null ? void 0 : a.length) > 0 ? u(a, c) : r ? d(r) : i(e);
}, i = async (e) => {
  const { sort: t, page: r, limit: a, active: c } = e, n = t ? `/api/product/get-all?sort=${t}&page=${r}&limit=${a}&active=${c}` : `/api/product/get-all?page=${r}&limit=${a}&active=${c}`;
  try {
    const s = await o.get(n), { data: l } = await s.data;
    return { data: l };
  } catch (s) {
    console.error(s);
  }
}, h = async (e) => {
  try {
    const t = await o.post(
      "/api/products/post-one",
      { ...e },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    ), { result: r } = t.data;
    return !0;
  } catch (t) {
    console.error("There was a problem posting the data:", t);
  }
}, g = async (e) => {
  try {
    return (await o.get(`/api/product/search?phrase=${e}`)).data.result;
  } catch (t) {
    console.error("There was a problem posting the data:", t);
  }
}, G = {
  DELETE: p,
  GET: y,
  POST: h,
  SEARCH: g
}, w = async (e) => {
  try {
    await o.delete(`/api/invoice/delete-one?id=${e}`);
  } catch (t) {
    console.error(t);
  }
}, T = async (e = 1) => {
  try {
    const t = await o.get(`/api/invoice/get-all?page=${e}`), { data: r } = await t.data;
    return { data: r };
  } catch (t) {
    console.error(t);
  }
}, v = async (e) => {
  if (e)
    try {
      return await o.post("/api/orders/post-one", e, {
        headers: {
          "Content-Type": "application/json"
        }
      }), !0;
    } catch (t) {
      return console.error("There was a problem posting the data:", t), !1;
    }
}, $ = async (e) => {
  try {
    return (await o.get(`/api/invoice/search?phrase=${e}`)).data.result;
  } catch (t) {
    console.error("There was a problem posting the data:", t);
  }
}, f = {
  DELETE: w,
  GET: T,
  POST: v,
  SEARCH: $
}, E = async (e) => {
  try {
    await o.delete(`/api/category/delete-one?id=${e}`);
  } catch (t) {
    console.error(t);
  }
}, m = async () => {
  try {
    const e = await o.get("/api/category/get-all"), { data: t } = await e.data;
    return { data: t };
  } catch (e) {
    console.error(e);
  }
}, P = async (e) => {
  if (e)
    try {
      await o.post("/api/category/post-one", e, {
        headers: {
          "Content-Type": "application/json"
        }
      });
    } catch (t) {
      console.error("There was a problem posting the data:", t);
    }
}, O = {
  DELETE: E,
  GET: m,
  POST: P
  // SEARCH: clientSearchProduct,
};
export {
  O as Category,
  f as Invoice,
  G as Product
};
