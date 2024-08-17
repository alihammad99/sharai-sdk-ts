import c from "axios";
const a = {
  store_id: null,
  token: null,
  "Content-Type": "application/json"
}, O = ({ store_id: e, token: t }) => {
  e && (a.store_id = e), t && (a.token = t);
}, o = "https://sharai-server.onrender.com", u = async (e) => {
  try {
    await c.delete(`${o}/api/product/delete-one?id=${e}`, {
      headers: a
    });
  } catch (t) {
    console.error(t);
  }
}, y = async (e, t, r = !0, n = !1) => {
  const s = `${o}/api/product/get-by-category?id=${e}&active=${r}&similar=${n}`;
  try {
    const i = await c.get(s, { headers: a }), { data: l } = await i.data;
    return { data: l };
  } catch (i) {
    console.error(i);
  }
}, h = async (e, t = !0) => {
  try {
    const r = await c.post(
      `${o}/api/product/post-many?active=${t}`,
      { products: [...e] },
      { headers: a }
    ), { result: n } = r.data;
    return n;
  } catch (r) {
    console.error("There was a problem posting the data:", r);
  }
}, g = (e) => {
  const { id: t, category: r, products: n, active: s } = e;
  return t ? p(e) : n && (n == null ? void 0 : n.length) > 0 ? h(n, s) : r ? y(r) : p(e);
}, p = async (e) => {
  const { sort: t, page: r, limit: n, active: s } = e, i = t ? `${o}/api/product/get-all?sort=${t}&page=${r}&limit=${n}&active=${s}` : `${o}/api/product/get-all?page=${r}&limit=${n}&active=${s}`;
  try {
    const l = await c.get(i, {
      headers: a
    }), { data: d } = await l.data;
    return { data: d };
  } catch (l) {
    console.error(l);
  }
}, $ = async (e) => {
  try {
    const t = await c.post(
      `${o}/api/products/post-one`,
      { ...e },
      { headers: a }
    ), { result: r } = t.data;
    return r;
  } catch (t) {
    console.error("There was a problem posting the data:", t);
  }
}, w = async (e) => {
  try {
    return (await c.get(
      `${o}/api/product/search?phrase=${e}`,
      { headers: a }
    )).data.result;
  } catch (t) {
    console.error("There was a problem posting the data:", t);
  }
}, b = {
  DELETE: u,
  GET: g,
  POST: $,
  SEARCH: w
}, v = async (e) => {
  try {
    await c.delete(`${o}/api/invoice/delete-one?id=${e}`, {
      headers: a
    });
  } catch (t) {
    console.error(t);
  }
}, T = async (e = 1) => {
  try {
    const t = await c.get(
      `${o}/api/invoice/get-all?page=${e}`,
      { headers: a }
    ), { data: r } = await t.data;
    return { data: r };
  } catch (t) {
    console.error(t);
  }
}, m = async (e) => {
  if (e)
    try {
      return await c.post(`${o}/api/orders/post-one`, e, { headers: a }), !0;
    } catch (t) {
      return console.error("There was a problem posting the data:", t), !1;
    }
}, E = async (e) => {
  try {
    return (await c.get(
      `${o}/api/invoice/search?phrase=${e}`,
      { headers: a }
    )).data.result;
  } catch (t) {
    console.error("There was a problem posting the data:", t);
  }
}, S = {
  DELETE: v,
  GET: T,
  POST: m,
  SEARCH: E
}, P = async (e) => {
  try {
    await c.delete(`${o}/api/category/delete-one?id=${e}`);
  } catch (t) {
    console.error(t);
  }
}, f = async () => {
  try {
    const e = await c.get(`${o}/api/category/get-all`), { data: t } = await e.data;
    return { data: t };
  } catch (e) {
    console.error(e);
  }
}, G = async (e) => {
  if (e)
    try {
      await c.post(`${o}/api/category/post-one`, e, { headers: a });
    } catch (t) {
      console.error("There was a problem posting the data:", t);
    }
}, A = {
  DELETE: P,
  GET: f,
  POST: G
  // SEARCH: clientSearchProduct,
};
export {
  A as Category,
  S as Invoice,
  b as Product,
  O as config
};
