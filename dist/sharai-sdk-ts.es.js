import n from "axios";
const l = {
  store_id: null,
  token: null,
  "Content-Type": "application/json"
}, O = ({ store_id: e, token: t }) => {
  e && (l.store_id = e), t && (l.token = t), console.log("headers"), console.log(l);
}, a = "https://sharai-server.onrender.com", u = async (e) => {
  try {
    await n.delete(`${a}/api/product/delete-one?id=${e}`, {
      headers: l
    });
  } catch (t) {
    console.error(t);
  }
}, y = async (e, t, r = !0, o = !1) => {
  const c = `${a}/api/product/get-by-category?id=${e}&active=${r}&similar=${o}`;
  try {
    const s = await n.get(c), { data: i } = await s.data;
    return { data: i };
  } catch (s) {
    console.error(s);
  }
}, h = async (e, t = !0) => {
  try {
    const r = await n.post(
      `${a}/api/product/post-many?active=${t}`,
      { products: [...e] },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    ), { result: o } = r.data;
    return o;
  } catch (r) {
    console.error("There was a problem posting the data:", r);
  }
}, g = (e) => {
  const { id: t, category: r, products: o, active: c } = e;
  return t ? p(e) : o && (o == null ? void 0 : o.length) > 0 ? h(o, c) : r ? y(r) : p(e);
}, p = async (e) => {
  const { sort: t, page: r, limit: o, active: c } = e, s = t ? `${a}/api/product/get-all?sort=${t}&page=${r}&limit=${o}&active=${c}` : `${a}/api/product/get-all?page=${r}&limit=${o}&active=${c}`;
  try {
    const i = await n.get(s), { data: d } = await i.data;
    return { data: d };
  } catch (i) {
    console.error(i);
  }
}, $ = async (e) => {
  const t = "https://sharai-server.onrender.com";
  try {
    const r = await n.post(
      `${t}/api/products/post-one`,
      { ...e },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    ), { result: o } = r.data;
    return o;
  } catch (r) {
    console.error("There was a problem posting the data:", r);
  }
}, w = async (e) => {
  try {
    return (await n.get(
      `${a}/api/product/search?phrase=${e}`
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
    await n.delete(`${a}/api/invoice/delete-one?id=${e}`);
  } catch (t) {
    console.error(t);
  }
}, T = async (e = 1) => {
  try {
    const t = await n.get(
      `${a}/api/invoice/get-all?page=${e}`
    ), { data: r } = await t.data;
    return { data: r };
  } catch (t) {
    console.error(t);
  }
}, m = async (e) => {
  if (e)
    try {
      return await n.post(`${a}/api/orders/post-one`, e, {
        headers: {
          "Content-Type": "application/json"
        }
      }), !0;
    } catch (t) {
      return console.error("There was a problem posting the data:", t), !1;
    }
}, E = async (e) => {
  try {
    return (await n.get(
      `${a}/api/invoice/search?phrase=${e}`
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
    await n.delete(`${a}/api/category/delete-one?id=${e}`);
  } catch (t) {
    console.error(t);
  }
}, C = async () => {
  try {
    const e = await n.get(`${a}/api/category/get-all`), { data: t } = await e.data;
    return { data: t };
  } catch (e) {
    console.error(e);
  }
}, f = async (e) => {
  if (e)
    try {
      await n.post(`${a}/api/category/post-one`, e, {
        headers: {
          "Content-Type": "application/json"
        }
      });
    } catch (t) {
      console.error("There was a problem posting the data:", t);
    }
}, A = {
  DELETE: P,
  GET: C,
  POST: f
  // SEARCH: clientSearchProduct,
};
export {
  A as Category,
  S as Invoice,
  b as Product,
  O as config
};
