import a from "axios";
const o = {
  store_id: null,
  token: null,
  "Content-Type": "application/json"
}, C = ({ store_id: t, token: e }) => {
  t && (o.store_id = t), e && (o.token = e);
}, c = "https://sharai-server.onrender.com", u = async (t) => {
  try {
    await a.delete(`${c}/api/product/${t}`, {
      headers: o
    });
  } catch (e) {
    console.error(e);
  }
}, d = async (t, e, r = !0, n = !1) => {
  const s = `${c}/api/product/get-by-category?id=${t}&active=${r}&similar=${n}`;
  try {
    const i = await a.get(s, { headers: o }), { data: p } = await i.data;
    return { data: p };
  } catch (i) {
    console.error(i);
  }
}, y = async (t, e = !0) => {
  try {
    const r = await a.post(
      `${c}/api/product/post-many?active=${e}`,
      { products: [...t] },
      { headers: o }
    ), { result: n } = r.data;
    return n;
  } catch (r) {
    console.error("There was a problem posting the data:", r);
  }
}, h = (t) => {
  if (t) {
    const { id: e, category: r, products: n, active: s } = t;
    return e ? l() : n && (n == null ? void 0 : n.length) > 0 ? y(n, s) : r ? d(r) : l();
  } else
    return l();
}, l = async (t) => {
  const e = `${c}/api/product`;
  try {
    const r = await a.get(e, {
      headers: o
    }), { data: n } = await r;
    return n;
  } catch (r) {
    console.error(r);
  }
}, g = async (t) => {
  try {
    const e = await a.post(
      `${c}/api/products`,
      { ...t },
      { headers: o }
    ), { result: r } = e.data;
    return r;
  } catch (e) {
    console.error("There was a problem posting the data:", e);
  }
}, w = async (t) => {
  try {
    return (await a.get(
      `${c}/api/product/search?phrase=${t}`,
      { headers: o }
    )).data.result;
  } catch (e) {
    console.error("There was a problem posting the data:", e);
  }
}, O = {
  DELETE: u,
  GET: h,
  POST: g,
  SEARCH: w
}, $ = async (t) => {
  try {
    await a.delete(`${c}/api/order/${t}`, {
      headers: o
    });
  } catch (e) {
    console.error(e);
  }
}, T = async (t = 1) => {
  try {
    const e = await a.get(`${c}/api/order?page=${t}`, {
      headers: o
    }), { data: r } = await e.data;
    return { data: r };
  } catch (e) {
    console.error(e);
  }
}, v = async (t) => {
  if (t)
    try {
      return await a.post(`${c}/api/order`, t, {
        headers: o
      }), !0;
    } catch (e) {
      return console.error("There was a problem posting the data:", e), !1;
    }
}, E = async (t) => {
  try {
    return (await a.get(
      `${c}/api/invoice/search?phrase=${t}`,
      { headers: o }
    )).data.result;
  } catch (e) {
    console.error("There was a problem posting the data:", e);
  }
}, b = {
  DELETE: $,
  GET: T,
  POST: v,
  SEARCH: E
}, P = async (t) => {
  try {
    await a.delete(`${c}/api/category/${t}`, { headers: o });
  } catch (e) {
    console.error(e);
  }
}, f = async () => {
  try {
    const t = await a.get(`${c}/api/category`, {
      headers: o
    }), { data: e } = await t.data;
    return { data: e };
  } catch (t) {
    console.error(t);
  }
}, m = async (t) => {
  if (t)
    try {
      await a.post(`${c}/api/category`, t, {
        headers: o
      });
    } catch (e) {
      console.error("There was a problem posting the data:", e);
    }
}, S = {
  DELETE: P,
  GET: f,
  POST: m
  // SEARCH: clientSearchProduct,
};
export {
  S as Category,
  b as Invoice,
  O as Product,
  C as config
};
