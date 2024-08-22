import a from "axios";
const o = {
  store_id: null,
  token: null,
  "Content-Type": "application/json"
}, C = ({ store_id: e, token: r }) => {
  e && (o.store_id = e), r && (o.token = r);
}, c = "https://sharai-server.onrender.com", u = async (e) => {
  try {
    await a.delete(`${c}/api/product/${e}`, {
      headers: o
    });
  } catch (r) {
    console.error(r);
  }
}, d = async (e, r, t = !0, n = !1) => {
  const s = `${c}/api/product/get-by-category?id=${e}&active=${t}&similar=${n}`;
  try {
    const i = await a.get(s, { headers: o }), { data: p } = await i;
    return p;
  } catch (i) {
    console.error(i);
  }
}, y = async (e, r = !0) => {
  try {
    const t = await a.post(
      `${c}/api/product/post-many?active=${r}`,
      { products: [...e] },
      { headers: o }
    ), { result: n } = t.data;
    return n;
  } catch (t) {
    console.error("There was a problem posting the data:", t);
  }
}, h = (e) => {
  if (e) {
    const { id: r, category: t, products: n, active: s } = e;
    return r ? l() : n && (n == null ? void 0 : n.length) > 0 ? y(n, s) : t ? d(t) : l();
  } else
    return l();
}, l = async (e) => {
  const r = `${c}/api/product`;
  try {
    const t = await a.get(r, {
      headers: o
    }), { data: n } = await t;
    return n;
  } catch (t) {
    console.error(t);
  }
}, g = async (e) => {
  try {
    const r = await a.post(
      `${c}/api/products`,
      { ...e },
      { headers: o }
    ), { id: t } = r.data;
    return t;
  } catch (r) {
    console.error("There was a problem posting the data:", r);
  }
}, w = async (e) => {
  try {
    return (await a.get(
      `${c}/api/product/search?phrase=${e}`,
      { headers: o }
    )).data.result;
  } catch (r) {
    console.error("There was a problem posting the data:", r);
  }
}, O = {
  DELETE: u,
  GET: h,
  POST: g,
  SEARCH: w
}, $ = async (e) => {
  try {
    await a.delete(`${c}/api/order/${e}`, {
      headers: o
    });
  } catch (r) {
    console.error(r);
  }
}, T = async (e) => {
  try {
    const r = await a.get(
      `${c}/api/order?page=${e == null ? void 0 : e.page}`,
      {
        headers: o
      }
    ), { data: t } = await r;
    return t;
  } catch (r) {
    console.error(r);
  }
}, v = async (e) => {
  if (e)
    try {
      return await a.post(`${c}/api/order`, e, {
        headers: o
      }), !0;
    } catch (r) {
      return console.error("There was a problem posting the data:", r), !1;
    }
}, E = async (e) => {
  try {
    return (await a.get(
      `${c}/api/invoice/search?phrase=${e}`,
      { headers: o }
    )).data.result;
  } catch (r) {
    console.error("There was a problem posting the data:", r);
  }
}, b = {
  DELETE: $,
  GET: T,
  POST: v,
  SEARCH: E
}, P = async (e) => {
  try {
    await a.delete(`${c}/api/category/${e}`, { headers: o });
  } catch (r) {
    console.error(r);
  }
}, f = async () => {
  try {
    const e = await a.get(`${c}/api/category`, {
      headers: o
    }), { data: r } = await e;
    return r;
  } catch (e) {
    console.error(e);
  }
}, m = async (e) => {
  if (e)
    try {
      await a.post(`${c}/api/category`, e, {
        headers: o
      });
    } catch (r) {
      console.error("There was a problem posting the data:", r);
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
