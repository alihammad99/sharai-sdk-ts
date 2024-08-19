var g = Object.defineProperty;
var w = (t, e, r) => e in t ? g(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var d = (t, e, r) => w(t, typeof e != "symbol" ? e + "" : e, r);
import s from "axios";
const c = class c {
  // Private constructor to prevent direct instantiation
  constructor() {
    d(this, "headersMap", /* @__PURE__ */ new Map());
    this.headersMap.set("Content-Type", "application/json");
  }
  // Public method to get the singleton instance
  static getInstance() {
    return c.instance || (c.instance = new c()), c.instance;
  }
  // Method to update headers
  setHeaders({ store_id: e, token: r, "Content-Type": a }) {
    e && this.headersMap.set("store_id", e), r && this.headersMap.set("token", r), a && this.headersMap.set("Content-Type", a);
  }
  // Method to get headers as a plain object
  getHeaders() {
    const e = {};
    return this.headersMap.forEach((r, a) => {
      e[a] = r;
    }), e;
  }
};
d(c, "instance");
let h = c;
const u = h.getInstance(), n = () => u.getHeaders(), D = (t) => u.setHeaders(t), o = "https://sharai-server.onrender.com", $ = async (t) => {
  try {
    await s.delete(`${o}/api/product/delete-one?id=${t}`, {
      headers: n()
    });
  } catch (e) {
    console.error(e);
  }
}, v = async (t, e, r = !0, a = !1) => {
  const i = `${o}/api/product/get-by-category?id=${t}&active=${r}&similar=${a}`;
  try {
    const l = await s.get(i, { headers: n() }), { data: y } = await l.data;
    return { data: y };
  } catch (l) {
    console.error(l);
  }
}, T = async (t, e = !0) => {
  try {
    const r = await s.post(
      `${o}/api/product/post-many?active=${e}`,
      { products: [...t] },
      { headers: n() }
    ), { result: a } = r.data;
    return a;
  } catch (r) {
    console.error("There was a problem posting the data:", r);
  }
}, f = (t) => {
  if (t) {
    const { id: e, category: r, products: a, active: i } = t;
    return e ? p() : a && (a == null ? void 0 : a.length) > 0 ? T(a, i) : r ? v(r) : p();
  } else
    return p();
}, p = async (t) => {
  const e = `${o}/api/product`;
  try {
    const r = await s.get(e, {
      headers: n()
    }), { data: a } = await r;
    return a;
  } catch (r) {
    console.error(r);
  }
}, E = async (t) => {
  try {
    const e = await s.post(
      `${o}/api/products/post-one`,
      { ...t },
      { headers: n() }
    ), { result: r } = e.data;
    return r;
  } catch (e) {
    console.error("There was a problem posting the data:", e);
  }
}, P = async (t) => {
  try {
    return (await s.get(
      `${o}/api/product/search?phrase=${t}`,
      { headers: n() }
    )).data.result;
  } catch (e) {
    console.error("There was a problem posting the data:", e);
  }
}, L = {
  DELETE: $,
  GET: f,
  POST: E,
  SEARCH: P
}, m = async (t) => {
  try {
    await s.delete(`${o}/api/invoice/delete-one?id=${t}`, {
      headers: n()
    });
  } catch (e) {
    console.error(e);
  }
}, C = async (t = 1) => {
  try {
    const e = await s.get(
      `${o}/api/invoice/get-all?page=${t}`,
      { headers: n() }
    ), { data: r } = await e.data;
    return { data: r };
  } catch (e) {
    console.error(e);
  }
}, G = async (t) => {
  if (t)
    try {
      return await s.post(`${o}/api/orders/post-one`, t, {
        headers: n()
      }), !0;
    } catch (e) {
      return console.error("There was a problem posting the data:", e), !1;
    }
}, O = async (t) => {
  try {
    return (await s.get(
      `${o}/api/invoice/search?phrase=${t}`,
      { headers: n() }
    )).data.result;
  } catch (e) {
    console.error("There was a problem posting the data:", e);
  }
}, H = {
  DELETE: m,
  GET: C,
  POST: G,
  SEARCH: O
}, b = async (t) => {
  try {
    await s.delete(`${o}/api/category/delete-one?id=${t}`);
  } catch (e) {
    console.error(e);
  }
}, I = async () => {
  try {
    const t = await s.get(`${o}/api/category/get-all`), { data: e } = await t.data;
    return { data: e };
  } catch (t) {
    console.error(t);
  }
}, M = async (t) => {
  if (t)
    try {
      await s.post(`${o}/api/category/post-one`, t, {
        headers: n()
      });
    } catch (e) {
      console.error("There was a problem posting the data:", e);
    }
}, R = {
  DELETE: b,
  GET: I,
  POST: M
  // SEARCH: clientSearchProduct,
};
export {
  R as Category,
  H as Invoice,
  L as Product,
  D as config
};
