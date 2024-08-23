import o from "axios";
const a = {
  store_id: null,
  token: null,
  "Content-Type": "application/json"
}, b = ({ store_id: e, token: r }) => {
  e && (a.store_id = e), r && (a.token = r);
}, c = "https://sharai-server.onrender.com", y = async (e) => {
  try {
    await o.delete(`${c}/api/product/${e}`, {
      headers: a
    });
  } catch (r) {
    console.error(r);
  }
}, p = async (e, r, t = !0, n = !1) => {
  const s = `${c}/api/product/get-by-category?id=${e}&active=${t}&similar=${n}`;
  try {
    const l = await o.get(s, { headers: a }), { data: d } = await l;
    return d;
  } catch (l) {
    console.error(l);
  }
}, h = async (e, r = !0) => {
  try {
    const t = await o.post(
      `${c}/api/product/post-many?active=${r}`,
      { products: [...e] },
      { headers: a }
    ), { result: n } = t.data;
    return n;
  } catch (t) {
    console.error("There was a problem posting the data:", t);
  }
}, g = (e) => {
  if (e) {
    const { id: r, category: t, products: n, active: s } = e;
    return r ? i(e) : n && (n == null ? void 0 : n.length) > 0 ? h(n, s) : t ? p(t) : i(e);
  } else
    return i();
}, i = async (e) => {
  let r = `${c}/api/product`;
  e != null && e.page && (r = `${c}/api/product?page=${e == null ? void 0 : e.page}`);
  try {
    const t = await o.get(r, {
      headers: a
    }), { data: n } = await t;
    return n;
  } catch (t) {
    console.error(t);
  }
}, $ = async (e) => {
  try {
    const r = await o.post(
      `${c}/api/product`,
      { ...e },
      { headers: a }
    ), { id: t } = r.data;
    return t;
  } catch (r) {
    console.error("There was a problem posting the data:", r);
  }
}, w = async (e) => {
  try {
    return (await o.get(
      `${c}/api/product/search?phrase=${e}`,
      { headers: a }
    )).data.result;
  } catch (r) {
    console.error("There was a problem posting the data:", r);
  }
}, I = {
  DELETE: y,
  GET: g,
  POST: $,
  SEARCH: w
}, v = async (e) => {
  try {
    await o.delete(`${c}/api/order/${e}`, {
      headers: a
    });
  } catch (r) {
    console.error(r);
  }
}, f = async (e) => {
  try {
    const r = await o.get(`${c}/api/order/${e}`, {
      headers: a
    }), { data: t } = await r;
    return t;
  } catch (r) {
    console.error(r);
  }
}, T = (e) => {
  if (e) {
    const { id: r } = e;
    return r ? f(r) : u(e);
  } else
    return u();
}, u = async (e) => {
  let r = `${c}/api/order`;
  e != null && e.page && (r = `${c}/api/order?page=${e == null ? void 0 : e.page}`);
  try {
    const t = await o.get(r, {
      headers: a
    }), { data: n } = await t;
    return n;
  } catch (t) {
    console.error(t);
  }
}, E = async (e) => {
  if (e)
    try {
      return await o.post(`${c}/api/order`, e, {
        headers: a
      }), !0;
    } catch (r) {
      return console.error("There was a problem posting the data:", r), !1;
    }
}, P = async (e) => {
  try {
    return (await o.get(
      `${c}/api/invoice/search?phrase=${e}`,
      { headers: a }
    )).data.result;
  } catch (r) {
    console.error("There was a problem posting the data:", r);
  }
}, S = {
  DELETE: v,
  GET: T,
  POST: E,
  SEARCH: P
}, m = async (e) => {
  try {
    await o.delete(`${c}/api/category/${e}`, { headers: a });
  } catch (r) {
    console.error(r);
  }
}, G = async () => {
  try {
    const e = await o.get(`${c}/api/category`, {
      headers: a
    }), { data: r } = await e;
    return r;
  } catch (e) {
    console.error(e);
  }
}, O = async (e) => {
  if (e)
    try {
      await o.post(`${c}/api/category`, e, {
        headers: a
      });
    } catch (r) {
      console.error("There was a problem posting the data:", r);
    }
}, A = {
  DELETE: m,
  GET: G,
  POST: O
  // SEARCH: clientSearchProduct,
};
export {
  A as Category,
  S as Invoice,
  I as Product,
  b as config
};
